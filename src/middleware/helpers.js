export const calculateFidelity = (pourcentage, { name }) => {
    if (pourcentage < 50) {
        if (name != "Electronics") {
            return (+pourcentage / 5) * 50
        } else {
            if (+pourcentage < 20) {
                return (+pourcentage / 5) * 50
            } else {
                throw new Error("The PR of Electronics is not more than 20%")
            }
        }
    } else {
        throw new Error("the PR is not more than 50%")
    }
}


export const isMorning = (req, res, next) => {
    const currentTime = new Date()
    const currentHour = currentTime.getHours()
    if (currentHour >= 8 && currentHour < 12) {
        next()
    } else {
        next(new Error("The promotions are closed"))
    }
}