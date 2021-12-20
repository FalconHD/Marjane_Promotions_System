import { getConnection } from "typeorm";
import { router } from "../config";
import { superAdmin } from "../models";




export const getSuperAdmins = router.get('/admins', async (req, res) => {

    const connection = getConnection()
    console.log(connection);
    const admins = await connection
        .getRepository(superAdmin)
        .find()
        .catch(error => {
            console.log(error);
        })

    res.json(admins)
   
})

export const getUserById = router.get('/admins/:id', async (req, res) => {


    const id = req.params.id
    const users = await connection.getRepository(User).findOne({
        where: {
            id 
        }
    })

    res.json(users)
})