import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: process.env.NAME || 'myFitnessApp', // Provide a default value
  username: process.env.USER || 'postgres', // Provide a default value
  password: process.env.PASSWORD || 'default_password', // Provide a default value
  host: process.env.HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10), // Provide a default value for the port
});


export default sequelize;
