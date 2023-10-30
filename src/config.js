import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;

export const DB_HOST = process.env.MONGOHOST || "localhost";
export const DB_USER = process.env.MONGOUSER || "root";
export const DB_PASSWORD = process.env.MONGOPASS || "root";
export const DB_NAME = process.env.MONGODB || "EnsolversTODOApp";
export const DB_URL = process.env.MONGOURL || "localhost:27017";

export const TOKEN_SECRET = process.env.TOKENSECRET || null;

export const corsOptions = {
  // origin: "http://localhost:5173",
  origin: "https://todoappclient-o2au.onrender.com",
  optionsSuccessStatus: 200,
  credentials: true,
};
