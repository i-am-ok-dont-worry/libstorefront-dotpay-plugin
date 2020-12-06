import { inject, injectable } from 'inversify';
import { DotpayThunks } from '../store/dotpay.thunks';
import { AbstractStore, LibstorefrontInnerState, Task } from '@grupakmk/libstorefront';
import { DotpayResponse, DotpayStatus } from '../types';

@injectable()
export class DotpayService {

    /**
     * Returns dotpay form that should be POST send
     * as application/x-www-form-urlencoded form
     * into a checkout payment pending page
     * @param {number} orderId
     * @returns {Promise<any>} Dotpay embeddable form
     */
    public getDotpayPaymentForm (orderId: string): Promise<DotpayResponse> {
        return this.store.dispatch(DotpayThunks.getDotpayForm(orderId));
    }

    /**
     * Returns dotpay payment status for selected order
     * @param {string} orderId
     * @returns {Promise<DotpayStatus>} Payment status
     */
    public getDotpayPaymentStatus (orderId: string): Promise<DotpayStatus> {
        return this.store.dispatch(DotpayThunks.getDotpayStatus(orderId));
    }

    /**
     * Loads last dotpay transaction from localstorage into the Redux store
     */
    public loadLastTransactionFromCache (): void {
        this.store.dispatch(DotpayThunks.loadLastDotpayTransaction());
    }

    /**
     * Redirects to dotpay secure payment site via GET redirect
     */
    public redirectToDotpayViaUrl (): Promise<void> {
        return this.store.dispatch(DotpayThunks.redirectToDotpayViaUrl());
    }

    /**
     * Redirects to dotpay secure payment site via injected html POST form
     */
    public redirectToDotpayViaPostForm (): Promise<void> {
        return this.store.dispatch(DotpayThunks.redirectToDotPayViaPostForm());
    }

    public constructor(@inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>) {}
}
