import { Task, TaskQueue } from '@grupakmk/libstorefront';
export declare class DotpayDao {
    private taskQueue;
    getDotpayForm(orderId: string): Promise<Task>;
    getDotpayPaymentStatus(orderId: string): Promise<Task>;
    constructor(taskQueue: TaskQueue);
}
