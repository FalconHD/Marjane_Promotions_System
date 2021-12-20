import 'dotenv/config';
import { app, connection } from './config';
import { errorHandler, notFound } from './middleware';
import { UserRoutes } from './routes';

export const init = () => {
    app.get("/", (req, res) => {
        res.send("Hello World")
    })

    app.get("/hello", (req, res) => {
        res.json({
            message: "zahyaaaaaa"
        })
    })


    app.use(notFound)
    app.use(errorHandler)

    app.listen(process.env.PORT, () => {
        console.log("Server is running on port " + process.env.PORT)
    })
} 