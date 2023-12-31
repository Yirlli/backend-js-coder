import mongoose from "mongoose"

const cartCollection = "carts"

const cartSchema = new mongoose.Schema({
    description: {type: String, max : 30, required :true},
    quantity : {type: Number, required: true },
    total :{type : Number, required : true}
})

export const cartsModel = mongoose.model(cartCollection,cartSchema)