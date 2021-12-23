import 'dotenv/config';
import { json } from "express"
import { app, connection } from './config';
import { errorHandler, notFound } from './middleware';
import { superAdmin, logs, Category, adminCenter, Products, promotion ,center ,manager} from './routes';


export const init = () => {

    app.use(json());
    app.use("/super", superAdmin);
    // app.use("/user", userRoutes);
    app.use("/manager", manager)
    app.use("/category", Category);
    app.use("/admin", adminCenter);
    app.use("/product", Products);
    app.use("/promotion", promotion);
    app.use("/center", center);
    app.use("/log", logs);

    // 404
    app.use(notFound)
    // Error handler
    app.use(errorHandler)

    connection().then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port " + process.env.PORT)
        })
    })
} 
