const mongoose=require("mongoose")

async function connectToMongoB(url){

    await mongoose.connect(url);
}


module.exports= { connectToMongoB }