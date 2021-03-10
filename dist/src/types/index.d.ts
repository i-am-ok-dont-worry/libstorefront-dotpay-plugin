export interface DotpayForm {
    amount: number;
    api_version: string;
    bylaw: 1;
    ch_lock: number;
    channel: string;
    chk: string;
    city: string;
    control: number;
    country: string;
    currency: string;
    customer: string;
    description: string;
    email: string;
    firstname: string;
    id: number;
    ignore_last_payment_channel: number;
    lang: string;
    lastname: string;
    personal_data: number;
    phone: string;
    postcode: string;
    street: string;
    street_n1: string;
    type: number;
    url: string;
}
export interface DotpayResponse {
    url: string;
    data: DotpayForm;
}
export declare enum DotpayStatus {
    NOT_EXISTS = -1,
    ERROR = 0,
    PENDING = 1,
    SUCCESS = 2,
    TOO_MANY = 3,
    OTHER_STATUS = 4
}
