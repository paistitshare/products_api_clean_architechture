import axios, { AxiosResponse } from 'axios';
import { getRatingUrl } from '../../helpers/ProductsApiUrlHelper';
import { Product } from '../../../infrastructure/config/types/Product';
import { ProductsRatingsApiResponse } from './../../../infrastructure/config/types/ProductsApi';

export default async (products: Product[]): Promise<AxiosResponse<ProductsRatingsApiResponse>[]> => {
    return Promise.all(products.map(({ productId }) => axios.get(getRatingUrl(productId))));
};
