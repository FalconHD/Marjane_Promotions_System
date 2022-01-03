<<<<<<< HEAD
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
    fs.readFile('src/public/logs.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            let logs = JSON.parse(data);
            logs.push(newLog);
            let json = JSON.stringify(logs,null,3);
            fs.writeFile('src/public/logs.json', json, 'utf8',(err,data)=>{console.log(data);});
        }
    });
=======
import fs from "fs"
import { logs } from "../models"

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
    fs.readFile('src/public/logs.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            let logs = JSON.parse(data);
            logs.push(newLog);
            let json = JSON.stringify(logs,null,3);
            fs.writeFile('src/public/logs.json', json, 'utf8',(err,data)=>{console.log(data);});
        }
    });
>>>>>>> bb956f4fd34c3565e36fc049a3f4ecc31671182b
}