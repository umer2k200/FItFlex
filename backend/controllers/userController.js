import user from '../models/userModel.js';

const registerUser = async (req, res) => {
    try {
        const User = await user.create(req.body);
        res.status(200).json(User);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req,res) => {
    try{
        const {name, password} = req.body;
        const User = await user.findOne({name});
        if(!User){
            return res.status(404).json({message: "User not found"});
        }
        if(User.password !== password){
            return res.status(401).json({message: "Invalid Credentials"});
        }
        res.status(200).json({message: "Login Successful"});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}


const getRegisteredUsers = async (req, res) => {
    try{
        const Users = await user.find({});
        res.status(200).json(Users);
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
};

const getRegisteredUsersByName = async (req, res) => {
    try{
        const {name} = req.params;
        const Users = await user.find({name});
        res.status(200).json(Users);
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
};

const updateUser = async (req,res) => {
    try{
        const {name} = req.params;
        const updatedUser = req.body;
        const User =  await user.findOneAndUpdate( {name}, updatedUser, {new: true} );
        if(!User){
            return res.status(404).json({ message: "User not found"});
        }
        res.status(200).json(User);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    try{
        const {name} = req.params;
        const User = await user.findOneAndDelete({name});
        if(!User){
            return res.status(404).json({ message: "User not found"});
        }
        res.status(200).json({ message: "User deleted successfully"});
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
};

export { registerUser, loginUser, getRegisteredUsers, getRegisteredUsersByName, updateUser, deleteUser};