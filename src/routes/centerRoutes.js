import { getConnection } from "typeorm";
import { Router } from "express"
import { center } from "../models";
import { hashPassword, checkPassword, generateToken, isSuper } from "../middleware";


const router = Router();

//products catgeory  array 
// let centers = [
//     {
//         name: "marjane",
//         city: "safi"
//     },
//     {
//         name: "marjane",
//         city:"agadir"
//     }
// ]


router.get('/all', async (req, res, next) => {
    try {
        const connection = getConnection()
        const centers = await connection.getRepository(center).find({
            relations: ["adminCenter"]
        })
        res.json(centers)
    } catch (error) {
        next(error)
    }
})


router.post('/add', isSuper, async (req, res) => {
    const { name, city, adminCenter } = req.body;
    const connection = getConnection()
    let newCenter = new center()
    newCenter.name = name
    newCenter.city = city
    newCenter.adminCenter = adminCenter
    newCenter = await connection
        .getRepository("center")
        .save(newCenter)
        .catch(error => {
            console.log(error);
        })
    console.log(newCenter);
    // })

    connection
        .createQueryBuilder()
        .update("admin_center")
        .set({ center: newCenter.id })
        .where("id = :id", { id: adminCenter })
        .execute();

    res.json({
        message: "Center added"
    })
})



export { router as center }