import productsAction from '../../actions/products/ProductsAction';

export default async () => {
    const productsData = await productsAction();

    return productsData.data.body;
}
