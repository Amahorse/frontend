export interface ProductVariant {
    variant: string;
    sku: string;
    status: string;
    collection: string | null;
    season: string | null;
    color_primary: string | null;
    color_secondary: string | null;
    a0_code: string | null;
    a0_description: string;
    a0_order: string | null;
    a1_code: string | null;
    a1_description: string;
    a1_order: string | null;
    a4_code: string | null;
    a4_description: string | null;
    a4_order: string | null;
    cover: string | null;
    cover_url: string | null;
    minimum_order: number;
    id_store_products: number;
    currency: string;
    taxes_included: number;
    availability: number;
    price: number;
    price_discount: string;
    price_to_pay: string;
    discount_percentage: string;
    total_price: string;
    total_discount: string;
    total_to_pay: string;
}

export interface ProductCategory {
    id_categories: number;
    category: string;
}

export interface Product {
    id: number;
    season: string | null;
    code: string;
    family: string;
    gender: string | null;
    age: string | null;
    type: string | null;
    material: string | null;
    tech: string;
    discipline: string | null;
    a0: string | null;
    a1: string | null;
    a4: string | null;
    split: string | null;
    brand: string | null;
    brand_code: string | null;
    slug: string;
    title: string;
    description: string | null;
    content: string;
    meta_title: string;
    meta_description: string;
    indexable: number;
    size_fit: string | null;
    composition: string;
    info_care: string;
    variants: ProductVariant[];
    categories: ProductCategory[];
}
