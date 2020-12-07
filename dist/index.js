(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("LSFPlugin", [], factory);
	else if(typeof exports === 'object')
		exports["LSFPlugin"] = factory();
	else
		root["LSFPlugin"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@grupakmk/libstorefront");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DotpayDao = void 0;
var inversify_1 = __webpack_require__(4);
var libstorefront_1 = __webpack_require__(0);
var DotpayDao = /** @class */ (function () {
    function DotpayDao(taskQueue) {
        this.taskQueue = taskQueue;
    }
    DotpayDao.prototype.getDotpayForm = function (orderId) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/dotpay/form/' + orderId),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    DotpayDao.prototype.getDotpayPaymentStatus = function (orderId) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/dotpay/status/' + orderId),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    DotpayDao = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.TaskQueue)),
        __metadata("design:paramtypes", [libstorefront_1.TaskQueue])
    ], DotpayDao);
    return DotpayDao;
}());
exports.DotpayDao = DotpayDao;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotpayStatus = void 0;
var DotpayStatus;
(function (DotpayStatus) {
    DotpayStatus[DotpayStatus["NOT_EXISTS"] = 1] = "NOT_EXISTS";
    DotpayStatus[DotpayStatus["ERROR"] = 0] = "ERROR";
    DotpayStatus[DotpayStatus["PENDING"] = 1] = "PENDING";
    DotpayStatus[DotpayStatus["SUCCESS"] = 2] = "SUCCESS";
    DotpayStatus[DotpayStatus["TOO_MANY"] = 3] = "TOO_MANY";
    DotpayStatus[DotpayStatus["OTHER_STATUS"] = 4] = "OTHER_STATUS"; // Status different than ERROR or PENDING
})(DotpayStatus = exports.DotpayStatus || (exports.DotpayStatus = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DotpayService = void 0;
var inversify_1 = __webpack_require__(4);
var dotpay_thunks_1 = __webpack_require__(9);
var libstorefront_1 = __webpack_require__(0);
var DotpayService = /** @class */ (function () {
    function DotpayService(store) {
        this.store = store;
    }
    /**
     * Returns dotpay form object that can be used
     * to build valid DotPay redirect link. Form is
     * stored in the redux dotpay state under 'form' property.
     * @param {number} orderId
     * @returns {Promise<DotpayResponse>} Dotpay embeddable form
     */
    DotpayService.prototype.preparePayment = function (orderId) {
        return this.store.dispatch(dotpay_thunks_1.DotpayThunks.getDotpayForm(orderId));
    };
    /**
     * Returns dotpay payment status for selected order
     * @param {string} orderId
     * @returns {Promise<DotpayStatus>} Payment status
     */
    DotpayService.prototype.getPaymentStatus = function (orderId) {
        return this.store.dispatch(dotpay_thunks_1.DotpayThunks.getDotpayStatus(orderId));
    };
    /**
     * Loads last dotpay transaction from localstorage into the Redux store
     */
    DotpayService.prototype.loadLastTransactionFromCache = function () {
        this.store.dispatch(dotpay_thunks_1.DotpayThunks.loadLastDotpayTransaction());
    };
    /**
     * Redirects to dotpay secure payment site via GET redirect
     */
    DotpayService.prototype.redirectToPaymentViaUrl = function () {
        return this.store.dispatch(dotpay_thunks_1.DotpayThunks.redirectToDotpayViaUrl());
    };
    /**
     * Redirects to dotpay secure payment site via injected html POST form
     */
    DotpayService.prototype.redirectToPaymentViaPostForm = function () {
        return this.store.dispatch(dotpay_thunks_1.DotpayThunks.redirectToDotPayViaPostForm());
    };
    DotpayService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.AbstractStore)),
        __metadata("design:paramtypes", [libstorefront_1.AbstractStore])
    ], DotpayService);
    return DotpayService;
}());
exports.DotpayService = DotpayService;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotpayActions = void 0;
var DotpayActions;
(function (DotpayActions) {
    DotpayActions.SN_DOTPAY = 'dotpay';
    DotpayActions.SET_DOTPAY_FORM = DotpayActions.SN_DOTPAY + '/SET_FORM';
    DotpayActions.setDotpayForm = function (form) { return ({
        type: DotpayActions.SET_DOTPAY_FORM,
        payload: form
    }); };
    DotpayActions.SET_DOTPAY_URL = DotpayActions.SN_DOTPAY + '/SET_URL';
    DotpayActions.setDotpayUrl = function (url) { return ({
        type: DotpayActions.SET_DOTPAY_URL,
        payload: url
    }); };
    DotpayActions.SET_DOTPAY_STATUS = DotpayActions.SN_DOTPAY + '/SET_STATUS';
    DotpayActions.setDotpayStatus = function (status) { return ({
        type: DotpayActions.SET_DOTPAY_STATUS,
        payload: status
    }); };
})(DotpayActions = exports.DotpayActions || (exports.DotpayActions = {}));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotpayDefaultState = void 0;
var types_1 = __webpack_require__(2);
exports.DotpayDefaultState = {
    form: null,
    url: null,
    status: types_1.DotpayStatus.NOT_EXISTS
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotpayStatus = exports.DotpayDao = exports.DotpayService = exports.DotpayPaymentPlugin = void 0;
var index_1 = __webpack_require__(8);
Object.defineProperty(exports, "DotpayPaymentPlugin", { enumerable: true, get: function () { return index_1.DotpayPaymentPlugin; } });
var index_2 = __webpack_require__(3);
Object.defineProperty(exports, "DotpayService", { enumerable: true, get: function () { return index_2.DotpayService; } });
var index_3 = __webpack_require__(1);
Object.defineProperty(exports, "DotpayDao", { enumerable: true, get: function () { return index_3.DotpayDao; } });
var index_4 = __webpack_require__(2);
Object.defineProperty(exports, "DotpayStatus", { enumerable: true, get: function () { return index_4.DotpayStatus; } });


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotpayPaymentPlugin = void 0;
var libstorefront_1 = __webpack_require__(0);
var service_1 = __webpack_require__(3);
var dao_1 = __webpack_require__(1);
var dotpay_reducer_1 = __webpack_require__(12);
var dotpay_default_1 = __webpack_require__(6);
/**
 * Libstorefront plugin template
 */
var DotpayPaymentPlugin = function (libstorefront) {
    libstorefront.getIOCContainer().bind(service_1.DotpayService).to(service_1.DotpayService);
    libstorefront.getIOCContainer().bind(dao_1.DotpayDao).to(dao_1.DotpayDao);
    libstorefront.listenTo(libstorefront_1.HookType.AfterCoreModulesRegistered, function (lsf) {
        lsf.registerModule(libstorefront_1.createLibstorefrontModule('dotpay', dotpay_reducer_1.dotpayReducer, dotpay_default_1.DotpayDefaultState));
    });
    libstorefront.listenTo(libstorefront_1.HookType.AfterInit, function () { return libstorefront.getIOCContainer().get(service_1.DotpayService).loadLastTransactionFromCache(); });
};
exports.DotpayPaymentPlugin = DotpayPaymentPlugin;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DotpayThunks = void 0;
var dao_1 = __webpack_require__(1);
var dotpay_actions_1 = __webpack_require__(5);
var libstorefront_1 = __webpack_require__(0);
var types_1 = __webpack_require__(2);
var utils_1 = __webpack_require__(10);
var DotpayThunks;
(function (DotpayThunks) {
    var _this = this;
    // @ts-ignore
    DotpayThunks.getDotpayForm = function (orderId) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var response, lastOrderId, dotpay, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.DotpayDao).getDotpayForm(orderId)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().order.last_order_confirmation.confirmation.orderNumber];
                case 2:
                    lastOrderId = _a.sent();
                    dotpay = void 0;
                    if (response.result instanceof Array) {
                        data = response.result[0];
                        if (data && data.hasOwnProperty('url')) {
                            dotpay = data;
                            Object.assign(dotpay.data, { magentoOrder: lastOrderId });
                        }
                    }
                    else {
                        if (response.result && response.result.hasOwnProperty('url')) {
                            dotpay = response.result;
                        }
                    }
                    return [4 /*yield*/, dispatch(dotpay_actions_1.DotpayActions.setDotpayForm(dotpay.data))];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, dispatch(dotpay_actions_1.DotpayActions.setDotpayUrl(dotpay.url))];
                case 4:
                    _a.sent();
                    libstorefront_1.StorageManager.getInstance().get(libstorefront_1.StorageCollection.ORDERS).setItem('last_dotpay_payment', getState().dotpay);
                    return [2 /*return*/, dotpay];
                case 5:
                    e_1 = _a.sent();
                    return [2 /*return*/, null];
                case 6: return [2 /*return*/];
            }
        });
    }); }; };
    // @ts-ignore
    DotpayThunks.getDotpayStatus = function (orderId) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var response, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.DotpayDao).getDotpayPaymentStatus(orderId)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, dispatch(dotpay_actions_1.DotpayActions.setDotpayStatus(response.result))];
                case 2:
                    _a.sent();
                    return [2 /*return*/, response.result];
                case 3:
                    e_2 = _a.sent();
                    console.warn('Error while fetching status: ', e_2);
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    }); }; };
    DotpayThunks.redirectToDotPayViaPostForm = function () { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var dotpay, container, form;
        return __generator(this, function (_a) {
            try {
                if (libstorefront_1.ConnectionState.isServer()) {
                    throw new Error("Cannot use dotpay plugin on server");
                }
                dispatch(dotpay_actions_1.DotpayActions.setDotpayStatus(types_1.DotpayStatus.PENDING));
                dotpay = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().dotpay;
                container = document.createElement('div');
                form = utils_1.buildDotpayForm(dotpay.url, dotpay.form);
                container.innerHTML = form;
                document.body.appendChild(container);
                setTimeout(function () { return document.getElementsByClassName('dotpay-form')[0].submit(); }, 10);
            }
            catch (e) {
                libstorefront_1.Logger.warn("Dotpay error: ", e);
                dispatch(dotpay_actions_1.DotpayActions.setDotpayStatus(types_1.DotpayStatus.ERROR));
            }
            return [2 /*return*/];
        });
    }); }; };
    DotpayThunks.redirectToDotpayViaUrl = function () { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var dotpay;
        return __generator(this, function (_a) {
            try {
                if (libstorefront_1.ConnectionState.isServer()) {
                    throw new Error("Cannot use dotpay plugin on server");
                }
                dispatch(dotpay_actions_1.DotpayActions.setDotpayStatus(types_1.DotpayStatus.PENDING));
                dotpay = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().dotpay;
                window.location.href = utils_1.buildDotpayRedirectUrl(dotpay.url, dotpay.form);
            }
            catch (e) {
                libstorefront_1.Logger.warn("Dotpay error: ", e);
                dispatch(dotpay_actions_1.DotpayActions.setDotpayStatus(types_1.DotpayStatus.ERROR));
            }
            return [2 /*return*/];
        });
    }); }; };
    DotpayThunks.loadLastDotpayTransaction = function () { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var lastDotpayPayment, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, libstorefront_1.StorageManager.getInstance().get(libstorefront_1.StorageCollection.ORDERS).getItem('last_dotpay_payment')];
                case 1:
                    lastDotpayPayment = _a.sent();
                    if (!lastDotpayPayment) {
                        return [2 /*return*/];
                    }
                    dispatch(dotpay_actions_1.DotpayActions.setDotpayUrl(lastDotpayPayment.url));
                    dispatch(dotpay_actions_1.DotpayActions.setDotpayForm(lastDotpayPayment.form));
                    dispatch(dotpay_actions_1.DotpayActions.setDotpayStatus(lastDotpayPayment.status));
                    return [3 /*break*/, 3];
                case 2:
                    e_3 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }; };
})(DotpayThunks = exports.DotpayThunks || (exports.DotpayThunks = {}));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDotpayForm = exports.buildDotpayRedirectUrl = void 0;
var libstorefront_1 = __webpack_require__(0);
var qs = __webpack_require__(11);
/**
 * Returns full dotpay secure redirect link with all dotpay
 * params. This link should be used to redirect from store payment site.
 * @param {string} Dotpay base url
 * @param {DotpayForm} formData
 */
var buildDotpayRedirectUrl = function (sslUrl, formData) {
    if (formData && Object.keys(formData).filter(function (k) { return k !== 'magentoOrder'; }).length > 0) {
        return sslUrl + "/?" + qs.stringify(formData);
    }
    return sslUrl;
};
exports.buildDotpayRedirectUrl = buildDotpayRedirectUrl;
/**
 * Returns stringified html with complete built form.
 * This form should be injected in body node and submitted after
 * 10 ms.
 * @param {string} sslUrl
 * @param {DotpayForm} formData
 */
var buildDotpayForm = function (sslUrl, formData) {
    if (libstorefront_1.ConnectionState.isServer()) {
        throw new Error("Cannot send dotpay data on server");
    }
    if (!formData || Object.keys(formData).length === 0) {
        return null;
    }
    var form = Object.keys(formData)
        .filter(function (k) { return k !== 'magentoOrder'; })
        .reduce(function (acc, next) {
        var field = "<input type=\"hidden\" name=\"" + next + "\" value=\"" + formData[next] + "\" />";
        return __spreadArrays(acc, [field]);
    }, ["<form class=\"dotpay-form\" action=\"" + sslUrl + "\" method=\"POST\">"])
        .concat("</form>")
        .join('');
    return form;
};
exports.buildDotpayForm = buildDotpayForm;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dotpayReducer = void 0;
var dotpay_default_1 = __webpack_require__(6);
var dotpay_actions_1 = __webpack_require__(5);
var dotpayReducer = function (state, action) {
    if (state === void 0) { state = dotpay_default_1.DotpayDefaultState; }
    switch (action.type) {
        case dotpay_actions_1.DotpayActions.SET_DOTPAY_FORM: {
            return __assign(__assign({}, state), { form: action.payload });
        }
        case dotpay_actions_1.DotpayActions.SET_DOTPAY_STATUS: {
            return __assign(__assign({}, state), { status: action.payload });
        }
        case dotpay_actions_1.DotpayActions.SET_DOTPAY_URL: {
            return __assign(__assign({}, state), { url: action.payload });
        }
        default: return state || dotpay_default_1.DotpayDefaultState;
    }
};
exports.dotpayReducer = dotpayReducer;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map