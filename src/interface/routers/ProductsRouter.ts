import { Router } from 'express';
import { handleProducts } from '../../interface/controllers/ProductsController';

const router = Router();

router.get('/', handleProducts);

export default router;
