const Task = require("../model/task");
const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
// create a task
router.post("/", async (req, res) => {
    try {   
        const task = await new Task(req.body).save();
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

//get all tasks 
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
});
// get a specific task 
router.get("/:id", async (req, res) => {
    try {
        const task = await Task.findById( req.params.id);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

//update a task
router.put("/:id", async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

// delete a task
router.delete("/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
