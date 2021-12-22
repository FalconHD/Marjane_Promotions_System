import { getConnection } from "typeorm";
import { Router } from "express"
import { promotion } from "../models";
import { hashPassword, checkPassword, generateToken, isSuper, isAdCenter, calculateFidelity, verifyToken } from "../middleware";
import { logs } from "../models/Logs";


const router = Router();


router.post('/add', isAdCenter, async (req, res, next) => {
    try {
        // const { id } = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_CENTER_SECRET);
        const connection = getConnection()
        const { pourcentage, product } = req.body
        const productCategory = await connection.getRepository("product").findOne({
            relations: ["category"],
            where: {
                id: product
            }
        })
        console.log(productCategory);

    //     //product not found in database
    if (!productCategory) throw new Error("product not found")

    const tokensData = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_CENTER_SECRET)
    console.log(tokensData);
        

        let promo = new promotion();
        promo.pourcentage = pourcentage;
        promo.carteFidélité = calculateFidelity(pourcentage, productCategory.category.name);
        promo.adminCenter = tokensData.id;
        promo.product = product;
        promo = await connection.getRepository("promotion").save(promo)

        //generating logs for the promotion
        let logMsg = new logs();
        logMsg.message = `${ tokensData.id} create promotion: ${promo.id} || Product : ${product}`;
        logMsg.target =  tokensData.id;
        logMsg.status = 'created';
        logMsg = await connection.getRepository("logs").save(logMsg)
        res.json({
            message: "promotion added"
        })
    } catch (error) {
        next(error)
    }
})


router.get('/all', isAdCenter, async (req, res, next) => {
    try {
        const connection = getConnection()
        const promotions = await connection
            .getRepository("promotion")
            .find({
                relations: ["product", "adminCenter"]
            })
            .catch(error => {
                console.log(error);
            })
        res.json(promotions)
    } catch (error) {
        next(error)
    }
})


export { router as promotion }