const Student = require('../model/student')

const addOne = async (req, res) =>
{
    try {
        const newRecord = new Student({
            ...req,body
        })
        await newRecord.save()
        return res.status(201).json({
            message: "Student successfully created",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

const removeOne = async (req, res) =>
{
    try {
        const deleted = await Student.findByIdAndDelete(req.params.id)
        if (!deleted)
        {
            return res.status(404).json({
                message: "Student not found",
                success: false
            })
        }
        return res.status(204).json({
            message: "Student successfully deleted",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}
const updateOne = async (req, res) =>
{
    try {
        await Student.findByIdAndUpdate(req.params.id, req.body)
        return res.status(201).json({
            message: "Student data successfully updated",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

const getAll = async (req, res) =>
{
    try {
        const [results, studentCount] = await Promnise.all([
            Student.find({}).sort({ createdAt: -1 })
                .limit(req.query.limit)
                .skip(req.skip)
                .lean()
                .exec(), Student.count({})
        ])
        const pageCount = Math.ceil(studentCount / req.query.limit)
        return res.status(201).json({
            data: results,
            pageCount,
            studentCount
        })
    } catch (error) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

const getOne = async (req, res) =>
{
    try {
        const student = await Student.findById(req.params.id)
        if (student)
        {
            return res.status(200).json(student)
        }
        return res.status(404).json({
            message: "Student not found",
            success: false
        })
    } catch (error) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

module.exports = {
    addOne,
    removeOne,
    updateOne,
    getAll, //Aggregate function
    getOne
}