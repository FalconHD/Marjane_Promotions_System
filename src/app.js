import 'dotenv/config';
import { app, connection } from './config';
import { errorHandler, notFound } from './middleware';
import { superAdmin, userRoutes , adminCenter } from './routes';
import { json } from "express"


export const init = () => {

    app.use(json());
    app.use("/super", superAdmin);
    app.use("/user", userRoutes);
    app.use("/admin", adminCenter);

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
