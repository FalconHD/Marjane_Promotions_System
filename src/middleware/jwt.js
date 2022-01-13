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
        throw new Error("Invalid token")
    }
}
export const isTokenValid = (token, secret) => {
    try {
        const decoded = jwt.verify(token, secret)
        return decoded
    } catch (error) {
        return false
    }
}

const roles = [
    process.env.JWT_SUPER_SECRET,
    process.env.JWT_MANAGER_SECRET,
    process.env.JWT_CENTER_SECRET,
]

export const randomToken = (token) => {
    return roles.map(role => isTokenValid(token, role) ? verifyToken(token, role) : null).filter(item => item !== null)[0]
}
