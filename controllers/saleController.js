import e from "express";
import saleModel from "../models/salesModel.js";

export const allSales = async(req, res) =>{
    try{
        const sales = await saleModel.findAll();
        if (sales.length === 0) {
            res.status(404).json({
                message: "This record does not exist"
            })
        }else {
            res.status(200).json({
                message: "All Sales with total items no: " + sales.length,
                data: sales
            })
        }
    }catch(err) {
        console.log(err.message)
    }
};

//logic to get a single sale
export const singleSale = async (req, res) =>{
    try {
        //grab the id from the url
        const id = req.params.id;
        const sale = await saleModel.findAll({
            where: {
                id: id
            }
        });
        if (sale.length === 0 ) {
            res.status(404).json({
                message: `No such id: ${id}`
            });
            // console.log(salesTable[0].id)
        } else {
            res.status(200).json({
                data: sale[0]
            });
        }
    }catch (e) {
        res.status(404).json({
            message: e.message
        })
    }
};

// //delete a record

export const deleteSale = async (req, res) => {
    try {
        //to grab id from the url
        const id = req.params.id;
        const deletedSale = await saleModel.destroy({
            where: {id: id}
        });
        if (deletedSale === 0) {
            res.status(404).json({
                message:  `ID no: ${id} is not  available`
            })
        } else {
            res.status(200).json({
                message: "deleted successfully",
                data: deletedSale
            })
        }
    } catch (e) {
        res.status(400).json({
            message: e.message
        })
    }
}
// export const deleteSale = async (req, res) =>{
//     try {
//         //grab the id from the url
//         const id = req.params.id;
//         if (!id) {
//             res.status(404).json({
//                 message: `This id: ${id} is not found in the database`
//             })
//         }else {
//             const sale = await saleModel.findOne({
//                 where: {
//                     id: id
//                 }
//             });
//             if (sale) {
//                 await sale.destroy();
//                 res.status(200).json({
//                     message: `Deleted student with id: ${id}`,
//                     data: sale[0]
//                 })
//             } else {
//                 res.status(404).json({
//                     message: "No sale with id no: " + id
//                 })
//             }
//         }
//     }catch (e) {
//         res.status(404).json({
//             message: e.message
//         })
//     }
// };

//update a record
export const updateSale = async (req, res) =>{
    try {
        const id = req.params.id;
        const updatedSale =await saleModel.update(req.body, {where: {id: id}});
        if (updatedSale[0] === 0) {
            res.status(404).json( {
                message: `Item with id no: ${id} does not exist`
            } )
        } else {
            res.status(200).json({
                message: "Updated Successfully",
                data: updatedSale
            })
        }
    } catch (e){
        res.status(500).json({
            message: e.message
        })
    }
}

//create a new sale
export const newSale = async (req, res) =>{
    try {
        const sale = await saleModel.create(req.body);
        res.status(201).json({
            data: sale
        })
    }catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

//