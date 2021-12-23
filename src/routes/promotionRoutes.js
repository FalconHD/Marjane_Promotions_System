import { getConnection } from "typeorm";
import { Router } from "express"
import { promotion } from "../models";
import { hashPassword, checkPassword, generateToken, isSuper, isAdCenter, calculateFidelity, verifyToken } from "../middleware";
import { logs } from "../models/Logs";
import { isManager } from "../middleware/profiles";


const router = Router();


router.post('/add', isAdCenter, async (req, res, next) => {
    try {
        const { id } = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_CENTER_SECRET);
        const connection = getConnection()
        const { pourcentage, product } = req.body
        const productCategory = await connection.getRepository("product").findOne({
            relations: ["category"],
            where: {
                id: product
            }
        })

        //product not found in database
        if (!productCategory) throw new Error("product not found")

        let promo = new promotion();
        promo.pourcentage = pourcentage;
        promo.carteFidélité = calculateFidelity(pourcentage, productCategory.category.name);
        promo.adminCenter = id;
        promo.status = "pending";
        promo.product = product;
        promo = await connection.getRepository("promotion").save(promo)

       
        //generating logs for the promotion
        let logMsg = new logs();
        logMsg.message = `Admin Center: ${id} || create promotion: ${promo.id} || Product : ${product}`;
        logMsg.target = id;
        logMsg.status = 'created';
        logMsg = await connection.getRepository("logs").save(logMsg)
        res.json({
            message: "promotion added"
        })
    } catch (error) {
        next(error)
    }
})


router.get('/all', isManager, async (req, res, next) => {
    try {
        const getcategory = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_MANAGER_SECRET);
        //


        const connection = getConnection()
        // const category = await connection.getRepository("manager").find({relations: ['category','center']})

        const promotion = await connection
            .getRepository("promotion")
            // .find({relations: ['product','category']})
            .createQueryBuilder("promotion")
            .leftJoinAndSelect("promotion.product", "product")
            .leftJoinAndSelect("product.category", "category")
            // 
            .getMany();
        // .find({
        //     // relations: ["product", "category"]
        //     // join:{
        //     //     alias:'promotion',
        //     //     innerJoin: {
        //     //         alias:'product',
        //     //         join:{
        //     //             alias:'product',
        //     //             innerJoin: {
        //     //                 alias:'category',
        //     //                 on:'product.categoryId = category.id',

        //     //             },
        //     //         },
        //     //         on:'promotion.productId = product.id'
        //     //     },
        //     // },
        // })



        console.log(promotion);
        res.json(promotion)
    } catch (error) {
        next(error)
    }
})


export { router as promotion }