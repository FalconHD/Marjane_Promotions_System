import { getConnection } from "typeorm";
import { Router } from "express"
import { superAdmin } from "../models";
import { hashPassword, checkPassword, generateToken, isSuper } from "../middleware";


const router = Router();


router.get('/all', isSuper, async (req, res) => {
    const connection = getConnection()

    console.log(connection);
    const admins = await connection
        .getRepository("super_admin")
        .find()
        .catch(error => {
            console.log(error);
        })
    res.json(admins)
})

router.get('/:id', async (req, res) => {
    const connection = getConnection()
    const id = req.params.id
    const users = await connection.getRepository("super_admin").findOne({
        where: {
            id
        }
    })
    res.json(users)
})

router.post('/add', async (req, res) => {
    const connection = getConnection()
    const { email, password } = req.body
    let admin = new superAdmin();
    admin.email = email;
    admin.password = await hashPassword(password);
    admin = await connection.getRepository("super_admin").save(admin)
    res.json(admin)
})

router.post('/login', async (req, res, next) => {
    const connection = getConnection()
    const { email, password } = req.body
    const admin = await connection.getRepository("super_admin").findOne({
        where: {
            email

        }
    })
    if (admin) {
        const isValid = await checkPassword(password, admin.password)
        if (isValid) {
            const token = generateToken(admin, process.env.JWT_SUPER_SECRET, "super_admin")
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

router.use((req, res, next) => {
    next()
})



export { router as superAdmin }