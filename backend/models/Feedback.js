const mongoose =  requier("mongoose");

const feedbackSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
    },

    message:{
        type: String,
        required: true,
    },

    date:{
        type: Date,
        defualt: Date.now,
    },
});

module.exports("Feedback", feedbackSchema);