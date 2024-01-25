const express = require('express')
const router = express.Router()
const userDB = require('./db.js')
const telegrafFile = require('./telegram.js')
router.post('/',(req, res) =>{
    let haveUpperCases = false
    let haveOneNumber = false
    let userSameNickname = false
    const userName = req.body.username
    const password = req.body.password
    if(userName == undefined){
        console.log(0)
        return res.status(400).send('add userName')
    }
    if(password == undefined){
        return res.status(400).send('add password')
    }
    if (password.length < 8){
        return res.status(400).send("password must have more 8 letters")
    }
    for (let i = 0; i < password.length; i++){
        const character = Array.from(password)[i]
        if(character.toUpperCase()){
            haveUpperCases = true
        }
    } 
    if (
        password.includes('0') ||
        password.includes('1') ||
        password.includes('2') ||
        password.includes('3') ||
        password.includes('4') ||
        password.includes('5') ||
        password.includes('6') ||
        password.includes('7') ||
        password.includes('8') ||
        password.includes('9')
    ){
        haveOneNumber = true
    }
    if (haveUpperCases == false){
        return res.status(400).send('Password must have 1 uppercase letter')
    }
    if (haveOneNumber == false){
        return res.status(400).send('Password must have 1 number')
    }
    if (userName != undefined && password != undefined && userSameNickname == false ){
        userDB.getUser(userName, (resDb) =>{
            if (resDb.rows.length > 0){
                userSameNickname = true
                return res.status(400).send("This username is busy, try other.")
            }else{
                userDB.addUser(userName,password)
                telegrafFile.userHasRegistered(userName,password)
                return res.status(201).send("You have created user")
            }
        })
    }
})

module.exports = router