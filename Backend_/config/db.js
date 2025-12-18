const mongoose=require("mongoose")



const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://naveenkumar:h9qJ4SD6ivXTm492@cluster0.eqkjt0c.mongodb.net/");
            console.log("MongoDB connected");
        }
        catch(error){
        console.error(`Error:${error.message}`);
        process.exit(1);
    }
}
module.exports=connectDB;
