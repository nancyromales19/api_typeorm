import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./users/users.controller"; // Importing the user routes
import { errorHandler } from "./middleware/error-handler";

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

// Routes
app.use("/users", userRoutes);

// Health Check Route
app.get("/", (req: Request, res: Response) => {
    res.send("API is running 🚀");
});

// Error Handler Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
