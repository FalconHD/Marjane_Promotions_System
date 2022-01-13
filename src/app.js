import 'dotenv/config';
import { json, static as staticPath } from "express"
import path from 'path'
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { app, connection } from './config';
import { errorHandler, notFound } from './middleware';
import { superAdmin, logs, Category, adminCenter, Products, promotion, center, manager, userRoutes } from './routes';


export const init = () => {

    //global middlewares
    app.use('/static', staticPath(path.join(__dirname, 'public')))
    app.use(helmet());
    app.use(cors());
    app.use(morgan('tiny'));
    app.use(json());

    //routes
    app.use("/super", superAdmin);
    app.use("/manager", manager)
    app.use("/category", Category);
    app.use("/admin", adminCenter);
    app.use("/product", Products);
    app.use("/promotion", promotion);
    app.use("/center", center);
    app.use("/log", logs);
    app.use("/auth", userRoutes);

    // 404
    app.use(notFound)
    // Error handler
    app.use(errorHandler)

    //init db with server
    connection().then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port " + process.env.PORT)
        })
    })
} 
