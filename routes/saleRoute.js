import express from "express";

import { allSales, deleteSale, newSale, singleSale, updateSale } from "../controllers/saleController.js";

const saleRouter = express.Router();
//endpoint for all sales
saleRouter.get('/sales', allSales);

//endpoint for getting a single data
saleRouter.get('/sales/:id', singleSale);

//endpoint for creating a sale
saleRouter.post('/sales', newSale);

//endpoint to delete a record
saleRouter.delete('/sales/:id', deleteSale)
 
//endpoint to update a record
saleRouter.patch('/sales/:id', updateSale);

export default saleRouter;