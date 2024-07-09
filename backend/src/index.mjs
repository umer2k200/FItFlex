import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from '../routes/userRoute.js'

const app = express();

//middleware configuration
app.use(cors()); //for frontend and backend communication
app.use(express.json()); //accept json files
app.use(express.urlencoded({extended: false})); //accept other than json
const PORT = process.env.PORT || 3000;

//routes
app.use("/fitclub", router);



//assure the connection
mongoose.connect("mongodb+srv://umarzeeshan709:fitclub123@fitclub2cluster.hnuavmo.mongodb.net/FitclubCollection?retryWrites=true&w=majority&appName=FITCLUB2Cluster")
    .then(() => {
        console.log("Connected to Database");
        app.listen(PORT, () => {
            console.log(`Running on the Port ${PORT}`);
        })
    })
    .catch(() => {
        console.log("Error in Connection");
    })