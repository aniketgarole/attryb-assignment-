const mongoose = require("mongoose")

const marketplaceinventorySchema = mongoose.Schema({
    odometer_in_km: {type: Number, required: true},
    major_scratches: {type: Number, required: true},
    original_paint: {type: String, required: true},
    available_colors: {type: String, required: true},
    no_of_accidents_reported: {type: Number, required: true},
    no_ov_previous_buyers: {type: Number, required: true},
    registration_place: {type: String, required: true},
    image: {type: String, required: true},
},{
    versionKey: false
})


const marketplaceinventoryModel = mongoose.model("Marketplace_Inventory", marketplaceinventorySchema)


module.exports = {marketplaceinventoryModel}