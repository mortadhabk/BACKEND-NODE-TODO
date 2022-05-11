const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task: {
        type: String,
        required: true,
    },
    description: {
        type: String,
      
    },
    completed: {
        type: Boolean,
        default: false,
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    created_at    : { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model("task", taskSchema);
