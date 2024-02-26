const mongoose = require ('mongoose')
const connectDB = async () => {
    try{
        const mongoURL = process.env.MONGO_URL;
        await mongoose.connect(mongoURL,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        })

        console.log('Connected to MongoDB');

    } catch (error) {
        console.error('MongoDB connection error:' , error);
        process.exit(1);
    }
}

module.exports = connectDB;