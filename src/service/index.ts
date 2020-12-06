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
     * Sends parsed dotpay form
     */
    public sendDotpayForm (): Promise<Task> {
        return this.store.dispatch(DotpayThunks.sendDotpayForm());
    }

    public loadLastTransactionFromCache (): void {
        this.store.dispatch(DotpayThunks.loadLastDotpayTransaction());
    }

    public redirectToDotpay (): Promise<void> {
        return this.store.dispatch(DotpayThunks.dotpayRedirect());
    }

    public constructor(@inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>) {}
}
