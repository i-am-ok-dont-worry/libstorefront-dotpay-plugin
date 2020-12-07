import { inject, injectable } from 'inversify';
import { DotpayThunks } from '../store/dotpay.thunks';
import { AbstractStore, LibstorefrontInnerState, PaymentMethod } from '@grupakmk/libstorefront';
import { DotpayResponse, DotpayStatus } from '../types';

@injectable()
export class DotpayService {

    /**
     * Returns dotpay form object that can be used
     * to build valid DotPay redirect link. Form is
     * stored in the redux dotpay state under 'form' property.
     * @param {number} orderId
     * @returns {Promise<DotpayResponse>} Dotpay embeddable form
     */
    public preparePayment (orderId: string): Promise<DotpayResponse> {
        return this.store.dispatch(DotpayThunks.getDotpayForm(orderId));
    }

    /**
     * Returns dotpay payment status for selected order
     * @param {string} orderId
     * @returns {Promise<DotpayStatus>} Payment status
     */
    public getPaymentStatus (orderId: string): Promise<DotpayStatus> {
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
    public redirectToPaymentViaUrl (): Promise<void> {
        return this.store.dispatch(DotpayThunks.redirectToDotpayViaUrl());
    }

    /**
     * Redirects to dotpay secure payment site via injected html POST form
     */
    public redirectToPaymentViaPostForm (): Promise<void> {
        return this.store.dispatch(DotpayThunks.redirectToDotPayViaPostForm());
    }

    /**
     * Returns true if payment method can be handled by this plugin
     * @param {PaymentMethod} paymentMethod
     * @returns {boolean}
     */
    public canHandleMethod (paymentMethod: PaymentMethod): boolean {
        return ['dotpay_other', 'dotpay_widget'].includes(paymentMethod.code);
    }

    public constructor(@inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>) {}
}
