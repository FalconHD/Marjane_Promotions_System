import { getConnection } from "typeorm";
import { Router } from "express"
import { promotion } from "../models";
import { hashPassword, checkPassword, generateToken, isSuper ,isAdCenter } from "../middleware";
import { logs } from "../models/Logs";


const router = Router();

//products catgeory  array 


router.post('/add', async (req, res) => {
    const connection = getConnection()
    const { pourcentage, carteFidélité  ,product, adminCenter } = req.body
    

    let promo = new promotion();
    promo.pourcentage = pourcentage;
    promo.carteFidélité = carteFidélité;
    promo.adminCenter = adminCenter;
    promo.product = product;
 
        promo = await connection
            .getRepository("promotion")
            .save(promo)
            .catch(error => {
                console.log(error);
            })
        console.log(promo);


    let logMsg = new logs();
    logMsg.message = `${adminCenter} create promotion: ${promo.id} || Product : ${product}`;
    logMsg.target = adminCenter;
    logMsg.status = 'created';
    logMsg = await connection.getRepository("logs").save(logMsg).catch(error => {
        console.log(error);
    })

    res.json({
        message: "promotion added"
    })
})



export { router as promotion }