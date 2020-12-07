import { AbstractStore, LibstorefrontInnerState } from '@grupakmk/libstorefront';
import { DotpayResponse, DotpayStatus } from '../types';
export declare class DotpayService {
    private store;
    /**
     * Returns dotpay form object that can be used
     * to build valid DotPay redirect link. Form is
     * stored in the redux dotpay state under 'form' property.
     * @param {number} orderId
     * @returns {Promise<DotpayResponse>} Dotpay embeddable form
     */
    getDotpayPaymentForm(orderId: string): Promise<DotpayResponse>;
    /**
     * Returns dotpay payment status for selected order
     * @param {string} orderId
     * @returns {Promise<DotpayStatus>} Payment status
     */
    getDotpayPaymentStatus(orderId: string): Promise<DotpayStatus>;
    /**
     * Loads last dotpay transaction from localstorage into the Redux store
     */
    loadLastTransactionFromCache(): void;
    /**
     * Redirects to dotpay secure payment site via GET redirect
     */
    redirectToPaymentViaUrl(): Promise<void>;
    /**
     * Redirects to dotpay secure payment site via injected html POST form
     */
    redirectToPaymentViaPostForm(): Promise<void>;
    constructor(store: AbstractStore<LibstorefrontInnerState>);
}
