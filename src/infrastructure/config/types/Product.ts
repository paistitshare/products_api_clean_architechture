import { Currency } from './Currency';

export interface Product {
    productId: number;
    price: number;
}

export interface ProductEnrichment {
    currency: Currency;
    averageRating: number;
}

export type EnrichedProduct = Product & ProductEnrichment;
