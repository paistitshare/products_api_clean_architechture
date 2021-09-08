import productsUseCase from '../../useCases/products/ProductsUseCase';
import productsPricesUseCase from './ProductsPricesUseCase';
import productsRatingsUseCase from '../../useCases/products/ProductsRatingsUseCase';
import { getAverageRating } from '../../helpers/ProductsRatingHelper';
import { Product, EnrichedProduct } from '../../../infrastructure/config/types/Product';
import { Currency } from '../../../infrastructure/config/types/Currency';

const DEFAULT_CURRENCY = Currency.DANISH_KRONE;

export default async (targetCurrency: Currency): Promise<EnrichedProduct[]> => {
    const products = await productsUseCase();
    const isDefaultCurrency = !targetCurrency || targetCurrency.toLowerCase() === DEFAULT_CURRENCY;
    const productPriceMapPromise = !isDefaultCurrency ? productsPricesUseCase(products, targetCurrency) : null;
    const ratingsPromise = productsRatingsUseCase(products);
    const [productPriceMap, productsRatings] = await Promise.all([productPriceMapPromise, ratingsPromise]);

    return products.map((product: Product, index: number) => {
        return {
            ...product,
            price: productPriceMap ? productPriceMap.get(product.price) as number : product.price,
            currency: isDefaultCurrency ? DEFAULT_CURRENCY : targetCurrency,
            averageRating: getAverageRating(productsRatings[index])
        };
    });
}
