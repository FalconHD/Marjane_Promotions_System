import { getConnection } from "typeorm";
import { Router } from "express"
import { adminCenter, logs, superAdmin } from "../models";
import { hashPassword, checkPassword, generateToken, isSuper, generatePassword, sendEmail, verifyToken, localLogs } from "../middleware";


const router = Router();


router.get('/all', async (req, res) => {
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

router.post('/adCenter', isSuper, async (req, res) => {
    const password = await generatePassword();
    const connection = getConnection()
    const { email } = req.body
    let admin = new adminCenter();
    admin.email = email;
    admin.password = await hashPassword(password);

    //Send Email 
    sendEmail(email, password);
    admin = await connection.getRepository("admin_center").save(admin)

    //create log
    const tokensData = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_SUPER_SECRET)
    console.log(tokensData);
    let logMsg = new logs();
    logMsg.message = `Super Admin : ${tokensData.id} created an admin Center: ${admin.id} `;
    logMsg.target = tokensData.id;
    logMsg.status = 'created';
    logMsg = await connection.getRepository("logs").save(logMsg).catch(error => {
        console.log(error);
    })
    localLogs(logMsg);

    res.json({
        message: "admin center added"
    })
})


router.post('/login', async (req, res) => {
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