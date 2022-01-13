import { getConnection } from "typeorm";
import { json, Router } from "express"
import { checkPassword, generateToken, randomToken, verifyToken } from "../middleware";



const router = Router();
const roles = {
    super_admin: process.env.JWT_SUPER_SECRET,
    manager: process.env.JWT_MANAGER_SECRET,
    admin_center: process.env.JWT_CENTER_SECRET,
}

router.get('/users', async (req, res) => {
    const connection = getConnection()
    console.log(connection);
    const users = await connection
        .getRepository("User")
        .find()
    res.json(users)
    res.json({
        users: []
    })
})

router.get('/user/:id', async (req, res) => {


    const id = req.params.id
    const users = await connection.getRepository(User).findOne({
        where: {
            id
        }
    })
    res.json(users)
})

router.get('/all', async (req, res) => {
    res.json({
        users: []
    })
})



router.get('/token/', async (req, res, next) => {
    const connection = getConnection()
    try {
        if (!req.headers.authorization) throw new Error("no token")
        const { id, role: UserRole } = randomToken(req.headers.authorization.split(" ")[1])
        const user = await connection.getRepository(UserRole).findOne({
            where: {
                id
            }
        })
        user.role = UserRole
        res.json(user)
    } catch (error) {
        next(error)
    }
})

router.post('/login', async (req, res,next) => {
    try {
        
    const connection = getConnection()
    const { email, password } = req.body
    const accounts = await Promise.all(["admin_center", "manager", "super_admin"].map(async role => {
        return {
            user: await connection.getRepository(role).findOne({
                where: {
                    email
                }
            }),
            role

        }
    }))
    const admin = accounts.filter(item => item.user !== undefined)[0];
    if (admin?.user === undefined) throw new Error("user not found")
    if (admin) {
        const isValid = await checkPassword(password, admin.user.password)
        if (isValid) {
            const token = generateToken(admin.user, roles[admin.role], admin.role)
            admin.role = admin.role
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
    } catch (error) {
        next(error)
    }
    
})




export { router as userRoutes }