import jwt from 'jsonwebtoken';

export const generateToken = ({ id, email }, secret, role) => {
    const token = jwt.sign({
        id,
        email,
        role
    }, secret, {
        expiresIn: '24h'
    })
    return token
}

export const verifyToken = (token, secret) => {
    try {
        const decoded = jwt.verify(token, secret)
        return decoded
    } catch (error) {
        throw new Error("invalid token")
    }
}
