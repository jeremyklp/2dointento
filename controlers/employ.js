const { Employement } = require('../models/model')



const getall = async (req, res) => {
    try {
        const employement = await Employement.findAll()

        res.status(200).json({
            status: 'succes',
            employement
        })
    } catch (err) {
        console.log(err)
    }
}
const createEmployee = async (req, res) => {
    try {
        const { id , entrance } = req.body;

        const newEmploy = await Employee.create({
            id,
            entrance

        });

        res.status(201).json({
            status: 'success',
            newEmploy,
        });
    } catch (err) {
        console.log(err);
    }
};


//

const getEmployeeById = async (req, res) => {
    const { id } = req.params;

    const employee = await Employee.findOne({ where: { id } });

    if (!employee) {
        return res.status(404).json({
            status: 'error',
            message: 'User not found',
        });
    }

    res.status(200).json({
        status: 'success',
        employee,
    });
};

const updateEmployee = async (req, res) => {
    const { id } = req.params;


    const employee = await Employee.findOne({ where: { id } });

    if (!employee) {
        return res.status(404).json({
            status: 'error',
            message: 'User not found',
        });
    }

    await user.update({ id });

    res.status(204).json({ status: 'success' });
};

const deleteEmploye = async (req, res) => {
    const { id } = req.params;

    const employee = await Employee.findOne({ where: { id } });

    if (!employee) {
        return res.status(404).json({
            status: 'error',
            message: 'User not found',
        });
    }

    // await user.destroy();
    await employee.update({ status: 'deleted' });

    res.status(204).json({ status: 'success' });
}





//
module.exports = {
    getall,
    createEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmploye
}