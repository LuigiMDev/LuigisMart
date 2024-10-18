export type Products = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    tags: string[];
    brand: string;
    images: string;
    thumbnail: string;
}

export type Smartphone = {
    products: Products[];
    total: number;
    skip: number;
    limit: number;
}