import { getConnection } from "typeorm";
import { Router } from "express"
import { superAdmin, product } from "../models";
import { hashPassword, checkPassword, generateToken, isSuper } from "../middleware";


const router = Router();

//products array with category id 
let electrs = [
    {

        name: "Apple iPhone XR (64GB) - Space Gray",
        price: "1,000",
        category: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {

        name: "Apple iPhone XR (64GB) - Silver",
        price: "1,000",
        category: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {

        name: "Apple iPhone XR (64GB) - Gold",
        price: "1,000",
        category: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    }
]


//toys array with category 
let toys = [
    {

        name: "Toy Car",
        price: "1,000",
        category: 6,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {

        name: "Toy Car",
        price: "1,000",
        category: 6,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    }
]

//fashion array with category 
let fashion = [
    {

        name: "Fashion product 1",
        price: "1,000",
        category: 2,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {

        name: "Fashion product 2",
        price: "1,000",
        category: 2,

        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
]

//home & garden array with category 
let homeGarden = [
    {

        name: "Home & Garden product 1",
        price: "1,000",
        category: 3,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {

        name: "Home & Garden product 2",
        price: "1,000",
        category: 3,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
]

//sports array with category 
let sports = [
    {

        name: "Sports product 1",
        price: "1,000",
        category: 4,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {

        name: "Sports product 2",
        price: "1,000",
        category: 4,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
]

//health & beauty array with category 
let healthBeauty = [
    {

        name: "Health & Beauty product 1",
        price: "1,000",
        category: 7,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {

        name: "Health & Beauty product 2",
        price: "1,000",
        category: 7,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
]

//automotive array with category 
let automotive = [
    {

        name: "Automotive product 1",
        price: "1,000",
        category: 8,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {

        name: "Automotive product 2",
        price: "1,000",
        category: 8,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
]







router.get('/add', async (req, res) => {
    const connection = getConnection()
    const allo = [...electrs, ...toys, ...fashion, ...homeGarden, ...sports, ...healthBeauty, ...automotive]
    allo.forEach(async (p) => {
        let newProd = new product()
        newProd.name = p.name
        newProd.category = p.category
        newProd.price = Math.floor(Math.random() * 5000)

        newProd = await connection
            .getRepository("product")
            .save(newProd)
            .catch(error => {
                console.log(error);
            })
        console.log(newProd);
    })


    // res.json(admins)
})



export { router as Products }