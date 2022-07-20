const express = require('express');
const { getall, 
    createEmployee, 
    getEmployeeById,
    updateEmployee,
    deleteEmploye}= require('../controlers/employ')

const userRouter = express.Router();





userRouter.get('/', getall)
userRouter.get('/:id', getEmployeeById)
userRouter.post('/', createEmployee)
userRouter.delete('/:id', deleteEmploye)
userRouter.put('/:id', updateEmployee)






module.exports = {userRouter}