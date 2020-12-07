import {DotpayDao} from '../dao';
import {DotpayActions} from './dotpay.actions';
import {
    AbstractStore,
    ConnectionState,
    IOCContainer,
    Logger,
    StorageCollection,
    StorageManager
} from '@grupakmk/libstorefront';
import {DotpayResponse, DotpayStatus} from '../types';
import {DotpayModuleState} from './dotpay.default';
import {buildDotpayForm, buildDotpayRedirectUrl} from '../utils';

export namespace DotpayThunks {
    // @ts-ignore
    export const getDotpayForm = (orderId: string) => async (dispatch, getState) => {
        try {
            const response = await IOCContainer.get(DotpayDao).getDotpayForm(orderId);
            const lastOrderId = await IOCContainer.get(AbstractStore).getState().order.last_order_confirmation.confirmation.orderNumber;
            let dotpay: DotpayResponse;
            if (response.result instanceof Array) {
                const [data] = response.result;
                if (data && data.hasOwnProperty('url')) {
                    dotpay = data;
                }
            } else {
                if (response.result && response.result.hasOwnProperty('url')) { dotpay = response.result; }
            }

            await dispatch(DotpayActions.setDotpayForm(dotpay.data));
            await dispatch(DotpayActions.setDotpayUrl(dotpay.url));
            await dispatch(DotpayActions.setDotpayOrderNumber(lastOrderId));
            StorageManager.getInstance().get(StorageCollection.ORDERS).setItem('last_dotpay_payment', getState().dotpay);
            return dotpay;
        } catch (e) {
            dispatch(DotpayActions.setDotpayStatus(DotpayStatus.ERROR));
            return null;
        }
    }

    // @ts-ignore
    export const getDotpayStatus = (orderId: string) => async (dispatch, getState) => {
        try {
            const response = await IOCContainer.get(DotpayDao).getDotpayPaymentStatus(orderId);
            await dispatch(DotpayActions.setDotpayStatus(response.result));
            return response.result as DotpayStatus;
        } catch (e) {
            console.warn('Error while fetching status: ', e);
            dispatch(DotpayActions.setDotpayStatus(DotpayStatus.ERROR));
            return null;
        }
    };

    export const redirectToDotPayViaPostForm = () => async (dispatch, getState) => {
        try {
            if (ConnectionState.isServer()) { throw new Error(`Cannot use dotpay plugin on server`); }

            dispatch(DotpayActions.setDotpayStatus(DotpayStatus.PENDING));

            const dotpay = (IOCContainer.get(AbstractStore).getState().dotpay as DotpayModuleState);
            const container = document.createElement('div');
            const form = buildDotpayForm(dotpay.url, dotpay.form);

            container.innerHTML = form;
            document.body.appendChild(container);
            setTimeout(() => (document.getElementsByClassName('dotpay-form')[0] as any).submit(), 10);
        } catch (e) {
            Logger.warn(`Dotpay error: `, e);
            dispatch(DotpayActions.setDotpayStatus(DotpayStatus.ERROR));
        }
    };

    export const redirectToDotpayViaUrl = () => async (dispatch, getState) => {
        try {
            if (ConnectionState.isServer()) { throw new Error(`Cannot use dotpay plugin on server`); }

            dispatch(DotpayActions.setDotpayStatus(DotpayStatus.PENDING));
            const dotpay = (IOCContainer.get(AbstractStore).getState().dotpay as DotpayModuleState);
            window.location.href = buildDotpayRedirectUrl(dotpay.url, dotpay.form);
        } catch (e) {
            Logger.warn(`Dotpay error: `, e);
            dispatch(DotpayActions.setDotpayStatus(DotpayStatus.ERROR));
        }
    };

    export const loadLastDotpayTransaction = () => async (dispatch, getState) => {
        try {
            const lastDotpayPayment: DotpayModuleState = await StorageManager.getInstance().get(StorageCollection.ORDERS).getItem('last_dotpay_payment');
            if (!lastDotpayPayment) { return; }
            dispatch(DotpayActions.setDotpayUrl(lastDotpayPayment.url));
            dispatch(DotpayActions.setDotpayForm(lastDotpayPayment.form));
            dispatch(DotpayActions.setDotpayStatus(lastDotpayPayment.status));
            dispatch(DotpayActions.setDotpayOrderNumber(lastDotpayPayment.orderNumber));
        } catch (e) {}
    }
}
