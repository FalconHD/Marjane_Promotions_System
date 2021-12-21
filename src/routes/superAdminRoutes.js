import { getConnection } from "typeorm";
import { router } from "../config";
import { superAdmin } from "../models";
import { hashPassword, checkPassword, generateToken, isSuper } from "../middleware";




export const getSuperAdmins = router.get('/all', isSuper, async (req, res) => {
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

export const getUserById = router.get('/:id', async (req, res) => {
    const connection = getConnection()
    const id = req.params.id
    const users = await connection.getRepository("super_admin").findOne({
        where: {
            id
        }
    })
    res.json(users)
})

export const addAdmin = router.post('/add', async (req, res) => {
    const connection = getConnection()
    const { email, password } = req.body
    let admin = new superAdmin();
    admin.email = email;
    admin.password = await hashPassword(password);
    admin = await connection.getRepository("super_admin").save(admin)
    res.json(admin)
})

export const superLogin = router.post('/login', async (req, res) => {
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