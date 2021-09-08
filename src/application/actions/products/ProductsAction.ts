import axios, { AxiosResponse } from 'axios';
import { ProductsApiResponse } from '../../../infrastructure/config/types/ProductsApi';
import { getProductsUrl } from '../../helpers/ProductsApiUrlHelper';

export default async (): Promise<AxiosResponse<ProductsApiResponse>> => {
    return axios.get(getProductsUrl());
};
