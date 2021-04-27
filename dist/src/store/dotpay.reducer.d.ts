export declare const dotpayReducer: (state: import("./dotpay.default").DotpayModuleState, action: any) => {
    form: any;
    url: string;
    orderNumber: string;
    status: import("../types").DotpayStatus;
} | {
    status: any;
    form: import("../types").DotpayForm;
    url: string;
    orderNumber: string;
} | {
    url: any;
    form: import("../types").DotpayForm;
    orderNumber: string;
    status: import("../types").DotpayStatus;
} | {
    orderNumber: any;
    form: import("../types").DotpayForm;
    url: string;
    status: import("../types").DotpayStatus;
};
