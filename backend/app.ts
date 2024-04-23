import express, { Application } from 'express';
import bodyParser from 'body-parser';
import userRoutes from './src/routes/userRoutes';
require('dotenv').config();



const app: Application = express();

app.use(bodyParser.json());
app.use('/users', userRoutes);

export default app;
