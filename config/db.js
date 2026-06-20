import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config();
dns.setDefaultResultOrder("ipv4first");

const connectDB = async () => {
  console.log("🔄 MongoDB connect করার চেষ্টা করছি...");
  console.log("🔗 URI:", process.env.MONGODB_URI); // URI দেখাবে

  try {
    const conn = await mongoose.connect("mongodb://shazidul_aiLearning_pr:S54Qll6pmfPhSAQq@cluster0-shard-00-00.c6qwxrk.mongodb.net:27017,cluster0-shard-00-01.c6qwxrk.mongodb.net:27017,cluster0-shard-00-02.c6qwxrk.mongodb.net:27017/?ssl=true&replicaSet=atlas-xxxxxx-shard-0&authSource=admin&appName=Cluster0");
    // const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Error: ${error.message}`);
    console.error(error); // পুরো error দেখাবে
    process.exit(1);
  }
};

export default connectDB;