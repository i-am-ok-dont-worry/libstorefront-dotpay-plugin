import { DotpayResponse, DotpayStatus } from '../types';
export declare namespace DotpayThunks {
    const getDotpayForm: (orderId: string) => (dispatch: any, getState: any) => Promise<DotpayResponse>;
    const getDotpayStatus: (orderId: string) => (dispatch: any, getState: any) => Promise<DotpayStatus>;
    const redirectToDotPayViaPostForm: () => (dispatch: any, getState: any) => Promise<void>;
    const redirectToDotpayViaUrl: () => (dispatch: any, getState: any) => Promise<void>;
    const loadLastDotpayTransaction: () => (dispatch: any, getState: any) => Promise<void>;
}
