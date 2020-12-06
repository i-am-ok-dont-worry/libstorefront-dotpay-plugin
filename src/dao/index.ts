import { inject, injectable } from 'inversify';
import { Task, TaskQueue, URLTransform } from '@grupakmk/libstorefront';

@injectable()
export class DotpayDao {
    public getDotpayForm (orderId: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/dotpay/form/' + orderId),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public getDotpayPaymentStatus (orderId: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/dotpay/status/' + orderId),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public constructor(@inject(TaskQueue) private taskQueue: TaskQueue) {}
}
