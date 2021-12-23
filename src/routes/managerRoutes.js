import { getConnection } from "typeorm";
import { Router } from "express"
import { manager } from "../models";
import { hashPassword, checkPassword, generateToken, isAdCenter ,isManager } from "../middleware";



const router = Router();


// router.get('/all', async (req, res) => {
    
//     const connection = getConnection()

//     console.log(connection);
//     const admins = await connection
//         .getRepository("promotion")
//         .find({
//             where: {
                
//             }
//         })
//         .catch(error => {
//             console.log(error);
//         })
//     res.json(admins)
// })

router.get('/:id', async (req, res) => {
    const connection = getConnection()
    const id = req.params.id
    const users = await connection.getRepository("admin_center").findOne({
        where: {
            id
        }
    })
    res.json(users)
})





router.post('/login', async (req, res) => {
    const connection = getConnection()
    const { email, password } = req.body
    const manager = await connection.getRepository("manager").findOne({
        where: {
            email
        }
    })
    if (manager) {
        const isValid = await checkPassword(password, manager.password)
        if (isValid) {
            const token = generateToken(manager, process.env.JWT_MANAGER_SECRET, "manager")
            res.json({
                data: manager,
                token
            })
        } else {
            res.json({
                message: "Invalid password"
            })
        }
    } else {
        res.json({
            message: "Invalid email"
        })
    }
})

//get all promotion by category
router.get('/promotion', async (req, res, next) => {
    try {
        console.log("nta hna");
        const  getcategory  = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_MANAGER_SECRET);
        //


        const connection = getConnection()
        // const category = await connection.getRepository("manager").find({relations: ['category','center']})
        
        const promotion = await connection
            .getRepository("promotion")
            // .find({relations: ['product','category']})
            .createQueryBuilder("promotion")
            .leftJoinAndSelect("promotion.product","product")
            .leftJoinAndSelect("product.category","category")
            .getMany();
    
            console.log(promotion);
        res.json(promotion)
    } catch (error) {
        next(error)
    }
})



export { router as manager }