import mongoose from "mongoose";

mongoose.connect("mongodb+srv://GusTeixeira:Guga3004_@alura.iegaw95.mongodb.net/AluraExpress");

let db = mongoose.connection;

export default db;