const express = require('express');
const { userRouter }= require('./routes/routes');
const { db } = require('./utils/database');



const app = express();


app.use(express.json())


app.use('/', userRouter)


app.listen('7000', () => {
    console.log('esta corriendo')
})




db.authenticate()
    .then(() => console.log('auntenticccc '))
    .catch(err => console.log(err))
db.sync()
    .then(() => console.log('db synced '))
    .catch(err => console.log(err))