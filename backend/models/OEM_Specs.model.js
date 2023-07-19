const mongoose = require("mongoose")

const oemspecsSchema = mongoose.Schema({
    model: {type: String, required: true},
    year_of_model: {type: Number, required: true},
    price_of_new_vehicle: {type: Number, required: true},
    available_colors: {type: String, required: true},
    power_in_BHP: {type: Number, required: true},
    mileage: {type: String, required: true},
    maxspeed: {type: String, required: true},
    image: {type: String, required: true},
},{
    versionKey: false
})


const oemspecsModel = mongoose.model("OEM_Spec", oemspecsSchema)


module.exports = {oemspecsModel}