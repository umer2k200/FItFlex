import { Router } from 'express';
import { registerUser, loginUser, getRegisteredUsers, getRegisteredUsersByName, updateUser, deleteUser} from '../controllers/userController.js';
const router = Router();




//create user/regsiter
router.post("/registerUser", registerUser);

//login user
router.post("/loginUser", loginUser);

//get all users
router.get("/getRegisteredUsers", getRegisteredUsers);

//get user using username
router.get("/getRegisteredUsers/:name", getRegisteredUsersByName);

//update user details
router.put("/updateUser/:name", updateUser);

// //delete the user
router.delete("/deleteUser/:name", deleteUser);

// export default router;
export default router;