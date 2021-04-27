import { DotpayDefaultState } from './dotpay.default';
import { DotpayActions } from './dotpay.actions';

export const dotpayReducer = (state = DotpayDefaultState, action) => {
    switch (action.type) {
        case DotpayActions.SET_DOTPAY_FORM: {
            return { ...state, form: action.payload };
        }
        case DotpayActions.SET_DOTPAY_STATUS: {
            return { ...state, status: action.payload };
        }
        case DotpayActions.SET_DOTPAY_URL: {
            return { ...state, url: action.payload };
        }
        case DotpayActions.SET_DOTPAY_ORDER_NUMBER: {
            return { ...state, orderNumber: action.payload };
        }
        default: return state || DotpayDefaultState;
    }
};
