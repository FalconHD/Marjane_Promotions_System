import { getConnection } from "typeorm";
import { Router } from "express"
import { isSuper } from "../middleware";


const router = Router();


router.get('/all', isSuper, async (req, res, next) => {
    try {
        const connection = getConnection()
        const logs = await connection.getRepository("logs").find()
        res.json(logs)
    } catch (error) {
        next(error)
    }
})

export { router as logs }