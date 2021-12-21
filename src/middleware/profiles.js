import { verifyToken } from "."

export const isSuper = (req, res, next) => {
    try {
        const tokensData = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_SUPER_SECRET)
        if (tokensData && tokensData.role === 'super_admin') {
            next()
        } else {
            res.status(403).json({
                message: 'Access denied'
            })
        }

    


    } catch (error) {
        next(error)
    }
}

export const isAdCenter = (req, res, next) => {
    try {
        const tokensData = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_CENTER_SECRET)
        if (tokensData && tokensData.role === 'admin_center') {
            next()
        } else {
            res.status(403).json({
                message: 'Access denied'
            })
        }

    


    } catch (error) {
        next(error)
    }
}
