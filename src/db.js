import { connect } from "mongoose";
import { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } from "./config.js";

export const connectDB = async () => {
  try {
    const db = await connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
    );
    console.log(`DB "${db.connection.db.databaseName}" connection successful`);
  } catch (error) {
    console.log(error);
  }
};
