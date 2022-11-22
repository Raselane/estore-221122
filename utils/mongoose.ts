import mongoose from "mongoose";

export async function initMongoose() {
    const db = await mongoose.connect(process.env.MONGODB_URI!);
    if(mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();

    }
    return db;
}