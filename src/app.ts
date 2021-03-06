import express from 'express';
import cors from 'cors';
import router from './routes';
import './database';

import {config} from 'dotenv-safe';
config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

export default app;