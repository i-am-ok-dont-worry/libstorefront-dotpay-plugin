import { DotpayForm, DotpayStatus } from '../types';
export declare const DotpayDefaultState: DotpayModuleState;
export interface DotpayModuleState {
    form: DotpayForm;
    url: string;
    status: DotpayStatus;
}
