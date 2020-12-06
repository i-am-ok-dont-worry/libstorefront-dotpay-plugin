import { DotpayForm } from '../types';
/**
 * Returns full dotpay secure redirect link with all dotpay
 * params. This link should be used to redirect from store payment site.
 * @param {string} Dotpay base url
 * @param {DotpayForm} formData
 */
export declare const buildDotpayRedirectUrl: (sslUrl: string, formData: DotpayForm) => string;
/**
 * Returns stringified html with complete built form.
 * This form should be injected in body node and submitted after
 * 10 ms.
 * @param {string} sslUrl
 * @param {DotpayForm} formData
 */
export declare const buildDotpayForm: (sslUrl: string, formData: DotpayForm) => string;
