import { Application } from 'express';
import ProductsRouter from '../../../interface/routers/ProductsRouter';

export default (app: Application) => {
    app.use('/products', ProductsRouter);
}
