import {createLibstorefrontModule, HookType, LibStorefront} from '@grupakmk/libstorefront';
import {DotpayService} from './service';
import {DotpayDao} from './dao';
import {dotpayReducer} from './store/dotpay.reducer';
import {DotpayDefaultState} from './store/dotpay.default';

/**
 * Libstorefront plugin template
 */
export const DotpayPaymentPlugin = (libstorefront: LibStorefront) => {
    libstorefront.getIOCContainer().bind<DotpayService>(DotpayService).to(DotpayService);
    libstorefront.getIOCContainer().bind<DotpayDao>(DotpayDao).to(DotpayDao);
    libstorefront.listenTo(HookType.AfterCoreModulesRegistered, (lsf: LibStorefront) => {
        lsf.registerModule(createLibstorefrontModule('dotpay', dotpayReducer, DotpayDefaultState));
    });
    libstorefront.listenTo(HookType.AfterInit, () => {
        debugger;
        libstorefront.getIOCContainer().get(DotpayService).loadLastTransactionFromCache();
    });
};
