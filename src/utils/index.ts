import { DotpayForm } from '../types';
import { ConnectionState } from '@grupakmk/libstorefront';
const qs = require('querystring');

export const buildDotpayPostBody = (formData: DotpayForm) => {
    if (formData && Object.keys(formData).length > 0) {
        return qs.stringify(formData);
    }

    return null;
};


export const buildDotpayForm = (sslUrl: string, formData: DotpayForm) => {
    if (ConnectionState.isServer()) { throw new Error(`Cannot send dotpay data on server`); }
    if (!formData || Object.keys(formData).length === 0) { return null; }
    let form = Object.keys(formData)
        .reduce((acc, next) => {
            const field = `<input type="hidden" name="${next}" value="${formData[next]}" />`;
            return [...acc, field];
        }, [`<form class="dotpay-form" action="${sslUrl}" method="POST">`])
        .concat(`</form>`)
        .join('');

    form += `<sciprt>setTimeout(function(){document.getElementsByClassName('dotpay-form')[0].submit();}, 10)</sciprt>`;
    return form;
};
