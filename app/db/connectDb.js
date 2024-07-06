import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `${process.env.MONGO_DB_CONNECTION_STRING}`
    );
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
export default connectDB;
