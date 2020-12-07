import { DotpayForm, DotpayStatus } from '../types';
export declare namespace DotpayActions {
    const SN_DOTPAY = "dotpay";
    const SET_DOTPAY_FORM: string;
    const setDotpayForm: (form: DotpayForm) => {
        type: string;
        payload: DotpayForm;
    };
    const SET_DOTPAY_URL: string;
    const setDotpayUrl: (url: string) => {
        type: string;
        payload: string;
    };
    const SET_DOTPAY_STATUS: string;
    const setDotpayStatus: (status: DotpayStatus) => {
        type: string;
        payload: DotpayStatus;
    };
    const SET_DOTPAY_ORDER_NUMBER: string;
    const setDotpayOrderNumber: (orderNumber: string) => {
        type: string;
        payload: string;
    };
}
