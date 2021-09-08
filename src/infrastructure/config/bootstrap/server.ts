import express from 'express';
import createRouter from '../../config/bootstrap/createRouter';
import { ENVIRONMENT, PORT } from '../../config/utils/secrets';

const app = express();

app.set('port', PORT);
app.set('env', ENVIRONMENT);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

createRouter(app);

export default app;
