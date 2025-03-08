import { DataSource } from "typeorm";
import { User } from "../users/user.model";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "node-mysql-crud-api",
    synchronize: true, // Auto-sync schema (disable in production)
    entities: [User], // Register models
});