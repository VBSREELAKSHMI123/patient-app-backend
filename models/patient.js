const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "pname":String,
        "tnum":String,
        "dr":String,
        "phone":String
    }
)

let patientmodel=mongoose.model("patients",schema);
module.exports={patientmodel}

