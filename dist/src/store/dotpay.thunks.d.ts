import { DotpayResponse, DotpayStatus } from "../types";
export declare namespace DotpayThunks {
    const getDotpayForm: (orderId: string) => (dispatch: any, getState: any) => Promise<DotpayResponse>;
    const getDotpayStatus: (orderId: string) => (dispatch: any, getState: any) => Promise<DotpayStatus>;
    const sendDotpayForm: () => (dispatch: any, getState: any) => Promise<void>;
}
