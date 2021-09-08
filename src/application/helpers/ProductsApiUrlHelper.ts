import hosts from '../../infrastructure/config/hosts.json';
import ProductsApiRoutes from '../../infrastructure/config/constants/ProductsApiEndpoints';
import { Currency } from '../../infrastructure/config/types/Currency';

export function getProductsUrl() {
    return `${hosts.products}${ProductsApiRoutes.PRODUCTS}`;
}

export function getPriceUrl(price: number, targetCurrency: Currency) {
    return `${hosts.price}${ProductsApiRoutes.PRICE}?price=${price}&toCurrency=${targetCurrency}`;
}

export function getRatingUrl(productId: number) {
    return `${hosts.rating}${ProductsApiRoutes.RATING}?productId=${productId}`;
}
