export interface DotpayForm {
    amount: number,
    api_version: string,
    bylaw: 1,
    ch_lock: number,
    channel: string,
    chk: string,
    city: string,
    control: number,
    country: string,
    currency: string,
    customer: string,
    description: string,
    email: string,
    firstname: string,
    id: number,
    ignore_last_payment_channel: number,
    lang: string,
    lastname: string,
    personal_data: number,
    phone: string,
    postcode: string,
    street: string,
    street_n1: string,
    type: number,
    url: string,
    magentoOrder: string
}

export interface DotpayResponse {
    url: string,
    data: DotpayForm
}

export enum DotpayStatus {
    NOT_EXISTS = 1, // Order doesn't exist
    ERROR = 0,  // An error with payment has been occurred
    PENDING = 1,    // Shop is still waiting for confirmation of payment
    SUCCESS = 2,    // Order has been paid successfully
    TOO_MANY = 3,   // Order has been paid before
    OTHER_STATUS = 4 // Status different than ERROR or PENDING
}
