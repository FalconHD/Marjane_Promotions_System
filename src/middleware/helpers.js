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