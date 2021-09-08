import { Currency } from './Currency';
import { Product } from './Product';

interface BaseProductsApiResponse {
    statusCode: number;
}

export interface ProductsApiResponse extends BaseProductsApiResponse {
    body: Product[];
}

export interface ProductsPriceApiResponse extends BaseProductsApiResponse {
    currency: Currency;
    price: number;
}

export interface ProductsRatingsApiResponse extends BaseProductsApiResponse {
    rating: number[];
}
