import fs from "fs"

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



export const localLogs = (newLog) => {
    fs.readFile('logs.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            logs = JSON.parse(data);
            logs.table.push(newLog);
            json = JSON.stringify(logs);
            fs.writeFile('logs.json', json, 'utf8', callback);
        }
    });
}