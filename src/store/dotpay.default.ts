import { DotpayForm, DotpayStatus } from '../types';

export const DotpayDefaultState: DotpayModuleState = {
    form: null,
    url: null,
    status: DotpayStatus.NOT_EXISTS
}

export interface DotpayModuleState {
    form: DotpayForm,
    url: string,
    status: DotpayStatus
}
