import "reflect-metadata";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import AppDataSource from "./config/data-source";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source đã được khởi tạo!");
    app.get("/", (req: Request, res: Response) => {
      res.send("<h1>Kết nối CSDL thành công!!</h1>");
    });
    app.listen(PORT, () => {
      console.log(`Server is running in http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Lỗi khi khởi tạo Data Source:", error);
  });
