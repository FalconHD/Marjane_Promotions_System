import { getConnection } from "typeorm";
import { router } from "../config";



export const getUsers = router.get('/users', async (req, res) => {

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

export const getUserById = router.get('/user/:id', async (req, res) => {


    const id = req.params.id
    const users = await connection.getRepository(User).findOne({
        where: {
            id
        }
    })

    res.json(users)
})