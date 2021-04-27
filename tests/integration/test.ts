import { LibStorefront } from '@grupakmk/libstorefront';
import {DotpayPaymentPlugin} from "../../src";

console.warn('Test suite initialized');

const LSF = new LibStorefront({
    plugins: [
        DotpayPaymentPlugin
    ]
}, 'http://localhost:9001');

(async () => {

})();
