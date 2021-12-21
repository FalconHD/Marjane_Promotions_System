import { getConnection } from "typeorm";
import { Router } from "express"
import { adminCenter } from "../models";
import { hashPassword, checkPassword, generateToken, isAdCenter } from "../middleware";


const router = Router();


router.get('/all',isAdCenter, async (req, res) => {
    const connection = getConnection()

    console.log(connection);
    const admins = await connection
        .getRepository("admin_center")
        .find()
        .catch(error => {
            console.log(error);
        })
    res.json(admins)
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

router.post('/add', async (req, res) => {
    const connection = getConnection()
    const { email, password } = req.body
    let admin = new adminCenter();
    admin.email = email;
    admin.password = await hashPassword(password);
    admin = await connection.getRepository("admin_center").save(admin)
    res.json(admin)
})

router.post('/login', async (req, res) => {
    const connection = getConnection()
    const { email, password } = req.body
    const admin = await connection.getRepository("admin_center").findOne({
        where: {
            email
            
        }
    })
    if (admin) {
        const isValid = await checkPassword(password, admin.password)
        if (isValid) {
            const token = generateToken(admin, process.env.JWT_CENTER_SECRET, "admin_center")
            res.json({
                data: admin,
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




export { router as adminCenter }