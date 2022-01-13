import { getConnection } from "typeorm";
import { Router } from "express"
import { isSuper } from "../middleware";


const router = Router();


router.get('/all', async (req, res, next) => {
    try {
        const connection = getConnection()
        const logs = await connection.getRepository("logs").find()
        res.json(logs)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const connection = getConnection()
        const logs = await connection.getRepository("logs").find({
            where: {
                target: id
            }
        })
        res.json(logs)
    } catch (error) {
        next(error)
    }
})

export { router as logs }