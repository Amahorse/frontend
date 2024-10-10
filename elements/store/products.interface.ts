interface ProductVariant {
    variant: string;
    sku: string;
    status: string;
    collection: string;
    collection_current: string;
    season: string | null;
    color_primary: string;
    color_secondary: string | null;
    a0_code: string;
    a0_description: string;
    a0_order: number | null;
    a1_code: string;
    a1_description: string;
    a1_order: number | null;
    a4_code: string | null;
    a4_description: string | null;
    a4_order: number | null;
    cover: string;
    cover_url: string;
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

interface ProductSplits {
    code: string;
    order: number;
    variants: {
        [key: string]: ProductVariant;
    };
    collection: string;
    cover: string;
    cover_url: string;
    discount_percentage: string;
}

interface ProductCategory {
    id_categories: number;
    category: string;
}

export interface Product {
    id: number;
    season: string | null;
    code: string;
    family: string;
    neutral_image: string | null;
    neutral_image_url: string;
    gender: string;
    age: string;
    type: string;
    material: string | null;
    tech: string;
    discipline: string | null;
    a0: string;
    a1: string;
    a4: string | null;
    split: string;
    brand: string;
    brand_code: string;
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
    splits: ProductSplits;
    price_min: string;
    price_max: string;
    availability_total: number;
    categories: ProductCategory[];
}
