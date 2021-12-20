import { getConnection } from "typeorm";
import { router } from "../config";

let connection = null

try {
    connection = getConnection()
} catch (error) {
    console.log(error.message);
}

export const getUsers = router.get('/users', async (req, res) => {

    const users = await connection
        .getRepository(User)
        .find()

    res.json(users)
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