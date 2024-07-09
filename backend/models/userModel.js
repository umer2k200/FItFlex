import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        bodyWeight: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true
        },
        goal: {
            type: String,
            enum: ["Lose", "Maintain", "Gain"],
            default: 'Gain'
        },
        feedback: {
            type: String,
            default: "None"
        },
        plan: {
            type: String,
            enum: ["Basic", "Premium", "Pro", "None"],
            default: "None"
        },
        program: {
            type: String,
            enum: ["Strength Training", "Cardio Training", "Fat Burning", "Health Fitness", "None"],
            default: "None"
        }
    },
    {
        timestamps: true //created and updated time
    }
);

const user = mongoose.model("user", UserSchema);
export default user;

