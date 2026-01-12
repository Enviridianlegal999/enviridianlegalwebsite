import mongoose from "mongoose";

// Get the MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
  );
}

// Use a global variable to persist the connection across hot reloads in development
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  // If a connection is already cached, return it
  if (cached.conn) {
    return cached.conn;
  }

  // If no promise exists, create one and cache it
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("[MongoDB] ✅ Connected successfully");
      return mongoose;
    });
  }

  // Wait for the promise to resolve and cache the connection
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
