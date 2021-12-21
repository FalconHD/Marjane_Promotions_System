import { getConnection } from "typeorm";
import { Router } from "express"
import { superAdmin } from "../models";
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
    }]


//products array with category id 
let products = [
    {
        id: 1,
        name: "Apple iPhone XR (64GB) - Space Gray",
        price: "1,000",
        category: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {
        id: 2,
        name: "Apple iPhone XR (64GB) - Silver",
        price: "1,000",
        category: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {
        id: 3,
        name: "Apple iPhone XR (64GB) - Gold",
        price: "1,000",
        category: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {
        id: 4,
        name: "Apple iPhone XR (64GB) - Rose Gold",
        price: "1,000",
        category: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {
        id: 5,
        name: "Apple iPhone XR (64GB) - Black",
        price: "1,000",
        category: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {
        id: 6,
        name: "Apple iPhone XR (64GB) - White",
        price: "1,000",
        category: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {
        id: 7,



    }
]


//toys array with category id
let toys = [
    {
        id: 1,
        name: "Toy Car",
        price: "1,000",
        category: 6,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {
        id: 2,
        name: "Toy Car",
        price: "1,000",
        category: 6,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {
        id: 3,


    }
]

//fashion array with category id
let fashion = [
    {
        id: 1,
        name: "Fashion product 1",
        price: "1,000",
        category: 2,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {
        id: 2,
        name: "Fashion product 2",
        price: "1,000",
        category: 2,

        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
]

//home & garden array with category id
let homeGarden = [
    {
        id: 1,
        name: "Home & Garden product 1",
        price: "1,000",
        category: 3,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {
        id: 2,
        name: "Home & Garden product 2",
        price: "1,000",
        category: 3,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
]

//sports array with category id
let sports = [
    {
        id: 1,
        name: "Sports product 1",
        price: "1,000",
        category: 4,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {
        id: 2,
        name: "Sports product 2",
        price: "1,000",
        category: 4,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
]

//health & beauty array with category id
let healthBeauty = [
    {
        id: 1,
        name: "Health & Beauty product 1",
        price: "1,000",
        category: 7,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {
        id: 2,
        name: "Health & Beauty product 2",
        price: "1,000",
        category: 7,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
]

//automotive array with category id
let automotive = [
    {
        id: 1,
        name: "Automotive product 1",
        price: "1,000",
        category: 8,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
    {
        id: 2,
        name: "Automotive product 2",
        price: "1,000",
        category: 8,
        image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
    },
]







router.get('/all', isSuper, async (req, res) => {
    const connection = getConnection()

    console.log(connection);
    const admins = await connection
        .getRepository("products")

        .catch(error => {
            console.log(error);
        })
    res.json(admins)
})



export { router as superAdmin }