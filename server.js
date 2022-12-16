import('./config/dbConnection.js');
import saleRouter  from './routes/saleRoute.js';
import express from "express";

const PORT = 9191;
const app = express();

app.use(express.json());
app.use('/api/v1', saleRouter)

app.listen(PORT, ()=>{
    console.log("App listening on port: " + PORT)
});