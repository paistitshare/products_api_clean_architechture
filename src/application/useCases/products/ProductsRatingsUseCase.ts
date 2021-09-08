import productsRatingsAction from '../../actions/products/ProductsRatingsAction';
import { Product } from '../../../infrastructure/config/types/Product';

export default async (products: Product[]) => {
    const productsRatingsData = await productsRatingsAction(products);

    return productsRatingsData.map((productRatingData) => productRatingData.data.rating);
}
