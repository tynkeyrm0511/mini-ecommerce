import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "3000"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: true,
  synchronize: true,
  entities: ["src/entities/**/*.ts"], // Đường dẫn tới các file entity đã được biên dịch sang JS.
  migrations: ["src/migrations/**/*.ts"], // Đường dẫn tới các file migration đã được biên dịch.
};

const AppDataSource = new DataSource(dataSourceOptions);
export default AppDataSource;
