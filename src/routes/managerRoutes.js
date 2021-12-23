import { getConnection } from "typeorm";
import { Router } from "express"
import { manager } from "../models";
import { hashPassword, checkPassword, generateToken, isAdCenter, isManager, verifyToken } from "../middleware";



const router = Router();


//get all promotion by category
router.get('/promotion', async (req, res, next) => {
    try {
        const getcategory = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_MANAGER_SECRET);
        //


        const connection = getConnection()
        const manager = await connection.getRepository("manager").findOne({
            where: {
                id: getcategory.id
            },
            relations: ['category', 'center']
        })
        const promotion = await connection
            .getRepository("promotion")
            .find({
                relations: ['product', "product.category", "adminCenter", "adminCenter.center"],
                where: {
                    product: { category: manager.category.id },
                    adminCenter: { center: manager.center.id }
                }
            })
        res.json(promotion)
    } catch (error) {
        next(error)
    }
})



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