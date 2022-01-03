import { getConnection } from "typeorm";
import { Router } from "express"
import { superAdmin, category } from "../models";
import { hashPassword, checkPassword, generateToken, isSuper } from "../middleware";


const router = Router();

//products catgeory  array 
let productsCategory = [
    {
        name: "Electronics",
    },
    {
        name: "Fashion",
    },
    {
        name: "Home & Garden",
    },
    {
        name: "Sports",
    },
    {
        name: "Books",
    },
    {
        name: "Toys",
    },
    {
        name: "Health & Beauty",
    },
    {
        name: "Automotive",
    }
]




router.get('/add', async (req, res) => {
    const connection = getConnection()
    productsCategory.forEach(async ctr => {
        let newCat = new category()
        newCat.name = ctr.name
        newCat = await connection
            .getRepository("category")
            .save(newCat)
            .catch(error => {
                console.log(error);
            })
        console.log(newCat);
    })

    res.json({
        message: "Categories added"
    })
})



export { router as Category }