import axios, { AxiosResponse } from 'axios';
import { Currency } from '../../../infrastructure/config/types/Currency';
import { ProductsPriceApiResponse } from '../../../infrastructure/config/types/ProductsApi';
import { getPriceUrl } from '../../helpers/ProductsApiUrlHelper';

export default async (productsPrices: number[], targetCurrency: Currency): Promise<AxiosResponse<ProductsPriceApiResponse>[]> => {
    return Promise.all(productsPrices.map((productPrice) => axios.get(getPriceUrl(productPrice, targetCurrency))));
};
