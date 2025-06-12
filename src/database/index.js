import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://omarghobashy:udemy12345@cluster0.szbjs.mongodb.net/omarscoreben"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
