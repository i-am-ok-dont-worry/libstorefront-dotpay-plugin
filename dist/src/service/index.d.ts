import { AbstractStore, LibstorefrontInnerState, Task } from '@grupakmk/libstorefront';
import { DotpayResponse, DotpayStatus } from '../types';
export declare class DotpayService {
    private store;
    /**
     * Returns dotpay form that should be POST send
     * as application/x-www-form-urlencoded form
     * into a checkout payment pending page
     * @param {number} orderId
     * @returns {Promise<any>} Dotpay embeddable form
     */
    getDotpayPaymentForm(orderId: string): Promise<DotpayResponse>;
    /**
     * Returns dotpay payment status for selected order
     * @param {string} orderId
     * @returns {Promise<DotpayStatus>} Payment status
     */
    getDotpayPaymentStatus(orderId: string): Promise<DotpayStatus>;
    /**
     * Sends parsed dotpay form
     */
    sendDotpayForm(): Promise<Task>;
    loadLastTransactionFromCache(): void;
    redirectToDotpay(): Promise<void>;
    constructor(store: AbstractStore<LibstorefrontInnerState>);
}
