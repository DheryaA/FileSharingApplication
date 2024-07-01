
import mongoose from 'mongoose';


const DBConnection=async()=>{
    const DB_URL="mongodb+srv://deepakbishtcs2035:95KeKz4Igy52Cgp2@cluster0.6lcxsqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0S";
try {
   await mongoose.connect(DB_URL);
    console.log("Db has been connected")
} catch (error) {
    console.error("Error while connection",error.message);
}

}

export default DBConnection;