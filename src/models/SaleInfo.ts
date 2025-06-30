// src/models/SaleInfo.ts
export interface SaleInfo {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice?: Price;
    retailPrice?: Price;
    buyLink?: string;
    offers?: Offer[];
}

export interface Price {
    amount: number;
    currencyCode: string;
}

export interface Offer {
    finskyOfferType: number;
    listPrice: PriceInMicros;
    retailPrice: PriceInMicros;
}

export interface PriceInMicros {
    amountInMicros: number;
    currencyCode: string;
}
