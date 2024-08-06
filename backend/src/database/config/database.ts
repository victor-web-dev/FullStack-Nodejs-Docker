import "dotenv/config";
import { Options } from "sequelize";

const development: Options = {
  username: process.env.DB_USER_DEV || "root",
  password: process.env.DB_PWD_DEV || "root123",
  database: process.env.DB_NAME_DEV || "DESAFIO",
  host: process.env.HOST || "localhost",
  port: Number(process.env.PORT) || 3306,
  dialect: "mysql",
  dialectOptions: {
    timezone: "Z",
  },
};

// const test: Options = {
//   username: process.env.DB_USER_TEST || 'root',
//   password: process.env.DB_PWD_TEST || 'root123',
//   database: process.env.DB_NAME_TEST || 'DESAFIO',
//   host: process.env.HOST || 'localhost',
//   port: Number(process.env.PORT) || 3306,
//   dialect: 'mysql',
//   dialectOptions: {
//     timezone: 'Z',
//   },
// };

// const production: Options = {
//   username: process.env.DB_USER_PROD || 'root',
//   password: process.env.DB_PWD_PROD || 'root123',
//   database: process.env.DB_NAME_PROD || 'DESAFIO',
//   host: process.env.HOST || 'localhost',
//   port: Number(process.env.PORT) || 3306,
//   dialect: 'mysql',
//   dialectOptions: {
//     timezone: 'Z',
//   },
// };

// const connection = {
//   development,
//   test,
//   production,
// };

module.exports = development;
