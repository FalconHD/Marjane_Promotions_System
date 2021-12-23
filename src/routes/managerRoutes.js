import { getConnection } from "typeorm";
import { Router } from "express"
import { manager } from "../models";
import { hashPassword, checkPassword, generateToken, isAdCenter ,isManager, verifyToken } from "../middleware";



const router = Router();
//get all promotion by category
router.get('/promotion', async (req, res, next) => {
    try {
        const  idManager   = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_MANAGER_SECRET);
        console.log(idManager);
        
        const connection = getConnection()
        const getManager = await connection.getRepository("manager").find({relations: ['category'],
            id :idManager.id
        })
        console.log(getManager.categoryId);
        const promotion = await connection
            .getRepository("promotion")
            // .find({relations: ['product','category']})
            .createQueryBuilder("promotion")
            .leftJoinAndSelect("promotion.product","product")
            .leftJoinAndSelect("product.category","category")
            .where('category.id = :categoryId',{categoryId:"2abbab78-9e90-40ed-a881-d19fa96d1c45"})
            .getMany();
    
            console.log(promotion);
        res.json(promotion)
    } catch (error) {
        next(error)
    }
})

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





export { router as manager }