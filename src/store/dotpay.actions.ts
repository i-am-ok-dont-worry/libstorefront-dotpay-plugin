import { DotpayForm, DotpayStatus } from '../types';

export namespace DotpayActions {
    export const SN_DOTPAY = 'dotpay';
    export const SET_DOTPAY_FORM = SN_DOTPAY + '/SET_FORM';
    export const setDotpayForm = (form: DotpayForm) => ({
        type: SET_DOTPAY_FORM,
        payload: form
    });

    export const SET_DOTPAY_URL = SN_DOTPAY + '/SET_URL';
    export const setDotpayUrl = (url: string) => ({
        type: SET_DOTPAY_URL,
        payload: url
    });

    export const SET_DOTPAY_STATUS = SN_DOTPAY + '/SET_STATUS';
    export const setDotpayStatus = (status: DotpayStatus) => ({
        type: SET_DOTPAY_STATUS,
        payload: status
    });

    export const SET_DOTPAY_ORDER_NUMBER = SN_DOTPAY + '/SET_ORDER_NUMBER';
    export const setDotpayOrderNumber = (orderNumber: string) => ({
        type: SET_DOTPAY_ORDER_NUMBER,
        payload: orderNumber
    });
}
