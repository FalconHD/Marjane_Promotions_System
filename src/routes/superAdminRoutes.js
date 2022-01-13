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
    const { email, name } = req.body
    let admin = new adminCenter();
    admin.email = email;
    admin.name = name;
    admin.password = await hashPassword(password);

    //Send Email 
    sendEmail(email, password);
    admin = await connection.getRepository("admin_center").save(admin)

    //create log
    const tokensData = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_SUPER_SECRET)

    let logMsg = new logs();
    logMsg.message = `Super Admin : ${tokensData.id} created an admin Center: ${admin.id} `;
    logMsg.target = tokensData.id;
    logMsg.status = 'created';
    logMsg = await connection.getRepository("logs").save(logMsg)
    localLogs(logMsg);

    res.json({
        message: "admin center added"
    })
})





router.use((req, res, next) => {
    next()
})

export { router as superAdmin }