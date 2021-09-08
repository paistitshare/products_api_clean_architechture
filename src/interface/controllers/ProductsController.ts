import { Request, Response } from 'express';
import enrichedProductsUseCase from '../../application/useCases/products/EnrichedProductsUseCase';
import { Currency } from '../../infrastructure/config/types/Currency';

interface ProductsRequestQuery {
    toCurrency: Currency;
}

export async function handleProducts(request: Request<{}, {}, {}, ProductsRequestQuery>, response: Response): Promise<Response> {
    const { toCurrency } = request.query;
    const enrichedProducts = await enrichedProductsUseCase(toCurrency);

    return response.status(200).json(enrichedProducts);
}
