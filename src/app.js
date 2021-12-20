import 'dotenv/config';
import { app, connection } from './config';
import { errorHandler, notFound } from './middleware';
import { UserRoutes } from './routes';

export const init = () => {

    for (const key in UserRoutes) {
        app.use(UserRoutes[key]);
    }

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