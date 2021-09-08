import productsPricesAction from '../../actions/products/ProductsPricesAction';
import { Currency } from '../../../infrastructure/config/types/Currency';
import { Product } from './../../../infrastructure/config/types/Product';

// Optimization: Fetch only unique prices
export default async (products: Product[], targetCurrency: Currency) => {
    const originalProductPrices = products.map((product: Product) => product.price);
    const uniqueOriginalProductPrices = getUniqueProductPrices(originalProductPrices);
    const pricesInTargetCurrencyData = await productsPricesAction(uniqueOriginalProductPrices, targetCurrency);
    const pricesInTargetCurrency = pricesInTargetCurrencyData.map((priceData) => priceData.data.price);
    const pricesMap = uniqueOriginalProductPrices.map((originalPrice, index): [number, number] => [originalPrice, pricesInTargetCurrency[index]])

    return new Map(pricesMap);
};

const getUniqueProductPrices = (productsPrices: number[]) => {
    return [...new Set(productsPrices)];
};
