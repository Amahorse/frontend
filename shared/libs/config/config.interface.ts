//TODO: pulire quelli che non servono

export interface App {
    name: string;
    version: string;
    cache: boolean;
    cache_expire_time: number;
    development_mode: boolean;
    indexable: boolean;
    tracking: boolean;
    administrator: string;
    copyright: string;
    skin: string;
    protocol: string;
    languages: string[];
}

export interface Default {
    id_countries: number;
    language: string;
    currency: string;
    locale: string;
    path: string;
}

export interface Api {
    xname: string;
    translate: boolean;
}

export interface Password {
    validate: string;
    minimum_length: number;
    maximum_length: number;
}

export interface Address {
    cdn: string;
    assets: string;
}

export interface Panel {
    datatables_cookies: string;
}

export interface Micro {
    x: number;
    y: number;
}

export interface Thumb {
    x: number;
    y: number;
}

export interface Medium {
    x: number;
    y: number;
}

export interface Large {
    x: number;
    y: number;
}

export interface Thumbnails {
    micro: Micro;
    thumb: Thumb;
    medium: Medium;
    large: Large;
}

export interface Store {
    type: string;
    id_resellers: boolean;
    id_stores: boolean;
    id_agents: boolean;
    payment_commission_percentage: number;
    enable_b2c: boolean;
    enable_b2b: boolean;
    enable_horeca: boolean;
    shipping_delay: number;
    shipping_max_hour: string;
    minimum_order_quantity?: any;
    maximum_order_quantity?: any;
    minimum_order_price?: any;
    holidays: string[];
    insert_prices_taxes: string;
}

export interface Default2 {
    id_countries: number;
    id_countries_states: number;
    header: string;
    address: string;
    address_note: string;
    co: string;
    ca: string;
    city: string;
    zip_code: string;
    phone: string;
    phone_prefix: string;
    state: string;
    state_short: string;
    country: string;
    country_short: string;
}

export interface Shipping {
    default: Default2;
}

export interface Default3 {
    id_countries: number;
    id_countries_states: number;
    header: string;
    address: string;
    address_note?: any;
    co: string;
    ca?: any;
    city: string;
    zip_code: number;
    fiscal_code?: any;
    vat_number: string;
    state: string;
    state_short: string;
    country: string;
    country_short: string;
    phone: string;
    phone_prefix?: any;
    pec: string;
    sdi_code: string;
    account: string;
    iban: string;
    swift: string;
    bank: string;
    bic: string;
    email: string;
    website: string;
}

export interface Invoices {
    default: Default3;
}

export interface Users {
    show_social: boolean;
    b2b_auto_confirm: boolean;
    b2b_vies_verify: boolean;
}

export interface Cms {
    show_age_banner: boolean;
    image_lazy_loading: boolean;
    image_webp: boolean;
    image_auto_dimension: boolean;
    domains: any[];
}

export interface Meta {
    title_separator: string;
    description_length: number;
}

export interface Google {
    tag_manager_id?: any;
    site_verification_id?: any;
    maps_api_key: string;
    application_id?: any;
    application_secret?: any;
}

export interface Twitter {
    username: string;
}

export interface Social {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    pinterest?: any;
    twitter_name: string;
}

export interface Stripe {
    public: string;
}

export interface Contacts {
    phone?: any;
    phone_business?: any;
    email?: any;
}

export interface Configurator {
    skin: string;
    address: string;
    api: string;
    min_steps: string;
    max_steps: string;
    quantity_options_b2c: string;
    quantity_options_b2b: string;
    version: string;
}

export interface Locale {
    currency: string;
    currency_symbol: string;
    time_format: string;
    date_format: string;
    timezone: string;
    language: string;
    locale: string;
    conversion_rate: number;
}

export interface Recaptcha {
    key: string
    secret: string
  }

export interface Config {
    app: App;
    default: Default;
    api: Api;
    password: Password;
    address: Address;
    panel: Panel;
    thumbnails: Thumbnails;
    store: Store;
    stripe: Stripe;
    shipping: Shipping;
    invoices: Invoices;
    users: Users;
    cms: Cms;
    meta: Meta;
    google: Google;
    twitter: Twitter;
    social: Social;
    contacts: Contacts;
    configurator: Configurator;
    locale: Locale;
    recaptcha: Recaptcha
}