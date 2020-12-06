import { DotpayForm } from '../types';
import { ConnectionState } from '@grupakmk/libstorefront';
const qs = require('querystring');

/**
 * Returns full dotpay secure redirect link with all dotpay
 * params. This link should be used to redirect from store payment site.
 * @param {string} Dotpay base url
 * @param {DotpayForm} formData
 */
export const buildDotpayRedirectUrl = (sslUrl: string, formData: DotpayForm) => {
    if (formData && Object.keys(formData).filter(k => k !== 'magentoOrder').length > 0) {
        return `${sslUrl}/?${qs.stringify(formData)}`;
    }

    return sslUrl;
};

/**
 * Returns stringified html with complete built form.
 * This form should be injected in body node and submitted after
 * 10 ms.
 * @param {string} sslUrl
 * @param {DotpayForm} formData
 */
export const buildDotpayForm = (sslUrl: string, formData: DotpayForm) => {
    if (ConnectionState.isServer()) { throw new Error(`Cannot send dotpay data on server`); }
    if (!formData || Object.keys(formData).length === 0) { return null; }
    let form = Object.keys(formData)
        .filter(k => k !== 'magentoOrder')
        .reduce((acc, next) => {
            const field = `<input type="hidden" name="${next}" value="${formData[next]}" />`;
            return [...acc, field];
        }, [`<form class="dotpay-form" action="${sslUrl}" method="POST">`])
        .concat(`</form>`)
        .join('');

    return form;
};
