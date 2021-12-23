import { getConnection } from "typeorm";
import { Router } from "express"



const router = Router();

router.get('/users', async (req, res) => {

    const connection = getConnection()
    console.log(connection);
    const users = await connection
        .getRepository(User)
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




export { router as userRoutes }