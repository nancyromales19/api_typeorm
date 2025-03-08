import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "node-mysql-crud-api",
  entities: ["src/entities/*.ts"],
  synchronize: true,
});

AppDataSource.initialize();
