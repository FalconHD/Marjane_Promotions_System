import { getConnection } from "typeorm";
import { Router } from "express"
import { promotion } from "../models";
import { hashPassword, checkPassword, generateToken, isSuper ,isAdCenter } from "../middleware";


const router = Router();

//products catgeory  array 
let promotions = [
    {
        pourcentage: "20",
        carteFidélité :"200",
        adminCenter : "2" ,
        product : "1"
    }
]




router.get('/add',isAdCenter, async (req, res) => {
    const connection = getConnection()
    promotions.forEach(async promo => {
        let newPromo = new promotion()
        newPromo.pourcentage = promo.pourcentage
        newPromo.carteFidélité = promo.carteFidélité
        newPromo.adminCenter = promo.adminCenter
        newPromo.product = promo.product
        newPromo = await connection
            .getRepository("promotion")
            .save(promo)
            .catch(error => {
                console.log(error);
            })
        console.log(promo);
    })

    res.json({
        message: "promotion added"
    })
})



export { router as promotion }