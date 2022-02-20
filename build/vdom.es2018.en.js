/*!
 * jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 * Author: Chupurnov <chupurnov@gmail.com> (https://xdsoft.net/)
 * Version: v3.14.2
 * Url: https://xdsoft.net/jodit/
 * License(s): MIT
 */
	
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "VDomRender": function() { return /* reexport */ VDomRender; }
});

// NAMESPACE OBJECT: ./src/core/ui/form/validators/input.ts
var input_namespaceObject = {};
__webpack_require__.r(input_namespaceObject);
__webpack_require__.d(input_namespaceObject, {
  "required": function() { return required; },
  "url": function() { return url; }
});

;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
                d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
}
var __createBinding = Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    o[k2] = m[k];
});
function __exportStar(m, o) {
    for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
        return m.call(o);
    if (o && typeof o.length === "number")
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
        return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
    }
    catch (error) {
        e = { error: error };
    }
    finally {
        try {
            if (r && !r.done && (m = i["return"]))
                m.call(i);
        }
        finally {
            if (e)
                throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar)
                    ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n])
        i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try {
        step(g[n](v));
    }
    catch (e) {
        settle(q[0][3], e);
    } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]); }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    }
    else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m")
        throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

;// CONCATENATED MODULE: ./src/core/helpers/utils/assert.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class AssertionError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AssertionError';
    }
}
function assert(condition, message) {
    if (!condition) {
        throw new AssertionError(`Assertion failed: ${message}`);
    }
}


;// CONCATENATED MODULE: ./src/core/helpers/utils/mark-deprecated.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const cns = console;
function markDeprecated(method, names = [''], ctx = null) {
    return (...args) => {
        cns.warn(`Method "${names[0]}" deprecated.` +
            (names[1] ? ` Use "${names[1]}" instead` : ''));
        return method.call(ctx, ...args);
    };
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-function.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function is_function_isFunction(value) {
    return typeof value === 'function';
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-promise.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function is_promise_isPromise(val) {
    return val && typeof val.then === 'function';
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-string.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function is_string_isString(value) {
    return typeof value === 'string';
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-void.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function is_void_isVoid(value) {
    return value === undefined || value === null;
}

;// CONCATENATED MODULE: ./src/core/helpers/utils/get.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function get(chain, obj) {
    if (!is_string_isString(chain) || !chain.length) {
        return null;
    }
    const parts = chain.split('.');
    let result = obj;
    try {
        for (const part of parts) {
            if (is_void_isVoid(result[part])) {
                return null;
            }
            result = result[part];
        }
    }
    catch (_a) {
        return null;
    }
    if (is_void_isVoid(result)) {
        return null;
    }
    return result;
}

;// CONCATENATED MODULE: ./src/core/component/statuses.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const statuses_STATUSES = {
    beforeInit: 'beforeInit',
    ready: 'ready',
    beforeDestruct: 'beforeDestruct',
    destructed: 'destructed'
};

;// CONCATENATED MODULE: ./src/core/plugin/plugin-system.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class PluginSystem {
    constructor() {
        this._items = new Map();
    }
    normalizeName(name) {
        return kebabCase(name).toLowerCase();
    }
    items(filter) {
        const results = [];
        this._items.forEach((plugin, name) => {
            results.push([name, plugin]);
        });
        return results.filter(([name]) => !filter || filter.includes(name));
    }
    add(name, plugin) {
        this._items.set(this.normalizeName(name), plugin);
    }
    get(name) {
        return this._items.get(this.normalizeName(name));
    }
    remove(name) {
        this._items.delete(this.normalizeName(name));
    }
    init(jodit) {
        const extrasList = jodit.o.extraPlugins.map(s => is_string_isString(s) ? { name: s } : s), disableList = splitArray(jodit.o.disablePlugins).map(s => this.normalizeName(s)), doneList = [], promiseList = {}, plugins = [], pluginsMap = {}, makeAndInit = ([name, plugin]) => {
            var _a;
            if (disableList.includes(name) ||
                doneList.includes(name) ||
                promiseList[name]) {
                return;
            }
            const requires = (_a = plugin) === null || _a === void 0 ? void 0 : _a.requires;
            if (requires &&
                isArray(requires) &&
                this.hasDisabledRequires(disableList, requires)) {
                return;
            }
            const instance = PluginSystem.makePluginInstance(jodit, plugin);
            if (instance) {
                this.initOrWait(jodit, name, instance, doneList, promiseList);
                plugins.push(instance);
                pluginsMap[name] = instance;
            }
        };
        const resultLoadExtras = this.loadExtras(jodit, extrasList);
        return callPromise(resultLoadExtras, () => {
            if (jodit.isInDestruct) {
                return;
            }
            this.items(jodit.o.safeMode
                ? jodit.o.safePluginsList.concat(extrasList.map(s => s.name))
                : null).forEach(makeAndInit);
            this.addListenerOnBeforeDestruct(jodit, plugins);
            jodit.__plugins = pluginsMap;
        });
    }
    hasDisabledRequires(disableList, requires) {
        return Boolean((requires === null || requires === void 0 ? void 0 : requires.length) &&
            disableList.some(disabled => requires.includes(disabled)));
    }
    static makePluginInstance(jodit, plugin) {
        try {
            return is_function_isFunction(plugin) ? new plugin(jodit) : plugin;
        }
        catch (e) {
            console.error(e);
            if (false) {}
        }
        return null;
    }
    initOrWait(jodit, pluginName, instance, doneList, promiseList) {
        const initPlugin = (name, plugin) => {
            if (isInitable(plugin)) {
                const req = plugin.requires;
                if (!(req === null || req === void 0 ? void 0 : req.length) ||
                    req.every(name => doneList.includes(name))) {
                    try {
                        plugin.init(jodit);
                    }
                    catch (e) {
                        console.error(e);
                        if (false) {}
                    }
                    doneList.push(name);
                }
                else {
                    if (false) {}
                    promiseList[name] = plugin;
                    return false;
                }
            }
            else {
                doneList.push(name);
            }
            if (plugin.hasStyle) {
                PluginSystem.loadStyle(jodit, name);
            }
            return true;
        };
        initPlugin(pluginName, instance);
        Object.keys(promiseList).forEach(name => {
            const plugin = promiseList[name];
            if (!plugin) {
                return;
            }
            if (initPlugin(name, plugin)) {
                promiseList[name] = undefined;
                delete promiseList[name];
            }
        });
    }
    addListenerOnBeforeDestruct(jodit, plugins) {
        jodit.e.on('beforeDestruct', () => {
            plugins.forEach(instance => {
                if (isDestructable(instance)) {
                    instance.destruct(jodit);
                }
            });
            plugins.length = 0;
            delete jodit.__plugins;
        });
    }
    load(jodit, pluginList) {
        const reflect = (p) => p.then((v) => ({ v, status: 'fulfilled' }), (e) => ({ e, status: 'rejected' }));
        return Promise.all(pluginList.map(extra => {
            const url = extra.url ||
                PluginSystem.getFullUrl(jodit, extra.name, true);
            return reflect(appendScriptAsync(jodit, url));
        }));
    }
    static async loadStyle(jodit, pluginName) {
        const url = PluginSystem.getFullUrl(jodit, pluginName, false);
        if (this.styles.has(url)) {
            return;
        }
        this.styles.add(url);
        return appendStyleAsync(jodit, url);
    }
    static getFullUrl(jodit, name, js) {
        name = kebabCase(name);
        return (jodit.basePath +
            'plugins/' +
            name +
            '/' +
            name +
            '.' +
            (js ? 'js' : 'css'));
    }
    loadExtras(jodit, extrasList) {
        if (extrasList && extrasList.length) {
            try {
                const needLoadExtras = extrasList.filter(extra => !this._items.has(this.normalizeName(extra.name)));
                if (needLoadExtras.length) {
                    return this.load(jodit, needLoadExtras);
                }
            }
            catch (e) {
                if (false) {}
            }
        }
    }
}
PluginSystem.styles = new Set();

;// CONCATENATED MODULE: ./src/core/constants.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const INVISIBLE_SPACE = '\uFEFF';
const NBSP_SPACE = '\u00A0';
const INVISIBLE_SPACE_REG_EXP = () => /[\uFEFF]/g;
const constants_INVISIBLE_SPACE_REG_EXP_END = () => /[\uFEFF]+$/g;
const constants_INVISIBLE_SPACE_REG_EXP_START = () => /^[\uFEFF]+/g;
const SPACE_REG_EXP = () => /[\s\n\t\r\uFEFF\u200b]+/g;
const SPACE_REG_EXP_START = () => /^[\s\n\t\r\uFEFF\u200b]+/g;
const SPACE_REG_EXP_END = () => /[\s\n\t\r\uFEFF\u200b]+$/g;
const IS_BLOCK = /^(ARTICLE|SCRIPT|STYLE|OBJECT|FOOTER|HEADER|NAV|SECTION|IFRAME|JODIT|JODIT-MEDIA|PRE|DIV|P|LI|UL|OL|H[1-6]|BLOCKQUOTE|TR|TD|TH|TBODY|THEAD|TABLE|BODY|HTML|FIGCAPTION|FIGURE|DT|DD|DL|DFN|FORM)$/i;
const IS_INLINE = /^(STRONG|SPAN|I|EM|B|SUP|SUB|A|U)$/i;
const INSEPARABLE_TAGS = [
    'img',
    'br',
    'video',
    'iframe',
    'script',
    'input',
    'textarea',
    'hr',
    'link',
    'jodit',
    'jodit-media'
];
const MAY_BE_REMOVED_WITH_KEY = RegExp(`^${INSEPARABLE_TAGS.join('|')}$`, 'i');
const KEY_BACKSPACE = 'Backspace';
const KEY_TAB = 'Tab';
const KEY_ENTER = 'Enter';
const KEY_ESC = 'Escape';
const KEY_LEFT = 'ArrowLeft';
const KEY_UP = 'ArrowUp';
const KEY_RIGHT = 'ArrowRight';
const KEY_DOWN = 'ArrowDown';
const KEY_SPACE = 'Space';
const KEY_DELETE = 'Delete';
const KEY_F3 = 'F3';
const NEARBY = 5;
const ACCURACY = 10;
const COMMAND_KEYS = [
    KEY_BACKSPACE,
    KEY_DELETE,
    KEY_UP,
    KEY_DOWN,
    KEY_RIGHT,
    KEY_LEFT,
    KEY_ENTER,
    KEY_ESC,
    KEY_F3,
    KEY_TAB
];
const BR = 'br';
const PARAGRAPH = 'p';
const MODE_WYSIWYG = 1;
const MODE_SOURCE = 2;
const MODE_SPLIT = 3;
const constants_IS_IE = typeof navigator !== 'undefined' &&
    (navigator.userAgent.indexOf('MSIE') !== -1 ||
        /rv:11.0/i.test(navigator.userAgent));
const constants_TEXT_PLAIN = (/* unused pure expression or super */ null && (constants_IS_IE ? 'text' : 'text/plain'));
const TEXT_HTML = (/* unused pure expression or super */ null && (constants_IS_IE ? 'html' : 'text/html'));
const MARKER_CLASS = 'jodit-selection_marker';
const EMULATE_DBLCLICK_TIMEOUT = 300;
const INSERT_AS_HTML = 'insert_as_html';
const INSERT_CLEAR_HTML = 'insert_clear_html';
const INSERT_AS_TEXT = 'insert_as_text';
const INSERT_ONLY_TEXT = 'insert_only_text';
const SAFE_COUNT_CHANGE_CALL = 10;
const IS_MAC = typeof window !== 'undefined' &&
    /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
const constants_KEY_ALIASES = {
    add: '+',
    break: 'pause',
    cmd: 'meta',
    command: 'meta',
    ctl: 'control',
    ctrl: 'control',
    del: 'delete',
    down: 'arrowdown',
    esc: 'escape',
    ins: 'insert',
    left: 'arrowleft',
    mod: IS_MAC ? 'meta' : 'control',
    opt: 'alt',
    option: 'alt',
    return: 'enter',
    right: 'arrowright',
    space: ' ',
    spacebar: ' ',
    up: 'arrowup',
    win: 'meta',
    windows: 'meta'
};
const BASE_PATH = (() => {
    if (typeof document === 'undefined') {
        return '';
    }
    const script = document.currentScript, removeScriptName = (s) => s.replace(/\/[^/]+.js$/, '/');
    if (script) {
        return removeScriptName(script.src);
    }
    const scripts = document.querySelectorAll('script[src]');
    if (scripts && scripts.length) {
        return removeScriptName(scripts[scripts.length - 1].src);
    }
    return window.location.href;
})();
const TEMP_ATTR = 'data-jodit-temp';

;// CONCATENATED MODULE: ./src/core/selection/style/api/toggle/toggle-css.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




function toggleCSS(commitStyle, elm, jodit, mode, dry = false) {
    const { style, className } = commitStyle.options;
    if (style && size(style) > 0) {
        Object.keys(style).forEach((rule) => {
            const inlineValue = elm.style.getPropertyValue(kebabCase(rule));
            if (inlineValue === '' && style[rule] == null) {
                return;
            }
            if (getNativeCSSValue(jodit, elm, rule) ===
                normalizeCssValue(rule, style[rule])) {
                !dry && css(elm, rule, null);
                mode = UNSET;
                mode = removeExtraCSS(commitStyle, elm, mode);
                return;
            }
            mode = CHANGE;
            !dry && css(elm, rule, style[rule]);
        });
    }
    if (className) {
        if (elm.classList.contains(className)) {
            elm.classList.remove(className);
            mode = UNSET;
        }
        else {
            elm.classList.add(className);
            mode = CHANGE;
        }
    }
    return mode;
}
function removeExtraCSS(commitStyle, elm, mode) {
    if (!utils_attr(elm, 'style')) {
        utils_attr(elm, 'style', null);
        if (elm.tagName.toLowerCase() === commitStyle.defaultTag) {
            dom_Dom.unwrap(elm);
            mode = UNWRAP;
        }
    }
    return mode;
}
function getShadowRoot(jodit) {
    var _a;
    if (data_bind_dataBind(jodit, 'shadowRoot') !== undefined) {
        return data_bind_dataBind(jodit, 'shadowRoot');
    }
    const container = global_getContainer(jodit);
    const iframe = document.createElement('iframe');
    css(iframe, {
        width: 0,
        height: 0,
        position: 'absolute',
        border: 0
    });
    iframe.src = 'about:blank';
    container.appendChild(iframe);
    const doc = (_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document;
    const shadowRoot = !doc ? jodit.od.body : doc.body;
    data_bind_dataBind(jodit, 'shadowRoot', shadowRoot);
    return shadowRoot;
}
function getNativeCSSValue(jodit, elm, key) {
    const newElm = jodit.create.element(elm.tagName.toLowerCase());
    newElm.style.cssText = elm.style.cssText;
    const root = getShadowRoot(jodit);
    root.appendChild(newElm);
    const result = css(newElm, key);
    dom_Dom.safeRemove(newElm);
    return result;
}

;// CONCATENATED MODULE: ./src/core/decorators/cache/cache.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function cache(target, name, descriptor) {
    const getter = descriptor.get;
    if (!getter) {
        throw error('Getter property descriptor expected');
    }
    descriptor.get = function () {
        const value = getter.call(this);
        if (value && value.noCache === true) {
            return value;
        }
        Object.defineProperty(this, name, {
            configurable: descriptor.configurable,
            enumerable: descriptor.enumerable,
            writable: false,
            value
        });
        return value;
    };
}

;// CONCATENATED MODULE: ./src/core/decorators/component/component.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const cn = (elm) => {
    return is_function_isFunction(elm.className) ? elm.className() : NaN;
};
function component(constructorFunction) {
    class newConstructorFunction extends constructorFunction {
        constructor(...args) {
            super(...args);
            const isSamePrototype = Object.getPrototypeOf(this) ===
                newConstructorFunction.prototype;
            const isSameClassName = cn(this) ===
                cn(newConstructorFunction.prototype);
            if (false) {}
            if (isSamePrototype || isSameClassName) {
                this.setStatus('ready');
            }
        }
    }
    newConstructorFunction.prototype.constructor = constructorFunction;
    return newConstructorFunction;
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-array.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isArray(elm) {
    return Array.isArray(elm);
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-boolean.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isBoolean(elm) {
    return typeof elm === 'boolean';
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-equal.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function isEqual(a, b) {
    return a === b || stringify(a) === stringify(b);
}
function isFastEqual(a, b) {
    return a === b;
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-html.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const isHTML = (str) => is_string_isString(str) &&
    /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/m.test(str.replace(/[\r\n]/g, ''));

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-imp-interface.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function isInitable(value) {
    return !is_void_isVoid(value) && is_function_isFunction(value.init);
}
function isDestructable(value) {
    return !is_void_isVoid(value) && is_function_isFunction(value.destruct);
}
function hasContainer(value) {
    return !is_void_isVoid(value) && dom_Dom.isElement(value.container);
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-jodit-object.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function is_jodit_object_isJoditObject(jodit) {
    return Boolean(jodit &&
        jodit instanceof Object &&
        is_function_isFunction(jodit.constructor) &&
        ((typeof Jodit !== 'undefined' && jodit instanceof Jodit) ||
            jodit.isJodit));
}
function is_jodit_object_isViewObject(jodit) {
    return Boolean(jodit &&
        jodit instanceof Object &&
        is_function_isFunction(jodit.constructor) &&
        (jodit instanceof modules.View || jodit.isView));
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-number.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-numeric.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function isNumeric(value) {
    if (is_string_isString(value)) {
        if (!value.match(/^([+-])?[0-9]+(\.?)([0-9]+)?(e[0-9]+)?$/)) {
            return false;
        }
        value = parseFloat(value);
    }
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-window.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isWindow(obj) {
    return obj != null && obj === obj.window;
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-plain-object.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function is_plain_object_isPlainObject(obj) {
    if (!obj || typeof obj !== 'object' || obj.nodeType || isWindow(obj)) {
        return false;
    }
    return !(obj.constructor &&
        !{}.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf'));
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-url.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function is_url_isURL(str) {
    if (str.includes(' ')) {
        return false;
    }
    if (typeof URL !== 'undefined') {
        try {
            const url = new URL(str);
            return ['https:', 'http:', 'ftp:', 'file:', 'rtmp:'].includes(url.protocol);
        }
        catch (e) {
            return false;
        }
    }
    const a = document.createElement('a');
    a.href = str;
    return Boolean(a.hostname);
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-valid-name.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isValidName(name) {
    if (!name.length) {
        return false;
    }
    return !/[^0-9A-Za-zа-яА-ЯЁё\w\-_.]/.test(name);
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






















;// CONCATENATED MODULE: ./src/core/helpers/utils/error.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function error_error(message) {
    return new TypeError(message);
}

;// CONCATENATED MODULE: ./src/core/decorators/debounce/debounce.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function debounce(timeout, firstCallImmediately = false, method = 'debounce') {
    return (target, propertyKey) => {
        if (!is_function_isFunction(target[propertyKey])) {
            throw error_error('Handler must be a Function');
        }
        target.hookStatus(statuses_STATUSES.ready, (component) => {
            const view = is_jodit_object_isViewObject(component)
                ? component
                : component.jodit;
            const realTimeout = is_function_isFunction(timeout)
                ? timeout(component)
                : timeout;
            component[propertyKey] = view.async[method](component[propertyKey].bind(component), isNumber(realTimeout) || is_plain_object_isPlainObject(realTimeout)
                ? realTimeout
                : view.defaultTimeout, firstCallImmediately);
        });
    };
}
function throttle(timeout, firstCallImmediately = false) {
    return debounce(timeout, firstCallImmediately, 'throttle');
}

;// CONCATENATED MODULE: ./src/core/decorators/idle/idle.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function idle() {
    return (target, propertyKey) => {
        if (!isFunction(target[propertyKey])) {
            throw error('Handler must be a Function');
        }
        target.hookStatus(STATUSES.ready, (component) => {
            const view = isViewObject(component)
                ? component
                : component.jodit;
            const originalMethod = component[propertyKey];
            component[propertyKey] = (...args) => view.async.requestIdleCallback(originalMethod.bind(component, ...args));
        });
    };
}

;// CONCATENATED MODULE: ./src/core/decorators/hook/hook.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function hook(status) {
    return (target, propertyKey) => {
        if (!is_function_isFunction(target[propertyKey])) {
            throw error_error('Handler must be a Function');
        }
        target.hookStatus(status, (component) => {
            target[propertyKey].call(component);
        });
    };
}

;// CONCATENATED MODULE: ./src/core/decorators/persistent/persistent.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function persistent(target, propertyKey) {
    target.hookStatus(STATUSES.ready, (component) => {
        const jodit = isViewObject(component)
            ? component
            : component.jodit, storageKey = `${jodit.options.namespace}${component.componentName}_prop_${propertyKey}`, initialValue = component[propertyKey];
        Object.defineProperty(component, propertyKey, {
            get() {
                var _a;
                return (_a = jodit.storage.get(storageKey)) !== null && _a !== void 0 ? _a : initialValue;
            },
            set(value) {
                jodit.storage.set(storageKey, value);
            }
        });
    });
}

;// CONCATENATED MODULE: ./src/core/decorators/wait/wait.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function wait(condition) {
    return (target, propertyKey) => {
        if (!isFunction(target[propertyKey])) {
            throw error('Handler must be a Function');
        }
        target.hookStatus(STATUSES.ready, (component) => {
            const async = isViewObject(component)
                ? component.async
                : component.j.async;
            const realMethod = component[propertyKey];
            let timeout = 0;
            component[propertyKey] = function callProxy(...args) {
                async.clearTimeout(timeout);
                if (condition(component)) {
                    realMethod.apply(component, args);
                }
                else {
                    timeout = async.setTimeout(() => callProxy(...args), 10);
                }
            };
        });
    };
}

;// CONCATENATED MODULE: ./src/core/event-emitter/store.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const defaultNameSpace = 'JoditEventDefaultNamespace';
class EventHandlersStore {
    constructor() {
        this.__store = {};
    }
    get(event, namespace) {
        if (this.__store[namespace] !== undefined) {
            return this.__store[namespace][event];
        }
    }
    indexOf(event, namespace, originalCallback) {
        const blocks = this.get(event, namespace);
        if (blocks) {
            for (let i = 0; i < blocks.length; i += 1) {
                if (blocks[i].originalCallback === originalCallback) {
                    return i;
                }
            }
        }
        return false;
    }
    namespaces(withoutDefault = false) {
        const nss = Object.keys(this.__store);
        return withoutDefault ? nss.filter(ns => ns !== defaultNameSpace) : nss;
    }
    events(namespace) {
        return this.__store[namespace]
            ? Object.keys(this.__store[namespace])
            : [];
    }
    set(event, namespace, data, onTop = false) {
        if (this.__store[namespace] === undefined) {
            this.__store[namespace] = {};
        }
        if (this.__store[namespace][event] === undefined) {
            this.__store[namespace][event] = [];
        }
        if (!onTop) {
            this.__store[namespace][event].push(data);
        }
        else {
            this.__store[namespace][event].unshift(data);
        }
    }
    clear() {
        this.__store = {};
    }
}

;// CONCATENATED MODULE: ./src/core/event-emitter/event-emitter.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





class EventEmitter {
    constructor(doc) {
        this.mutedEvents = new Set();
        this.__key = '__JoditEventEmitterNamespaces';
        this.doc = document;
        this.prepareEvent = (event) => {
            if (event.cancelBubble) {
                return;
            }
            if (event.type.match(/^touch/) &&
                event.changedTouches &&
                event.changedTouches.length) {
                ['clientX', 'clientY', 'pageX', 'pageY'].forEach((key) => {
                    Object.defineProperty(event, key, {
                        value: event.changedTouches[0][key],
                        configurable: true,
                        enumerable: true
                    });
                });
            }
            if (!event.originalEvent) {
                event.originalEvent = event;
            }
            if (event.type === 'paste' &&
                event.clipboardData === undefined &&
                this.doc.defaultView.clipboardData) {
                Object.defineProperty(event, 'clipboardData', {
                    get: () => {
                        return this.doc.defaultView.clipboardData;
                    },
                    configurable: true,
                    enumerable: true
                });
            }
        };
        this.currents = [];
        this.__stopped = [];
        this.isDestructed = false;
        if (doc) {
            this.doc = doc;
        }
        this.__key += new Date().getTime();
    }
    mute(event) {
        this.mutedEvents.add(event !== null && event !== void 0 ? event : '*');
        return this;
    }
    isMuted(event) {
        if (event && this.mutedEvents.has(event)) {
            return true;
        }
        return this.mutedEvents.has('*');
    }
    unmute(event) {
        this.mutedEvents.delete(event !== null && event !== void 0 ? event : '*');
        return this;
    }
    eachEvent(events, callback) {
        const eventParts = events.split(/[\s,]+/);
        eventParts.forEach((eventNameSpace) => {
            const eventAndNameSpace = eventNameSpace.split('.');
            const namespace = eventAndNameSpace[1] || defaultNameSpace;
            callback.call(this, eventAndNameSpace[0], namespace);
        });
    }
    getStore(subject) {
        if (!subject) {
            throw error_error('Need subject');
        }
        if (subject[this.__key] === undefined) {
            const store = new EventHandlersStore();
            Object.defineProperty(subject, this.__key, {
                enumerable: false,
                configurable: true,
                value: store
            });
        }
        return subject[this.__key];
    }
    clearStore(subject) {
        if (subject[this.__key] !== undefined) {
            delete subject[this.__key];
        }
    }
    triggerNativeEvent(element, event) {
        const evt = this.doc.createEvent('HTMLEvents');
        if (typeof event === 'string') {
            evt.initEvent(event, true, true);
        }
        else {
            evt.initEvent(event.type, event.bubbles, event.cancelable);
            [
                'screenX',
                'screenY',
                'clientX',
                'clientY',
                'target',
                'srcElement',
                'currentTarget',
                'timeStamp',
                'which',
                'keyCode'
            ].forEach(property => {
                Object.defineProperty(evt, property, {
                    value: event[property],
                    enumerable: true
                });
            });
            Object.defineProperty(evt, 'originalEvent', {
                value: event,
                enumerable: true
            });
        }
        element.dispatchEvent(evt);
    }
    get current() {
        return this.currents[this.currents.length - 1];
    }
    on(subjectOrEvents, eventsOrCallback, handlerOrSelector, onTop = false) {
        const subject = is_string_isString(subjectOrEvents) ? this : subjectOrEvents;
        const events = is_string_isString(eventsOrCallback)
            ? eventsOrCallback
            : subjectOrEvents;
        let callback = handlerOrSelector;
        if (callback === undefined && is_function_isFunction(eventsOrCallback)) {
            callback = eventsOrCallback;
        }
        const store = this.getStore(subject);
        if (!is_string_isString(events) || events === '') {
            throw error_error('Need events names');
        }
        if (!is_function_isFunction(callback)) {
            throw error_error('Need event handler');
        }
        if (isArray(subject)) {
            subject.forEach((subj) => {
                this.on(subj, events, callback, onTop);
            });
            return this;
        }
        const isDOMElement = is_function_isFunction(subject.addEventListener), self = this;
        let syntheticCallback = function (event, ...args) {
            if (self.isMuted(event)) {
                return;
            }
            return callback && callback.call(this, ...args);
        };
        if (isDOMElement) {
            syntheticCallback = function (event) {
                if (self.isMuted(event.type)) {
                    return;
                }
                self.prepareEvent(event);
                if (callback && callback.call(this, event) === false) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    return false;
                }
                return;
            };
        }
        this.eachEvent(events, (event, namespace) => {
            if (event === '') {
                throw error_error('Need event name');
            }
            if (store.indexOf(event, namespace, callback) === false) {
                const block = {
                    event,
                    originalCallback: callback,
                    syntheticCallback
                };
                store.set(event, namespace, block, onTop);
                if (isDOMElement) {
                    const options = [
                        'touchstart',
                        'touchend',
                        'scroll',
                        'mousewheel',
                        'mousemove',
                        'touchmove'
                    ].includes(event)
                        ? {
                            passive: true
                        }
                        : false;
                    subject.addEventListener(event, syntheticCallback, options);
                }
            }
        });
        return this;
    }
    one(subjectOrEvents, eventsOrCallback, handlerOrSelector, onTop = false) {
        const subject = is_string_isString(subjectOrEvents) ? this : subjectOrEvents;
        const events = is_string_isString(eventsOrCallback)
            ? eventsOrCallback
            : subjectOrEvents;
        let callback = handlerOrSelector;
        if (callback === undefined && is_function_isFunction(eventsOrCallback)) {
            callback = eventsOrCallback;
        }
        const newCallback = (...args) => {
            this.off(subject, events, newCallback);
            return callback(...args);
        };
        this.on(subject, events, newCallback, onTop);
        return this;
    }
    off(subjectOrEvents, eventsOrCallback, handler) {
        const subject = is_string_isString(subjectOrEvents)
            ? this
            : subjectOrEvents;
        const events = is_string_isString(eventsOrCallback)
            ? eventsOrCallback
            : subjectOrEvents;
        const store = this.getStore(subject);
        let callback = handler;
        if (!is_string_isString(events) || !events) {
            store.namespaces().forEach((namespace) => {
                this.off(subject, '.' + namespace);
            });
            this.clearStore(subject);
            return this;
        }
        if (callback === undefined && is_function_isFunction(eventsOrCallback)) {
            callback = eventsOrCallback;
        }
        const isDOMElement = is_function_isFunction(subject.removeEventListener), removeEventListener = (block) => {
            if (isDOMElement) {
                subject.removeEventListener(block.event, block.syntheticCallback, false);
            }
        }, removeCallbackFromNameSpace = (event, namespace) => {
            if (event !== '') {
                const blocks = store.get(event, namespace);
                if (blocks && blocks.length) {
                    if (!is_function_isFunction(callback)) {
                        blocks.forEach(removeEventListener);
                        blocks.length = 0;
                    }
                    else {
                        const index = store.indexOf(event, namespace, callback);
                        if (index !== false) {
                            removeEventListener(blocks[index]);
                            blocks.splice(index, 1);
                        }
                    }
                }
            }
            else {
                store.events(namespace).forEach((eventName) => {
                    if (eventName !== '') {
                        removeCallbackFromNameSpace(eventName, namespace);
                    }
                });
            }
        };
        this.eachEvent(events, (event, namespace) => {
            if (namespace === defaultNameSpace) {
                store.namespaces().forEach((name) => {
                    removeCallbackFromNameSpace(event, name);
                });
            }
            else {
                removeCallbackFromNameSpace(event, namespace);
            }
        });
        return this;
    }
    stopPropagation(subjectOrEvents, eventsList) {
        const subject = is_string_isString(subjectOrEvents)
            ? this
            : subjectOrEvents;
        const events = is_string_isString(subjectOrEvents)
            ? subjectOrEvents
            : eventsList;
        if (typeof events !== 'string') {
            throw error_error('Need event names');
        }
        const store = this.getStore(subject);
        this.eachEvent(events, (event, namespace) => {
            const blocks = store.get(event, namespace);
            if (blocks) {
                this.__stopped.push(blocks);
            }
            if (namespace === defaultNameSpace) {
                store
                    .namespaces(true)
                    .forEach(ns => this.stopPropagation(subject, event + '.' + ns));
            }
        });
    }
    removeStop(currentBlocks) {
        if (currentBlocks) {
            const index = this.__stopped.indexOf(currentBlocks);
            index !== -1 && this.__stopped.splice(0, index + 1);
        }
    }
    isStopped(currentBlocks) {
        return (currentBlocks !== undefined &&
            this.__stopped.indexOf(currentBlocks) !== -1);
    }
    fire(subjectOrEvents, eventsList, ...args) {
        let result, result_value;
        const subject = is_string_isString(subjectOrEvents)
            ? this
            : subjectOrEvents;
        const events = is_string_isString(subjectOrEvents)
            ? subjectOrEvents
            : eventsList;
        const argumentsList = is_string_isString(subjectOrEvents)
            ? [eventsList, ...args]
            : args;
        const isDOMElement = is_function_isFunction(subject.dispatchEvent);
        if (!isDOMElement && !is_string_isString(events)) {
            throw error_error('Need events names');
        }
        const store = this.getStore(subject);
        if (!is_string_isString(events) && isDOMElement) {
            this.triggerNativeEvent(subject, eventsList);
        }
        else {
            this.eachEvent(events, (event, namespace) => {
                if (isDOMElement) {
                    this.triggerNativeEvent(subject, event);
                }
                else {
                    const blocks = store.get(event, namespace);
                    if (blocks) {
                        try {
                            [...blocks].every((block) => {
                                if (this.isStopped(blocks)) {
                                    return false;
                                }
                                this.currents.push(event);
                                result_value = block.syntheticCallback.call(subject, event, ...argumentsList);
                                this.currents.pop();
                                if (result_value !== undefined) {
                                    result = result_value;
                                }
                                return true;
                            });
                        }
                        finally {
                            this.removeStop(blocks);
                        }
                    }
                    if (namespace === defaultNameSpace && !isDOMElement) {
                        store
                            .namespaces()
                            .filter(ns => ns !== namespace)
                            .forEach((ns) => {
                            const result_second = this.fire.apply(this, [
                                subject,
                                event + '.' + ns,
                                ...argumentsList
                            ]);
                            if (result_second !== undefined) {
                                result = result_second;
                            }
                        });
                    }
                }
            });
        }
        return result;
    }
    destruct() {
        if (!this.isDestructed) {
            return;
        }
        this.isDestructed = true;
        this.off(this);
        this.getStore(this).clear();
        delete this[this.__key];
    }
}

;// CONCATENATED MODULE: ./src/core/event-emitter/observable.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const OBSERVABLE_OBJECT = Symbol('observable-object');
function isObservableObject(obj) {
    return obj[OBSERVABLE_OBJECT] !== undefined;
}
function observable(obj) {
    if (isObservableObject(obj)) {
        return obj;
    }
    const __lockEvent = {};
    const __onEvents = {};
    const on = (event, callback) => {
        if (isArray(event)) {
            event.map(e => on(e, callback));
            return obj;
        }
        if (!__onEvents[event]) {
            __onEvents[event] = [];
        }
        __onEvents[event].push(callback);
        return obj;
    };
    const fire = (event, ...attr) => {
        if (isArray(event)) {
            event.map(e => fire(e, ...attr));
            return;
        }
        try {
            if (!__lockEvent[event] && __onEvents[event]) {
                __lockEvent[event] = true;
                __onEvents[event].forEach(clb => clb.call(obj, ...attr));
            }
        }
        finally {
            __lockEvent[event] = false;
        }
    };
    const initAccessors = (dict, prefixes = []) => {
        const store = {};
        if (isObservableObject(dict)) {
            return;
        }
        Object.defineProperty(dict, OBSERVABLE_OBJECT, {
            enumerable: false,
            value: true
        });
        Object.keys(dict).forEach(_key => {
            const key = _key;
            const prefix = prefixes.concat(key).filter(a => a.length);
            store[key] = dict[key];
            const descriptor = getPropertyDescriptor(dict, key);
            Object.defineProperty(dict, key, {
                set: (value) => {
                    var _a;
                    const oldValue = store[key];
                    if (!isFastEqual(store[key], value)) {
                        fire([
                            'beforeChange',
                            `beforeChange.${prefix.join('.')}`
                        ], key, value);
                        if (is_plain_object_isPlainObject(value)) {
                            initAccessors(value, prefix);
                        }
                        if (descriptor && descriptor.set) {
                            descriptor.set.call(obj, value);
                        }
                        else {
                            store[key] = value;
                        }
                        const sum = [];
                        fire([
                            'change',
                            ...prefix.reduce((rs, p) => {
                                sum.push(p);
                                rs.push(`change.${sum.join('.')}`);
                                return rs;
                            }, [])
                        ], prefix.join('.'), oldValue, ((_a = value) === null || _a === void 0 ? void 0 : _a.valueOf)
                            ? value.valueOf()
                            : value);
                    }
                },
                get: () => {
                    if (descriptor && descriptor.get) {
                        return descriptor.get.call(obj);
                    }
                    return store[key];
                },
                enumerable: true,
                configurable: true
            });
            if (is_plain_object_isPlainObject(store[key])) {
                initAccessors(store[key], prefix);
            }
        });
        Object.defineProperty(obj, 'on', {
            value: on
        });
    };
    initAccessors(obj);
    return obj;
}

;// CONCATENATED MODULE: ./src/core/event-emitter/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




;// CONCATENATED MODULE: ./src/core/helpers/array/split-array.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function splitArray(a) {
    return is_string_isString(a) ? a.split(/[,\s]+/) : a;
}

;// CONCATENATED MODULE: ./src/core/decorators/watch/watch.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





function getPropertyDescriptor(obj, prop) {
    let desc;
    do {
        desc = Object.getOwnPropertyDescriptor(obj, prop);
        obj = Object.getPrototypeOf(obj);
    } while (!desc && obj);
    return desc;
}
function watch(observeFields, context) {
    return (target, propertyKey) => {
        if (!is_function_isFunction(target[propertyKey])) {
            throw error_error('Handler must be a Function');
        }
        const process = (component) => {
            const callback = (key, ...args) => {
                if (!component.isInDestruct) {
                    return component[propertyKey](key, ...args);
                }
            };
            splitArray(observeFields).forEach(field => {
                if (/:/.test(field)) {
                    const [objectPath, eventName] = field.split(':');
                    const view = is_jodit_object_isViewObject(component)
                        ? component
                        : component.jodit;
                    if (objectPath.length) {
                        context = component.get(objectPath);
                    }
                    if (is_function_isFunction(context)) {
                        context = context(component);
                    }
                    view.events.on(context || component, eventName, callback);
                    if (!context) {
                        view.events.on(eventName, callback);
                    }
                    view.hookStatus('beforeDestruct', () => {
                        view.events
                            .off(context || component, eventName, callback)
                            .off(eventName, callback);
                    });
                    return;
                }
                const parts = field.split('.'), [key] = parts, teil = parts.slice(1);
                let value = component[key];
                if (is_plain_object_isPlainObject(value)) {
                    const observableValue = observable(value);
                    observableValue.on(`change.${teil.join('.')}`, callback);
                }
                const descriptor = getPropertyDescriptor(target, key);
                Object.defineProperty(component, key, {
                    configurable: true,
                    set(v) {
                        const oldValue = value;
                        if (oldValue === v) {
                            return;
                        }
                        value = v;
                        if (descriptor && descriptor.set) {
                            descriptor.set.call(component, v);
                        }
                        if (is_plain_object_isPlainObject(value)) {
                            value = observable(value);
                            value.on(`change.${teil.join('.')}`, callback);
                        }
                        callback(key, oldValue, value);
                    },
                    get() {
                        if (descriptor && descriptor.get) {
                            return descriptor.get.call(component);
                        }
                        return value;
                    }
                });
            });
        };
        if (is_function_isFunction(target.hookStatus)) {
            target.hookStatus(statuses_STATUSES.ready, process);
        }
        else {
            process(target);
        }
    };
}
/* harmony default export */ var watch_watch = ((/* unused pure expression or super */ null && (watch)));

;// CONCATENATED MODULE: ./node_modules/autobind-decorator/lib/esm/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) { return typeof obj; };
}
else {
    _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
} return _typeof(obj); }
function boundMethod(target, key, descriptor) {
    var fn = descriptor.value;
    if (typeof fn !== 'function') {
        throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(_typeof(fn)));
    }
    var definingProperty = false;
    return {
        configurable: true,
        get: function get() {
            if (definingProperty || this === target.prototype || this.hasOwnProperty(key) || typeof fn !== 'function') {
                return fn;
            }
            var boundFn = fn.bind(this);
            definingProperty = true;
            Object.defineProperty(this, key, {
                configurable: true,
                get: function get() {
                    return boundFn;
                },
                set: function set(value) {
                    fn = value;
                    delete this[key];
                }
            });
            definingProperty = false;
            return boundFn;
        },
        set: function set(value) {
            fn = value;
        }
    };
}
function boundClass(target) {
    var keys;
    if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
        keys = Reflect.ownKeys(target.prototype);
    }
    else {
        keys = Object.getOwnPropertyNames(target.prototype);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
        }
    }
    keys.forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
        if (typeof descriptor.value === 'function') {
            Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
        }
    });
    return target;
}
function autobind() {
    if (arguments.length === 1) {
        return boundClass.apply(void 0, arguments);
    }
    return boundMethod.apply(void 0, arguments);
}

;// CONCATENATED MODULE: ./src/core/decorators/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */











;// CONCATENATED MODULE: ./src/core/selection/select.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







class Select {
    constructor(jodit) {
        this.jodit = jodit;
        jodit.e.on('removeMarkers', () => {
            this.removeMarkers();
        });
    }
    get j() {
        return this.jodit;
    }
    errorNode(node) {
        if (!dom_Dom.isNode(node)) {
            throw error_error('Parameter node must be instance of Node');
        }
    }
    get area() {
        return this.j.editor;
    }
    get win() {
        return this.j.ew;
    }
    get doc() {
        return this.j.ed;
    }
    get sel() {
        if (this.j.o.shadowRoot &&
            is_function_isFunction(this.j.o.shadowRoot.getSelection)) {
            return this.j.o.shadowRoot.getSelection();
        }
        return this.win.getSelection();
    }
    get range() {
        const sel = this.sel;
        return sel && sel.rangeCount ? sel.getRangeAt(0) : this.createRange();
    }
    createRange(select = false) {
        const range = this.doc.createRange();
        if (select) {
            this.selectRange(range);
        }
        return range;
    }
    remove() {
        const sel = this.sel, current = this.current();
        if (sel && current) {
            for (let i = 0; i < sel.rangeCount; i += 1) {
                sel.getRangeAt(i).deleteContents();
                sel.getRangeAt(i).collapse(true);
            }
        }
    }
    clear() {
        var _a, _b;
        if ((_a = this.sel) === null || _a === void 0 ? void 0 : _a.rangeCount) {
            (_b = this.sel) === null || _b === void 0 ? void 0 : _b.removeAllRanges();
        }
    }
    removeNode(node) {
        if (!dom_Dom.isOrContains(this.j.editor, node, true)) {
            throw error_error("Selection.removeNode can remove only editor's children");
        }
        dom_Dom.safeRemove(node);
        this.j.e.fire('afterRemoveNode', node);
    }
    insertCursorAtPoint(x, y) {
        this.removeMarkers();
        try {
            const rng = this.createRange();
            (() => {
                if (this.doc.caretPositionFromPoint) {
                    const caret = this.doc.caretPositionFromPoint(x, y);
                    if (caret) {
                        rng.setStart(caret.offsetNode, caret.offset);
                        return;
                    }
                }
                if (this.doc.caretRangeFromPoint) {
                    const caret = this.doc.caretRangeFromPoint(x, y);
                    rng.setStart(caret.startContainer, caret.startOffset);
                }
            })();
            rng.collapse(true);
            this.selectRange(rng);
            return true;
        }
        catch (_a) { }
        return false;
    }
    static isMarker(elm) {
        return (dom_Dom.isNode(elm) &&
            dom_Dom.isTag(elm, 'span') &&
            elm.hasAttribute('data-' + MARKER_CLASS));
    }
    get hasMarkers() {
        return Boolean(this.markers.length);
    }
    get markers() {
        return selector_$$('span[data-' + MARKER_CLASS + ']', this.area);
    }
    removeMarkers() {
        this.markers.forEach(dom_Dom.safeRemove);
    }
    marker(atStart = false, range) {
        let newRange = null;
        if (range) {
            newRange = range.cloneRange();
            newRange.collapse(atStart);
        }
        const marker = this.j.createInside.span();
        marker.id =
            MARKER_CLASS +
                '_' +
                Number(new Date()) +
                '_' +
                String(Math.random()).slice(2);
        marker.style.lineHeight = '0';
        marker.style.display = 'none';
        marker.setAttribute('data-' + MARKER_CLASS, atStart ? 'start' : 'end');
        marker.appendChild(this.j.createInside.text(INVISIBLE_SPACE));
        if (newRange) {
            if (dom_Dom.isOrContains(this.area, atStart ? newRange.startContainer : newRange.endContainer)) {
                newRange.insertNode(marker);
            }
        }
        return marker;
    }
    restore() {
        let range = false;
        const markAttr = (start) => `span[data-${MARKER_CLASS}=${start ? 'start' : 'end'}]`;
        const start = this.area.querySelector(markAttr(true)), end = this.area.querySelector(markAttr(false));
        if (!start) {
            return;
        }
        range = this.createRange();
        if (!end) {
            const previousNode = start.previousSibling;
            if (dom_Dom.isText(previousNode)) {
                range.setStart(previousNode, previousNode.nodeValue ? previousNode.nodeValue.length : 0);
            }
            else {
                range.setStartBefore(start);
            }
            dom_Dom.safeRemove(start);
            range.collapse(true);
        }
        else {
            range.setStartAfter(start);
            dom_Dom.safeRemove(start);
            range.setEndBefore(end);
            dom_Dom.safeRemove(end);
        }
        if (range) {
            this.selectRange(range);
        }
    }
    save(silent = false) {
        if (this.hasMarkers) {
            return [];
        }
        const sel = this.sel;
        if (!sel || !sel.rangeCount) {
            return [];
        }
        const info = [], length = sel.rangeCount, ranges = [];
        for (let i = 0; i < length; i += 1) {
            ranges[i] = sel.getRangeAt(i);
            if (ranges[i].collapsed) {
                const start = this.marker(true, ranges[i]);
                info[i] = {
                    startId: start.id,
                    collapsed: true,
                    startMarker: start.outerHTML
                };
            }
            else {
                const start = this.marker(true, ranges[i]);
                const end = this.marker(false, ranges[i]);
                info[i] = {
                    startId: start.id,
                    endId: end.id,
                    collapsed: false,
                    startMarker: start.outerHTML,
                    endMarker: end.outerHTML
                };
            }
        }
        if (!silent) {
            sel.removeAllRanges();
            for (let i = length - 1; i >= 0; --i) {
                const startElm = this.doc.getElementById(info[i].startId);
                if (startElm) {
                    if (info[i].collapsed) {
                        ranges[i].setStartAfter(startElm);
                        ranges[i].collapse(true);
                    }
                    else {
                        ranges[i].setStartBefore(startElm);
                        if (info[i].endId) {
                            const endElm = this.doc.getElementById(info[i].endId);
                            if (endElm) {
                                ranges[i].setEndAfter(endElm);
                            }
                        }
                    }
                }
                try {
                    sel.addRange(ranges[i].cloneRange());
                }
                catch (_a) { }
            }
        }
        return info;
    }
    focus(options = {
        preventScroll: true
    }) {
        var _a, _b;
        if (!this.isFocused()) {
            const scrollParent = getScrollParent(this.j.container), scrollTop = scrollParent === null || scrollParent === void 0 ? void 0 : scrollParent.scrollTop;
            if (this.j.iframe) {
                if (this.doc.readyState === 'complete') {
                    this.j.iframe.focus(options);
                }
            }
            this.win.focus();
            this.area.focus(options);
            if (scrollTop && (scrollParent === null || scrollParent === void 0 ? void 0 : scrollParent.scrollTo)) {
                scrollParent.scrollTo(0, scrollTop);
            }
            const sel = this.sel, range = (sel === null || sel === void 0 ? void 0 : sel.rangeCount) ? sel === null || sel === void 0 ? void 0 : sel.getRangeAt(0) : null;
            if (!range || !dom_Dom.isOrContains(this.area, range.startContainer)) {
                const range = this.createRange();
                range.setStart(this.area, 0);
                range.collapse(true);
                this.selectRange(range, false);
            }
            if (!this.j.editorIsActive) {
                (_b = (_a = this.j) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.fire('focus');
            }
            return true;
        }
        return false;
    }
    isCollapsed() {
        const sel = this.sel;
        for (let r = 0; sel && r < sel.rangeCount; r += 1) {
            if (!sel.getRangeAt(r).collapsed) {
                return false;
            }
        }
        return true;
    }
    isFocused() {
        return (this.doc.hasFocus &&
            this.doc.hasFocus() &&
            this.area === this.doc.activeElement);
    }
    current(checkChild = true) {
        if (this.j.getRealMode() === MODE_WYSIWYG) {
            const sel = this.sel;
            if (!sel || sel.rangeCount === 0) {
                return null;
            }
            const range = sel.getRangeAt(0);
            let node = range.startContainer, rightMode = false;
            const child = (nd) => rightMode ? nd.lastChild : nd.firstChild;
            if (dom_Dom.isTag(node, 'br') && sel.isCollapsed) {
                return node;
            }
            if (!dom_Dom.isText(node)) {
                node = range.startContainer.childNodes[range.startOffset];
                if (!node) {
                    node =
                        range.startContainer.childNodes[range.startOffset - 1];
                    rightMode = true;
                }
                if (node && sel.isCollapsed && !dom_Dom.isText(node)) {
                    if (!rightMode && dom_Dom.isText(node.previousSibling)) {
                        node = node.previousSibling;
                    }
                    else if (checkChild) {
                        let current = child(node);
                        while (current) {
                            if (current && dom_Dom.isText(current)) {
                                node = current;
                                break;
                            }
                            current = child(current);
                        }
                    }
                }
                if (node && !sel.isCollapsed && !dom_Dom.isText(node)) {
                    let leftChild = node, rightChild = node;
                    do {
                        leftChild = leftChild.firstChild;
                        rightChild = rightChild.lastChild;
                    } while (leftChild && rightChild && !dom_Dom.isText(leftChild));
                    if (leftChild === rightChild &&
                        leftChild &&
                        dom_Dom.isText(leftChild)) {
                        node = leftChild;
                    }
                }
            }
            if (node && dom_Dom.isOrContains(this.area, node)) {
                return node;
            }
        }
        return null;
    }
    insertNode(node, insertCursorAfter = true, fireChange = true) {
        var _a;
        this.errorNode(node);
        this.j.e.fire('safeHTML', node);
        if (!this.isFocused() && this.j.isEditorMode()) {
            this.focus();
            this.restore();
        }
        const sel = this.sel;
        if (!this.isCollapsed()) {
            this.j.execCommand('Delete');
        }
        if (sel && sel.rangeCount) {
            const range = sel.getRangeAt(0);
            if (dom_Dom.isOrContains(this.area, range.commonAncestorContainer)) {
                if (dom_Dom.isTag(range.startContainer, INSEPARABLE_TAGS) &&
                    range.collapsed) {
                    (_a = range.startContainer.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(node, range.startContainer);
                }
                else {
                    range.deleteContents();
                    range.insertNode(node);
                }
            }
            else {
                this.area.appendChild(node);
            }
        }
        else {
            this.area.appendChild(node);
        }
        if (insertCursorAfter) {
            if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                node.lastChild && this.setCursorAfter(node.lastChild);
            }
            else {
                this.setCursorAfter(node);
            }
        }
        if (fireChange && this.j.events) {
            this.j.e.fire('synchro');
        }
        if (this.j.events) {
            this.j.e.fire('afterInsertNode', node);
        }
    }
    insertHTML(html) {
        if (html === '') {
            return;
        }
        const node = this.j.createInside.div(), fragment = this.j.createInside.fragment();
        let lastChild;
        if (!this.isFocused() && this.j.isEditorMode()) {
            this.focus();
            this.restore();
        }
        if (!dom_Dom.isNode(html)) {
            node.innerHTML = html.toString();
        }
        else {
            node.appendChild(html);
        }
        if (!this.j.isEditorMode() &&
            this.j.e.fire('insertHTML', node.innerHTML) === false) {
            return;
        }
        lastChild = node.lastChild;
        if (!lastChild) {
            return;
        }
        while (node.firstChild) {
            lastChild = node.firstChild;
            fragment.appendChild(node.firstChild);
        }
        this.insertNode(fragment, false, false);
        if (lastChild) {
            this.setCursorAfter(lastChild);
        }
        else {
            this.setCursorIn(fragment);
        }
        if (this.j.e) {
            this.j.e.fire('synchro');
        }
    }
    insertImage(url, styles = null, defaultWidth = null) {
        const image = is_string_isString(url) ? this.j.createInside.element('img') : url;
        if (is_string_isString(url)) {
            image.setAttribute('src', url);
        }
        if (defaultWidth != null) {
            let dw = defaultWidth.toString();
            if (dw &&
                'auto' !== dw &&
                String(dw).indexOf('px') < 0 &&
                String(dw).indexOf('%') < 0) {
                dw += 'px';
            }
            call(this.j.o.resizer.forImageChangeAttributes ? utils_attr : css, image, 'width', dw);
        }
        if (styles && typeof styles === 'object') {
            css(image, styles);
        }
        const onload = () => {
            if (image.naturalHeight < image.offsetHeight ||
                image.naturalWidth < image.offsetWidth) {
                image.style.width = '';
                image.style.height = '';
            }
            image.removeEventListener('load', onload);
        };
        this.j.e.on(image, 'load', onload);
        if (image.complete) {
            onload();
        }
        this.insertNode(image);
        this.j.e.fire('afterInsertImage', image);
    }
    eachSelection(callback) {
        var _a;
        const sel = this.sel;
        if (sel && sel.rangeCount) {
            const range = sel.getRangeAt(0);
            let root = range.commonAncestorContainer;
            if (!dom_Dom.isHTMLElement(root)) {
                root = root.parentElement;
            }
            const nodes = [], startOffset = range.startOffset, length = root.childNodes.length, elementOffset = startOffset < length ? startOffset : length - 1;
            let start = range.startContainer === this.area
                ? root.childNodes[elementOffset]
                : range.startContainer, end = range.endContainer === this.area
                ? root.childNodes[range.endOffset - 1]
                : range.endContainer;
            if (dom_Dom.isText(start) &&
                start === range.startContainer &&
                range.startOffset === ((_a = start.nodeValue) === null || _a === void 0 ? void 0 : _a.length) &&
                start.nextSibling) {
                start = start.nextSibling;
            }
            if (dom_Dom.isText(end) &&
                end === range.endContainer &&
                range.endOffset === 0 &&
                end.previousSibling) {
                end = end.previousSibling;
            }
            const checkElm = (node) => {
                if (node &&
                    node !== root &&
                    !dom_Dom.isEmptyTextNode(node) &&
                    !Select.isMarker(node)) {
                    nodes.push(node);
                }
            };
            checkElm(start);
            if (start !== end) {
                dom_Dom.find(start, node => {
                    checkElm(node);
                    return (node === end ||
                        (node && node.contains && node.contains(end)));
                }, root, true, false);
            }
            const forEvery = (current) => {
                if (!dom_Dom.isOrContains(this.j.editor, current, true)) {
                    return;
                }
                if (current.nodeName.match(/^(UL|OL)$/)) {
                    return to_array_toArray(current.childNodes).forEach(forEvery);
                }
                if (dom_Dom.isTag(current, 'li')) {
                    if (current.firstChild) {
                        current = current.firstChild;
                    }
                    else {
                        const currentB = this.j.createInside.text(INVISIBLE_SPACE);
                        current.appendChild(currentB);
                        current = currentB;
                    }
                }
                callback(current);
            };
            if (nodes.length === 0 && dom_Dom.isEmptyTextNode(start)) {
                nodes.push(start);
            }
            if (nodes.length === 0 && start.firstChild) {
                nodes.push(start.firstChild);
            }
            nodes.forEach(forEvery);
        }
    }
    cursorInTheEdge(start, parentBlock) {
        var _a, _b;
        const end = !start, range = (_a = this.sel) === null || _a === void 0 ? void 0 : _a.getRangeAt(0), current = this.current(false);
        if (!range ||
            !current ||
            !dom_Dom.isOrContains(parentBlock, current, true)) {
            return null;
        }
        const container = start ? range.startContainer : range.endContainer;
        const offset = start ? range.startOffset : range.endOffset;
        const check = (elm) => elm && !dom_Dom.isTag(elm, 'br') && !dom_Dom.isEmptyTextNode(elm);
        if (dom_Dom.isText(container)) {
            const text = ((_b = container.nodeValue) === null || _b === void 0 ? void 0 : _b.length) ? container.nodeValue : '';
            if (end && text.replace(constants_INVISIBLE_SPACE_REG_EXP_END(), '').length > offset) {
                return false;
            }
            const inv = constants_INVISIBLE_SPACE_REG_EXP_START().exec(text);
            if (start &&
                ((inv && inv[0].length < offset) || (!inv && offset > 0))) {
                return false;
            }
        }
        else {
            const children = to_array_toArray(container.childNodes);
            if (end) {
                if (children.slice(offset).some(check)) {
                    return false;
                }
            }
            else {
                if (children.slice(0, offset).some(check)) {
                    return false;
                }
            }
        }
        return !call(start ? dom_Dom.prev : dom_Dom.next, current, check, parentBlock);
    }
    cursorOnTheLeft(parentBlock) {
        return this.cursorInTheEdge(true, parentBlock);
    }
    cursorOnTheRight(parentBlock) {
        return this.cursorInTheEdge(false, parentBlock);
    }
    setCursorAfter(node) {
        return this.setCursorNearWith(node, false);
    }
    setCursorBefore(node) {
        return this.setCursorNearWith(node, true);
    }
    setCursorNearWith(node, inStart) {
        var _a, _b;
        this.errorNode(node);
        if (!dom_Dom.up(node, (elm) => elm === this.area || (elm && elm.parentNode === this.area), this.area)) {
            throw error_error('Node element must be in editor');
        }
        const range = this.createRange();
        let fakeNode = null;
        if (!dom_Dom.isText(node)) {
            fakeNode = this.j.createInside.text(INVISIBLE_SPACE);
            inStart ? range.setStartBefore(node) : range.setEndAfter(node);
            range.collapse(inStart);
            range.insertNode(fakeNode);
            range.selectNode(fakeNode);
        }
        else {
            if (inStart) {
                range.setStart(node, 0);
            }
            else {
                range.setEnd(node, (_b = (_a = node.nodeValue) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0);
            }
        }
        range.collapse(inStart);
        this.selectRange(range);
        return fakeNode;
    }
    setCursorIn(node, inStart = false) {
        this.errorNode(node);
        if (!dom_Dom.up(node, (elm) => elm === this.area || (elm && elm.parentNode === this.area), this.area)) {
            throw error_error('Node element must be in editor');
        }
        const range = this.createRange();
        let start = node, last = node;
        do {
            if (dom_Dom.isText(start)) {
                break;
            }
            last = start;
            start = inStart ? start.firstChild : start.lastChild;
        } while (start);
        if (!start) {
            const fakeNode = this.j.createInside.text(INVISIBLE_SPACE);
            if (!/^(img|br|input)$/i.test(last.nodeName)) {
                last.appendChild(fakeNode);
                last = fakeNode;
            }
            else {
                start = last;
            }
        }
        range.selectNodeContents(start || last);
        range.collapse(inStart);
        this.selectRange(range);
        return last;
    }
    selectRange(range, focus = true) {
        const sel = this.sel;
        if (focus && !this.isFocused()) {
            this.focus();
        }
        if (sel) {
            sel.removeAllRanges();
            sel.addRange(range);
        }
        this.j.e.fire('changeSelection');
    }
    select(node, inward = false) {
        this.errorNode(node);
        if (!dom_Dom.up(node, (elm) => elm === this.area || (elm && elm.parentNode === this.area), this.area)) {
            throw error_error('Node element must be in editor');
        }
        const range = this.createRange();
        range[inward ? 'selectNodeContents' : 'selectNode'](node);
        this.selectRange(range);
    }
    get html() {
        const sel = this.sel;
        if (sel && sel.rangeCount > 0) {
            const range = sel.getRangeAt(0);
            const clonedSelection = range.cloneContents();
            const div = this.j.createInside.div();
            div.appendChild(clonedSelection);
            return div.innerHTML;
        }
        return '';
    }
    *wrapInTagGen() {
        if (this.isCollapsed()) {
            const font = this.jodit.createInside.element('font', INVISIBLE_SPACE);
            this.insertNode(font, false, false);
            const [marker] = this.markers;
            if (marker) {
                font.appendChild(marker);
            }
            else {
                this.setCursorIn(font);
                this.save();
            }
            yield font;
            dom_Dom.unwrap(font);
            return;
        }
        selector_$$('*[style*=font-size]', this.area).forEach(elm => utils_attr(elm, 'data-font-size', elm.style.fontSize.toString()));
        if (!this.isCollapsed()) {
            this.j.nativeExecCommand('fontsize', false, '7');
        }
        else {
            const font = this.j.createInside.element('font');
            utils_attr(font, 'size', 7);
            this.insertNode(font, false, false);
        }
        selector_$$('*[data-font-size]', this.area).forEach(elm => {
            const fontSize = utils_attr(elm, 'data-font-size');
            if (fontSize) {
                elm.style.fontSize = fontSize;
                utils_attr(elm, 'data-font-size', null);
            }
        });
        const elms = selector_$$('font[size="7"]', this.area);
        for (const font of elms) {
            const { firstChild, lastChild } = font;
            if (firstChild &&
                firstChild === lastChild &&
                Select.isMarker(firstChild)) {
                dom_Dom.unwrap(font);
                continue;
            }
            if (firstChild && Select.isMarker(firstChild)) {
                dom_Dom.before(font, firstChild);
            }
            if (lastChild && Select.isMarker(lastChild)) {
                dom_Dom.after(font, lastChild);
            }
            yield font;
            dom_Dom.unwrap(font);
        }
    }
    wrapInTag(tagOrCallback) {
        const result = [];
        for (const font of this.wrapInTagGen()) {
            try {
                if (font.firstChild &&
                    font.firstChild === font.lastChild &&
                    Select.isMarker(font.firstChild)) {
                    continue;
                }
                if (is_function_isFunction(tagOrCallback)) {
                    tagOrCallback(font);
                }
                else {
                    result.push(dom_Dom.replace(font, tagOrCallback, this.j.createInside));
                }
            }
            finally {
                const pn = font.parentNode;
                if (pn) {
                    dom_Dom.unwrap(font);
                    if (dom_Dom.isEmpty(pn)) {
                        dom_Dom.unwrap(pn);
                    }
                }
            }
        }
        return result;
    }
    applyStyle(style, options = {}) {
        const styleElm = new CommitStyle({
            style,
            element: options.element,
            className: options.className,
            defaultTag: options.defaultTag
        });
        styleElm.apply(this.j);
    }
    splitSelection(currentBox) {
        if (!this.isCollapsed()) {
            return null;
        }
        const leftRange = this.createRange();
        const range = this.range;
        leftRange.setStartBefore(currentBox);
        const cursorOnTheRight = this.cursorOnTheRight(currentBox);
        const cursorOnTheLeft = this.cursorOnTheLeft(currentBox);
        const br = this.j.createInside.element('br'), prevFake = this.j.createInside.text(INVISIBLE_SPACE), nextFake = prevFake.cloneNode();
        try {
            if (cursorOnTheRight || cursorOnTheLeft) {
                range.insertNode(br);
                const clearBR = (start, getNext) => {
                    let next = getNext(start);
                    while (next) {
                        const nextSib = getNext(next);
                        if (next &&
                            (dom_Dom.isTag(next, 'br') || dom_Dom.isEmptyTextNode(next))) {
                            dom_Dom.safeRemove(next);
                        }
                        else {
                            break;
                        }
                        next = nextSib;
                    }
                };
                clearBR(br, (n) => n.nextSibling);
                clearBR(br, (n) => n.previousSibling);
                dom_Dom.after(br, nextFake);
                dom_Dom.before(br, prevFake);
                if (cursorOnTheRight) {
                    leftRange.setEndBefore(br);
                    range.setEndBefore(br);
                }
                else {
                    leftRange.setEndAfter(br);
                    range.setEndAfter(br);
                }
            }
            else {
                leftRange.setEnd(range.startContainer, range.startOffset);
            }
            const fragment = leftRange.extractContents();
            if (currentBox.parentNode) {
                try {
                    currentBox.parentNode.insertBefore(fragment, currentBox);
                    if (cursorOnTheRight && (br === null || br === void 0 ? void 0 : br.parentNode)) {
                        const range = this.createRange();
                        range.setStartBefore(br);
                        this.selectRange(range);
                    }
                }
                catch (e) {
                    if (false) {}
                }
            }
            const fillFakeParent = (fake) => {
                var _a, _b, _c;
                if (((_a = fake === null || fake === void 0 ? void 0 : fake.parentNode) === null || _a === void 0 ? void 0 : _a.firstChild) === ((_b = fake === null || fake === void 0 ? void 0 : fake.parentNode) === null || _b === void 0 ? void 0 : _b.lastChild)) {
                    (_c = fake === null || fake === void 0 ? void 0 : fake.parentNode) === null || _c === void 0 ? void 0 : _c.appendChild(br.cloneNode());
                }
            };
            fillFakeParent(prevFake);
            fillFakeParent(nextFake);
        }
        finally {
            dom_Dom.safeRemove(prevFake);
            dom_Dom.safeRemove(nextFake);
        }
        return currentBox.previousElementSibling;
    }
}
__decorate([
    autobind
], Select.prototype, "createRange", null);
__decorate([
    autobind
], Select.prototype, "focus", null);
__decorate([
    autobind
], Select.prototype, "setCursorAfter", null);
__decorate([
    autobind
], Select.prototype, "setCursorBefore", null);
__decorate([
    autobind
], Select.prototype, "setCursorIn", null);

;// CONCATENATED MODULE: ./src/core/selection/style/api/extract.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function extractSelectedPart(wrapper, font, jodit) {
    const range = jodit.s.createRange();
    const leftEdge = Select.isMarker(font.previousSibling)
        ? font.previousSibling
        : font;
    range.setStartBefore(wrapper);
    range.setEndBefore(leftEdge);
    extractAndMove(wrapper, range, true);
    const rightEdge = Select.isMarker(font.nextSibling)
        ? font.nextSibling
        : font;
    range.setStartAfter(rightEdge);
    range.setEndAfter(wrapper);
    extractAndMove(wrapper, range, false);
}
function extractAndMove(wrapper, range, left) {
    const fragment = range.extractContents();
    if ((!fragment.textContent || !trim_trim(fragment.textContent).length) &&
        fragment.firstChild) {
        dom_Dom.unwrap(fragment.firstChild);
    }
    if (wrapper.parentNode) {
        call(left ? dom_Dom.before : dom_Dom.after, wrapper, fragment);
    }
}

;// CONCATENATED MODULE: ./src/core/selection/style/api/toggle/toggle-ordered-list.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




function toggleOrderedList(style, li, jodit, mode) {
    if (!li) {
        return mode;
    }
    const list = li.parentElement;
    if (!list) {
        return mode;
    }
    if (list.tagName.toLowerCase() !== style.element) {
        const newList = dom_Dom.replace(list, style.element, jodit.createInside);
        toggleCSS(style, newList, jodit, mode);
        return REPLACE;
    }
    if (toggleCSS(style, li.parentElement, jodit, INITIAL, true) === CHANGE) {
        return toggleCSS(style, li.parentElement, jodit, mode);
    }
    extractSelectedPart(list, li, jodit);
    dom_Dom.unwrap(li.parentElement);
    dom_Dom.replace(li, jodit.o.enter, jodit.createInside);
    return mode;
}

;// CONCATENATED MODULE: ./src/core/selection/style/api/element-has-same-style.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function elementHasSameStyle(elm, rules) {
    return Boolean(!dom_Dom.isTag(elm, 'font') &&
        dom_Dom.isHTMLElement(elm) &&
        Object.keys(rules).every(property => {
            const value = css(elm, property, true);
            return (!is_void_isVoid(value) &&
                value !== '' &&
                !is_void_isVoid(rules[property]) &&
                normalizeCssValue(property, rules[property])
                    .toString()
                    .toLowerCase() === value.toString().toLowerCase());
        }));
}
function elementHasSameStyleKeys(elm, rules) {
    return Boolean(!dom_Dom.isTag(elm, 'font') &&
        dom_Dom.isHTMLElement(elm) &&
        Object.keys(rules).every(property => !is_void_isVoid(css(elm, property, true))));
}

;// CONCATENATED MODULE: ./src/core/selection/style/api/finite-state-machine.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class FiniteStateMachine {
    constructor(state, transitions) {
        this.state = state;
        this.transitions = transitions;
        this.subState = '';
        this.silent = true;
    }
    setState(state, subState) {
        this.state = state;
        if (subState != null) {
            this.subState = subState;
        }
    }
    getState() {
        return this.state;
    }
    getSubState() {
        return this.subState;
    }
    disableSilent() {
        this.silent = false;
    }
    dispatch(actionName, ...attrs) {
        const action = this.transitions[this.state][actionName];
        if (action) {
            if (!this.silent) {
                console.log('State: ' + this.state, 'Action: ' + actionName);
            }
            const res = action.call(this, ...attrs);
            if (!this.silent) {
                console.log('State: ' + this.state);
            }
            return res;
        }
        if (!this.silent) {
            throw new Error('invalid action: ' + this.state + '.' + actionName);
        }
        return;
    }
}

;// CONCATENATED MODULE: ./src/core/selection/style/api/is-normal-node.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function isNormalNode(elm) {
    return Boolean(elm && !dom_Dom.isEmptyTextNode(elm) && !dom_Dom.isTemporary(elm));
}

;// CONCATENATED MODULE: ./src/core/selection/style/api/is-suit-element.ts



function isSuitElement(commitStyle, elm, strict) {
    if (!elm) {
        return false;
    }
    const { element, elementIsDefault, options } = commitStyle;
    const elmHasSameStyle = Boolean(options.style && elementHasSameStyle(elm, options.style));
    const elmIsSame = elm.nodeName.toLowerCase() === element ||
        (dom_Dom.isTag(elm, ['ul', 'ol']) && commitStyle.elementIsList);
    if (((!elementIsDefault || !strict) && elmIsSame) ||
        (elmHasSameStyle && isNormalNode(elm))) {
        return true;
    }
    return Boolean(!elmIsSame && !strict && elementIsDefault && dom_Dom.isInlineBlock(elm));
}
function isSameStyleChild(commitStyle, elm) {
    const { element, options } = commitStyle;
    if (!elm || !isNormalNode(elm)) {
        return false;
    }
    const elmIsSame = elm.nodeName.toLowerCase() === element;
    const elmHasSameStyle = Boolean(options.style && elementHasSameStyleKeys(elm, options.style));
    return elmIsSame && elmHasSameStyle;
}

;// CONCATENATED MODULE: ./src/core/selection/style/api/get-suit-child.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function getSuitChild(style, font) {
    let { firstChild: child } = font;
    while (child && !isNormalNode(child)) {
        child = child.nextSibling;
        if (!child) {
            return null;
        }
    }
    if (child &&
        !dom_Dom.next(child, isNormalNode, font) &&
        isSuitElement(style, child, false)) {
        return child;
    }
    return null;
}

;// CONCATENATED MODULE: ./src/core/selection/style/api/get-suit-parent.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function getSuitParent(style, node, root) {
    const { parentNode } = node;
    if (parentNode === root ||
        !dom_Dom.isHTMLElement(parentNode) ||
        dom_Dom.next(node, isNormalNode, parentNode) ||
        dom_Dom.prev(node, isNormalNode, parentNode)) {
        return null;
    }
    if (style.isElementCommit &&
        style.elementIsBlock &&
        !dom_Dom.isBlock(parentNode)) {
        return getSuitParent(style, parentNode, root);
    }
    if (isSuitElement(style, parentNode, false) &&
        (!dom_Dom.isBlock(parentNode) || style.elementIsBlock)) {
        return parentNode;
    }
    return null;
}

;// CONCATENATED MODULE: ./src/core/selection/style/api/is-inside-invisible-element.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function isInsideInvisibleElement(font, root) {
    return Boolean(dom_Dom.closest(font, ['style', 'script'], root));
}

;// CONCATENATED MODULE: ./src/core/selection/style/api/toggle-commit-styles.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function toggleCommitStyles(commitStyle, elm) {
    if (commitStyle.elementIsBlock ||
        (dom_Dom.isTag(elm, commitStyle.element) && !commitStyle.elementIsDefault)) {
        dom_Dom.unwrap(elm);
        return true;
    }
    return false;
}

;// CONCATENATED MODULE: ./src/core/selection/style/api/unwrap-children.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function unwrapChildren(style, font) {
    const needUnwrap = [];
    const needChangeStyle = [];
    let firstElementSuit;
    const cssStyle = style.options.style;
    if (font.firstChild) {
        const gen = dom_Dom.eachGen(font);
        let item = gen.next();
        while (!item.done) {
            const elm = item.value;
            if (isSuitElement(style, elm, true)) {
                if (firstElementSuit === undefined) {
                    firstElementSuit = true;
                }
                needUnwrap.push(elm);
            }
            else if (cssStyle && isSameStyleChild(style, elm)) {
                if (firstElementSuit === undefined) {
                    firstElementSuit = false;
                }
                needChangeStyle.push(() => {
                    css(elm, Object.keys(cssStyle).reduce((acc, key) => {
                        acc[key] = null;
                        return acc;
                    }, {}));
                    if (!utils_attr(elm, 'style')) {
                        utils_attr(elm, 'style', null);
                    }
                    if (elm.nodeName.toLowerCase() === style.element) {
                        needUnwrap.push(elm);
                    }
                });
            }
            else if (!dom_Dom.isEmptyTextNode(elm)) {
                if (firstElementSuit === undefined) {
                    firstElementSuit = false;
                }
            }
            item = gen.next();
        }
    }
    needChangeStyle.forEach(clb => clb());
    needUnwrap.forEach(dom_Dom.unwrap);
    return Boolean(firstElementSuit);
}

;// CONCATENATED MODULE: ./src/core/selection/style/api/wrap-unwrapped-text.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function wrapUnwrappedText(style, elm, jodit, getRange) {
    const root = jodit.editor, ci = jodit.createInside, edge = (n, key = 'previousSibling') => {
        let edgeNode = n, node = n;
        while (node) {
            if (dom_Dom.isTag(node, jodit.o.enter)) {
                break;
            }
            edgeNode = node;
            if (node[key]) {
                node = node[key];
            }
            else {
                node =
                    node.parentNode &&
                        !dom_Dom.isBlock(node.parentNode) &&
                        node.parentNode !== root
                        ? node.parentNode
                        : null;
            }
            if (dom_Dom.isBlock(node)) {
                break;
            }
        }
        return edgeNode;
    };
    const start = edge(elm), end = edge(elm, 'nextSibling');
    const range = getRange();
    range.setStartBefore(start);
    range.setEndAfter(end);
    const fragment = range.extractContents();
    const wrapper = ci.element(style.element);
    wrapper.appendChild(fragment);
    range.insertNode(wrapper);
    if (style.elementIsBlock) {
        if (dom_Dom.isEmpty(wrapper) &&
            !dom_Dom.isTag(wrapper.firstElementChild, 'br')) {
            wrapper.appendChild(ci.element('br'));
        }
    }
    return wrapper;
}

;// CONCATENATED MODULE: ./src/core/selection/style/api/wrap-ordered-list.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function wrapOrderedList(commitStyle, wrapper, jodit) {
    const newWrapper = dom_Dom.replace(wrapper, 'li', jodit.createInside);
    let list = newWrapper.previousElementSibling || newWrapper.nextElementSibling;
    if (!dom_Dom.isTag(list, ['ul', 'ol'])) {
        list = jodit.createInside.element(commitStyle.element);
        dom_Dom.before(newWrapper, list);
    }
    if (newWrapper.previousElementSibling === list) {
        dom_Dom.append(list, newWrapper);
    }
    else {
        dom_Dom.prepend(list, newWrapper);
    }
    return list;
}

;// CONCATENATED MODULE: ./src/core/selection/style/api/wrap-and-commit-style.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




function wrapAndCommitStyle(commitStyle, font, jodit) {
    const wrapper = findOrCreateWrapper(commitStyle, font, jodit);
    return commitStyle.elementIsList
        ? wrapOrderedList(commitStyle, wrapper, jodit)
        : dom_Dom.replace(wrapper, commitStyle.element, jodit.createInside, true);
}
function findOrCreateWrapper(commitStyle, font, jodit) {
    if (commitStyle.elementIsBlock) {
        const box = dom_Dom.up(font, node => dom_Dom.isBlock(node) &&
            !dom_Dom.isTag(node, [
                'td',
                'th',
                'tr',
                'tbody',
                'table',
                'li',
                'ul',
                'ol'
            ]), jodit.editor);
        if (box) {
            return box;
        }
    }
    if (commitStyle.elementIsBlock) {
        return wrapUnwrappedText(commitStyle, font, jodit, jodit.s.createRange);
    }
    utils_attr(font, 'size', null);
    return font;
}

;// CONCATENATED MODULE: ./src/core/selection/style/api/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
















;// CONCATENATED MODULE: ./src/core/selection/style/apply-style.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





function ApplyStyle(jodit, cs) {
    const { s: sel, editor } = jodit;
    const fsm = new FiniteStateMachine('start', {
        start: {
            start() {
                sel.save();
                normalizeNode(editor.firstChild);
                this.setState('generator');
            }
        },
        generator: {
            initGenerator() {
                return jodit.s.wrapInTagGen();
            },
            nextFont(gen) {
                const font = gen.next();
                if (font.done) {
                    this.setState('end');
                    return;
                }
                if (isInsideInvisibleElement(font.value, editor) ||
                    dom_Dom.isEmptyContent(font.value)) {
                    return;
                }
                this.setState('check');
                return font.value;
            }
        },
        check: {
            work(font) {
                let elm = getSuitParent(cs, font, jodit.editor) ||
                    getSuitChild(cs, font);
                if (elm) {
                    this.setState('wholeElement');
                    return elm;
                }
                elm = dom_Dom.closest(font, node => isSuitElement(cs, node, true), jodit.editor);
                if (elm) {
                    if (!cs.elementIsBlock) {
                        extractSelectedPart(elm, font, jodit);
                    }
                }
                if (cs.elementIsList && dom_Dom.isTag(elm, ['ul', 'ol'])) {
                    this.setState('orderList');
                    return font;
                }
                if (elm) {
                    this.setState('wholeElement');
                    return elm;
                }
                if (unwrapChildren(cs, font)) {
                    this.setState('endProcess');
                    return null;
                }
                this.setState('wrap');
                return font;
            }
        },
        wholeElement: {
            toggleStyles(toggleElm) {
                let mode = INITIAL;
                if (toggleCommitStyles(cs, toggleElm)) {
                    mode = UNWRAP;
                }
                else {
                    mode = toggleCSS(cs, toggleElm, jodit, mode);
                }
                this.setState('generator', mode);
            }
        },
        orderList: {
            toggleStyles(font) {
                let mode = INITIAL;
                const li = dom_Dom.closest(font, 'li', jodit.editor);
                if (!li) {
                    this.setState('generator');
                    return;
                }
                const ul = dom_Dom.closest(font, ['ul', 'ol'], jodit.editor);
                if (!ul) {
                    this.setState('generator');
                    return;
                }
                mode = toggleOrderedList(cs, li, jodit, mode);
                if (mode === REPLACE || mode === UNWRAP || mode === CHANGE) {
                    this.setState('endWhile');
                    return;
                }
                this.setState('generator');
            }
        },
        wrap: {
            toggleStyles(font) {
                if (this.getSubState() !== 'unwrap') {
                    const toggleElm = wrapAndCommitStyle(cs, font, jodit);
                    toggleCSS(cs, toggleElm, jodit, WRAP);
                }
                this.setState('generator');
            }
        },
        endWhile: {
            nextFont(gen) {
                const font = gen.next();
                if (font.done) {
                    this.setState('end');
                }
            }
        },
        endProcess: {
            toggleStyles() {
                this.setState('generator');
            }
        },
        end: {
            finalize() {
                sel.restore();
            }
        }
    });
    fsm.dispatch('start');
    const gen = fsm.dispatch('initGenerator');
    while (fsm.getState() !== 'end') {
        const font = fsm.dispatch('nextFont', gen);
        if (font) {
            const wrapper = fsm.dispatch('work', font);
            fsm.dispatch('toggleStyles', wrapper);
        }
    }
    fsm.dispatch('finalize', gen);
}

;// CONCATENATED MODULE: ./src/core/selection/style/commit-style.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const WRAP = 'wrap';
const UNWRAP = 'unwrap';
const CHANGE = 'change';
const UNSET = 'unset';
const INITIAL = 'initial';
const REPLACE = 'replace';
class CommitStyle {
    constructor(options) {
        this.options = options;
    }
    get elementIsList() {
        return Boolean(this.options.element && ['ul', 'ol'].includes(this.options.element));
    }
    get element() {
        return this.options.element || this.defaultTag;
    }
    get elementIsBlock() {
        return Boolean(this.options.element && IS_BLOCK.test(this.options.element));
    }
    get isElementCommit() {
        return Boolean(this.options.element &&
            this.options.element !== this.options.defaultTag);
    }
    get defaultTag() {
        if (this.options.defaultTag) {
            return this.options.defaultTag;
        }
        return this.elementIsBlock ? 'p' : 'span';
    }
    get elementIsDefault() {
        return this.element === this.defaultTag;
    }
    apply(jodit) {
        ApplyStyle(jodit, this);
    }
}

;// CONCATENATED MODULE: ./src/core/selection/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



;// CONCATENATED MODULE: ./src/core/dom/dom.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




class dom_Dom {
    static detach(node) {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    }
    static wrapInline(current, tag, editor) {
        let tmp, first = current, last = current;
        editor.s.save();
        let needFindNext = false;
        do {
            needFindNext = false;
            tmp = first.previousSibling;
            if (tmp && !dom_Dom.isBlock(tmp)) {
                needFindNext = true;
                first = tmp;
            }
        } while (needFindNext);
        do {
            needFindNext = false;
            tmp = last.nextSibling;
            if (tmp && !dom_Dom.isBlock(tmp)) {
                needFindNext = true;
                last = tmp;
            }
        } while (needFindNext);
        const wrapper = is_string_isString(tag) ? editor.createInside.element(tag) : tag;
        if (first.parentNode) {
            first.parentNode.insertBefore(wrapper, first);
        }
        let next = first;
        while (next) {
            next = first.nextSibling;
            wrapper.appendChild(first);
            if (first === last || !next) {
                break;
            }
            first = next;
        }
        editor.s.restore();
        return wrapper;
    }
    static wrap(current, tag, create) {
        const wrapper = is_string_isString(tag) ? create.element(tag) : tag;
        if (!current.parentNode) {
            throw error_error('Element should be in DOM');
        }
        current.parentNode.insertBefore(wrapper, current);
        wrapper.appendChild(current);
        return wrapper;
    }
    static unwrap(node) {
        const parent = node.parentNode;
        if (parent) {
            while (node.firstChild) {
                parent.insertBefore(node.firstChild, node);
            }
            dom_Dom.safeRemove(node);
        }
    }
    static between(start, end, callback) {
        let next = start;
        while (next && next !== end) {
            if (start !== next && callback(next)) {
                break;
            }
            let step = next.firstChild || next.nextSibling;
            if (!step) {
                while (next && !next.nextSibling) {
                    next = next.parentNode;
                }
                step = next === null || next === void 0 ? void 0 : next.nextSibling;
            }
            next = step;
        }
    }
    static replace(elm, newTagName, create, withAttributes = false, notMoveContent = false) {
        if (isHTML(newTagName)) {
            newTagName = create.fromHTML(newTagName);
        }
        const tag = is_string_isString(newTagName)
            ? create.element(newTagName)
            : newTagName;
        if (!notMoveContent) {
            while (elm.firstChild) {
                tag.appendChild(elm.firstChild);
            }
        }
        if (withAttributes) {
            to_array_toArray(elm.attributes).forEach(attr => {
                tag.setAttribute(attr.name, attr.value);
            });
        }
        if (elm.parentNode) {
            elm.parentNode.replaceChild(tag, elm);
        }
        return tag;
    }
    static isEmptyTextNode(node) {
        return (dom_Dom.isText(node) &&
            (!node.nodeValue ||
                node.nodeValue
                    .replace(INVISIBLE_SPACE_REG_EXP(), '')
                    .trim().length === 0));
    }
    static isEmptyContent(node) {
        return dom_Dom.each(node, (elm) => dom_Dom.isEmptyTextNode(elm));
    }
    static isContentEditable(node, root) {
        return (dom_Dom.isNode(node) &&
            !dom_Dom.closest(node, elm => dom_Dom.isElement(elm) &&
                elm.getAttribute('contenteditable') === 'false', root));
    }
    static isEmpty(node, condNoEmptyElement = /^(img|svg|canvas|input|textarea|form)$/) {
        if (!node) {
            return true;
        }
        if (dom_Dom.isText(node)) {
            return node.nodeValue == null || trim_trim(node.nodeValue).length === 0;
        }
        return (!condNoEmptyElement.test(node.nodeName.toLowerCase()) &&
            dom_Dom.each(node, (elm) => {
                if ((dom_Dom.isText(elm) &&
                    elm.nodeValue != null &&
                    trim_trim(elm.nodeValue).length !== 0) ||
                    (dom_Dom.isElement(elm) &&
                        condNoEmptyElement.test(elm.nodeName.toLowerCase()))) {
                    return false;
                }
            }));
    }
    static isNode(object) {
        if (!object) {
            return false;
        }
        const win = get('ownerDocument.defaultView', object);
        if (typeof win === 'object' &&
            win &&
            (typeof win.Node === 'function' ||
                typeof win.Node === 'object')) {
            return object instanceof win.Node;
        }
        return false;
    }
    static isCell(elm) {
        return dom_Dom.isNode(elm) && /^(td|th)$/i.test(elm.nodeName);
    }
    static isImage(elm) {
        return (dom_Dom.isNode(elm) && /^(img|svg|picture|canvas)$/i.test(elm.nodeName));
    }
    static isBlock(node) {
        return (!is_void_isVoid(node) &&
            typeof node === 'object' &&
            dom_Dom.isNode(node) &&
            IS_BLOCK.test(node.nodeName));
    }
    static isText(node) {
        return Boolean(node && node.nodeType === Node.TEXT_NODE);
    }
    static isElement(node) {
        var _a;
        if (!dom_Dom.isNode(node)) {
            return false;
        }
        const win = (_a = node.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
        return Boolean(win && node.nodeType === Node.ELEMENT_NODE);
    }
    static isHTMLElement(node) {
        var _a;
        if (!dom_Dom.isNode(node)) {
            return false;
        }
        const win = (_a = node.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
        return Boolean(win && node instanceof win.HTMLElement);
    }
    static isInlineBlock(node) {
        return (dom_Dom.isElement(node) &&
            !/^(BR|HR)$/i.test(node.tagName) &&
            ['inline', 'inline-block'].indexOf(css(node, 'display').toString()) !== -1);
    }
    static canSplitBlock(node) {
        return (!is_void_isVoid(node) &&
            dom_Dom.isHTMLElement(node) &&
            dom_Dom.isBlock(node) &&
            !/^(TD|TH|CAPTION|FORM)$/.test(node.nodeName) &&
            node.style !== undefined &&
            !/^(fixed|absolute)/i.test(node.style.position));
    }
    static last(root, condition) {
        let last = root === null || root === void 0 ? void 0 : root.lastChild;
        if (!last) {
            return null;
        }
        do {
            if (condition(last)) {
                return last;
            }
            let next = last.lastChild;
            if (!next) {
                next = last.previousSibling;
            }
            if (!next && last.parentNode !== root) {
                do {
                    last = last.parentNode;
                } while (last &&
                    !(last === null || last === void 0 ? void 0 : last.previousSibling) &&
                    last.parentNode !== root);
                next = last === null || last === void 0 ? void 0 : last.previousSibling;
            }
            last = next;
        } while (last);
        return null;
    }
    static prev(node, condition, root, withChild = true) {
        return dom_Dom.find(node, condition, root, false, withChild);
    }
    static next(node, condition, root, withChild = true) {
        return dom_Dom.find(node, condition, root, true, withChild);
    }
    static prevWithClass(node, className) {
        return dom_Dom.prev(node, node => {
            return (dom_Dom.isElement(node) && node.classList.contains(className));
        }, node.parentNode);
    }
    static nextWithClass(node, className) {
        return dom_Dom.next(node, elm => dom_Dom.isElement(elm) && elm.classList.contains(className), node.parentNode);
    }
    static find(node, condition, root, leftToRight = true, withChild = true) {
        const gen = this.nextGen(node, root, leftToRight, withChild);
        let item = gen.next();
        while (!item.done) {
            if (condition(item.value)) {
                return item.value;
            }
            item = gen.next();
        }
        return null;
    }
    static *nextGen(start, root, leftToRight = true, withChild = true) {
        const stack = [];
        let currentNode = start;
        do {
            let next = leftToRight
                ? currentNode.nextSibling
                : currentNode.previousSibling;
            while (next) {
                stack.unshift(next);
                next = leftToRight ? next.nextSibling : next.previousSibling;
            }
            yield* this.runInStack(start, stack, leftToRight, withChild);
            currentNode = currentNode.parentNode;
        } while (currentNode !== root);
        return null;
    }
    static each(elm, callback, leftToRight = true) {
        const gen = this.eachGen(elm, leftToRight);
        let item = gen.next();
        while (!item.done) {
            if (callback(item.value) === false) {
                return false;
            }
            item = gen.next();
        }
        return true;
    }
    static eachGen(root, leftToRight = true) {
        return this.runInStack(root, [root], leftToRight);
    }
    static *runInStack(start, stack, leftToRight, withChild = true) {
        while (stack.length) {
            const item = stack.pop();
            if (start !== item) {
                yield item;
            }
            if (withChild) {
                let child = leftToRight ? item.lastChild : item.firstChild;
                while (child) {
                    stack.push(child);
                    child = leftToRight
                        ? child.previousSibling
                        : child.nextSibling;
                }
            }
        }
    }
    static findWithCurrent(node, condition, root, sibling = 'nextSibling', child = 'firstChild') {
        let next = node;
        do {
            if (condition(next)) {
                return next || null;
            }
            if (child && next && next[child]) {
                const nextOne = dom_Dom.findWithCurrent(next[child], condition, next, sibling, child);
                if (nextOne) {
                    return nextOne;
                }
            }
            while (next && !next[sibling] && next !== root) {
                next = next.parentNode;
            }
            if (next && next[sibling] && next !== root) {
                next = next[sibling];
            }
        } while (next && next !== root);
        return null;
    }
    static findSibling(node, left = true, cond = (n) => !dom_Dom.isEmptyTextNode(n)) {
        const getSibling = (node) => left ? node.previousSibling : node.nextSibling;
        let start = getSibling(node);
        while (start && !cond(start)) {
            start = getSibling(start);
        }
        return start && cond(start) ? start : null;
    }
    static up(node, condition, root, checkRoot = false) {
        let start = node;
        if (!start) {
            return null;
        }
        do {
            if (condition(start)) {
                return start;
            }
            if (start === root || !start.parentNode) {
                break;
            }
            start = start.parentNode;
        } while (start && start !== root);
        if (start === root && checkRoot && condition(start)) {
            return start;
        }
        return null;
    }
    static closest(node, tagsOrCondition, root) {
        let condition;
        if (is_function_isFunction(tagsOrCondition)) {
            condition = tagsOrCondition;
        }
        else if (isArray(tagsOrCondition)) {
            condition = (tag) => tag &&
                tagsOrCondition.includes(tag.nodeName.toLowerCase());
        }
        else {
            condition = (tag) => tag && tagsOrCondition === tag.nodeName.toLowerCase();
        }
        return dom_Dom.up(node, condition, root);
    }
    static furthest(node, condition, root) {
        let matchedParent = null, current = node === null || node === void 0 ? void 0 : node.parentElement;
        while (current && current !== root && condition(current)) {
            matchedParent = current;
            current = current === null || current === void 0 ? void 0 : current.parentElement;
        }
        return matchedParent;
    }
    static appendChildFirst(root, newElement) {
        const child = root.firstChild;
        if (child) {
            if (child !== newElement) {
                root.insertBefore(newElement, child);
            }
        }
        else {
            root.appendChild(newElement);
        }
    }
    static after(elm, newElement) {
        const { parentNode } = elm;
        if (!parentNode) {
            return;
        }
        if (parentNode.lastChild === elm) {
            parentNode.appendChild(newElement);
        }
        else {
            parentNode.insertBefore(newElement, elm.nextSibling);
        }
    }
    static before(elm, newElement) {
        const { parentNode } = elm;
        if (!parentNode) {
            return;
        }
        parentNode.insertBefore(newElement, elm);
    }
    static prepend(root, newElement) {
        root.insertBefore(newElement, root.firstChild);
    }
    static append(root, newElement) {
        if (isArray(newElement)) {
            newElement.forEach(node => {
                this.append(root, node);
            });
        }
        else {
            root.appendChild(newElement);
        }
    }
    static moveContent(from, to, inStart = false) {
        const fragment = (from.ownerDocument || document).createDocumentFragment();
        to_array_toArray(from.childNodes).forEach((node) => {
            fragment.appendChild(node);
        });
        if (!inStart || !to.firstChild) {
            to.appendChild(fragment);
        }
        else {
            to.insertBefore(fragment, to.firstChild);
        }
    }
    static all(node, condition, prev = false) {
        let nodes = node.childNodes ? to_array_toArray(node.childNodes) : [];
        if (condition(node)) {
            return node;
        }
        if (prev) {
            nodes = nodes.reverse();
        }
        nodes.forEach(child => {
            dom_Dom.all(child, condition, prev);
        });
        return null;
    }
    static isOrContains(root, child, onlyContains = false) {
        if (root === child) {
            return !onlyContains;
        }
        return Boolean(child && root && this.up(child, nd => nd === root, root, true));
    }
    static safeRemove(node) {
        node && node.parentNode && node.parentNode.removeChild(node);
    }
    static hide(node) {
        if (!node) {
            return;
        }
        data_bind_dataBind(node, '__old_display', node.style.display);
        node.style.display = 'none';
    }
    static show(node) {
        if (!node) {
            return;
        }
        const display = data_bind_dataBind(node, '__old_display');
        if (node.style.display === 'none') {
            node.style.display = display || '';
        }
    }
    static isTag(node, tagNames) {
        const tags = asArray(tagNames).map(String);
        for (let i = 0; i < tags.length; i += 1) {
            if (this.isElement(node) &&
                node.tagName.toLowerCase() === tags[i].toLowerCase()) {
                return true;
            }
        }
        return false;
    }
    static markTemporary(element, attributes) {
        attributes && utils_attr(element, attributes);
        utils_attr(element, TEMP_ATTR, true);
        return element;
    }
    static isTemporary(element) {
        if (!dom_Dom.isElement(element)) {
            return false;
        }
        return Select.isMarker(element) || utils_attr(element, TEMP_ATTR) === 'true';
    }
    static replaceTemporaryFromString(value) {
        return value.replace(/<([a-z]+)[^>]+data-jodit-temp[^>]+>(.+?)<\/\1>/gi, '$2');
    }
    static temporaryList(root) {
        return selector_$$(`[${TEMP_ATTR}]`, root);
    }
}

;// CONCATENATED MODULE: ./src/core/dom/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


;// CONCATENATED MODULE: ./src/core/helpers/utils/get-class-name.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const keepNames = new Map();
const getClassName = (obj) => {
    var _a;
    if (is_function_isFunction(obj.className)) {
        return obj.className();
    }
    const constructor = ((_a = obj.constructor) === null || _a === void 0 ? void 0 : _a.originalConstructor) || obj.constructor;
    if (keepNames.has(constructor)) {
        return keepNames.get(constructor);
    }
    if (constructor.name) {
        return constructor.name;
    }
    const regex = new RegExp(/^\s*function\s*(\S*)\s*\(/);
    const res = constructor.toString().match(regex);
    return res ? res[1] : '';
};

;// CONCATENATED MODULE: ./src/core/helpers/string/camel-case.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const camelCase = (key) => {
    return key.replace(/([-_])(.)/g, (m, code, letter) => {
        return letter.toUpperCase();
    });
};

;// CONCATENATED MODULE: ./src/core/helpers/string/kebab-case.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const kebabCase = (key) => {
    return key
        .replace(/([A-Z])([A-Z])([a-z])/g, '$1-$2$3')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
};
const CamelCaseToKebabCase = (key) => {
    return key
        .replace(/([A-Z])([A-Z])([a-z])/g, '$1-$2$3')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase();
};

;// CONCATENATED MODULE: ./src/core/helpers/string/trim.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function trim_trim(value) {
    return value
        .replace(SPACE_REG_EXP_END(), '')
        .replace(SPACE_REG_EXP_START(), '');
}
function trimInv(value) {
    return value
        .replace(INVISIBLE_SPACE_REG_EXP_END(), '')
        .replace(INVISIBLE_SPACE_REG_EXP_START(), '');
}

;// CONCATENATED MODULE: ./src/core/helpers/string/ucfirst.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function ucfirst(value) {
    if (!value.length) {
        return '';
    }
    return value[0].toUpperCase() + value.substr(1);
}

;// CONCATENATED MODULE: ./src/config.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class config_Config {
    constructor() {
        this.namespace = '';
        this.safeMode = false;
        this.safePluginsList = ['about', 'enter', 'backspace'];
        this.license = '';
        this.preset = 'custom';
        this.presets = {
            inline: {
                inline: true,
                toolbar: false,
                toolbarInline: true,
                toolbarInlineForSelection: true,
                showXPathInStatusbar: false,
                showCharsCounter: false,
                showWordsCounter: false,
                showPlaceholder: false
            }
        };
        this.ownerDocument = (typeof document !== 'undefined'
            ? document
            : null);
        this.ownerWindow = (typeof window !== 'undefined'
            ? window
            : null);
        this.shadowRoot = null;
        this.styleValues = {};
        this.zIndex = 0;
        this.readonly = false;
        this.disabled = false;
        this.activeButtonsInReadOnly = [
            'source',
            'fullsize',
            'print',
            'about',
            'dots',
            'selectall'
        ];
        this.toolbarButtonSize = 'middle';
        this.allowTabNavigation = false;
        this.inline = false;
        this.theme = 'default';
        this.saveModeInStorage = false;
        this.spellcheck = true;
        this.editorCssClass = false;
        this.style = false;
        this.triggerChangeEvent = true;
        this.direction = '';
        this.language = 'auto';
        this.debugLanguage = false;
        this.i18n = false;
        this.tabIndex = -1;
        this.toolbar = true;
        this.statusbar = true;
        this.showTooltip = true;
        this.showTooltipDelay = 1000;
        this.useNativeTooltip = false;
        this.enter = PARAGRAPH;
        this.enterBlock = this.enter !== 'br' ? this.enter : PARAGRAPH;
        this.defaultMode = MODE_WYSIWYG;
        this.useSplitMode = false;
        this.colors = {
            greyscale: [
                '#000000',
                '#434343',
                '#666666',
                '#999999',
                '#B7B7B7',
                '#CCCCCC',
                '#D9D9D9',
                '#EFEFEF',
                '#F3F3F3',
                '#FFFFFF'
            ],
            palette: [
                '#980000',
                '#FF0000',
                '#FF9900',
                '#FFFF00',
                '#00F0F0',
                '#00FFFF',
                '#4A86E8',
                '#0000FF',
                '#9900FF',
                '#FF00FF'
            ],
            full: [
                '#E6B8AF',
                '#F4CCCC',
                '#FCE5CD',
                '#FFF2CC',
                '#D9EAD3',
                '#D0E0E3',
                '#C9DAF8',
                '#CFE2F3',
                '#D9D2E9',
                '#EAD1DC',
                '#DD7E6B',
                '#EA9999',
                '#F9CB9C',
                '#FFE599',
                '#B6D7A8',
                '#A2C4C9',
                '#A4C2F4',
                '#9FC5E8',
                '#B4A7D6',
                '#D5A6BD',
                '#CC4125',
                '#E06666',
                '#F6B26B',
                '#FFD966',
                '#93C47D',
                '#76A5AF',
                '#6D9EEB',
                '#6FA8DC',
                '#8E7CC3',
                '#C27BA0',
                '#A61C00',
                '#CC0000',
                '#E69138',
                '#F1C232',
                '#6AA84F',
                '#45818E',
                '#3C78D8',
                '#3D85C6',
                '#674EA7',
                '#A64D79',
                '#85200C',
                '#990000',
                '#B45F06',
                '#BF9000',
                '#38761D',
                '#134F5C',
                '#1155CC',
                '#0B5394',
                '#351C75',
                '#733554',
                '#5B0F00',
                '#660000',
                '#783F04',
                '#7F6000',
                '#274E13',
                '#0C343D',
                '#1C4587',
                '#073763',
                '#20124D',
                '#4C1130'
            ]
        };
        this.colorPickerDefaultTab = 'background';
        this.imageDefaultWidth = 300;
        this.removeButtons = [];
        this.disablePlugins = [];
        this.extraPlugins = [];
        this.extraButtons = [];
        this.extraIcons = {};
        this.createAttributes = {};
        this.sizeLG = 900;
        this.sizeMD = 700;
        this.sizeSM = 400;
        this.buttons = [
            {
                group: 'font-style',
                buttons: []
            },
            {
                group: 'list',
                buttons: []
            },
            {
                group: 'font',
                buttons: []
            },
            '---',
            {
                group: 'script',
                buttons: []
            },
            {
                group: 'media',
                buttons: []
            },
            '\n',
            {
                group: 'state',
                buttons: []
            },
            {
                group: 'clipboard',
                buttons: []
            },
            {
                group: 'insert',
                buttons: []
            },
            {
                group: 'indent',
                buttons: []
            },
            {
                group: 'color',
                buttons: []
            },
            {
                group: 'form',
                buttons: []
            },
            '---',
            {
                group: 'history',
                buttons: []
            },
            {
                group: 'search',
                buttons: []
            },
            {
                group: 'source',
                buttons: []
            },
            {
                group: 'other',
                buttons: []
            },
            {
                group: 'info',
                buttons: []
            }
        ];
        this.buttonsMD = [
            'bold',
            'italic',
            '|',
            'ul',
            'ol',
            'eraser',
            '|',
            'font',
            'fontsize',
            '---',
            'image',
            'table',
            '|',
            'link',
            '\n',
            'brush',
            'paragraph',
            'align',
            '|',
            'hr',
            'copyformat',
            'fullsize',
            '---',
            'undo',
            'redo',
            '|',
            'dots'
        ];
        this.buttonsSM = [
            'bold',
            'italic',
            '|',
            'ul',
            'ol',
            'eraser',
            '|',
            'fontsize',
            'brush',
            'paragraph',
            '---',
            'image',
            'table',
            '\n',
            'link',
            '|',
            'align',
            '|',
            'undo',
            'redo',
            '|',
            'copyformat',
            'fullsize',
            '---',
            'dots'
        ];
        this.buttonsXS = [
            'bold',
            'brush',
            'paragraph',
            'eraser',
            '|',
            'fontsize',
            '---',
            'image',
            '\n',
            'align',
            'undo',
            'redo',
            '|',
            'link',
            'table',
            '---',
            'dots'
        ];
        this.events = {};
        this.textIcons = false;
        this.showBrowserColorPicker = true;
    }
    static get defaultOptions() {
        if (!config_Config.__defaultOptions) {
            config_Config.__defaultOptions = new config_Config();
        }
        return config_Config.__defaultOptions;
    }
}
config_Config.prototype.controls = {};

;// CONCATENATED MODULE: ./src/core/helpers/string/i18n.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





const sprintf = (str, args) => {
    if (!args || !args.length) {
        return str;
    }
    const reg = /%([sd])/g;
    let fnd = reg.exec(str);
    let res = str, i = 0;
    while (fnd && args[i] !== undefined) {
        res = res.replace(fnd[0], args[i].toString());
        i += 1;
        fnd = reg.exec(str);
    }
    return res;
};
const i18n = (key, params, options) => {
    if (!is_string_isString(key)) {
        throw error_error('i18n: Need string in first argument');
    }
    if (!key.length) {
        return key;
    }
    const debug = Boolean(options !== undefined && options.debugLanguage);
    let store;
    const parse = (value) => params && params.length ? sprintf(value, params) : value, defaultLanguage = default_language_defaultLanguage(config_Config.defaultOptions.language, config_Config.defaultOptions.language), language = default_language_defaultLanguage(options === null || options === void 0 ? void 0 : options.language, defaultLanguage), tryGet = (store) => {
        if (!store) {
            return;
        }
        if (is_string_isString(store[key])) {
            return parse(store[key]);
        }
        const lcKey = key.toLowerCase();
        if (is_string_isString(store[lcKey])) {
            return parse(store[lcKey]);
        }
        const ucfKey = ucfirst(key);
        if (is_string_isString(store[ucfKey])) {
            return parse(store[ucfKey]);
        }
        return;
    };
    if (lang[language] !== undefined) {
        store = lang[language];
    }
    else {
        if (lang[defaultLanguage] !== undefined) {
            store = lang[defaultLanguage];
        }
        else {
            store = lang.en;
        }
    }
    const i18nOvr = options === null || options === void 0 ? void 0 : options.i18n;
    if (i18nOvr && i18nOvr[language]) {
        const result = tryGet(i18nOvr[language]);
        if (result) {
            return result;
        }
    }
    const result = tryGet(store);
    if (result) {
        return result;
    }
    if (lang.en && is_string_isString(lang.en[key]) && lang.en[key]) {
        return parse(lang.en[key]);
    }
    if (debug) {
        return '{' + key + '}';
    }
    if (false) {}
    return parse(key);
};

;// CONCATENATED MODULE: ./src/core/helpers/string/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







;// CONCATENATED MODULE: ./src/core/global.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






const instances = {};
let counter = 1;
const uuids = new Set();
function uniqueUid() {
    function gen() {
        counter += 10 * (Math.random() + 1);
        return Math.round(counter).toString(16);
    }
    let uid = gen();
    while (uuids.has(uid)) {
        uid = gen();
    }
    uuids.add(uid);
    return uid;
}
const pluginSystem = new PluginSystem();
const modules = {};
const lang = {};
const extendLang = (langs) => {
    Object.keys(langs).forEach(key => {
        if (lang[key]) {
            Object.assign(lang[key], langs[key]);
        }
        else {
            lang[key] = langs[key];
        }
    });
};
const boxes = new WeakMap();
function global_getContainer(jodit, classFunc, tag = 'div', createInsideEditor = false) {
    const name = classFunc ? getClassName(classFunc.prototype) : 'jodit-utils';
    const data = boxes.get(jodit) || {}, key = name + tag;
    const view = is_jodit_object_isViewObject(jodit) ? jodit : jodit.j;
    if (!data[key]) {
        let c = view.c, body = is_jodit_object_isJoditObject(jodit) && jodit.o.shadowRoot
            ? jodit.o.shadowRoot
            : jodit.od.body;
        if (createInsideEditor &&
            is_jodit_object_isJoditObject(jodit) &&
            jodit.od !== jodit.ed) {
            c = jodit.createInside;
            const place = tag === 'style' ? jodit.ed.head : jodit.ed.body;
            body =
                is_jodit_object_isJoditObject(jodit) && jodit.o.shadowRoot
                    ? jodit.o.shadowRoot
                    : place;
        }
        const box = c.element(tag, {
            className: `jodit jodit-${kebabCase(name)}-container jodit-box`
        });
        box.classList.add(`jodit_theme_${view.o.theme || 'default'}`);
        body.appendChild(box);
        data[key] = box;
        jodit.hookStatus('beforeDestruct', () => {
            dom_Dom.safeRemove(box);
            delete data[key];
            if (Object.keys(data).length) {
                boxes.delete(jodit);
            }
        });
        boxes.set(jodit, data);
    }
    data[key].classList.remove('jodit_theme_default', 'jodit_theme_dark');
    data[key].classList.add(`jodit_theme_${view.o.theme || 'default'}`);
    return data[key];
}
const eventEmitter = new EventEmitter();

;// CONCATENATED MODULE: ./src/core/component/component.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const StatusListHandlers = new Map();
class Component {
    constructor() {
        this.ownerWindow = window;
        this.__componentStatus = statuses_STATUSES.beforeInit;
        this.uid = 'jodit-uid-' + uniqueUid();
    }
    get componentName() {
        if (!this.__componentName) {
            this.__componentName =
                'jodit-' +
                    kebabCase((is_function_isFunction(this.className) ? this.className() : '') ||
                        getClassName(this));
        }
        return this.__componentName;
    }
    getFullElName(elementName, mod, modValue) {
        const result = [this.componentName];
        if (elementName) {
            elementName = elementName.replace(/[^a-z0-9-]/gi, '-');
            result.push(`__${elementName}`);
        }
        if (mod) {
            result.push('_', mod);
            result.push('_', is_void_isVoid(modValue) ? 'true' : modValue.toString());
        }
        return result.join('');
    }
    get ownerDocument() {
        return this.ow.document;
    }
    get od() {
        return this.ownerDocument;
    }
    get ow() {
        return this.ownerWindow;
    }
    get(chain, obj) {
        return get(chain, obj || this);
    }
    get isReady() {
        return this.componentStatus === statuses_STATUSES.ready;
    }
    get isDestructed() {
        return this.componentStatus === statuses_STATUSES.destructed;
    }
    get isInDestruct() {
        return (statuses_STATUSES.beforeDestruct === this.componentStatus ||
            statuses_STATUSES.destructed === this.componentStatus);
    }
    bindDestruct(component) {
        component.hookStatus(statuses_STATUSES.beforeDestruct, () => !this.isInDestruct && this.destruct());
        return this;
    }
    destruct() {
        this.setStatus(statuses_STATUSES.destructed);
        if (StatusListHandlers.get(this)) {
            StatusListHandlers.delete(this);
        }
    }
    get componentStatus() {
        return this.__componentStatus;
    }
    set componentStatus(componentStatus) {
        this.setStatus(componentStatus);
    }
    setStatus(componentStatus) {
        return this.setStatusComponent(componentStatus, this);
    }
    setStatusComponent(componentStatus, component) {
        if (componentStatus === this.__componentStatus) {
            return;
        }
        const proto = Object.getPrototypeOf(this);
        if (proto && is_function_isFunction(proto.setStatusComponent)) {
            proto.setStatusComponent(componentStatus, component);
        }
        const statuses = StatusListHandlers.get(this), list = statuses === null || statuses === void 0 ? void 0 : statuses[componentStatus];
        if (list && list.length) {
            list.forEach(cb => cb(component));
        }
        if (component === this) {
            this.__componentStatus = componentStatus;
        }
    }
    hookStatus(status, callback) {
        let list = StatusListHandlers.get(this);
        if (!list) {
            list = {};
            StatusListHandlers.set(this, list);
        }
        if (!list[status]) {
            list[status] = [];
        }
        list[status].push(callback);
    }
}
Component.STATUSES = statuses_STATUSES;

;// CONCATENATED MODULE: ./src/core/component/view-component.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class view_component_ViewComponent extends Component {
    constructor(jodit) {
        super();
        this.setParentView(jodit);
    }
    get defaultTimeout() {
        return this.j.defaultTimeout;
    }
    get j() {
        return this.jodit;
    }
    i18n(text, ...params) {
        return this.j.i18n(text, ...params);
    }
    setParentView(jodit) {
        this.jodit = jodit;
        jodit.components.add(this);
        return this;
    }
    destruct() {
        this.j.components.delete(this);
        return super.destruct();
    }
}

;// CONCATENATED MODULE: ./src/core/component/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




;// CONCATENATED MODULE: ./src/core/helpers/utils/data-bind.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const store = new WeakMap();
const data_bind_dataBind = (elm, key, value) => {
    let itemStore = store.get(elm);
    if (!itemStore) {
        itemStore = {};
        store.set(elm, itemStore);
        let e = null;
        if (elm instanceof view_component_ViewComponent) {
            e = elm.j.e;
        }
        if (is_jodit_object_isViewObject(elm)) {
            e = elm.e;
        }
        e &&
            e.on('beforeDestruct', () => {
                store.delete(elm);
            });
    }
    if (value === undefined) {
        return itemStore[key];
    }
    itemStore[key] = value;
    return value;
};

;// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-key-aliases.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function normalizeKeyAliases(keys) {
    const memory = {};
    return keys
        .replace(/\+\+/g, '+add')
        .split(/[\s]*\+[\s]*/)
        .map(key => trim(key.toLowerCase()))
        .map(key => KEY_ALIASES[key] || key)
        .sort()
        .filter(key => !memory[key] && key !== '' && (memory[key] = true))
        .join('+');
}

;// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-node.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const normalizeNode = (node) => {
    if (!node) {
        return;
    }
    if (dom_Dom.isText(node) && node.nodeValue != null && node.parentNode) {
        while (dom_Dom.isText(node.nextSibling)) {
            if (node.nextSibling.nodeValue != null) {
                node.nodeValue += node.nextSibling.nodeValue;
            }
            node.nodeValue = node.nodeValue.replace(INVISIBLE_SPACE_REG_EXP(), '');
            dom_Dom.safeRemove(node.nextSibling);
        }
    }
    else {
        normalizeNode(node.firstChild);
    }
    normalizeNode(node.nextSibling);
};

;// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-path.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const normalizePath = (...path) => {
    return path
        .filter(part => trim_trim(part).length)
        .map((part, index) => {
        part = part.replace(/([^:])[\\/]+/g, '$1/');
        if (index) {
            part = part.replace(/^\//, '');
        }
        if (index !== path.length - 1) {
            part = part.replace(/\/$/, '');
        }
        return part;
    })
        .join('/');
};

;// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-relative-path.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const normalizeRelativePath = (path) => {
    const sections = path.split('/'), builder = sections.reduce((builder, section) => {
        switch (section) {
            case '': {
                break;
            }
            case '.': {
                break;
            }
            case '..': {
                builder.pop();
                break;
            }
            default: {
                builder.push(section);
                break;
            }
        }
        return builder;
    }, []);
    return builder.join('/') + (path.endsWith('/') ? '/' : '');
};

;// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-url.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const normalizeUrl = (...urls) => {
    return urls
        .filter(url => url.length)
        .map(url => url.replace(/\/$/, ''))
        .join('/')
        .replace(/([^:])[\\/]+/g, '$1/');
};

;// CONCATENATED MODULE: ./src/core/helpers/color/color-to-hex.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const color_to_hex_colorToHex = (color) => {
    if (color === 'rgba(0, 0, 0, 0)' || color === '') {
        return false;
    }
    if (!color) {
        return '#000000';
    }
    if (color.substr(0, 1) === '#') {
        return color;
    }
    const digits = /([\s\n\t\r]*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color) ||
        /([\s\n\t\r]*?)rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/.exec(color);
    if (!digits) {
        return '#000000';
    }
    const red = parseInt(digits[2], 10), green = parseInt(digits[3], 10), blue = parseInt(digits[4], 10), rgb = blue | (green << 8) | (red << 16);
    let hex = rgb.toString(16).toUpperCase();
    while (hex.length < 6) {
        hex = '0' + hex;
    }
    return digits[1] + '#' + hex;
};

;// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-css-value.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function normalizeCssValue(key, value) {
    switch (kebabCase(key)) {
        case 'font-weight':
            switch (value.toString().toLowerCase()) {
                case '700':
                case 'bold':
                    return 700;
                case '400':
                case 'normal':
                    return 400;
                case '900':
                case 'heavy':
                    return 900;
            }
            return isNumeric(value) ? Number(value) : value;
    }
    if (/color/i.test(key) && /^rgb/i.test(value.toString())) {
        return color_to_hex_colorToHex(value.toString()) || value;
    }
    return value;
}

;// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-color.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const normalizeColor = (colorInput) => {
    const newcolor = ['#'];
    let color = colorToHex(colorInput);
    if (!color) {
        return false;
    }
    color = trim(color.toUpperCase());
    color = color.substr(1);
    if (color.length === 3) {
        for (let i = 0; i < 3; i += 1) {
            newcolor.push(color[i]);
            newcolor.push(color[i]);
        }
        return newcolor.join('');
    }
    if (color.length > 6) {
        color = color.substr(0, 6);
    }
    return '#' + color;
};

;// CONCATENATED MODULE: ./src/core/helpers/normalize/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */










;// CONCATENATED MODULE: ./src/core/helpers/utils/css.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function css(element, key, value, onlyStyleMode = false) {
    const numberFieldsReg = /^(left|top|bottom|right|width|min|max|height|margin|padding|fontsize|font-size)/i;
    if (isBoolean(value)) {
        onlyStyleMode = value;
        value = undefined;
    }
    if (is_plain_object_isPlainObject(key) || value !== undefined) {
        const setValue = (elm, _key, _value) => {
            if (!is_void_isVoid(_value) &&
                numberFieldsReg.test(_key) &&
                isNumeric(_value.toString())) {
                _value = parseInt(_value.toString(), 10) + 'px';
            }
            if (_value !== undefined &&
                (_value == null ||
                    css(elm, _key, true) !== normalizeCssValue(_key, _value))) {
                elm.style[_key] = _value;
            }
        };
        if (is_plain_object_isPlainObject(key)) {
            const keys = Object.keys(key);
            for (let j = 0; j < keys.length; j += 1) {
                setValue(element, camelCase(keys[j]), key[keys[j]]);
            }
        }
        else {
            setValue(element, camelCase(key), value);
        }
        return '';
    }
    const key2 = kebabCase(key), doc = element.ownerDocument || document, win = doc ? doc.defaultView || doc.parentWindow : false;
    const currentValue = element.style[key];
    let result = '';
    if (currentValue !== undefined && currentValue !== '') {
        result = currentValue;
    }
    else if (win && !onlyStyleMode) {
        result = win.getComputedStyle(element).getPropertyValue(key2);
    }
    if (numberFieldsReg.test(key) &&
        /^[-+]?[0-9.]+px$/.test(result.toString())) {
        result = parseInt(result.toString(), 10);
    }
    return normalizeCssValue(key, result);
}
const clearCenterAlign = (image) => {
    if (css(image, 'display') === 'block') {
        css(image, 'display', '');
    }
    const { style } = image;
    if (style.marginLeft === 'auto' && style.marginRight === 'auto') {
        style.marginLeft = '';
        style.marginRight = '';
    }
};

;// CONCATENATED MODULE: ./src/core/helpers/utils/utils.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */








function call(func, ...args) {
    return func(...args);
}
function utils_attr(elm, keyOrAttributes, value) {
    if (!elm || !is_function_isFunction(elm.getAttribute)) {
        return null;
    }
    if (!is_string_isString(keyOrAttributes)) {
        Object.keys(keyOrAttributes).forEach(key => {
            const value = keyOrAttributes[key];
            if (is_plain_object_isPlainObject(value) && key === 'style') {
                css(elm, value);
            }
            else {
                if (key === 'className') {
                    key = 'class';
                }
                utils_attr(elm, key, value);
            }
        });
        return null;
    }
    let key = CamelCaseToKebabCase(keyOrAttributes);
    if (/^-/.test(key)) {
        const res = utils_attr(elm, `data${key}`);
        if (res) {
            return res;
        }
        key = key.substr(1);
    }
    if (value !== undefined) {
        if (value == null) {
            elm.hasAttribute(key) && elm.removeAttribute(key);
        }
        else {
            elm.setAttribute(key, value.toString());
            return value.toString();
        }
    }
    return elm.getAttribute(key);
}
function markOwner(jodit, elm) {
    utils_attr(elm, 'data-editor_id', jodit.id);
    !elm.component &&
        Object.defineProperty(elm, 'jodit', {
            value: jodit
        });
}
function callPromise(condition, callback) {
    if (is_promise_isPromise(condition)) {
        return condition.finally(callback);
    }
    return callback();
}
const map = {};
const utils_reset = function (key) {
    var _a, _b;
    if (!(key in map)) {
        const iframe = document.createElement('iframe');
        try {
            iframe.src = 'about:blank';
            document.body.appendChild(iframe);
            if (!iframe.contentWindow) {
                return null;
            }
            const func = get(key, iframe.contentWindow), bind = get(key.split('.').slice(0, -1).join('.'), iframe.contentWindow);
            if (is_function_isFunction(func)) {
                map[key] = func.bind(bind);
            }
        }
        catch (e) {
            if (false) {}
        }
        finally {
            (_a = iframe.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(iframe);
        }
    }
    return (_b = map[key]) !== null && _b !== void 0 ? _b : null;
};
const loadImage = (src, jodit) => jodit.async.promise((res, rej) => {
    const image = new Image(), onError = () => {
        jodit.e.off(image);
        rej === null || rej === void 0 ? void 0 : rej();
    }, onSuccess = () => {
        jodit.e.off(image);
        res(image);
    };
    jodit.e
        .one(image, 'load', onSuccess)
        .one(image, 'error', onError)
        .one(image, 'abort', onError);
    image.src = src;
    if (image.complete) {
        onSuccess();
    }
});
const keys = (obj, own = true) => {
    if (own) {
        return Object.keys(obj);
    }
    const props = [];
    for (const key in obj) {
        props.push(key);
    }
    return props;
};
const memorizeExec = (editor, _, { control }, preProcessValue) => {
    const key = `button${control.command}`;
    let value = (control.args && control.args[0]) || dataBind(editor, key);
    if (isVoid(value)) {
        return false;
    }
    dataBind(editor, key, value);
    if (preProcessValue) {
        value = preProcessValue(value);
    }
    editor.execCommand(control.command, false, value || undefined);
};

;// CONCATENATED MODULE: ./src/core/helpers/utils/set.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




function set(chain, value, obj) {
    if (!is_string_isString(chain) || !chain.length) {
        return;
    }
    const parts = chain.split('.');
    let result = obj, key = parts[0];
    for (let i = 0; i < parts.length - 1; i += 1) {
        key = parts[i];
        if (!isArray(result[key]) && !is_plain_object_isPlainObject(result[key])) {
            result[key] = isNumeric(parts[i + 1]) ? [] : {};
        }
        result = result[key];
    }
    if (result) {
        result[parts[parts.length - 1]] = value;
    }
}

;// CONCATENATED MODULE: ./src/core/helpers/utils/complete-url.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const completeUrl = (url) => {
    if (window.location.protocol === 'file:' && /^\/\//.test(url)) {
        url = 'https:' + url;
    }
    return url;
};

;// CONCATENATED MODULE: ./src/core/helpers/utils/append-script.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const alreadyLoadedList = new Map();
const cacheLoaders = (loader) => {
    return async (jodit, url) => {
        if (alreadyLoadedList.has(url)) {
            return alreadyLoadedList.get(url);
        }
        const promise = loader(jodit, url);
        alreadyLoadedList.set(url, promise);
        return promise;
    };
};
const appendScript = (jodit, url, callback) => {
    const script = jodit.c.element('script');
    script.type = 'text/javascript';
    script.async = true;
    if (is_function_isFunction(callback) && !jodit.isInDestruct) {
        jodit.e.on(script, 'load', callback);
    }
    if (!script.src) {
        script.src = completeUrl(url);
    }
    jodit.od.body.appendChild(script);
    return {
        callback,
        element: script
    };
};
const appendScriptAsync = cacheLoaders((jodit, url) => {
    return new Promise((resolve, reject) => {
        const { element } = appendScript(jodit, url, resolve);
        !jodit.isInDestruct && jodit.e.on(element, 'error', reject);
    });
});
const appendStyleAsync = cacheLoaders((jodit, url) => {
    return new Promise((resolve, reject) => {
        const link = jodit.c.element('link');
        link.rel = 'stylesheet';
        link.media = 'all';
        link.crossOrigin = 'anonymous';
        const callback = () => resolve(link);
        !jodit.isInDestruct &&
            jodit.e.on(link, 'load', callback).on(link, 'error', reject);
        link.href = completeUrl(url);
        if (jodit.o.shadowRoot) {
            jodit.o.shadowRoot.appendChild(link);
        }
        else {
            jodit.od.body.appendChild(link);
        }
    });
});
const loadNext = (jodit, urls, i = 0) => {
    if (!isString(urls[i])) {
        return Promise.resolve();
    }
    return appendScriptAsync(jodit, urls[i]).then(() => loadNext(jodit, urls, i + 1));
};
const loadNextStyle = (jodit, urls, i = 0) => {
    if (!isString(urls[i])) {
        return Promise.resolve();
    }
    return appendStyleAsync(jodit, urls[i]).then(() => loadNextStyle(jodit, urls, i + 1));
};

;// CONCATENATED MODULE: ./src/core/helpers/utils/build-query.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const buildQuery = (data, prefix) => {
    const str = [];
    const enc = encodeURIComponent;
    for (const dataKey in data) {
        if (Object.prototype.hasOwnProperty.call(data, dataKey)) {
            const k = prefix ? prefix + '[' + dataKey + ']' : dataKey;
            const v = data[dataKey];
            str.push(is_plain_object_isPlainObject(v) ? buildQuery(v, k) : enc(k) + '=' + enc(v));
        }
    }
    return str.join('&');
};

;// CONCATENATED MODULE: ./src/core/helpers/utils/extend.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function isAtom(obj) {
    return obj && obj.isAtom;
}
function markAsAtomic(obj) {
    Object.defineProperty(obj, 'isAtom', {
        enumerable: false,
        value: true,
        configurable: false
    });
    return obj;
}
function fastClone(object) {
    return JSON.parse(stringify(object));
}

;// CONCATENATED MODULE: ./src/core/helpers/utils/config-proto.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




function config_proto_ConfigProto(options, proto, deep = 0) {
    if (Object.getPrototypeOf(options) !== Object.prototype) {
        return options;
    }
    const def = config_Config.defaultOptions;
    if (is_string_isString(options.preset)) {
        if (def.presets[options.preset] !== undefined) {
            const preset = def.presets[options.preset];
            Object.keys(preset).forEach(subKey => {
                if (is_void_isVoid(options[subKey])) {
                    options[subKey] = preset[subKey];
                }
            });
        }
        delete options.preset;
    }
    const newOpt = {};
    Object.keys(options).forEach(key => {
        const opt = options[key], protoKey = proto ? proto[key] : null;
        if (is_plain_object_isPlainObject(opt) && is_plain_object_isPlainObject(protoKey) && !isAtom(opt)) {
            newOpt[key] = config_proto_ConfigProto(opt, protoKey, deep + 1);
            return;
        }
        if (deep !== 0 && isArray(opt) && !isAtom(opt) && isArray(protoKey)) {
            newOpt[key] = [...opt, ...protoKey.slice(opt.length)];
            return;
        }
        newOpt[key] = opt;
    });
    Object.setPrototypeOf(newOpt, proto);
    return newOpt;
}
function ConfigFlatten(obj) {
    return keys(obj, false).reduce((app, key) => {
        app[key] = obj[key];
        return app;
    }, {});
}

;// CONCATENATED MODULE: ./src/core/helpers/utils/convert-media-url-to-video-embed.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const convertMediaUrlToVideoEmbed = (url, width = 400, height = 345) => {
    if (!isURL(url)) {
        return url;
    }
    const parser = document.createElement('a'), pattern1 = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
    parser.href = url;
    if (!width) {
        width = 400;
    }
    if (!height) {
        height = 345;
    }
    const protocol = parser.protocol || '';
    switch (parser.hostname) {
        case 'www.vimeo.com':
        case 'vimeo.com':
            return pattern1.test(url)
                ? url.replace(pattern1, '<iframe width="' +
                    width +
                    '" height="' +
                    height +
                    '" src="' +
                    protocol +
                    '//player.vimeo.com/video/$1" frameborder="0" allowfullscreen></iframe>')
                : url;
        case 'youtube.com':
        case 'www.youtube.com':
        case 'youtu.be':
        case 'www.youtu.be': {
            const query = parser.search
                ? parseQuery(parser.search)
                : { v: parser.pathname.substr(1) };
            return query.v
                ? '<iframe width="' +
                    width +
                    '" height="' +
                    height +
                    '" src="' +
                    protocol +
                    '//www.youtube.com/embed/' +
                    query.v +
                    '" frameborder="0" allowfullscreen></iframe>'
                : url;
        }
    }
    return url;
};

;// CONCATENATED MODULE: ./src/core/helpers/utils/ctrl-key.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const ctrlKey = (e) => {
    if (typeof navigator !== 'undefined' &&
        navigator.userAgent.indexOf('Mac OS X') !== -1) {
        if (e.metaKey && !e.altKey) {
            return true;
        }
    }
    else if (e.ctrlKey && !e.altKey) {
        return true;
    }
    return false;
};

;// CONCATENATED MODULE: ./src/core/helpers/utils/default-language.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const default_language_defaultLanguage = (language, defaultLanguage = 'en') => {
    if (language !== 'auto' && is_string_isString(language)) {
        return language;
    }
    if (document.documentElement && document.documentElement.lang) {
        return document.documentElement.lang;
    }
    if (navigator.language) {
        return navigator.language.substr(0, 2);
    }
    return defaultLanguage;
};

;// CONCATENATED MODULE: ./src/core/helpers/utils/human-size-to-bytes.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const humanSizeToBytes = (human) => {
    if (/^[0-9.]+$/.test(human.toString())) {
        return parseFloat(human);
    }
    const format = human.substr(-2, 2).toUpperCase(), formats = ['KB', 'MB', 'GB', 'TB'], number = parseFloat(human.substr(0, human.length - 2));
    return formats.indexOf(format) !== -1
        ? number * Math.pow(1024, formats.indexOf(format) + 1)
        : parseInt(human, 10);
};

;// CONCATENATED MODULE: ./src/core/helpers/utils/parse-query.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const parse_query_parseQuery = (queryString) => {
    const query = {}, a = queryString.substr(1).split('&');
    for (let i = 0; i < a.length; i += 1) {
        const keyValue = a[i].split('=');
        query[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1] || '');
    }
    return query;
};

;// CONCATENATED MODULE: ./src/core/helpers/array/as-array.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const asArray = (a) => (isArray(a) ? a : [a]);

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-native-function.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isNativeFunction(f) {
    return (Boolean(f) &&
        (typeof f).toLowerCase() === 'function' &&
        (f === Function.prototype ||
            /^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code]\s*}\s*$/i.test(String(f))));
}

;// CONCATENATED MODULE: ./src/core/helpers/array/to-array.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const to_array_toArray = function toArray(...args) {
    var _a;
    const func = isNativeFunction(Array.from)
        ? Array.from
        : (_a = utils_reset('Array.from')) !== null && _a !== void 0 ? _a : Array.from;
    return func.apply(Array, args);
};

;// CONCATENATED MODULE: ./src/core/helpers/array/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




;// CONCATENATED MODULE: ./src/core/traits/elms.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class Elms {
    static getElm(elementName) {
        return this.container.querySelector(`.${this.getFullElName(elementName)}`);
    }
    static getElms(elementName) {
        return to_array_toArray(this.container.querySelectorAll(`.${this.getFullElName(elementName)}`));
    }
}

;// CONCATENATED MODULE: ./src/core/traits/mods.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


class Mods {
    static setMod(name, value, container) {
        name = name.toLowerCase();
        if (this.mods[name] === value) {
            return;
        }
        const mod = `${this.componentName}_${name}`, cl = (container || this.container).classList;
        to_array_toArray(cl).forEach(className => {
            if (className.indexOf(mod) === 0) {
                cl.remove(className);
            }
        });
        !is_void_isVoid(value) &&
            value !== '' &&
            cl.add(`${mod}_${value.toString().toLowerCase()}`);
        this.mods[name] = value;
    }
    static getMod(name) {
        var _a;
        return (_a = this.mods[name]) !== null && _a !== void 0 ? _a : null;
    }
}

;// CONCATENATED MODULE: ./src/core/traits/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



;// CONCATENATED MODULE: ./src/core/ui/icon.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class Icon {
    static getIcon(name) {
        if (/<svg/i.test(name)) {
            return name;
        }
        return (Icon.icons[name] ||
            Icon.icons[name.replace(/-/g, '_')] ||
            Icon.icons[name.replace(/_/g, '-')] ||
            Icon.icons[name.toLowerCase()]);
    }
    static exists(name) {
        return this.getIcon(name) !== undefined;
    }
    static get(name, defaultValue = '<span></span>') {
        return this.getIcon(name) || defaultValue;
    }
    static set(name, value) {
        this.icons[name.replace('_', '-')] = value;
        return this;
    }
    static makeIcon(jodit, icon) {
        var _a;
        let iconElement;
        if (icon) {
            const clearName = icon.name.replace(/[^a-zA-Z0-9]/g, '_');
            if (icon.iconURL) {
                iconElement = jodit.c.span();
                css(iconElement, 'backgroundImage', 'url(' +
                    icon.iconURL.replace('{basePath}', (jodit === null || jodit === void 0 ? void 0 : jodit.basePath) || '') +
                    ')');
            }
            else {
                const svg = jodit.e.fire('getIcon', icon.name, icon, clearName) ||
                    Icon.get(icon.name, '') ||
                    ((_a = jodit.o.extraIcons) === null || _a === void 0 ? void 0 : _a[icon.name]);
                if (svg) {
                    iconElement = jodit.c.fromHTML(svg.trim());
                    if (!/^<svg/i.test(icon.name)) {
                        iconElement.classList.add('jodit-icon_' + clearName);
                    }
                }
            }
        }
        if (iconElement) {
            iconElement.classList.add('jodit-icon');
            iconElement.style.fill = icon.fill;
        }
        return iconElement;
    }
}
Icon.icons = {};

;// CONCATENATED MODULE: ./src/core/ui/element.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





class UIElement extends view_component_ViewComponent {
    constructor(jodit, options) {
        super(jodit);
        this.name = '';
        this.__parentElement = null;
        this.mods = {};
        this.container = this.createContainer(options);
        Object.defineProperty(this.container, 'component', {
            value: this,
            configurable: true
        });
    }
    get parentElement() {
        return this.__parentElement;
    }
    set parentElement(parentElement) {
        this.__parentElement = parentElement;
        if (parentElement) {
            parentElement.hookStatus('beforeDestruct', () => this.destruct());
        }
        this.updateParentElement(this);
    }
    bubble(callback) {
        let parent = this.parentElement;
        while (parent) {
            callback(parent);
            parent = parent.parentElement;
        }
        return this;
    }
    updateParentElement(target) {
        var _a;
        (_a = this.__parentElement) === null || _a === void 0 ? void 0 : _a.updateParentElement(target);
        return this;
    }
    get(chain, obj) {
        return super.get(chain, obj) || this.getElm(chain);
    }
    closest(type) {
        const c = typeof type === 'object'
            ? (pe) => pe === type
            : (pe) => pe instanceof type;
        let pe = this.__parentElement;
        while (pe) {
            if (c(pe)) {
                return pe;
            }
            if (!pe.parentElement && pe.container.parentElement) {
                pe = UIElement.closestElement(pe.container.parentElement, UIElement);
            }
            else {
                pe = pe.parentElement;
            }
        }
        return null;
    }
    static closestElement(node, type) {
        const elm = dom_Dom.up(node, elm => {
            if (elm) {
                const { component } = elm;
                return component && component instanceof type;
            }
            return false;
        });
        return elm ? elm === null || elm === void 0 ? void 0 : elm.component : null;
    }
    setMod(name, value, container = this.container) {
        Mods.setMod.call(this, name, value, container);
        return this;
    }
    getMod(name) {
        return Mods.getMod.call(this, name);
    }
    getElm(elementName) {
        return Elms.getElm.call(this, elementName);
    }
    getElms(elementName) {
        return Elms.getElms.call(this, elementName);
    }
    update() {
    }
    appendTo(element) {
        element.appendChild(this.container);
        return this;
    }
    clearName(name) {
        return name.replace(/[^a-zA-Z0-9]/g, '_');
    }
    render(options) {
        return this.j.c.div(this.componentName);
    }
    createContainer(options) {
        const result = this.render(options);
        if (is_string_isString(result)) {
            const elm = this.j.c.fromHTML(result
                .replace(/\*([^*]+?)\*/g, (_, name) => Icon.get(name) || '')
                .replace(/&__/g, this.componentName + '__')
                .replace(/~([^~]+?)~/g, (_, s) => this.i18n(s)));
            elm.classList.add(this.componentName);
            return elm;
        }
        return result;
    }
    destruct() {
        dom_Dom.safeRemove(this.container);
        this.parentElement = null;
        return super.destruct();
    }
}

;// CONCATENATED MODULE: ./src/core/ui/button/button/button.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */









const UIButtonState = () => ({
    size: 'middle',
    type: 'button',
    name: '',
    value: '',
    variant: 'initial',
    disabled: false,
    activated: false,
    icon: {
        name: 'empty',
        fill: '',
        iconURL: ''
    },
    tooltip: '',
    text: '',
    tabIndex: undefined
});
let UIButton = class UIButton extends UIElement {
    constructor(jodit, state) {
        super(jodit);
        this.isButton = true;
        this.state = UIButtonState();
        this.actionHandlers = [];
        this.updateSize();
        this.onChangeSize();
        this.onChangeStatus();
        if (state) {
            this.hookStatus(statuses_STATUSES.ready, () => {
                this.setState(state);
            });
        }
    }
    className() {
        return 'UIButton';
    }
    setState(state) {
        Object.assign(this.state, state);
        return this;
    }
    onChangeSize() {
        this.setMod('size', this.state.size);
    }
    onChangeType() {
        utils_attr(this.container, 'type', this.state.type);
    }
    updateSize() {
        const pe = this.closest(UIList);
        if (pe) {
            this.state.size = pe.buttonSize;
            return;
        }
    }
    onChangeStatus() {
        this.setMod('variant', this.state.variant);
    }
    onChangeText() {
        this.text.textContent = this.jodit.i18n(this.state.text);
    }
    onChangeTextSetMode() {
        this.setMod('text-icons', Boolean(this.state.text.trim().length));
    }
    onChangeDisabled() {
        utils_attr(this.container, 'disabled', this.state.disabled || null);
    }
    onChangeActivated() {
        utils_attr(this.container, 'aria-pressed', this.state.activated);
    }
    onChangeName() {
        this.container.classList.add(`${this.componentName}_${this.clearName(this.state.name)}`);
        this.name = this.state.name;
        utils_attr(this.container, 'data-ref', this.state.name);
        utils_attr(this.container, 'ref', this.state.name);
    }
    onChangeTooltip() {
        if (this.get('j.o.useNativeTooltip')) {
            utils_attr(this.container, 'title', this.state.tooltip);
        }
        utils_attr(this.container, 'aria-label', this.state.tooltip);
    }
    onChangeTabIndex() {
        utils_attr(this.container, 'tabindex', this.state.tabIndex);
    }
    onChangeIcon() {
        const textIcons = this.get('j.o.textIcons');
        if (textIcons === true ||
            (is_function_isFunction(textIcons) && textIcons(this.state.name))) {
            return;
        }
        dom_Dom.detach(this.icon);
        const iconElement = Icon.makeIcon(this.j, this.state.icon);
        iconElement && this.icon.appendChild(iconElement);
    }
    focus() {
        this.container.focus();
    }
    isFocused() {
        const { activeElement } = this.od;
        return Boolean(activeElement && dom_Dom.isOrContains(this.container, activeElement));
    }
    createContainer() {
        const cn = this.componentName;
        const button = this.j.c.element('button', {
            class: cn,
            type: 'button',
            role: 'button',
            ariaPressed: false
        });
        this.icon = this.j.c.span(cn + '__icon');
        this.text = this.j.c.span(cn + '__text');
        button.appendChild(this.icon);
        button.appendChild(this.text);
        this.j.e.on(button, 'click', this.onActionFire);
        return button;
    }
    destruct() {
        this.j.e.off(this.container);
        return super.destruct();
    }
    onAction(callback) {
        this.actionHandlers.push(callback);
        return this;
    }
    onActionFire(e) {
        e.buffer = {
            actionTrigger: this
        };
        this.actionHandlers.forEach(callback => callback.call(this, e));
    }
};
__decorate([
    watch('state.size')
], UIButton.prototype, "onChangeSize", null);
__decorate([
    watch('state.type')
], UIButton.prototype, "onChangeType", null);
__decorate([
    watch('parentElement')
], UIButton.prototype, "updateSize", null);
__decorate([
    watch('state.variant')
], UIButton.prototype, "onChangeStatus", null);
__decorate([
    watch('state.text')
], UIButton.prototype, "onChangeText", null);
__decorate([
    watch('state.text')
], UIButton.prototype, "onChangeTextSetMode", null);
__decorate([
    watch('state.disabled')
], UIButton.prototype, "onChangeDisabled", null);
__decorate([
    watch('state.activated')
], UIButton.prototype, "onChangeActivated", null);
__decorate([
    watch('state.name')
], UIButton.prototype, "onChangeName", null);
__decorate([
    watch('state.tooltip')
], UIButton.prototype, "onChangeTooltip", null);
__decorate([
    watch('state.tabIndex')
], UIButton.prototype, "onChangeTabIndex", null);
__decorate([
    watch('state.icon')
], UIButton.prototype, "onChangeIcon", null);
__decorate([
    autobind
], UIButton.prototype, "onActionFire", null);
UIButton = __decorate([
    component
], UIButton);

function Button(jodit, stateOrText, text, variant) {
    const button = new UIButton(jodit);
    button.state.tabIndex = jodit.o.allowTabNavigation ? 0 : -1;
    if (is_string_isString(stateOrText)) {
        button.state.icon.name = stateOrText;
        button.state.name = stateOrText;
        if (variant) {
            button.state.variant = variant;
        }
        if (text) {
            button.state.text = text;
        }
    }
    else {
        button.setState(stateOrText);
    }
    return button;
}

;// CONCATENATED MODULE: ./src/core/ui/group/group.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var UIGroup_1;






let UIGroup = UIGroup_1 = class UIGroup extends UIElement {
    constructor(jodit, elements, options) {
        super(jodit, options);
        this.options = options;
        this.syncMod = false;
        this.elements = [];
        this.buttonSize = 'middle';
        elements === null || elements === void 0 ? void 0 : elements.forEach(elm => elm && this.append(elm));
        if (options === null || options === void 0 ? void 0 : options.name) {
            this.name = options.name;
        }
    }
    className() {
        return 'UIGroup';
    }
    get allChildren() {
        const result = [];
        const stack = [
            ...this.elements
        ];
        while (stack.length) {
            const elm = stack.shift();
            if (isArray(elm)) {
                stack.push(...elm);
            }
            else if (elm instanceof UIGroup_1) {
                stack.push(...elm.elements);
            }
            else {
                elm && result.push(elm);
            }
        }
        return result;
    }
    update() {
        this.elements.forEach(elm => elm.update());
        this.setMod('size', this.buttonSize);
    }
    append(elm, distElement) {
        if (isArray(elm)) {
            elm.forEach(item => this.append(item, distElement));
            return this;
        }
        this.elements.push(elm);
        if (elm.name) {
            elm.container.classList.add(this.getFullElName(elm.name));
        }
        if (distElement) {
            const distElm = this.getElm(distElement);
            assert(distElm != null, 'Element does not exist');
            distElm.appendChild(elm.container);
        }
        else {
            this.appendChildToContainer(elm.container);
        }
        elm.parentElement = this;
        elm.update();
        return this;
    }
    setMod(name, value) {
        if (this.syncMod) {
            this.elements.forEach(elm => elm.setMod(name, value));
        }
        return super.setMod(name, value);
    }
    appendChildToContainer(childContainer) {
        this.container.appendChild(childContainer);
    }
    remove(elm) {
        const index = this.elements.indexOf(elm);
        if (index !== -1) {
            this.elements.splice(index, 1);
            dom_Dom.safeRemove(elm.container);
            elm.parentElement = null;
        }
        return this;
    }
    clear() {
        this.elements.forEach(elm => elm.destruct());
        this.elements.length = 0;
        return this;
    }
    destruct() {
        this.clear();
        return super.destruct();
    }
};
__decorate([
    watch('buttonSize')
], UIGroup.prototype, "update", null);
UIGroup = UIGroup_1 = __decorate([
    component
], UIGroup);


;// CONCATENATED MODULE: ./src/core/ui/helpers/get-control-type.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function getControlType(button, controls) {
    let buttonControl;
    if (!controls) {
        controls = config_Config.defaultOptions.controls;
    }
    if (!is_string_isString(button)) {
        buttonControl = { name: 'empty', ...ConfigFlatten(button) };
        if (controls[buttonControl.name] !== undefined) {
            buttonControl = {
                ...ConfigFlatten(controls[buttonControl.name]),
                ...ConfigFlatten(buttonControl)
            };
        }
    }
    else {
        buttonControl = findControlType(button, controls) || {
            name: button,
            command: button,
            tooltip: button
        };
    }
    return buttonControl;
}
function findControlType(path, controls) {
    let [namespaceOrKey, key] = path.split(/\./);
    let store = controls;
    if (key != null) {
        if (controls[namespaceOrKey] !== undefined) {
            store = controls[namespaceOrKey];
        }
    }
    else {
        key = namespaceOrKey;
    }
    return store[key]
        ? {
            name: key,
            ...ConfigFlatten(store[key])
        }
        : undefined;
}

;// CONCATENATED MODULE: ./src/core/ui/helpers/get-strong-control-types.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




function getStrongControlTypes(items, controls) {
    const elements = isArray(items)
        ? items
        : keys(items, false).map(key => {
            const value = items[key] || {};
            return config_proto_ConfigProto({ name: key }, value);
        });
    return elements.map(item => getControlType(item, controls || config_Config.defaultOptions.controls));
}

;// CONCATENATED MODULE: ./src/core/ui/group/separator.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



let UISeparator = class UISeparator extends UIElement {
    className() {
        return 'UISeparator';
    }
};
UISeparator = __decorate([
    component
], UISeparator);


;// CONCATENATED MODULE: ./src/core/ui/group/spacer.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



let UISpacer = class UISpacer extends UIElement {
    className() {
        return 'UISpacer';
    }
};
UISpacer = __decorate([
    component
], UISpacer);


;// CONCATENATED MODULE: ./src/core/ui/helpers/buttons.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const isButtonGroup = (item) => {
    return isArray(item.buttons);
};
function flatButtonsSet(buttons, jodit) {
    const groups = jodit.getRegisteredButtonGroups();
    return new Set(buttons.reduce((acc, item) => {
        var _a;
        if (isButtonGroup(item)) {
            acc = acc.concat([
                ...item.buttons,
                ...((_a = groups[item.group]) !== null && _a !== void 0 ? _a : [])
            ]);
        }
        else {
            acc.push(item);
        }
        return acc;
    }, []));
}

;// CONCATENATED MODULE: ./src/core/ui/group/list.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */











let UIList = class UIList extends UIGroup {
    constructor(jodit) {
        super(jodit);
        this.mode = 'horizontal';
        this.removeButtons = [];
        this.onChangeMode();
    }
    className() {
        return 'UIList';
    }
    onChangeMode() {
        this.setMod('mode', this.mode);
    }
    makeGroup() {
        return new UIGroup(this.jodit);
    }
    get buttons() {
        return this.allChildren.filter(elm => elm instanceof UIButton);
    }
    getButtonsNames() {
        return this.buttons
            .map(a => (a instanceof UIButton && a.state.name) || '')
            .filter(a => a !== '');
    }
    setRemoveButtons(removeButtons) {
        this.removeButtons = removeButtons || [];
        return this;
    }
    build(items, target = null) {
        items = splitArray(items);
        this.clear();
        let lastBtnSeparator = false;
        let line = this.makeGroup();
        this.append(line);
        line.setMod('line', true);
        let group;
        const addButton = (control) => {
            let elm = null;
            switch (control.name) {
                case '\n':
                    line = this.makeGroup();
                    line.setMod('line', true);
                    group = this.makeGroup();
                    line.append(group);
                    this.append(line);
                    break;
                case '|':
                    if (!lastBtnSeparator) {
                        lastBtnSeparator = true;
                        elm = new UISeparator(this.j);
                    }
                    break;
                case '---': {
                    group.setMod('before-spacer', true);
                    const space = new UISpacer(this.j);
                    line.append(space);
                    group = this.makeGroup();
                    line.append(group);
                    lastBtnSeparator = false;
                    break;
                }
                default:
                    lastBtnSeparator = false;
                    elm = this.makeButton(control, target);
            }
            if (elm) {
                if (!group) {
                    group = this.makeGroup();
                    line.append(group);
                }
                group.append(elm);
            }
        };
        const isNotRemoved = (b) => !this.removeButtons.includes(b.name);
        items.forEach(item => {
            if (isButtonGroup(item)) {
                const buttons = item.buttons.filter(b => b);
                if (buttons.length) {
                    group = this.makeGroup();
                    group.setMod('separated', true).setMod('group', item.group);
                    line.append(group);
                    getStrongControlTypes(buttons, this.j.o.controls)
                        .filter(isNotRemoved)
                        .forEach(addButton);
                }
            }
            else {
                if (!group) {
                    group = this.makeGroup();
                    line.append(group);
                }
                const control = getControlType(item, this.j.o.controls);
                isNotRemoved(control) && addButton(control);
            }
        });
        this.update();
        return this;
    }
    makeButton(control, target) {
        return new UIButton(this.j);
    }
};
__decorate([
    watch('mode')
], UIList.prototype, "onChangeMode", null);
UIList = __decorate([
    component
], UIList);


;// CONCATENATED MODULE: ./src/core/ui/group/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





;// CONCATENATED MODULE: ./src/core/ui/button/group/group.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






let UIButtonGroup = class UIButtonGroup extends UIGroup {
    constructor(jodit, options = {
        radio: true
    }) {
        var _a, _b;
        super(jodit, (_a = options.options) === null || _a === void 0 ? void 0 : _a.map(opt => {
            const btn = new UIButton(jodit, {
                text: opt.text,
                value: opt.value,
                variant: 'primary'
            });
            btn.onAction(() => {
                this.select(opt.value);
            });
            return btn;
        }), options);
        this.options = options;
        this.select((_b = options.value) !== null && _b !== void 0 ? _b : 0);
    }
    className() {
        return 'UIButtonGroup';
    }
    render(options) {
        return `<div>
			<div class="&__label">~${options.label}~</div>
			<div class="&__options"></div>
		</div>`;
    }
    appendChildToContainer(childContainer) {
        const options = this.getElm('options');
        assert(options != null, 'Options does not exist');
        options.appendChild(childContainer);
    }
    select(indexOrValue) {
        var _a, _b;
        this.elements.forEach((elm, index) => {
            if (index === indexOrValue || elm.state.value === indexOrValue) {
                elm.state.activated = true;
            }
            else if (this.options.radio) {
                elm.state.activated = false;
            }
        });
        const result = this.elements
            .filter(elm => elm.state.activated)
            .map(elm => ({
            text: elm.state.text,
            value: elm.state.value
        }));
        this.jodit.e.fire(this, 'select', result);
        (_b = (_a = this.options).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, result);
    }
};
UIButtonGroup = __decorate([
    component
], UIButtonGroup);


;// CONCATENATED MODULE: ./src/core/ui/button/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



;// CONCATENATED MODULE: ./src/core/ui/popup/popup.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







class Popup extends UIElement {
    constructor(jodit, smart = true) {
        super(jodit);
        this.smart = smart;
        this.isOpened = false;
        this.strategy = 'leftBottom';
        this.viewBound = () => ({
            left: 0,
            top: 0,
            width: this.ow.innerWidth,
            height: this.ow.innerHeight
        });
        this.childrenPopups = new Set();
        utils_attr(this.container, 'role', 'popup');
    }
    className() {
        return 'Popup';
    }
    updateParentElement(target) {
        if (target !== this && target instanceof Popup) {
            this.childrenPopups.forEach(popup => {
                if (!target.closest(popup) && popup.isOpened) {
                    popup.close();
                }
            });
            if (!this.childrenPopups.has(target)) {
                this.j.e.on(target, 'beforeClose', () => {
                    this.childrenPopups.delete(target);
                });
            }
            this.childrenPopups.add(target);
        }
        return super.updateParentElement(target);
    }
    setContent(content) {
        dom_Dom.detach(this.container);
        const box = this.j.c.div(`${this.componentName}__content`);
        let elm;
        if (content instanceof UIElement) {
            elm = content.container;
            content.parentElement = this;
        }
        else if (is_string_isString(content)) {
            elm = this.j.c.fromHTML(content);
        }
        else {
            elm = content;
        }
        box.appendChild(elm);
        this.container.appendChild(box);
        this.updatePosition();
        return this;
    }
    open(getBound, keepPosition = false) {
        markOwner(this.jodit, this.container);
        this.calculateZIndex();
        this.isOpened = true;
        this.addGlobalListeners();
        this.targetBound = !keepPosition
            ? getBound
            : this.getKeepBound(getBound);
        const parentContainer = global_getContainer(this.jodit, Popup);
        if (parentContainer !== this.container.parentElement) {
            parentContainer.appendChild(this.container);
        }
        this.updatePosition();
        this.j.e.fire(this, 'afterOpen');
        return this;
    }
    calculateZIndex() {
        if (this.container.style.zIndex) {
            return;
        }
        const checkView = (view) => {
            const zIndex = view.container.style.zIndex || view.o.zIndex;
            if (zIndex) {
                this.setZIndex(1 + parseInt(zIndex.toString(), 10));
                return true;
            }
            return false;
        };
        if (checkView(this.j)) {
            return;
        }
        let pe = this.parentElement;
        while (pe) {
            if (checkView(pe.j)) {
                return;
            }
            if (pe.container.style.zIndex) {
                this.setZIndex(1 + parseInt(pe.container.style.zIndex.toString(), 10));
                return;
            }
            if (!pe.parentElement && pe.container.parentElement) {
                const elm = UIElement.closestElement(pe.container.parentElement, UIElement);
                if (elm) {
                    pe = elm;
                    continue;
                }
            }
            pe = pe.parentElement;
        }
    }
    getKeepBound(getBound) {
        const oldBound = getBound();
        const elmUnderCursor = this.od.elementFromPoint(oldBound.left, oldBound.top);
        if (!elmUnderCursor) {
            return getBound;
        }
        const element = dom_Dom.isHTMLElement(elmUnderCursor)
            ? elmUnderCursor
            : elmUnderCursor.parentElement;
        const oldPos = position(element, this.j);
        return () => {
            const bound = getBound();
            const newPos = position(element, this.j);
            return {
                ...bound,
                top: bound.top + (newPos.top - oldPos.top),
                left: bound.left + (newPos.left - oldPos.left)
            };
        };
    }
    updatePosition() {
        if (!this.isOpened) {
            return this;
        }
        const [pos, strategy] = this.calculatePosition(this.targetBound(), this.viewBound(), position(this.container, this.j));
        this.setMod('strategy', strategy);
        css(this.container, {
            left: pos.left,
            top: pos.top
        });
        this.childrenPopups.forEach(popup => popup.updatePosition());
        return this;
    }
    throttleUpdatePosition() {
        this.updatePosition();
    }
    calculatePosition(target, view, container, defaultStrategy = this.strategy) {
        const x = {
            left: target.left,
            right: target.left - (container.width - target.width)
        }, y = {
            bottom: target.top + target.height,
            top: target.top - container.height
        };
        const list = Object.keys(x).reduce((keys, xKey) => keys.concat(Object.keys(y).map(yKey => `${xKey}${ucfirst(yKey)}`)), []);
        const getPointByStrategy = (strategy) => {
            const [xKey, yKey] = kebabCase(strategy).split('-');
            return {
                left: x[xKey],
                top: y[yKey],
                width: container.width,
                height: container.height
            };
        };
        const getMatchStrategy = (inBox) => {
            let strategy = null;
            if (Popup.boxInView(getPointByStrategy(defaultStrategy), inBox)) {
                strategy = defaultStrategy;
            }
            else {
                strategy =
                    list.find((key) => {
                        if (Popup.boxInView(getPointByStrategy(key), inBox)) {
                            return key;
                        }
                        return;
                    }) || null;
            }
            return strategy;
        };
        let strategy = getMatchStrategy(position(this.j.container, this.j));
        if (!strategy || !Popup.boxInView(getPointByStrategy(strategy), view)) {
            strategy = getMatchStrategy(view) || strategy || defaultStrategy;
        }
        return [getPointByStrategy(strategy), strategy];
    }
    static boxInView(box, view) {
        const accuracy = 2;
        return (box.top - view.top >= -accuracy &&
            box.left - view.left >= -accuracy &&
            view.top + view.height - (box.top + box.height) >= -accuracy &&
            view.left + view.width - (box.left + box.width) >= -accuracy);
    }
    close() {
        if (!this.isOpened) {
            return this;
        }
        this.isOpened = false;
        this.childrenPopups.forEach(popup => popup.close());
        this.j.e.fire(this, 'beforeClose');
        this.j.e.fire('beforePopupClose', this);
        this.removeGlobalListeners();
        dom_Dom.safeRemove(this.container);
        return this;
    }
    closeOnOutsideClick(e) {
        if (!this.isOpened) {
            return;
        }
        const target = (is_function_isFunction(e.composedPath) && e.composedPath()[0]) || e.target;
        if (!target) {
            this.close();
            return;
        }
        const box = UIElement.closestElement(target, Popup);
        if (box && (this === box || box.closest(this))) {
            return;
        }
        this.close();
    }
    addGlobalListeners() {
        const up = this.throttleUpdatePosition, ow = this.ow;
        eventEmitter.on('closeAllPopups', this.close);
        if (this.smart) {
            this.j.e
                .on('escape', this.close)
                .on('mousedown touchstart', this.closeOnOutsideClick)
                .on(ow, 'mousedown touchstart', this.closeOnOutsideClick);
        }
        this.j.e
            .on('closeAllPopups', this.close)
            .on('resize', up)
            .on(this.container, 'scroll mousewheel', up)
            .on(ow, 'scroll', up)
            .on(ow, 'resize', up);
        dom_Dom.up(this.j.container, box => {
            box && this.j.e.on(box, 'scroll mousewheel', up);
        });
    }
    removeGlobalListeners() {
        const up = this.throttleUpdatePosition, ow = this.ow;
        eventEmitter.off('closeAllPopups', this.close);
        if (this.smart) {
            this.j.e
                .off('escape', this.close)
                .off('mousedown touchstart', this.closeOnOutsideClick)
                .off(ow, 'mousedown touchstart', this.closeOnOutsideClick);
        }
        this.j.e
            .off('closeAllPopups', this.close)
            .off('resize', up)
            .off(this.container, 'scroll mousewheel', up)
            .off(ow, 'scroll', up)
            .off(ow, 'resize', up);
        dom_Dom.up(this.j.container, box => {
            box && this.j.e.off(box, 'scroll mousewheel', up);
        });
    }
    setZIndex(index) {
        this.container.style.zIndex = index.toString();
    }
    destruct() {
        this.close();
        return super.destruct();
    }
}
__decorate([
    autobind
], Popup.prototype, "updatePosition", null);
__decorate([
    throttle(10),
    autobind
], Popup.prototype, "throttleUpdatePosition", null);
__decorate([
    autobind
], Popup.prototype, "close", null);
__decorate([
    autobind
], Popup.prototype, "closeOnOutsideClick", null);

;// CONCATENATED MODULE: ./src/core/ui/popup/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


;// CONCATENATED MODULE: ./src/core/ui/form/form.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




let UIForm = class UIForm extends UIGroup {
    constructor(...args) {
        var _a, _b;
        super(...args);
        if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.className) {
            this.container.classList.add((_b = this.options) === null || _b === void 0 ? void 0 : _b.className);
        }
    }
    className() {
        return 'UIForm';
    }
    submit() {
        this.j.e.fire(this.container, 'submit');
    }
    validate() {
        const inputs = this.allChildren.filter(elm => elm instanceof UIInput);
        for (const input of inputs) {
            if (!input.validate()) {
                return false;
            }
        }
        const selects = this.allChildren.filter(elm => elm instanceof UISelect);
        for (const select of selects) {
            if (!select.validate()) {
                return false;
            }
        }
        return true;
    }
    onSubmit(handler) {
        this.j.e.on(this.container, 'submit', () => {
            const inputs = this.allChildren.filter(elm => elm instanceof UIInput);
            if (!this.validate()) {
                return false;
            }
            handler(inputs.reduce((res, item) => {
                res[item.state.name] = item.value;
                return res;
            }, {}));
            return false;
        });
    }
    createContainer() {
        const form = this.j.c.element('form');
        form.classList.add(this.componentName);
        utils_attr(form, 'dir', this.j.o.direction || 'auto');
        return form;
    }
};
UIForm = __decorate([
    component
], UIForm);


;// CONCATENATED MODULE: ./src/core/ui/form/validators/input.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const required = function (input) {
    if (!trim_trim(input.value).length) {
        input.error = 'Please fill out this field';
        return false;
    }
    return true;
};
const url = function (input) {
    if (!is_url_isURL(trim_trim(input.value))) {
        input.error = 'Please enter a web address';
        return false;
    }
    return true;
};

;// CONCATENATED MODULE: ./src/core/ui/form/validators/select.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const select_required = function (select) {
    if (!trim_trim(select.value).length) {
        select.error = 'Please fill out this field';
        return false;
    }
    return true;
};

;// CONCATENATED MODULE: ./src/core/ui/form/validators/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





;// CONCATENATED MODULE: ./src/core/ui/form/inputs/input/input.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var UIInput_1;








let UIInput = UIInput_1 = class UIInput extends UIElement {
    constructor(jodit, options) {
        super(jodit, options);
        this.label = this.j.c.span(this.getFullElName('label'));
        this.icon = this.j.c.span(this.getFullElName('icon'));
        this.clearButton = this.j.c.span(this.getFullElName('clear'), Icon.get('cancel'));
        this.state = { ...UIInput_1.defaultState };
        this.__errorBox = this.j.c.span(this.getFullElName('error'));
        this.validators = new Set([]);
        if ((options === null || options === void 0 ? void 0 : options.value) !== undefined) {
            options.value = options.value.toString();
        }
        Object.assign(this.state, options);
        if (this.state.clearButton !== undefined) {
            this.j.e
                .on(this.clearButton, 'click', (e) => {
                e.preventDefault();
                this.nativeInput.value = '';
                this.j.e.fire(this.nativeInput, 'input');
                this.focus();
            })
                .on(this.nativeInput, 'input', () => {
                this.state.clearButton = Boolean(this.value.length);
            });
            this.state.clearButton = Boolean(this.value.length);
        }
        this.j.e
            .on(this.nativeInput, 'focus blur', () => {
            this.onChangeFocus();
        })
            .on(this.nativeInput, 'input change', this.onChangeValue);
        this.onChangeState();
        this.onChangeClassName();
        this.onChangeStateValue();
    }
    className() {
        return 'UIInput';
    }
    onChangeClear() {
        if (this.state.clearButton) {
            dom_Dom.after(this.nativeInput, this.clearButton);
        }
        else {
            dom_Dom.safeRemove(this.clearButton);
        }
    }
    onChangeClassName(ignore, oldClassName) {
        oldClassName && this.container.classList.remove(oldClassName);
        this.state.className &&
            this.container.classList.add(this.state.className);
    }
    onChangeState() {
        this.name = this.state.name;
        const input = this.nativeInput, { name, icon, type, ref, required, placeholder, autocomplete, label } = this.state;
        utils_attr(input, 'name', name);
        utils_attr(input, 'type', type);
        utils_attr(input, 'data-ref', ref || name);
        utils_attr(input, 'ref', ref || name);
        utils_attr(input, 'required', required || null);
        utils_attr(input, 'autocomplete', !autocomplete ? 'off' : null);
        utils_attr(input, 'placeholder', placeholder ? this.j.i18n(placeholder) : '');
        if (icon && Icon.exists(icon)) {
            dom_Dom.before(input, this.icon);
            this.icon.innerHTML = Icon.get(icon);
        }
        else {
            dom_Dom.safeRemove(this.icon);
        }
        if (label) {
            dom_Dom.before(this.wrapper, this.label);
            this.label.innerText = this.j.i18n(label);
        }
        else {
            dom_Dom.safeRemove(this.label);
        }
        this.updateValidators();
    }
    updateValidators() {
        var _a;
        this.validators.clear();
        if (this.state.required) {
            this.validators.add(required);
        }
        (_a = this.state.validators) === null || _a === void 0 ? void 0 : _a.forEach(name => {
            const validator = input_namespaceObject[name];
            validator && this.validators.add(validator);
        });
    }
    set error(value) {
        this.setMod('has-error', Boolean(value));
        if (!value) {
            dom_Dom.safeRemove(this.__errorBox);
        }
        else {
            this.__errorBox.innerText = this.j.i18n(value, this.j.i18n(this.state.label || ''));
            this.container.appendChild(this.__errorBox);
        }
    }
    get value() {
        return this.nativeInput.value;
    }
    set value(value) {
        if (this.value !== value) {
            this.nativeInput.value = value;
            this.onChangeValue();
        }
    }
    onChangeStateValue() {
        const value = this.state.value.toString();
        if (value !== this.value) {
            this.value = value;
        }
    }
    onChangeValue() {
        var _a, _b;
        const { value } = this;
        if (this.state.value !== value) {
            this.state.value = value;
            this.j.e.fire(this, 'change', value);
            (_b = (_a = this.state).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, value);
        }
    }
    validate() {
        this.error = '';
        return to_array_toArray(this.validators).every(validator => validator(this));
    }
    createContainer(options) {
        const container = super.createContainer();
        this.wrapper = this.j.c.div(this.getFullElName('wrapper'));
        if (!this.nativeInput) {
            this.nativeInput = this.createNativeInput();
        }
        const { nativeInput } = this;
        nativeInput.classList.add(this.getFullElName('input'));
        this.wrapper.appendChild(nativeInput);
        container.appendChild(this.wrapper);
        utils_attr(nativeInput, 'dir', this.j.o.direction || 'auto');
        return container;
    }
    createNativeInput(options) {
        return this.j.create.element('input');
    }
    focus() {
        this.nativeInput.focus();
    }
    get isFocused() {
        return this.nativeInput === this.j.od.activeElement;
    }
    onChangeFocus() {
        this.setMod('focused', this.isFocused);
    }
};
UIInput.defaultState = {
    className: '',
    autocomplete: true,
    name: '',
    value: '',
    icon: '',
    label: '',
    ref: '',
    type: 'text',
    placeholder: '',
    required: false,
    validators: []
};
__decorate([
    watch('state.clearButton')
], UIInput.prototype, "onChangeClear", null);
__decorate([
    watch('state.className')
], UIInput.prototype, "onChangeClassName", null);
__decorate([
    watch([
        'state.name',
        'state.type',
        'state.label',
        'state.placeholder',
        'state.autocomplete',
        'state.icon'
    ]),
    debounce()
], UIInput.prototype, "onChangeState", null);
__decorate([
    watch('state.value')
], UIInput.prototype, "onChangeStateValue", null);
__decorate([
    autobind
], UIInput.prototype, "onChangeValue", null);
UIInput = UIInput_1 = __decorate([
    component
], UIInput);


;// CONCATENATED MODULE: ./src/core/ui/form/inputs/area/area.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var UITextArea_1;




let UITextArea = UITextArea_1 = class UITextArea extends UIInput {
    constructor(jodit, state) {
        super(jodit, state);
        this.state = { ...UITextArea_1.defaultState };
        Object.assign(this.state, state);
        if (this.state.resizable === false) {
            this.nativeInput.style.resize = 'none';
        }
    }
    className() {
        return 'UITextArea';
    }
    createContainer(options) {
        this.nativeInput = this.j.create.element('textarea');
        return super.createContainer(options);
    }
};
UITextArea.defaultState = {
    ...UIInput.defaultState,
    size: 5,
    resizable: true
};
UITextArea = UITextArea_1 = __decorate([
    component
], UITextArea);


;// CONCATENATED MODULE: ./src/core/ui/form/inputs/checkbox/checkbox.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var UICheckbox_1;





let UICheckbox = UICheckbox_1 = class UICheckbox extends UIInput {
    constructor(jodit, options) {
        super(jodit, { ...options, type: 'checkbox' });
        this.state = { ...UICheckbox_1.defaultState };
        Object.assign(this.state, options);
    }
    className() {
        return 'UICheckbox';
    }
    render() {
        return this.j.c.element('label', {
            className: this.componentName
        });
    }
    onChangeChecked() {
        this.value = this.state.checked.toString();
        this.nativeInput.checked = this.state.checked;
        this.setMod('checked', this.state.checked);
    }
    onChangeNativeCheckBox() {
        this.state.checked = this.nativeInput.checked;
    }
    onChangeSwitch() {
        this.setMod('switch', this.state.switch);
        let slider = this.getElm('switch-slider');
        if (this.state.switch) {
            if (!slider) {
                slider = this.j.c.div(this.getFullElName('switch-slider'));
            }
            dom_Dom.after(this.nativeInput, slider);
        }
        else {
            dom_Dom.safeRemove(slider);
        }
    }
};
UICheckbox.defaultState = {
    ...UIInput.defaultState,
    checked: false,
    switch: false
};
__decorate([
    watch('state.checked'),
    hook('ready')
], UICheckbox.prototype, "onChangeChecked", null);
__decorate([
    watch('nativeInput:change')
], UICheckbox.prototype, "onChangeNativeCheckBox", null);
__decorate([
    watch('state.switch'),
    hook('ready')
], UICheckbox.prototype, "onChangeSwitch", null);
UICheckbox = UICheckbox_1 = __decorate([
    component
], UICheckbox);


;// CONCATENATED MODULE: ./src/core/ui/form/inputs/select/select.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var UISelect_1;






let UISelect = UISelect_1 = class UISelect extends UIInput {
    constructor(jodit, state) {
        super(jodit, state);
        this.state = { ...UISelect_1.defaultState };
        Object.assign(this.state, state);
    }
    className() {
        return 'UISelect';
    }
    createContainer(state) {
        var _a;
        const container = super.createContainer(state);
        const { j } = this, { nativeInput } = this;
        const opt = () => j.create.element('option');
        if (state.placeholder !== undefined) {
            const option = opt();
            option.value = '';
            option.text = j.i18n(state.placeholder);
            nativeInput.add(option);
        }
        (_a = state.options) === null || _a === void 0 ? void 0 : _a.forEach(element => {
            const option = opt();
            option.value = element.value.toString();
            option.text = j.i18n(element.text);
            nativeInput.add(option);
        });
        if (state.size && state.size > 0) {
            utils_attr(nativeInput, 'size', state.size);
        }
        if (state.multiple) {
            utils_attr(nativeInput, 'multiple', '');
        }
        return container;
    }
    createNativeInput() {
        return this.j.create.element('select');
    }
    updateValidators() {
        super.updateValidators();
        if (this.state.required) {
            this.validators.delete(required);
            this.validators.add(select_required);
        }
    }
};
UISelect.defaultState = {
    ...UIInput.defaultState,
    options: [],
    size: 1,
    multiple: false
};
UISelect = UISelect_1 = __decorate([
    component
], UISelect);


;// CONCATENATED MODULE: ./src/core/ui/form/inputs/file/file.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





let UIFileInput = class UIFileInput extends UIInput {
    constructor(jodit, options) {
        super(jodit, {
            type: 'file',
            ...options
        });
        this.state = {
            ...UIInput.defaultState,
            type: 'file',
            onlyImages: true
        };
    }
    className() {
        return 'UIFileInput';
    }
    createContainer(options) {
        this.button = new UIButton(this.j, {
            icon: {
                name: 'plus'
            }
        });
        const { container } = this.button;
        if (!this.nativeInput) {
            this.nativeInput = this.createNativeInput(options);
        }
        const { nativeInput } = this;
        nativeInput.classList.add(this.getFullElName('input'));
        container.classList.add(this.componentName);
        container.appendChild(nativeInput);
        return container;
    }
    createNativeInput(options) {
        return this.j.create.fromHTML(`<input
			type="file"
			accept="${options.onlyImages ? 'image/*' : '*'}"
			tabindex="-1"
			dir="auto"
			multiple=""
		/>`);
    }
};
UIFileInput = __decorate([
    component
], UIFileInput);


;// CONCATENATED MODULE: ./src/core/ui/form/inputs/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






;// CONCATENATED MODULE: ./src/core/ui/form/block/block.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





let UIBlock = class UIBlock extends UIGroup {
    constructor(jodit, elements, options = {
        align: 'left'
    }) {
        super(jodit, elements);
        this.options = options;
        this.setMod('align', this.options.align || 'left');
        this.setMod('width', this.options.width || '');
        this.options.mod && this.setMod(this.options.mod, true);
        this.options.className &&
            this.container.classList.add(this.options.className);
        utils_attr(this.container, 'data-ref', options.ref);
        utils_attr(this.container, 'ref', options.ref);
    }
    className() {
        return 'UIBlock';
    }
};
UIBlock = __decorate([
    component
], UIBlock);


;// CONCATENATED MODULE: ./src/core/ui/form/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




;// CONCATENATED MODULE: ./src/core/ui/progress-bar/progress-bar.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



class ProgressBar extends UIElement {
    className() {
        return 'ProgressBar';
    }
    render() {
        return '<div><div></div></div>';
    }
    show() {
        const container = this.j.workplace || this.j.container;
        container.appendChild(this.container);
        return this;
    }
    hide() {
        dom_Dom.safeRemove(this.container);
        return this;
    }
    progress(percentage) {
        this.container.style.width = percentage.toFixed(2) + '%';
        return this;
    }
    destruct() {
        this.hide();
        return super.destruct();
    }
}

;// CONCATENATED MODULE: ./src/core/ui/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */








;// CONCATENATED MODULE: ./src/core/helpers/utils/selector.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







let temp = 1;
const $$temp = () => {
    temp++;
    return temp;
};
function selector_$$(selector, root) {
    let result;
    if (false) {}
    else {
        result = root.querySelectorAll(selector);
    }
    return [].slice.call(result);
}
const getXPathByElement = (element, root) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
        return '';
    }
    if (!element.parentNode || root === element) {
        return '';
    }
    if (element.id) {
        return "//*[@id='" + element.id + "']";
    }
    const sames = [].filter.call(element.parentNode.childNodes, (x) => x.nodeName === element.nodeName);
    return (getXPathByElement(element.parentNode, root) +
        '/' +
        element.nodeName.toLowerCase() +
        (sames.length > 1
            ? '[' + (toArray(sames).indexOf(element) + 1) + ']'
            : ''));
};
const refs = (root) => {
    if (root instanceof UIElement) {
        root = root.container;
    }
    return selector_$$('[ref],[data-ref]', root).reduce((def, child) => {
        const key = utils_attr(child, '-ref');
        if (key && is_string_isString(key)) {
            def[camelCase(key)] = child;
            def[key] = child;
        }
        return def;
    }, {});
};
const cssPath = (el) => {
    if (!dom_Dom.isElement(el)) {
        return null;
    }
    const path = [];
    let start = el;
    while (start && start.nodeType === Node.ELEMENT_NODE) {
        let selector = start.nodeName.toLowerCase();
        if (start.id) {
            selector += '#' + start.id;
            path.unshift(selector);
            break;
        }
        else {
            let sib = start, nth = 1;
            do {
                sib = sib.previousElementSibling;
                if (sib && sib.nodeName.toLowerCase() === selector) {
                    nth++;
                }
            } while (sib);
            selector += ':nth-of-type(' + nth + ')';
        }
        path.unshift(selector);
        start = start.parentNode;
    }
    return path.join(' > ');
};
function resolveElement(element, od) {
    let resolved = element;
    if (is_string_isString(element)) {
        try {
            resolved = od.querySelector(element);
        }
        catch (_a) {
            throw error_error('String "' + element + '" should be valid HTML selector');
        }
    }
    if (!resolved ||
        typeof resolved !== 'object' ||
        !dom_Dom.isElement(resolved) ||
        !resolved.cloneNode) {
        throw error_error('Element "' + element + '" should be string or HTMLElement instance');
    }
    return resolved;
}

;// CONCATENATED MODULE: ./src/core/helpers/utils/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

























;// CONCATENATED MODULE: ./src/core/helpers/async/set-timeout.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function set_timeout_setTimeout(callback, timeout, ...args) {
    if (!timeout) {
        callback.call(null, ...args);
    }
    else {
        return window.setTimeout(callback, timeout, ...args);
    }
    return 0;
}
function set_timeout_clearTimeout(timer) {
    window.clearTimeout(timer);
}

;// CONCATENATED MODULE: ./src/core/helpers/async/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


;// CONCATENATED MODULE: ./src/core/helpers/html/apply-styles.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function normalizeCSS(s) {
    return s
        .replace(/mso-[a-z-]+:[\s]*[^;]+;/gi, '')
        .replace(/mso-[a-z-]+:[\s]*[^";]+$/gi, '')
        .replace(/border[a-z-]*:[\s]*[^;]+;/gi, '')
        .replace(/([0-9.]+)(pt|cm)/gi, (match, units, metrics) => {
        switch (metrics.toLowerCase()) {
            case 'pt':
                return (parseFloat(units) * 1.328).toFixed(0) + 'px';
            case 'cm':
                return (parseFloat(units) * 0.02645833).toFixed(0) + 'px';
        }
        return match;
    });
}
function applyStyles(html) {
    if (html.indexOf('<html ') === -1) {
        return html;
    }
    html = html.substring(html.indexOf('<html '), html.length);
    html = html.substring(0, html.lastIndexOf('</html>') + '</html>'.length);
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    let convertedString = '', collection = [], rules = [];
    try {
        const iframeDoc = iframe.contentDocument ||
            (iframe.contentWindow ? iframe.contentWindow.document : null);
        if (iframeDoc) {
            iframeDoc.open();
            iframeDoc.write(html);
            iframeDoc.close();
            if (iframeDoc.styleSheets.length) {
                rules = iframeDoc.styleSheets[iframeDoc.styleSheets.length - 1].cssRules;
            }
            for (let idx = 0; idx < rules.length; idx += 1) {
                if (rules[idx].selectorText === '') {
                    continue;
                }
                collection = $$(rules[idx].selectorText, iframeDoc.body);
                collection.forEach((elm) => {
                    elm.style.cssText = normalizeCSS(rules[idx].style.cssText + ';' + elm.style.cssText);
                });
            }
            Dom.each(iframeDoc.body, node => {
                if (Dom.isElement(node)) {
                    const elm = node;
                    const css = elm.style.cssText;
                    if (css) {
                        elm.style.cssText = normalizeCSS(css);
                    }
                    if (elm.hasAttribute('lang')) {
                        elm.removeAttribute('lang');
                    }
                }
            });
            convertedString = iframeDoc.firstChild
                ? trim(iframeDoc.body.innerHTML)
                : '';
        }
    }
    catch (_a) {
    }
    finally {
        Dom.safeRemove(iframe);
    }
    if (convertedString) {
        html = convertedString;
    }
    return trim(html
        .replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, '')
        .replace(/<!--[^>]*>/g, ''));
}

;// CONCATENATED MODULE: ./src/core/helpers/html/clean-from-word.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function cleanFromWord(html) {
    if (html.indexOf('<html ') !== -1) {
        html = html.substring(html.indexOf('<html '), html.length);
        html = html.substring(0, html.lastIndexOf('</html>') + '</html>'.length);
    }
    let convertedString = '';
    try {
        const div = document.createElement('div');
        div.innerHTML = html;
        const marks = [];
        if (div.firstChild) {
            Dom.all(div, node => {
                if (!node) {
                    return;
                }
                switch (node.nodeType) {
                    case Node.ELEMENT_NODE:
                        switch (node.nodeName) {
                            case 'STYLE':
                            case 'LINK':
                            case 'META':
                                marks.push(node);
                                break;
                            case 'W:SDT':
                            case 'W:SDTPR':
                            case 'FONT':
                                Dom.unwrap(node);
                                break;
                            default:
                                toArray(node.attributes).forEach((attr) => {
                                    if ([
                                        'src',
                                        'href',
                                        'rel',
                                        'content'
                                    ].indexOf(attr.name.toLowerCase()) === -1) {
                                        node.removeAttribute(attr.name);
                                    }
                                });
                        }
                        break;
                    case Node.TEXT_NODE:
                        break;
                    default:
                        marks.push(node);
                }
            });
        }
        marks.forEach(Dom.safeRemove);
        convertedString = div.innerHTML;
    }
    catch (e) { }
    if (convertedString) {
        html = convertedString;
    }
    html = html.split(/(\n)/).filter(trim).join('\n');
    return html
        .replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, '')
        .replace(/<!--[^>]*>/g, '');
}

;// CONCATENATED MODULE: ./src/core/helpers/html/strip-tags.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





function stripTags(html, doc = document) {
    const tmp = doc.createElement('div');
    if (isString(html)) {
        tmp.innerHTML = html;
    }
    else {
        tmp.appendChild(html);
    }
    $$('DIV, P, BR, H1, H2, H3, H4, H5, H6, HR', tmp).forEach(p => {
        const pr = p.parentNode;
        if (!pr) {
            return;
        }
        const nx = p.nextSibling;
        if (Dom.isText(nx) && /^\s/.test(nx.nodeValue || '')) {
            return;
        }
        if (nx) {
            pr.insertBefore(doc.createTextNode(' '), nx);
        }
    });
    return trim(tmp.innerText) || '';
}
function safeHTML(box, options) {
    if (!Dom.isElement(box)) {
        return;
    }
    const removeOnError = (elm) => attr(elm, 'onerror', null), safeLink = (elm) => {
        const href = elm.getAttribute('href');
        if (href && href.trim().indexOf('javascript') === 0) {
            attr(elm, 'href', location.protocol + '//' + href);
        }
    };
    if (options.removeOnError) {
        removeOnError(box);
        $$('[onerror]', box).forEach(removeOnError);
    }
    if (options.safeJavaScriptLink) {
        safeLink(box);
        $$('a[href^="javascript"]', box).forEach(safeLink);
    }
}

;// CONCATENATED MODULE: ./src/core/helpers/html/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






;// CONCATENATED MODULE: ./src/core/helpers/size/get-scroll-parent.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function getScrollParent(node) {
    if (!node) {
        return null;
    }
    const isElement = dom_Dom.isHTMLElement(node);
    const overflowY = isElement && css(node, 'overflowY');
    const isScrollable = isElement && overflowY !== 'visible' && overflowY !== 'hidden';
    if (isScrollable && node.scrollHeight >= node.clientHeight) {
        return node;
    }
    return (getScrollParent(node.parentNode) ||
        document.scrollingElement ||
        document.body);
}

;// CONCATENATED MODULE: ./src/core/helpers/size/position.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function position(elm, jodit, recurse = false) {
    const rect = elm.getBoundingClientRect();
    let xPos = rect.left, yPos = rect.top;
    if (is_jodit_object_isJoditObject(jodit) && jodit.iframe && !recurse) {
        const { left, top } = position(jodit.iframe, jodit, true);
        xPos += left;
        yPos += top;
    }
    return {
        left: Math.round(xPos),
        top: Math.round(yPos),
        width: Math.round(elm.offsetWidth),
        height: Math.round(elm.offsetHeight)
    };
}

;// CONCATENATED MODULE: ./src/core/helpers/size/object-size.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function size(subject) {
    if (is_string_isString(subject) || isArray(subject)) {
        return subject.length;
    }
    if (is_plain_object_isPlainObject(subject)) {
        return Object.keys(subject).length;
    }
    return 0;
}

;// CONCATENATED MODULE: ./src/core/helpers/size/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







;// CONCATENATED MODULE: ./src/core/helpers/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */










;// CONCATENATED MODULE: ./src/core/async/async.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class Async {
    constructor() {
        var _a, _b, _c, _d;
        this.timers = new Map();
        this.promisesRejections = new Set();
        this.requestsIdle = new Set();
        this.requestIdleCallbackNative = (_b = (_a = window['requestIdleCallback']) === null || _a === void 0 ? void 0 : _a.bind(window)) !== null && _b !== void 0 ? _b : ((callback) => {
            const start = Date.now();
            return this.setTimeout(() => {
                callback({
                    didTimeout: false,
                    timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
                });
            }, 1);
        });
        this.cancelIdleCallbackNative = (_d = (_c = window['cancelIdleCallback']) === null || _c === void 0 ? void 0 : _c.bind(window)) !== null && _d !== void 0 ? _d : ((request) => {
            this.clearTimeout(request);
        });
        this.isDestructed = false;
    }
    delay(timeout) {
        return this.promise(resolve => this.setTimeout(resolve, timeout));
    }
    setTimeout(callback, timeout, ...args) {
        if (this.isDestructed) {
            return 0;
        }
        let options = {};
        if (!isNumber(timeout)) {
            options = timeout;
            timeout = options.timeout || 0;
        }
        if (options.label) {
            this.clearLabel(options.label);
        }
        const timer = set_timeout_setTimeout(callback, timeout, ...args), key = options.label || timer;
        this.timers.set(key, timer);
        return timer;
    }
    clearLabel(label) {
        if (label && this.timers.has(label)) {
            set_timeout_clearTimeout(this.timers.get(label));
            this.timers.delete(label);
        }
    }
    clearTimeout(timerOrLabel) {
        if (is_string_isString(timerOrLabel)) {
            return this.clearLabel(timerOrLabel);
        }
        set_timeout_clearTimeout(timerOrLabel);
        this.timers.delete(timerOrLabel);
    }
    debounce(fn, timeout, firstCallImmediately = false) {
        let timer = 0, fired = false;
        const promises = [];
        const callFn = (...args) => {
            if (!fired) {
                timer = 0;
                const res = fn(...args);
                fired = true;
                if (promises.length) {
                    const runPromises = () => {
                        promises.forEach(res => res());
                        promises.length = 0;
                    };
                    is_promise_isPromise(res) ? res.finally(runPromises) : runPromises();
                }
            }
        };
        const onFire = (...args) => {
            fired = false;
            if (!timeout) {
                callFn(...args);
            }
            else {
                if (!timer && firstCallImmediately) {
                    callFn(...args);
                }
                set_timeout_clearTimeout(timer);
                timer = this.setTimeout(() => callFn(...args), is_function_isFunction(timeout) ? timeout() : timeout);
                this.timers.set(fn, timer);
            }
        };
        return is_plain_object_isPlainObject(timeout) && timeout.promisify
            ? (...args) => {
                const promise = this.promise(res => {
                    promises.push(res);
                });
                onFire(...args);
                return promise;
            }
            : onFire;
    }
    throttle(fn, timeout, ignore = false) {
        let timer = null, needInvoke, callee, lastArgs;
        return (...args) => {
            needInvoke = true;
            lastArgs = args;
            if (!timeout) {
                fn(...lastArgs);
                return;
            }
            if (!timer) {
                callee = () => {
                    if (needInvoke) {
                        fn(...lastArgs);
                        needInvoke = false;
                        timer = this.setTimeout(callee, is_function_isFunction(timeout) ? timeout() : timeout);
                        this.timers.set(callee, timer);
                    }
                    else {
                        timer = null;
                    }
                };
                callee();
            }
        };
    }
    promise(executor) {
        let rejectCallback = () => { };
        const promise = new Promise((resolve, reject) => {
            this.promisesRejections.add(reject);
            rejectCallback = reject;
            return executor(resolve, reject);
        });
        if (!promise.finally && "es2018" !== 'es2018') {}
        promise.finally(() => {
            this.promisesRejections.delete(rejectCallback);
        });
        promise.rejectCallback = rejectCallback;
        return promise;
    }
    promiseState(p) {
        if (p.status) {
            return p.status;
        }
        if (!Promise.race) {
            return new Promise(resolve => {
                p.then(v => {
                    resolve('fulfilled');
                    return v;
                }, e => {
                    resolve('rejected');
                    throw e;
                });
                this.setTimeout(() => {
                    resolve('pending');
                }, 100);
            });
        }
        const t = {};
        return Promise.race([p, t]).then(v => (v === t ? 'pending' : 'fulfilled'), () => 'rejected');
    }
    requestIdleCallback(callback) {
        const request = this.requestIdleCallbackNative(callback);
        this.requestsIdle.add(request);
        return request;
    }
    requestIdlePromise() {
        return this.promise(res => {
            const request = this.requestIdleCallback(() => res(request));
        });
    }
    cancelIdleCallback(request) {
        this.requestsIdle.delete(request);
        return this.cancelIdleCallbackNative(request);
    }
    clear() {
        this.requestsIdle.forEach(key => {
            this.cancelIdleCallback(key);
        });
        this.timers.forEach(key => {
            set_timeout_clearTimeout(this.timers.get(key));
        });
        this.timers.clear();
        this.promisesRejections.forEach(reject => {
            reject();
        });
        this.promisesRejections.clear();
    }
    destruct() {
        this.clear();
        this.isDestructed = true;
    }
}

;// CONCATENATED MODULE: ./src/core/async/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


;// CONCATENATED MODULE: ./src/core/request/response.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Response {
    constructor(request, status, statusText, body) {
        this.request = request;
        this.status = status;
        this.statusText = statusText;
        this.body = body;
    }
    get url() {
        return this.request.url;
    }
    async json() {
        return JSON.parse(this.body);
    }
    text() {
        return Promise.resolve(this.body);
    }
    async blob() {
        return this.body;
    }
}

;// CONCATENATED MODULE: ./src/core/request/config.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

config_Config.prototype.defaultAjaxOptions = {
    successStatuses: [200, 201, 202],
    dataType: 'json',
    method: 'GET',
    url: '',
    data: null,
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    headers: {
        'X-REQUESTED-WITH': 'XMLHttpRequest'
    },
    withCredentials: false,
    xhr() {
        return new XMLHttpRequest();
    }
};

;// CONCATENATED MODULE: ./src/core/request/ajax.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




class ajax_Ajax {
    constructor(jodit, options) {
        this.jodit = jodit;
        this.resolved = false;
        this.activated = false;
        this.options = config_proto_ConfigProto(options || {}, config_Config.prototype.defaultAjaxOptions);
        this.xhr = this.o.xhr ? this.o.xhr() : new XMLHttpRequest();
        jodit && jodit.e && jodit.e.on('beforeDestruct', () => this.destruct());
    }
    __buildParams(obj, prefix) {
        if (is_function_isFunction(this.o.queryBuild)) {
            return this.o.queryBuild.call(this, obj, prefix);
        }
        if (is_string_isString(obj) ||
            (this.j.ow.FormData &&
                obj instanceof this.j.ow.FormData)) {
            return obj;
        }
        return buildQuery(obj);
    }
    get o() {
        return this.options;
    }
    get j() {
        return this.jodit;
    }
    abort() {
        try {
            this.xhr.abort();
        }
        catch (_a) { }
        return this;
    }
    send() {
        this.activated = true;
        const { xhr, o } = this;
        const request = this.prepareRequest();
        return this.j.async.promise((resolve, reject) => {
            var _a;
            const onReject = () => {
                reject(error_error('Connection error'));
            };
            const onResolve = () => {
                this.resolved = true;
                resolve(new Response(request, xhr.status, xhr.statusText, !xhr.responseType ? xhr.responseText : xhr.response));
            };
            xhr.onload = onResolve;
            xhr.onabort = onReject;
            xhr.onerror = onReject;
            xhr.ontimeout = onReject;
            if (o.responseType) {
                xhr.responseType = o.responseType;
            }
            xhr.onprogress = (e) => {
                var _a, _b;
                let percentComplete = 0;
                if (e.lengthComputable) {
                    percentComplete = (e.loaded / e.total) * 100;
                }
                (_b = (_a = this.options).onProgress) === null || _b === void 0 ? void 0 : _b.call(_a, percentComplete);
            };
            xhr.onreadystatechange = () => {
                var _a, _b;
                (_b = (_a = this.options).onProgress) === null || _b === void 0 ? void 0 : _b.call(_a, 10);
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (o.successStatuses.includes(xhr.status)) {
                        onResolve();
                    }
                    else {
                        reject(error_error(xhr.statusText || 'Connection error'));
                    }
                }
            };
            xhr.withCredentials = (_a = o.withCredentials) !== null && _a !== void 0 ? _a : false;
            const { url, data, method } = request;
            xhr.open(method, url, true);
            if (o.contentType && xhr.setRequestHeader) {
                xhr.setRequestHeader('Content-type', o.contentType);
            }
            const { headers } = o;
            if (headers && xhr.setRequestHeader) {
                Object.keys(headers).forEach(key => {
                    xhr.setRequestHeader(key, headers[key]);
                });
            }
            this.j.async.setTimeout(() => {
                xhr.send(data ? this.__buildParams(data) : undefined);
            }, 0);
        });
    }
    prepareRequest() {
        if (!this.o.url) {
            throw error_error('Need URL for AJAX request');
        }
        let url = this.o.url;
        const data = this.o.data;
        const method = (this.o.method || 'get').toLowerCase();
        if (method === 'get' && data && is_plain_object_isPlainObject(data)) {
            const qIndex = url.indexOf('?');
            if (qIndex !== -1) {
                const urlData = parse_query_parseQuery(url);
                url =
                    url.substr(0, qIndex) +
                        '?' +
                        buildQuery({ ...urlData, ...data });
            }
            else {
                url += '?' + buildQuery(this.o.data);
            }
        }
        const request = {
            url,
            method,
            data
        };
        ajax_Ajax.log.splice(100);
        ajax_Ajax.log.push(request);
        return request;
    }
    destruct() {
        if (this.activated && !this.resolved) {
            this.abort();
            this.resolved = true;
        }
    }
}
ajax_Ajax.log = [];

;// CONCATENATED MODULE: ./src/core/request/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



;// CONCATENATED MODULE: ./src/modules/context-menu/context-menu.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




class ContextMenu extends Popup {
    className() {
        return 'ContextMenu';
    }
    show(x, y, actions) {
        const self = this, content = this.j.c.div(this.getFullElName('actions'));
        if (!isArray(actions)) {
            return;
        }
        actions.forEach(item => {
            if (!item) {
                return;
            }
            const action = Button(this.jodit, item.icon || 'empty', item.title);
            this.jodit && action.setParentView(this.jodit);
            action.setMod('context', 'menu');
            action.onAction((e) => {
                var _a;
                (_a = item.exec) === null || _a === void 0 ? void 0 : _a.call(self, e);
                self.close();
                return false;
            });
            content.appendChild(action.container);
        });
        super
            .setContent(content)
            .open(() => ({ left: x, top: y, width: 0, height: 0 }), true);
    }
}

;// CONCATENATED MODULE: ./src/core/storage/engines/local-storage-provider.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const canUsePersistentStorage = (() => {
    const canUse = () => {
        const tmpKey = '___Jodit___' + Math.random().toString();
        try {
            localStorage.setItem(tmpKey, '1');
            const result = localStorage.getItem(tmpKey) === '1';
            localStorage.removeItem(tmpKey);
            return result;
        }
        catch (_a) { }
        return false;
    };
    let result;
    return () => {
        if (result === undefined) {
            result = canUse();
        }
        return result;
    };
})();
class LocalStorageProvider {
    constructor(rootKey) {
        this.rootKey = rootKey;
    }
    set(key, value) {
        try {
            const buffer = localStorage.getItem(this.rootKey);
            const json = buffer ? JSON.parse(buffer) : {};
            json[key] = value;
            localStorage.setItem(this.rootKey, JSON.stringify(json));
        }
        catch (_a) { }
        return this;
    }
    delete(key) {
        try {
            localStorage.removeItem(this.rootKey);
        }
        catch (_a) { }
        return this;
    }
    get(key) {
        try {
            const buffer = localStorage.getItem(this.rootKey);
            const json = buffer ? JSON.parse(buffer) : {};
            return json[key] !== undefined ? json[key] : null;
        }
        catch (_a) { }
    }
    exists(key) {
        return this.get(key) != null;
    }
    clear() {
        try {
            localStorage.removeItem(this.rootKey);
        }
        catch (_a) { }
        return this;
    }
}

;// CONCATENATED MODULE: ./src/core/storage/engines/memory-storage-provider.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class MemoryStorageProvider {
    constructor() {
        this.data = new Map();
    }
    set(key, value) {
        this.data.set(key, value);
        return this;
    }
    delete(key) {
        this.data.delete(key);
        return this;
    }
    get(key) {
        return this.data.get(key);
    }
    exists(key) {
        return this.data.has(key);
    }
    clear() {
        this.data.clear();
        return this;
    }
}

;// CONCATENATED MODULE: ./src/core/storage/storage.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const StorageKey = 'Jodit_';
class Storage {
    constructor(provider, suffix) {
        this.provider = provider;
        this.prefix = StorageKey;
        if (suffix) {
            this.prefix += suffix;
        }
    }
    set(key, value) {
        this.provider.set(camelCase(this.prefix + key), value);
        return this;
    }
    delete(key) {
        this.provider.delete(camelCase(this.prefix + key));
        return this;
    }
    get(key) {
        return this.provider.get(camelCase(this.prefix + key));
    }
    exists(key) {
        return this.provider.exists(camelCase(this.prefix + key));
    }
    clear() {
        this.provider.clear();
        return this;
    }
    static makeStorage(persistent = false, suffix) {
        let provider;
        if (persistent && canUsePersistentStorage()) {
            provider = new LocalStorageProvider(StorageKey + suffix);
        }
        if (!provider) {
            provider = new MemoryStorageProvider();
        }
        return new Storage(provider, suffix);
    }
}

;// CONCATENATED MODULE: ./src/core/storage/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




;// CONCATENATED MODULE: ./src/core/view/view.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */










class View extends Component {
    constructor(options, isJodit = false) {
        super();
        this.isJodit = isJodit;
        this.isView = true;
        this.mods = {};
        this.components = new Set();
        this.version = "3.14.2";
        this.async = new Async();
        this.buffer = Storage.makeStorage();
        this.storage = Storage.makeStorage(true, this.componentName);
        this.OPTIONS = View.defaultOptions;
        this.__isFullSize = false;
        this.__whoLocked = '';
        this.isLockedNotBy = (name) => this.isLocked && this.__whoLocked !== name;
        this.__modulesInstances = new Map();
        this.id = new Date().getTime().toString();
        this.buffer = Storage.makeStorage();
        this.initOptions(options);
        this.initOwners();
        this.events = new EventEmitter(this.od);
        this.create = new Create(this.od);
        this.container = this.c.div();
        this.container.classList.add('jodit');
        this.progressbar = new ProgressBar(this);
    }
    setMod(...[name, value]) {
        Mods.setMod.call(this, name, value);
        return this;
    }
    getMod(name) {
        return Mods.getMod.call(this, name);
    }
    getElm(elementName) {
        return Elms.getElm.call(this, elementName);
    }
    getElms(elementName) {
        return Elms.getElms.call(this, elementName);
    }
    get basePath() {
        if (this.o.basePath) {
            return this.o.basePath;
        }
        return BASE_PATH;
    }
    get defaultTimeout() {
        return is_void_isVoid(this.o.defaultTimeout) ? 100 : this.o.defaultTimeout;
    }
    get c() {
        return this.create;
    }
    get container() {
        return this.__container;
    }
    set container(container) {
        this.__container = container;
    }
    get e() {
        return this.events;
    }
    get options() {
        return this.__options;
    }
    set options(options) {
        this.__options = options;
    }
    get o() {
        return this.options;
    }
    i18n(text, ...params) {
        return i18n(text, params, this.options);
    }
    toggleFullSize(isFullSize) {
        if (isFullSize === undefined) {
            isFullSize = !this.__isFullSize;
        }
        if (isFullSize === this.__isFullSize) {
            return;
        }
        this.__isFullSize = isFullSize;
        if (this.events) {
            this.e.fire('toggleFullSize', isFullSize);
        }
    }
    get isLocked() {
        return this.__whoLocked !== '';
    }
    lock(name = 'any') {
        if (!this.isLocked) {
            this.__whoLocked = name;
            return true;
        }
        return false;
    }
    unlock() {
        if (this.isLocked) {
            this.__whoLocked = '';
            return true;
        }
        return false;
    }
    get isFullSize() {
        return this.__isFullSize;
    }
    getVersion() {
        return "3.14.2";
    }
    static getVersion() {
        return "3.14.2";
    }
    initOptions(options) {
        this.options = config_proto_ConfigProto(options || {}, config_proto_ConfigProto(this.options || {}, View.defaultOptions));
    }
    initOwners() {
        var _a;
        this.ownerWindow = (_a = this.o.ownerWindow) !== null && _a !== void 0 ? _a : window;
    }
    attachEvents(options) {
        if (!options) {
            return;
        }
        const e = options === null || options === void 0 ? void 0 : options.events;
        e && Object.keys(e).forEach((key) => this.e.on(key, e[key]));
    }
    getInstance(moduleName, options) {
        const instance = this.e.fire(camelCase('getInstance_' + moduleName), options);
        if (instance) {
            return instance;
        }
        const module = modules[moduleName], mi = this.__modulesInstances;
        if (!is_function_isFunction(module)) {
            throw error_error('Need real module name');
        }
        if (!mi.has(moduleName)) {
            const instance = module.prototype instanceof view_component_ViewComponent
                ? new module(this, options)
                : new module(options);
            this.components.add(instance);
            mi.set(moduleName, instance);
        }
        return mi.get(moduleName);
    }
    addDisclaimer(elm) {
        this.container.appendChild(elm);
    }
    beforeDestruct() {
        this.e.fire(statuses_STATUSES.beforeDestruct, this);
        this.components.forEach(component => {
            if (isDestructable(component) && !component.isInDestruct) {
                component.destruct();
            }
        });
        this.components.clear();
    }
    destruct() {
        if (this.isDestructed) {
            return;
        }
        if (this.async) {
            this.async.destruct();
        }
        if (this.events) {
            this.e.destruct();
        }
        if (this.buffer) {
            this.buffer.clear();
        }
        dom_Dom.safeRemove(this.container);
        super.destruct();
    }
}
__decorate([
    hook(statuses_STATUSES.beforeDestruct)
], View.prototype, "beforeDestruct", null);
View.defaultOptions = {
    extraButtons: [],
    textIcons: false,
    namespace: '',
    removeButtons: [],
    zIndex: 100002,
    defaultTimeout: 100,
    fullsize: false,
    showTooltip: true,
    useNativeTooltip: false,
    buttons: [],
    globalFullSize: true
};

;// CONCATENATED MODULE: ./src/modules/toolbar/collection/collection.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






let ToolbarCollection = class ToolbarCollection extends UIList {
    constructor(jodit) {
        super(jodit);
        this.listenEvents = 'updateToolbar changeStack mousedown mouseup keydown change afterInit readonly afterResize ' +
            'selectionchange changeSelection focus afterSetMode touchstart focus blur';
        this.update = this.j.async.debounce(this.immediateUpdate, () => this.j.defaultTimeout);
        this.initEvents();
    }
    className() {
        return 'ToolbarCollection';
    }
    get firstButton() {
        const [button] = this.buttons;
        return button || null;
    }
    makeButton(control, target = null) {
        return makeButton(this.j, control, target);
    }
    shouldBeActive(button) {
        return undefined;
    }
    shouldBeDisabled(button) {
        return undefined;
    }
    getTarget(button) {
        return button.target || null;
    }
    immediateUpdate() {
        if (this.isDestructed || this.j.isLocked) {
            return;
        }
        super.update();
        this.j.e.fire('afterUpdateToolbar');
    }
    setDirection(direction) {
        this.container.style.direction = direction;
        this.container.setAttribute('dir', direction);
    }
    initEvents() {
        this.j.e
            .on(this.listenEvents, this.update)
            .on('afterSetMode focus', this.immediateUpdate);
    }
    hide() {
        this.container.remove();
    }
    show() {
        this.appendTo(this.j.toolbarContainer);
    }
    showInline(bound) {
        throw error_error('The method is not implemented for this class.');
    }
    build(items, target = null) {
        const itemsWithGroupps = this.j.e.fire('beforeToolbarBuild', items);
        if (itemsWithGroupps) {
            items = itemsWithGroupps;
        }
        super.build(items, target);
        return this;
    }
    destruct() {
        if (this.isDestructed) {
            return;
        }
        this.j.e
            .off(this.listenEvents, this.update)
            .off('afterSetMode focus', this.immediateUpdate);
        super.destruct();
    }
};
__decorate([
    autobind
], ToolbarCollection.prototype, "immediateUpdate", null);
ToolbarCollection = __decorate([
    component
], ToolbarCollection);


;// CONCATENATED MODULE: ./src/modules/toolbar/collection/editor-collection.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






let ToolbarEditorCollection = class ToolbarEditorCollection extends ToolbarCollection {
    constructor(jodit) {
        super(jodit);
        this.checkActiveStatus = (cssObject, node) => {
            let matches = 0, total = 0;
            Object.keys(cssObject).forEach((cssProperty) => {
                const cssValue = cssObject[cssProperty];
                if (is_function_isFunction(cssValue)) {
                    if (cssValue(this.j, css(node, cssProperty).toString())) {
                        matches += 1;
                    }
                }
                else {
                    if (cssValue.indexOf(css(node, cssProperty).toString()) !== -1) {
                        matches += 1;
                    }
                }
                total += 1;
            });
            return total === matches;
        };
        this.prependInvisibleInput(this.container);
    }
    className() {
        return 'ToolbarEditorCollection';
    }
    shouldBeDisabled(button) {
        const disabled = super.shouldBeDisabled(button);
        if (disabled !== undefined) {
            return disabled;
        }
        const mode = button.control.mode === undefined
            ? MODE_WYSIWYG
            : button.control.mode;
        return !(mode === MODE_SPLIT || mode === this.j.getRealMode());
    }
    shouldBeActive(button) {
        const active = super.shouldBeActive(button);
        if (active !== undefined) {
            return active;
        }
        const element = this.j.selection ? this.j.s.current() : null;
        if (!element) {
            return false;
        }
        let elm;
        if (button.control.tags) {
            const tags = button.control.tags;
            elm = element;
            if (dom_Dom.up(elm, (node) => {
                if (node &&
                    tags.indexOf(node.nodeName.toLowerCase()) !== -1) {
                    return true;
                }
            }, this.j.editor)) {
                return true;
            }
        }
        if (button.control.css) {
            const css = button.control.css;
            elm = element;
            if (dom_Dom.up(elm, (node) => {
                if (node && !dom_Dom.isText(node)) {
                    return this.checkActiveStatus(css, node);
                }
            }, this.j.editor)) {
                return true;
            }
        }
        return false;
    }
    getTarget(button) {
        return button.target || this.j.s.current() || null;
    }
    prependInvisibleInput(container) {
        const input = this.j.create.element('input', {
            tabIndex: -1,
            disabled: true,
            style: 'width: 0; height:0; position: absolute; visibility: hidden;'
        });
        dom_Dom.appendChildFirst(container, input);
    }
    showInline(bound) {
        this.jodit.e.fire('showInlineToolbar', bound);
    }
    hide() {
        this.jodit.e.fire('hidePopup');
        super.hide();
        this.jodit.e.fire('toggleToolbar');
    }
    show() {
        super.show();
        this.jodit.e.fire('toggleToolbar');
    }
};
ToolbarEditorCollection = __decorate([
    component
], ToolbarEditorCollection);


;// CONCATENATED MODULE: ./src/modules/toolbar/button/button.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */












let ToolbarButton = class ToolbarButton extends UIButton {
    constructor(jodit, control, target = null) {
        super(jodit);
        this.control = control;
        this.target = target;
        this.state = {
            ...UIButtonState(),
            theme: 'toolbar',
            currentValue: '',
            hasTrigger: false
        };
        jodit.e.on([this.button, this.trigger], 'mousedown', (e) => e.preventDefault());
        this.onAction(this.onClick);
        this.hookStatus(statuses_STATUSES.ready, () => {
            this.initFromControl();
            this.initTooltip();
            this.update();
        });
    }
    className() {
        return 'ToolbarButton';
    }
    get toolbar() {
        return this.closest(ToolbarCollection);
    }
    get button() {
        return this.container.querySelector(`button.${this.componentName}__button`);
    }
    update() {
        const { control, state } = this, tc = this.closest(ToolbarCollection);
        state.disabled = this.calculateDisabledStatus(tc);
        state.activated = this.calculateActivatedStatus(tc);
        if (is_function_isFunction(control.update)) {
            control.update(this);
        }
        super.update();
    }
    calculateActivatedStatus(tc) {
        if (is_jodit_object_isJoditObject(this.j) && !this.j.editorIsActive) {
            return false;
        }
        if (is_function_isFunction(this.control.isActive) &&
            this.control.isActive(this.j, this.control, this)) {
            return true;
        }
        return Boolean(tc && tc.shouldBeActive(this));
    }
    calculateDisabledStatus(tc) {
        if (this.j.o.disabled) {
            return true;
        }
        if (this.j.o.readonly &&
            (!this.j.o.activeButtonsInReadOnly ||
                !this.j.o.activeButtonsInReadOnly.includes(this.control.name))) {
            return true;
        }
        if (is_function_isFunction(this.control.isDisabled) &&
            this.control.isDisabled(this.j, this.control, this)) {
            return true;
        }
        return Boolean(tc && tc.shouldBeDisabled(this));
    }
    onChangeActivated() {
        utils_attr(this.button, 'aria-pressed', this.state.activated);
        super.onChangeActivated();
    }
    onChangeText() {
        if (is_function_isFunction(this.control.template)) {
            this.text.innerHTML = this.control.template(this.j, this.control.name, this.j.i18n(this.state.text));
        }
        else {
            super.onChangeText();
        }
        this.setMod('text-icons', Boolean(this.text.innerText.trim().length));
    }
    onChangeTabIndex() {
        utils_attr(this.button, 'tabindex', this.state.tabIndex);
    }
    onChangeTooltip() {
        utils_attr(this.button, 'aria-label', this.state.tooltip);
        super.onChangeTooltip();
    }
    createContainer() {
        const cn = this.componentName;
        const container = this.j.c.span(cn), button = super.createContainer();
        utils_attr(container, 'role', 'listitem');
        button.classList.remove(cn);
        button.classList.add(cn + '__button');
        Object.defineProperty(button, 'component', {
            value: this
        });
        container.appendChild(button);
        this.trigger = this.j.c.fromHTML(`<span role="trigger" class="${cn}__trigger">${Icon.get('chevron')}</span>`);
        this.j.e.on(this.trigger, 'click', this.onTriggerClick.bind(this));
        return container;
    }
    focus() {
        var _a;
        (_a = this.container.querySelector('button')) === null || _a === void 0 ? void 0 : _a.focus();
    }
    onChangeHasTrigger() {
        if (this.state.hasTrigger) {
            this.container.appendChild(this.trigger);
        }
        else {
            dom_Dom.safeRemove(this.trigger);
        }
        this.setMod('with-trigger', this.state.hasTrigger || null);
    }
    onChangeDisabled() {
        const dsb = this.state.disabled ? 'disabled' : null;
        utils_attr(this.trigger, 'disabled', dsb);
        utils_attr(this.button, 'disabled', dsb);
        utils_attr(this.container, 'disabled', dsb);
    }
    initTooltip() {
        if (!this.j.o.textIcons &&
            this.j.o.showTooltip &&
            !this.j.o.useNativeTooltip) {
            this.j.e
                .off(this.container, 'mouseenter mouseleave')
                .on(this.container, 'mousemove', (e) => {
                if (!this.state.tooltip) {
                    return;
                }
                !this.state.disabled &&
                    this.j.e.fire('delayShowTooltip', () => ({
                        x: e.clientX + 10,
                        y: e.clientY + 10
                    }), this.state.tooltip);
            })
                .on(this.container, 'mouseleave', () => {
                this.j.e.fire('hideTooltip');
            });
        }
    }
    initFromControl() {
        var _a;
        const { control: ctr, state } = this;
        this.updateSize();
        state.name = ctr.name;
        const { textIcons } = this.j.o;
        if (textIcons === true ||
            (is_function_isFunction(textIcons) && textIcons(ctr.name)) ||
            ctr.template) {
            state.icon = UIButtonState().icon;
            state.text = ctr.text || ctr.name;
        }
        else {
            if (ctr.iconURL) {
                state.icon.iconURL = ctr.iconURL;
            }
            else {
                const name = ctr.icon || ctr.name;
                state.icon.name =
                    Icon.exists(name) || ((_a = this.j.o.extraIcons) === null || _a === void 0 ? void 0 : _a[name])
                        ? name
                        : '';
            }
            if (!ctr.iconURL && !state.icon.name) {
                state.text = ctr.text || ctr.name;
            }
        }
        if (ctr.tooltip) {
            state.tooltip = this.j.i18n(is_function_isFunction(ctr.tooltip)
                ? ctr.tooltip(this.j, ctr, this)
                : ctr.tooltip);
        }
        state.hasTrigger = Boolean(ctr.list || (ctr.popup && ctr.exec));
    }
    onTriggerClick(e) {
        var _a, _b, _c;
        const { control: ctr } = this;
        e.buffer = {
            actionTrigger: this
        };
        if (ctr.list) {
            return this.openControlList(ctr);
        }
        if (is_function_isFunction(ctr.popup)) {
            const popup = new Popup(this.j);
            popup.parentElement = this;
            if (this.j.e.fire(camelCase(`before-${ctr.name}-open-popup`), this.target, ctr, popup) !== false) {
                const target = (_c = (_b = (_a = this.toolbar) === null || _a === void 0 ? void 0 : _a.getTarget(this)) !== null && _b !== void 0 ? _b : this.target) !== null && _c !== void 0 ? _c : null;
                const elm = ctr.popup(this.j, target, ctr, popup.close, this);
                if (elm) {
                    popup
                        .setContent(is_string_isString(elm) ? this.j.c.fromHTML(elm) : elm)
                        .open(() => position(this.container));
                }
            }
            this.j.e.fire(camelCase(`after-${ctr.name}-open-popup`), popup.container);
        }
    }
    openControlList(control) {
        var _a;
        const controls = (_a = this.jodit.options.controls) !== null && _a !== void 0 ? _a : {}, getControl = (key) => findControlType(key, controls);
        const list = control.list, menu = new Popup(this.j), toolbar = makeCollection(this.j);
        menu.parentElement = this;
        toolbar.parentElement = menu;
        toolbar.mode = 'vertical';
        const getButton = (key, value) => {
            if (is_string_isString(value) && getControl(value)) {
                return {
                    name: value.toString(),
                    ...getControl(value)
                };
            }
            if (is_string_isString(key) && getControl(key)) {
                return {
                    name: key.toString(),
                    ...getControl(key),
                    ...(typeof value === 'object' ? value : {})
                };
            }
            const childControl = {
                name: key.toString(),
                template: control.childTemplate,
                exec: control.exec,
                data: control.data,
                command: control.command,
                isActive: control.isChildActive,
                isDisabled: control.isChildDisabled,
                mode: control.mode,
                args: [...(control.args ? control.args : []), key, value]
            };
            if (is_string_isString(value)) {
                childControl.text = value;
            }
            return childControl;
        };
        toolbar.build(isArray(list)
            ? list.map(getButton)
            : keys(list, false).map(key => getButton(key, list[key])), this.target);
        menu.setContent(toolbar.container).open(() => position(this.container));
        this.state.activated = true;
        this.j.e.on(menu, 'afterClose', () => {
            this.state.activated = false;
        });
    }
    onClick(originalEvent) {
        var _a, _b, _c, _d, _e, _f, _g;
        const { control: ctr } = this;
        if (is_function_isFunction(ctr.exec)) {
            const target = (_c = (_b = (_a = this.toolbar) === null || _a === void 0 ? void 0 : _a.getTarget(this)) !== null && _b !== void 0 ? _b : this.target) !== null && _c !== void 0 ? _c : null;
            const result = ctr.exec(this.j, target, {
                control: ctr,
                originalEvent,
                button: this
            });
            if (result !== false && result !== true) {
                (_e = (_d = this.j) === null || _d === void 0 ? void 0 : _d.e) === null || _e === void 0 ? void 0 : _e.fire('synchro');
                if (this.parentElement) {
                    this.parentElement.update();
                }
                (_g = (_f = this.j) === null || _f === void 0 ? void 0 : _f.e) === null || _g === void 0 ? void 0 : _g.fire('closeAllPopups afterExec');
            }
            if (result !== false) {
                return;
            }
        }
        if (ctr.list) {
            return this.openControlList(ctr);
        }
        if (is_function_isFunction(ctr.popup)) {
            return this.onTriggerClick(originalEvent);
        }
        if (ctr.command || ctr.name) {
            call(is_jodit_object_isJoditObject(this.j)
                ? this.j.execCommand.bind(this.j)
                : this.j.od.execCommand.bind(this.j.od), ctr.command || ctr.name, false, ctr.args && ctr.args[0]);
            this.j.e.fire('closeAllPopups');
        }
    }
};
__decorate([
    watch('state.tooltip')
], ToolbarButton.prototype, "onChangeTooltip", null);
__decorate([
    watch('state.hasTrigger')
], ToolbarButton.prototype, "onChangeHasTrigger", null);
ToolbarButton = __decorate([
    component
], ToolbarButton);


;// CONCATENATED MODULE: ./src/modules/toolbar/button/content.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






let ToolbarContent = class ToolbarContent extends UIButton {
    constructor(jodit, control, target = null) {
        super(jodit);
        this.control = control;
        this.target = target;
        this.container.classList.add(`${this.componentName}_${this.clearName(control.name)}`);
        utils_attr(this.container, 'role', 'content');
    }
    className() {
        return 'ToolbarContent';
    }
    update() {
        const content = this.control.getContent(this.j, this.control, this);
        if (is_string_isString(content) || content.parentNode !== this.container) {
            dom_Dom.detach(this.container);
            this.container.appendChild(is_string_isString(content) ? this.j.create.fromHTML(content) : content);
        }
        super.update();
    }
    createContainer() {
        return this.j.c.span(this.componentName);
    }
};
ToolbarContent = __decorate([
    component
], ToolbarContent);


;// CONCATENATED MODULE: ./src/modules/toolbar/factory.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





function makeCollection(jodit, parentElement) {
    const collection = is_jodit_object_isJoditObject(jodit)
        ? new ToolbarEditorCollection(jodit)
        : new ToolbarCollection(jodit);
    if (jodit.o.textIcons) {
        collection.container.classList.add('jodit_text_icons');
    }
    if (parentElement) {
        collection.parentElement = parentElement;
    }
    if (jodit.o.toolbarButtonSize) {
        collection.buttonSize = jodit.o.toolbarButtonSize;
    }
    return collection;
}
function makeButton(jodit, control, target = null) {
    if (is_function_isFunction(control.getContent)) {
        return new ToolbarContent(jodit, control, target);
    }
    const button = new ToolbarButton(jodit, control, target);
    button.state.tabIndex = jodit.o.allowTabNavigation ? 0 : -1;
    return button;
}

;// CONCATENATED MODULE: ./src/core/view/view-with-toolbar.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */









class ViewWithToolbar extends View {
    constructor(options, isJodit = false) {
        super(options, isJodit);
        this.toolbar = makeCollection(this);
        this.defaultToolbarContainer = this.c.div('jodit-toolbar__box');
        this.registeredButtons = new Set();
        this.groupToButtons = {};
        this.isJodit = false;
        this.isJodit = isJodit;
        this.e.on('beforeToolbarBuild', this.beforeToolbarBuild);
    }
    get toolbarContainer() {
        if (!this.o.fullsize &&
            (is_string_isString(this.o.toolbar) || dom_Dom.isHTMLElement(this.o.toolbar))) {
            return resolveElement(this.o.toolbar, this.o.shadowRoot || this.od);
        }
        this.o.toolbar &&
            dom_Dom.appendChildFirst(this.container, this.defaultToolbarContainer);
        return this.defaultToolbarContainer;
    }
    setPanel(element) {
        this.o.toolbar = element;
        this.buildToolbar();
    }
    buildToolbar() {
        if (!this.o.toolbar) {
            return;
        }
        const buttons = this.o.buttons
            ? splitArray(this.o.buttons)
            : [];
        this.toolbar
            .setRemoveButtons(this.o.removeButtons)
            .build(buttons.concat(this.o.extraButtons || []))
            .appendTo(this.toolbarContainer);
    }
    getRegisteredButtonGroups() {
        return this.groupToButtons;
    }
    registerButton(btn) {
        var _a;
        this.registeredButtons.add(btn);
        const group = (_a = btn.group) !== null && _a !== void 0 ? _a : 'other';
        if (!this.groupToButtons[group]) {
            this.groupToButtons[group] = [];
        }
        if (btn.position != null) {
            this.groupToButtons[group][btn.position] = btn.name;
        }
        else {
            this.groupToButtons[group].push(btn.name);
        }
        return this;
    }
    unregisterButton(btn) {
        var _a;
        this.registeredButtons.delete(btn);
        const groupName = (_a = btn.group) !== null && _a !== void 0 ? _a : 'other', group = this.groupToButtons[groupName];
        if (group) {
            const index = group.indexOf(btn.name);
            if (index !== -1) {
                group.splice(index, 1);
            }
            if (group.length === 0) {
                delete this.groupToButtons[groupName];
            }
        }
        return this;
    }
    beforeToolbarBuild(items) {
        if (Object.keys(this.groupToButtons).length) {
            return items.map(item => {
                if (isButtonGroup(item) &&
                    item.group &&
                    this.groupToButtons[item.group]) {
                    return {
                        group: item.group,
                        buttons: [
                            ...item.buttons,
                            ...this.groupToButtons[item.group]
                        ]
                    };
                }
                return item;
            });
        }
    }
    destruct() {
        if (this.isDestructed) {
            return;
        }
        this.setStatus(statuses_STATUSES.beforeDestruct);
        this.e.off('beforeToolbarBuild', this.beforeToolbarBuild);
        this.toolbar.destruct();
        super.destruct();
    }
}
__decorate([
    autobind
], ViewWithToolbar.prototype, "beforeToolbarBuild", null);

;// CONCATENATED MODULE: ./src/modules/dialog/dialog.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */












config_Config.prototype.dialog = {
    namespace: '',
    extraButtons: [],
    resizable: true,
    draggable: true,
    buttons: ['dialog.close'],
    removeButtons: []
};
config_Config.prototype.controls.dialog = {
    close: {
        icon: 'cancel',
        exec: dialog => {
            dialog.close();
            dialog.toggleFullSizeBox(false);
        }
    }
};
let Dialog = class Dialog extends ViewWithToolbar {
    constructor(options) {
        super(options);
        this.destroyAfterClose = false;
        this.moved = false;
        this.iSetMaximization = false;
        this.resizable = false;
        this.draggable = false;
        this.startX = 0;
        this.startY = 0;
        this.startPoint = { x: 0, y: 0, w: 0, h: 0 };
        this.lockSelect = () => {
            this.setMod('moved', true);
        };
        this.unlockSelect = () => {
            this.setMod('moved', false);
        };
        this.onResize = () => {
            if (this.options &&
                this.o.resizable &&
                !this.moved &&
                this.isOpened &&
                !this.offsetX &&
                !this.offsetY) {
                this.setPosition();
            }
        };
        this.isModal = false;
        this.isOpened = false;
        const self = this;
        self.options = config_proto_ConfigProto(options !== null && options !== void 0 ? options : {}, config_proto_ConfigProto({
            toolbarButtonSize: 'middle'
        }, config_proto_ConfigProto(config_Config.prototype.dialog, View.defaultOptions)));
        dom_Dom.safeRemove(self.container);
        const n = this.getFullElName.bind(this);
        self.container = this.c.fromHTML(`<div style="z-index:${self.o.zIndex}" class="jodit jodit-dialog ${this.componentName}">
				<div class="${n('overlay')}"></div>
				<div class="${this.getFullElName('panel')}">
					<div class="${n('header')}">
						<div class="${n('header-title')}"></div>
						<div class="${n('header-toolbar')}"></div>
					</div>
					<div class="${n('content')}"></div>
					<div class="${n('footer')}"></div>
					<div class="${n('resizer')}">${Icon.get('resize_handler')}</div>
				</div>
			</div>`);
        utils_attr(self.container, 'role', 'dialog');
        Object.defineProperty(self.container, 'component', {
            value: this
        });
        self.setMod('theme', self.o.theme || 'default').setMod('resizable', Boolean(self.o.resizable));
        const dialog = self.getElm('panel');
        assert(dialog != null, 'Panel element does not exist');
        const resizer = self.getElm('resizer');
        assert(resizer != null, 'Resizer element does not exist');
        const dialogbox_header = self.getElm('header-title');
        assert(dialogbox_header != null, 'header-title element does not exist');
        const dialogbox_content = self.getElm('content');
        assert(dialogbox_content != null, 'Content element does not exist');
        const dialogbox_footer = self.getElm('footer');
        assert(dialogbox_footer != null, 'Footer element does not exist');
        const dialogbox_toolbar = self.getElm('header-toolbar');
        assert(dialogbox_toolbar != null, 'header-toolbar element does not exist');
        self.dialog = dialog;
        self.resizer = resizer;
        self.dialogbox_header = dialogbox_header;
        self.dialogbox_content = dialogbox_content;
        self.dialogbox_footer = dialogbox_footer;
        self.dialogbox_toolbar = dialogbox_toolbar;
        css(self.dialog, {
            maxWidth: self.options.maxWidth,
            minHeight: self.options.minHeight,
            minWidth: self.options.minWidth
        });
        const headerBox = self.getElm('header');
        headerBox &&
            self.e.on(headerBox, 'pointerdown touchstart', self.onHeaderMouseDown);
        self.e.on(self.resizer, 'mousedown touchstart', self.onResizerMouseDown);
        const fullSize = pluginSystem.get('fullsize');
        is_function_isFunction(fullSize) && fullSize(self);
        this.e
            .on(self.container, 'close_dialog', self.close)
            .on(this.ow, 'keydown', this.onEsc)
            .on(this.ow, 'resize', this.onResize);
    }
    className() {
        return 'Dialog';
    }
    get destination() {
        return this.od.body;
    }
    setElements(root, elements) {
        const elements_list = [];
        asArray(elements).forEach((elm) => {
            if (isArray(elm)) {
                const div = this.c.div(this.getFullElName('column'));
                elements_list.push(div);
                root.appendChild(div);
                return this.setElements(div, elm);
            }
            let element;
            if (is_string_isString(elm)) {
                element = this.c.fromHTML(elm);
            }
            else {
                element = hasContainer(elm) ? elm.container : elm;
            }
            elements_list.push(element);
            if (element.parentNode !== root) {
                root.appendChild(element);
            }
        });
        to_array_toArray(root.childNodes).forEach((elm) => {
            if (elements_list.indexOf(elm) === -1) {
                root.removeChild(elm);
            }
        });
    }
    onMouseUp() {
        if (this.draggable || this.resizable) {
            this.removeGlobalResizeListeners();
            this.draggable = false;
            this.resizable = false;
            this.unlockSelect();
            if (this.e) {
                this.removeGlobalResizeListeners();
                this.e.fire(this, 'endResize endMove');
            }
        }
    }
    onHeaderMouseDown(e) {
        const target = e.target;
        if (!this.o.draggable ||
            (target && target.nodeName.match(/^(INPUT|SELECT)$/))) {
            return;
        }
        this.draggable = true;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.startPoint.x = css(this.dialog, 'left');
        this.startPoint.y = css(this.dialog, 'top');
        this.setMaxZIndex();
        if (e.cancelable) {
            e.preventDefault();
        }
        this.lockSelect();
        this.addGlobalResizeListeners();
        if (this.e) {
            this.e.fire(this, 'startMove');
        }
    }
    onMouseMove(e) {
        if (this.draggable && this.o.draggable) {
            this.setPosition(this.startPoint.x + e.clientX - this.startX, this.startPoint.y + e.clientY - this.startY);
            if (this.e) {
                this.e.fire(this, 'move', e.clientX - this.startX, e.clientY - this.startY);
            }
            e.stopImmediatePropagation();
        }
        if (this.resizable && this.o.resizable) {
            this.setSize(this.startPoint.w + e.clientX - this.startX, this.startPoint.h + e.clientY - this.startY);
            if (this.e) {
                this.e.fire(this, 'resizeDialog', e.clientX - this.startX, e.clientY - this.startY);
            }
        }
    }
    onEsc(e) {
        if (this.isOpened &&
            e.key === KEY_ESC &&
            this.getMod('static') !== true) {
            const me = this.getMaxZIndexDialog();
            if (me) {
                me.close();
            }
            else {
                this.close();
            }
            e.stopImmediatePropagation();
        }
    }
    onResizerMouseDown(e) {
        this.resizable = true;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.startPoint.w = this.dialog.offsetWidth;
        this.startPoint.h = this.dialog.offsetHeight;
        this.lockSelect();
        this.addGlobalResizeListeners();
        if (this.e) {
            this.e.fire(this, 'startResize');
        }
    }
    addGlobalResizeListeners() {
        const self = this;
        self.e
            .on(self.ow, 'pointermove touchmove', self.onMouseMove)
            .on(self.ow, 'pointerup touchend', self.onMouseUp);
    }
    removeGlobalResizeListeners() {
        const self = this;
        self.e
            .off(self.ow, 'mousemove pointermove', self.onMouseMove)
            .off(self.ow, 'mouseup pointerup', self.onMouseUp);
    }
    setSize(w, h) {
        if (w == null) {
            w = this.dialog.offsetWidth;
        }
        if (h == null) {
            h = this.dialog.offsetHeight;
        }
        css(this.dialog, {
            width: w,
            height: h
        });
        return this;
    }
    calcAutoSize() {
        this.setSize('auto', 'auto');
        this.setSize();
        return this;
    }
    setPosition(x, y) {
        const w = this.ow.innerWidth, h = this.ow.innerHeight;
        let left = w / 2 - this.dialog.offsetWidth / 2, top = h / 2 - this.dialog.offsetHeight / 2;
        if (left < 0) {
            left = 0;
        }
        if (top < 0) {
            top = 0;
        }
        if (x !== undefined && y !== undefined) {
            this.offsetX = x;
            this.offsetY = y;
            this.moved = Math.abs(x - left) > 100 || Math.abs(y - top) > 100;
        }
        this.dialog.style.left = (x || left) + 'px';
        this.dialog.style.top = (y || top) + 'px';
        return this;
    }
    setHeader(content) {
        this.setElements(this.dialogbox_header, content);
        return this;
    }
    setContent(content) {
        this.setElements(this.dialogbox_content, content);
        return this;
    }
    setFooter(content) {
        this.setElements(this.dialogbox_footer, content);
        this.setMod('footer', Boolean(content));
        return this;
    }
    getZIndex() {
        return parseInt(css(this.container, 'zIndex'), 10) || 0;
    }
    getMaxZIndexDialog() {
        let maxZi = 0, dlg, zIndex, res = this;
        selector_$$('.jodit-dialog', this.destination).forEach((dialog) => {
            dlg = dialog.component;
            zIndex = parseInt(css(dialog, 'zIndex'), 10);
            if (dlg.isOpened && !isNaN(zIndex) && zIndex > maxZi) {
                res = dlg;
                maxZi = zIndex;
            }
        });
        return res;
    }
    setMaxZIndex() {
        let maxZIndex = 20000004, zIndex = 0;
        selector_$$('.jodit-dialog', this.destination).forEach(dialog => {
            zIndex = parseInt(css(dialog, 'zIndex'), 10);
            maxZIndex = Math.max(isNaN(zIndex) ? 0 : zIndex, maxZIndex);
        });
        this.container.style.zIndex = (maxZIndex + 1).toString();
    }
    maximization(condition) {
        if (is_void_isVoid(condition)) {
            condition = !this.getMod('fullsize');
        }
        this.setMod('fullsize', condition);
        this.toggleFullSizeBox(condition);
        this.iSetMaximization = condition;
        return condition;
    }
    toggleFullSizeBox(condition) {
        [this.destination, this.destination.parentNode].forEach(box => {
            box &&
                box.classList &&
                box.classList.toggle('jodit_fullsize-box_true', condition);
        });
    }
    open(contentOrClose, titleOrModal, destroyAfterClose, modal) {
        eventEmitter.fire('closeAllPopups hideHelpers');
        if (this.e.fire(this, 'beforeOpen') === false) {
            return this;
        }
        if (isBoolean(contentOrClose)) {
            destroyAfterClose = contentOrClose;
        }
        if (isBoolean(titleOrModal)) {
            modal = titleOrModal;
        }
        this.destroyAfterClose = destroyAfterClose === true;
        const content = isBoolean(contentOrClose) ? undefined : contentOrClose;
        const title = isBoolean(titleOrModal) ? undefined : titleOrModal;
        if (title !== undefined) {
            this.setHeader(title);
        }
        if (content) {
            this.setContent(content);
        }
        this.setMod('active', true);
        this.isOpened = true;
        this.setModal(modal);
        this.destination.appendChild(this.container);
        this.setPosition(this.offsetX, this.offsetY);
        this.setMaxZIndex();
        if (this.o.fullsize) {
            this.maximization(true);
        }
        this.e.fire('afterOpen', this);
        return this;
    }
    setModal(modal) {
        this.isModal = Boolean(modal);
        this.setMod('modal', this.isModal);
        return this;
    }
    close(e) {
        var _a, _b;
        if (this.isDestructed ||
            !this.isOpened ||
            this.getMod('static') === true) {
            return this;
        }
        if (e) {
            e.stopImmediatePropagation();
            e.preventDefault();
        }
        if (this.e && this.e.fire('beforeClose', this) === false) {
            return this;
        }
        this.setMod('active', false);
        this.isOpened = false;
        this.e.fire('toggleFullSize', false);
        if (this.iSetMaximization) {
            this.maximization(false);
        }
        dom_Dom.safeRemove(this.container);
        this.removeGlobalResizeListeners();
        if (this.destroyAfterClose) {
            this.destruct();
        }
        (_a = this.e) === null || _a === void 0 ? void 0 : _a.fire(this, 'afterClose');
        (_b = this.e) === null || _b === void 0 ? void 0 : _b.fire(this.ow, 'joditCloseDialog');
        return this;
    }
    buildToolbar() {
        this.o.buttons &&
            this.toolbar
                .build(splitArray(this.o.buttons))
                .setMod('mode', 'header')
                .appendTo(this.dialogbox_toolbar);
    }
    destruct() {
        if (this.isInDestruct) {
            return;
        }
        this.setStatus(statuses_STATUSES.beforeDestruct);
        if (this.isOpened) {
            this.close();
        }
        if (this.events) {
            this.removeGlobalResizeListeners();
            this.events
                .off(this.container, 'close_dialog', self.close)
                .off(this.ow, 'keydown', this.onEsc)
                .off(this.ow, 'resize', this.onResize);
        }
        super.destruct();
    }
};
__decorate([
    autobind
], Dialog.prototype, "onMouseUp", null);
__decorate([
    autobind
], Dialog.prototype, "onHeaderMouseDown", null);
__decorate([
    autobind
], Dialog.prototype, "onMouseMove", null);
__decorate([
    autobind
], Dialog.prototype, "onEsc", null);
__decorate([
    autobind
], Dialog.prototype, "onResizerMouseDown", null);
__decorate([
    autobind
], Dialog.prototype, "close", null);
__decorate([
    hook('ready')
], Dialog.prototype, "buildToolbar", null);
Dialog = __decorate([
    component
], Dialog);


;// CONCATENATED MODULE: ./src/modules/dialog/alert.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




const Alert = (msg, title, callback, className = 'jodit-dialog_alert') => {
    if (is_function_isFunction(title)) {
        callback = title;
        title = undefined;
    }
    const dialog = new Dialog(), container = dialog.c.div(className), okButton = Button(dialog, 'ok', 'Ok');
    asArray(msg).forEach(oneMessage => {
        container.appendChild(dom_Dom.isNode(oneMessage) ? oneMessage : dialog.c.fromHTML(oneMessage));
    });
    okButton.onAction(() => {
        if (!callback || !is_function_isFunction(callback) || callback(dialog) !== false) {
            dialog.close();
        }
    });
    dialog.setFooter([okButton]);
    dialog.open(container, title || '&nbsp;', true, true);
    okButton.focus();
    return dialog;
};

;// CONCATENATED MODULE: ./src/modules/dialog/prompt.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const Prompt = (msg, title, callback, placeholder, defaultValue) => {
    const dialog = new Dialog(), cancelButton = Button(dialog, 'cancel', 'Cancel'), okButton = Button(dialog, 'ok', 'Ok'), form = dialog.c.element('form', {
        class: 'jodit-dialog_prompt'
    }), inputElement = dialog.c.element('input', {
        autofocus: true,
        class: 'jodit-input'
    }), labelElement = dialog.c.element('label');
    if (is_function_isFunction(title)) {
        callback = title;
        title = undefined;
    }
    if (placeholder) {
        utils_attr(inputElement, 'placeholder', placeholder);
    }
    labelElement.appendChild(dialog.c.text(msg));
    form.appendChild(labelElement);
    form.appendChild(inputElement);
    cancelButton.onAction(dialog.close);
    const onclick = () => {
        if (!callback ||
            !is_function_isFunction(callback) ||
            callback(inputElement.value) !== false) {
            dialog.close();
        }
    };
    okButton.onAction(onclick);
    dialog.e.on(form, 'submit', () => {
        onclick();
        return false;
    });
    dialog.setFooter([okButton, cancelButton]);
    dialog.open(form, title || '&nbsp;', true, true);
    inputElement.focus();
    if (defaultValue !== undefined && defaultValue.length) {
        inputElement.value = defaultValue;
        inputElement.select();
    }
    return dialog;
};

;// CONCATENATED MODULE: ./src/modules/dialog/confirm.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const Confirm = (msg, title, callback) => {
    const dialog = new Dialog(), $div = dialog.c.fromHTML('<form class="jodit-dialog_prompt"></form>'), $label = dialog.c.element('label');
    if (is_function_isFunction(title)) {
        callback = title;
        title = undefined;
    }
    $label.appendChild(dialog.c.fromHTML(msg));
    $div.appendChild($label);
    const action = (yes) => () => {
        if (!callback || callback(yes) !== false) {
            dialog.close();
        }
    };
    const $cancel = Button(dialog, 'cancel', 'Cancel');
    const $ok = Button(dialog, 'ok', 'Yes');
    $cancel.onAction(action(false));
    $ok.onAction(action(true));
    dialog.e.on($div, 'submit', () => {
        action(true)();
        return false;
    });
    dialog.setFooter([$ok, $cancel]);
    dialog.open($div, title || '&nbsp;', true, true);
    $ok.focus();
    return dialog;
};

;// CONCATENATED MODULE: ./src/modules/dialog/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





;// CONCATENATED MODULE: ./src/core/plugin/plugin.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




class Plugin extends view_component_ViewComponent {
    constructor(jodit) {
        super(jodit);
        this.requires = [];
        this.buttons = [];
        this.hasStyle = false;
        jodit.e
            .on('afterPluginSystemInit', () => {
            var _a;
            if (is_jodit_object_isJoditObject(jodit)) {
                (_a = this.buttons) === null || _a === void 0 ? void 0 : _a.forEach(btn => {
                    jodit.registerButton(btn);
                });
            }
        })
            .on('afterInit', () => {
            this.setStatus(statuses_STATUSES.ready);
            this.afterInit(jodit);
        })
            .on('beforeDestruct', this.destruct);
    }
    className() {
        return '';
    }
    init(jodit) {
    }
    destruct() {
        var _a, _b, _c;
        if (!this.isInDestruct) {
            this.setStatus(statuses_STATUSES.beforeDestruct);
            const { j } = this;
            if (is_jodit_object_isJoditObject(j)) {
                (_a = this.buttons) === null || _a === void 0 ? void 0 : _a.forEach(btn => {
                    j === null || j === void 0 ? void 0 : j.unregisterButton(btn);
                });
            }
            (_c = (_b = this.j) === null || _b === void 0 ? void 0 : _b.events) === null || _c === void 0 ? void 0 : _c.off('beforeDestruct', this.destruct);
            this.beforeDestruct(this.j);
            super.destruct();
        }
    }
}
__decorate([
    autobind
], Plugin.prototype, "destruct", null);

;// CONCATENATED MODULE: ./src/core/plugin/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



;// CONCATENATED MODULE: ./src/core/create/create.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



class Create {
    constructor(document, createAttributes) {
        this.document = document;
        this.createAttributes = createAttributes;
    }
    get doc() {
        return is_function_isFunction(this.document) ? this.document() : this.document;
    }
    element(tagName, childrenOrAttributes, children) {
        const elm = this.doc.createElement(tagName.toLowerCase());
        this.applyCreateAttributes(elm);
        if (childrenOrAttributes) {
            if (is_plain_object_isPlainObject(childrenOrAttributes)) {
                utils_attr(elm, childrenOrAttributes);
            }
            else {
                children = childrenOrAttributes;
            }
        }
        if (children) {
            asArray(children).forEach((child) => elm.appendChild(is_string_isString(child) ? this.fromHTML(child) : child));
        }
        return elm;
    }
    div(className, childrenOrAttributes, children) {
        const div = this.element('div', childrenOrAttributes, children);
        if (className) {
            div.className = className;
        }
        return div;
    }
    span(className, childrenOrAttributes, children) {
        const span = this.element('span', childrenOrAttributes, children);
        if (className) {
            span.className = className;
        }
        return span;
    }
    a(className, childrenOrAttributes, children) {
        const a = this.element('a', childrenOrAttributes, children);
        if (className) {
            a.className = className;
        }
        return a;
    }
    text(value) {
        return this.doc.createTextNode(value);
    }
    fake() {
        return this.text(INVISIBLE_SPACE);
    }
    fragment() {
        return this.doc.createDocumentFragment();
    }
    fromHTML(html, refsToggleElement) {
        const div = this.div();
        div.innerHTML = html.toString();
        const child = div.firstChild !== div.lastChild || !div.firstChild
            ? div
            : div.firstChild;
        dom_Dom.safeRemove(child);
        if (refsToggleElement) {
            const refElements = refs(child);
            Object.keys(refsToggleElement).forEach(key => {
                const elm = refElements[key];
                if (elm && refsToggleElement[key] === false) {
                    dom_Dom.hide(elm);
                }
            });
        }
        return child;
    }
    applyCreateAttributes(elm) {
        if (this.createAttributes) {
            const ca = this.createAttributes;
            if (ca && ca[elm.tagName.toLowerCase()]) {
                const attrsOpt = ca[elm.tagName.toLowerCase()];
                if (is_function_isFunction(attrsOpt)) {
                    attrsOpt(elm);
                }
                else if (is_plain_object_isPlainObject(attrsOpt)) {
                    utils_attr(elm, attrsOpt);
                }
            }
        }
    }
}

;// CONCATENATED MODULE: ./src/core/create/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


;// CONCATENATED MODULE: ./src/modules/file-browser/config.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



config_Config.prototype.filebrowser = {
    namespace: '',
    extraButtons: [],
    filter(item, search) {
        search = search.toLowerCase();
        if (is_string_isString(item)) {
            return item.toLowerCase().indexOf(search) !== -1;
        }
        if (is_string_isString(item.name)) {
            return item.name.toLowerCase().indexOf(search) !== -1;
        }
        if (is_string_isString(item.file)) {
            return item.file.toLowerCase().indexOf(search) !== -1;
        }
        return true;
    },
    sortBy: 'changed-desc',
    sort(a, b, sortBy) {
        const [sortAttr, arrow] = sortBy.toLowerCase().split('-'), asc = arrow === 'asc';
        const compareStr = (f, s) => {
            if (f < s) {
                return asc ? -1 : 1;
            }
            if (f > s) {
                return asc ? 1 : -1;
            }
            return 0;
        };
        if (is_string_isString(a)) {
            return compareStr(a.toLowerCase(), b.toLowerCase());
        }
        if (a[sortAttr] === undefined || sortAttr === 'name') {
            if (is_string_isString(a.name)) {
                return compareStr(a.name.toLowerCase(), b.name.toLowerCase());
            }
            if (is_string_isString(a.file)) {
                return compareStr(a.file.toLowerCase(), b.file.toLowerCase());
            }
            return 0;
        }
        switch (sortAttr) {
            case 'changed': {
                const f = new Date(a.changed).getTime(), s = new Date(b.changed).getTime();
                return asc ? f - s : s - f;
            }
            case 'size': {
                const f = humanSizeToBytes(a.size), s = humanSizeToBytes(b.size);
                return asc ? f - s : s - f;
            }
        }
        return 0;
    },
    editImage: true,
    preview: true,
    showPreviewNavigation: true,
    showSelectButtonInPreview: true,
    contextMenu: true,
    howLongShowMsg: 3000,
    createNewFolder: true,
    deleteFolder: true,
    renameFolder: true,
    moveFolder: true,
    moveFile: true,
    showFoldersPanel: true,
    storeLastOpenedFolder: true,
    width: 859,
    height: 400,
    buttons: [
        'filebrowser.upload',
        'filebrowser.remove',
        'filebrowser.update',
        'filebrowser.select',
        'filebrowser.edit',
        '|',
        'filebrowser.tiles',
        'filebrowser.list',
        '|',
        'filebrowser.filter',
        '|',
        'filebrowser.sort'
    ],
    removeButtons: [],
    fullsize: false,
    showTooltip: true,
    view: null,
    isSuccess(resp) {
        return resp.success;
    },
    getMessage(resp) {
        return resp.data.messages !== undefined && isArray(resp.data.messages)
            ? resp.data.messages.join(' ')
            : '';
    },
    showFileName: true,
    showFileSize: true,
    showFileChangeTime: true,
    saveStateInStorage: {
        storeLastOpenedFolder: true,
        storeView: true,
        storeSortBy: true
    },
    pixelOffsetLoadNewChunk: 200,
    getThumbTemplate(item, source, source_name) {
        const opt = this.options, IC = this.files.getFullElName('item'), showName = opt.showFileName, showSize = opt.showFileSize && item.size, showTime = opt.showFileChangeTime && item.time;
        let name = '';
        if (item.file !== undefined) {
            name = item.file;
        }
        const info = `<div class="${IC}-info">${showName ? `<span class="${IC}-info-filename">${name}</span>` : ''}${showSize
            ? `<span class="${IC}-info-filesize">${item.size}</span>`
            : ''}${showTime
            ? `<span class="${IC}-info-filechanged">${showTime}</span>`
            : ''}</div>`;
        return `<a
			data-jodit-filebrowser-item="true"
			data-is-file="${item.isImage ? 0 : 1}"
			draggable="true"
			class="${IC}"
			href="${item.fileURL}"
			data-source="${source_name}"
			data-path="${item.path}"
			data-name="${name}"
			title="${name}"
			data-url="${item.fileURL}">
				<img
					data-is-file="${item.isImage ? 0 : 1}"
					data-src="${item.fileURL}"
					src="${item.imageURL}"
					alt="${name}"
					loading="lazy"
				/>
				${showName || showSize || showTime ? info : ''}
			</a>`;
    },
    ajax: {
        ...config_Config.prototype.defaultAjaxOptions,
        url: '',
        async: true,
        data: {},
        cache: true,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        method: 'POST',
        processData: true,
        dataType: 'json',
        headers: {},
        prepareData(data) {
            return data;
        },
        process(resp) {
            return resp;
        }
    },
    create: {
        data: { action: 'folderCreate' }
    },
    getLocalFileByUrl: {
        data: { action: 'getLocalFileByUrl' }
    },
    resize: {
        data: { action: 'imageResize' }
    },
    crop: {
        data: { action: 'imageCrop' }
    },
    fileMove: {
        data: { action: 'fileMove' }
    },
    folderMove: {
        data: { action: 'folderMove' }
    },
    fileRename: {
        data: { action: 'fileRename' }
    },
    folderRename: {
        data: { action: 'folderRename' }
    },
    fileRemove: {
        data: { action: 'fileRemove' }
    },
    folderRemove: {
        data: { action: 'folderRemove' }
    },
    items: {
        data: { action: 'files' }
    },
    folder: {
        data: { action: 'folders' }
    },
    permissions: {
        data: { action: 'permissions' }
    }
};
config_Config.prototype.controls.filebrowser = {
    upload: {
        icon: 'plus',
        isInput: true,
        isDisabled: (browser) => !browser.dataProvider.canI('FileUpload'),
        getContent: (filebrowser) => {
            const btn = new UIFileInput(filebrowser, {
                onlyImages: filebrowser.state.onlyImages
            });
            filebrowser.e.fire('bindUploader.filebrowser', btn.container);
            return btn.container;
        }
    },
    remove: {
        icon: 'bin',
        isDisabled: (browser) => {
            return (!browser.state.activeElements.length ||
                !browser.dataProvider.canI('FileRemove'));
        },
        exec: (editor) => {
            editor.e.fire('fileRemove.filebrowser');
        }
    },
    update: {
        exec: (editor) => {
            editor.e.fire('update.filebrowser');
        }
    },
    select: {
        icon: 'check',
        isDisabled: (browser) => !browser.state.activeElements.length,
        exec: (editor) => {
            editor.e.fire('select.filebrowser');
        }
    },
    edit: {
        icon: 'pencil',
        isDisabled: (browser) => {
            const selected = browser.state.activeElements;
            return (selected.length !== 1 ||
                !selected[0].isImage ||
                !(browser.dataProvider.canI('ImageCrop') ||
                    browser.dataProvider.canI('ImageResize')));
        },
        exec: editor => {
            editor.e.fire('edit.filebrowser');
        }
    },
    tiles: {
        icon: 'th',
        isActive: (filebrowser) => filebrowser.state.view === 'tiles',
        exec: (filebrowser) => {
            filebrowser.e.fire('view.filebrowser', 'tiles');
        }
    },
    list: {
        icon: 'th-list',
        isActive: (filebrowser) => filebrowser.state.view === 'list',
        exec: (filebrowser) => {
            filebrowser.e.fire('view.filebrowser', 'list');
        }
    },
    filter: {
        isInput: true,
        getContent: (filebrowser, _, b) => {
            const oldInput = b.container.querySelector('.jodit-input');
            if (oldInput) {
                return oldInput;
            }
            const input = filebrowser.c.element('input', {
                class: 'jodit-input',
                placeholder: filebrowser.i18n('Filter')
            });
            input.value = filebrowser.state.filterWord;
            filebrowser.e.on(input, 'keydown mousedown', filebrowser.async.debounce(() => {
                filebrowser.e.fire('filter.filebrowser', input.value);
            }, filebrowser.defaultTimeout));
            return input;
        }
    },
    sort: {
        isInput: true,
        getContent: (fb) => {
            const select = fb.c.fromHTML('<select class="jodit-input jodit-select">' +
                `<option value="changed-asc">${fb.i18n('Sort by changed')} (⬆)</option>` +
                `<option value="changed-desc">${fb.i18n('Sort by changed')} (⬇)</option>` +
                `<option value="name-asc">${fb.i18n('Sort by name')} (⬆)</option>` +
                `<option value="name-desc">${fb.i18n('Sort by name')} (⬇)</option>` +
                `<option value="size-asc">${fb.i18n('Sort by size')} (⬆)</option>` +
                `<option value="size-desc">${fb.i18n('Sort by size')} (⬇)</option>` +
                '</select>');
            select.value = fb.state.sortBy;
            fb.e
                .on('sort.filebrowser', (value) => {
                if (select.value !== value) {
                    select.value = value;
                }
            })
                .on(select, 'change', () => {
                fb.e.fire('sort.filebrowser', select.value);
            });
            return select;
        }
    }
};

;// CONCATENATED MODULE: ./src/modules/file-browser/builders/item.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class FileBrowserItem {
    constructor(data) {
        this.data = data;
        Object.keys(data).forEach(key => {
            this[key] = data[key];
        });
    }
    static create(data) {
        if (data instanceof FileBrowserItem) {
            return data;
        }
        return new FileBrowserItem(data);
    }
    get path() {
        return normalizePath(this.data.source.path ? this.data.source.path + '/' : '/');
    }
    get imageURL() {
        const timestamp = new Date().getTime().toString(), { thumbIsAbsolute, source, thumb, file } = this.data, path = thumb || file;
        return thumbIsAbsolute && path
            ? path
            : normalizeUrl(source.baseurl, source.path, path || '') +
                '?_tmst=' +
                timestamp;
    }
    get fileURL() {
        let { name } = this.data;
        const { file, fileIsAbsolute, source } = this.data;
        if (file !== undefined) {
            name = file;
        }
        return fileIsAbsolute && name
            ? name
            : normalizeUrl(source.baseurl, source.path, name || '');
    }
    get time() {
        const { changed } = this.data;
        return ((changed &&
            (typeof changed === 'number'
                ? new Date(changed).toLocaleString()
                : changed)) ||
            '');
    }
    get uniqueHashKey() {
        const data = this.data;
        let key = [
            data.sourceName,
            data.name,
            data.file,
            this.time,
            data.thumb
        ].join('_');
        key = key.toLowerCase().replace(/[^0-9a-z\-.]/g, '-');
        return key;
    }
    toJSON() {
        return this.data;
    }
}

;// CONCATENATED MODULE: ./src/modules/file-browser/data-provider.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





const DEFAULT_SOURCE_NAME = 'default';
const possibleRules = (/* unused pure expression or super */ null && ([
    'allowFiles',
    'allowFileMove',
    'allowFileUpload',
    'allowFileUploadRemote',
    'allowFileRemove',
    'allowFileRename',
    'allowFolders',
    'allowFolderMove',
    'allowFolderCreate',
    'allowFolderRemove',
    'allowFolderRename',
    'allowImageResize',
    'allowImageCrop'
]));
let DataProvider = class DataProvider {
    constructor(parent, options) {
        this.parent = parent;
        this.options = options;
        this.__currentPermissions = null;
        this.ajaxInstances = new Map();
        this.progressHandler = (ignore) => { };
    }
    get o() {
        return this.options;
    }
    get(name) {
        const ai = this.ajaxInstances;
        if (ai.has(name)) {
            const ajax = ai.get(name);
            ajax === null || ajax === void 0 ? void 0 : ajax.abort();
            ai.delete(name);
        }
        const opts = config_proto_ConfigProto(this.options[name] !== undefined
            ? this.options[name]
            : {}, config_proto_ConfigProto({
            onProgress: this.progressHandler
        }, this.o.ajax));
        if (opts.prepareData) {
            opts.data = opts.prepareData.call(this, opts.data);
        }
        const ajax = new ajax_Ajax(this.parent, opts);
        ai.set(name, ajax);
        const promise = ajax.send();
        promise.finally(() => {
            ajax.destruct();
            ai.delete(name);
            this.progressHandler(100);
        });
        return promise
            .then(resp => resp.json())
            .then(resp => {
            if (resp && !this.isSuccess(resp)) {
                throw new Error(this.getMessage(resp));
            }
            return resp;
        });
    }
    onProgress(callback) {
        this.progressHandler = callback;
    }
    async permissions(path, source) {
        if (!this.o.permissions) {
            return null;
        }
        this.o.permissions.data.path = path;
        this.o.permissions.data.source = source;
        if (this.o.permissions.url) {
            return this.get('permissions').then(resp => {
                let process = this.o.permissions.process;
                if (!process) {
                    process = this.o.ajax.process;
                }
                if (process) {
                    const respData = process.call(self, resp);
                    if (respData.data.permissions) {
                        this.__currentPermissions = respData.data.permissions;
                    }
                }
                return this.__currentPermissions;
            });
        }
        return null;
    }
    canI(action) {
        const rule = 'allow' + action;
        if (false) {}
        return (this.__currentPermissions == null ||
            this.__currentPermissions[rule] === undefined ||
            this.__currentPermissions[rule]);
    }
    async items(path, source, mods = {}) {
        const opt = this.options;
        if (!opt.items) {
            return Promise.reject('Set Items api options');
        }
        opt.items.data.path = path;
        opt.items.data.source = source;
        opt.items.data.mods = mods;
        return this.get('items').then(resp => {
            let process = this.o.items.process;
            if (!process) {
                process = this.o.ajax.process;
            }
            if (process) {
                resp = process.call(self, resp);
            }
            return this.generateItemsList(resp.data.sources, mods);
        });
    }
    generateItemsList(sources, mods = {}) {
        const elements = [];
        const canBeFile = (item) => !mods.onlyImages || item.isImage === undefined || item.isImage, inFilter = (item) => {
            var _a;
            return !((_a = mods.filterWord) === null || _a === void 0 ? void 0 : _a.length) ||
                this.o.filter === undefined ||
                this.o.filter(item, mods.filterWord);
        };
        sources.forEach(source => {
            if (source.files && source.files.length) {
                const { sort } = this.o;
                if (is_function_isFunction(sort) && mods.sortBy) {
                    source.files.sort((a, b) => sort(a, b, mods.sortBy));
                }
                source.files.forEach((item) => {
                    if (inFilter(item) && canBeFile(item)) {
                        elements.push(FileBrowserItem.create({
                            ...item,
                            sourceName: source.name,
                            source
                        }));
                    }
                });
            }
        });
        return elements;
    }
    async tree(path, source) {
        path = normalizeRelativePath(path);
        await this.permissions(path, source);
        if (!this.o.folder) {
            return Promise.reject('Set Folder Api options');
        }
        this.o.folder.data.path = path;
        this.o.folder.data.source = source;
        return this.get('folder').then(resp => {
            let process = this.o.folder.process;
            if (!process) {
                process = this.o.ajax.process;
            }
            if (process) {
                resp = process.call(self, resp);
            }
            return resp.data.sources;
        });
    }
    getPathByUrl(url) {
        set('options.getLocalFileByUrl.data.url', url, this);
        return this.get('getLocalFileByUrl').then(resp => {
            if (this.isSuccess(resp)) {
                return resp.data;
            }
            throw error_error(this.getMessage(resp));
        });
    }
    createFolder(name, path, source) {
        const { create } = this.o;
        if (!create) {
            throw error_error('Set Create api options');
        }
        create.data.source = source;
        create.data.path = path;
        create.data.name = name;
        return this.get('create').then(resp => {
            if (this.isSuccess(resp)) {
                return true;
            }
            throw error_error(this.getMessage(resp));
        });
    }
    move(filepath, path, source, isFile) {
        const mode = isFile
            ? 'fileMove'
            : 'folderMove';
        const option = this.options[mode];
        if (!option) {
            throw error_error('Set Move api options');
        }
        option.data.from = filepath;
        option.data.path = path;
        option.data.source = source;
        return this.get(mode).then(resp => {
            if (this.isSuccess(resp)) {
                return true;
            }
            throw error_error(this.getMessage(resp));
        });
    }
    remove(action, path, file, source) {
        const fr = this.o[action];
        if (!fr) {
            throw error_error(`Set "${action}" api options`);
        }
        fr.data.path = path;
        fr.data.name = file;
        fr.data.source = source;
        return this.get(action).then(resp => {
            if (fr.process) {
                resp = fr.process.call(this, resp);
            }
            return this.getMessage(resp);
        });
    }
    fileRemove(path, file, source) {
        return this.remove('fileRemove', path, file, source);
    }
    folderRemove(path, file, source) {
        return this.remove('folderRemove', path, file, source);
    }
    rename(action, path, name, newname, source) {
        const fr = this.o[action];
        if (!fr) {
            throw error_error(`Set "${action}" api options`);
        }
        fr.data.path = path;
        fr.data.name = name;
        fr.data.newname = newname;
        fr.data.source = source;
        return this.get(action).then(resp => {
            if (fr.process) {
                resp = fr.process.call(self, resp);
            }
            return this.getMessage(resp);
        });
    }
    folderRename(path, name, newname, source) {
        return this.rename('folderRename', path, name, newname, source);
    }
    fileRename(path, name, newname, source) {
        return this.rename('fileRename', path, name, newname, source);
    }
    changeImage(type, path, source, name, newname, box) {
        if (!this.o[type]) {
            this.o[type] = {
                data: {}
            };
        }
        const query = this.o[type];
        if (query.data === undefined) {
            query.data = {
                action: type
            };
        }
        query.data.newname = newname || name;
        if (box) {
            query.data.box = box;
        }
        query.data.path = path;
        query.data.name = name;
        query.data.source = source;
        return this.get(type).then(() => {
            return true;
        });
    }
    crop(path, source, name, newname, box) {
        return this.changeImage('crop', path, source, name, newname, box);
    }
    resize(path, source, name, newname, box) {
        return this.changeImage('resize', path, source, name, newname, box);
    }
    getMessage(resp) {
        return this.options.getMessage(resp);
    }
    isSuccess(resp) {
        return this.options.isSuccess(resp);
    }
    destruct() {
        this.ajaxInstances.forEach(a => a.destruct());
        this.ajaxInstances.clear();
    }
};
DataProvider = __decorate([
    autobind
], DataProvider);
/* harmony default export */ var data_provider = (DataProvider);

;// CONCATENATED MODULE: ./src/modules/file-browser/factories.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function makeDataProvider(parent, options) {
    return new data_provider(parent, options);
}
function makeContextMenu(parent) {
    return new ContextMenu(parent);
}

;// CONCATENATED MODULE: ./src/modules/file-browser/builders/elements-map.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const elements_map_map = new WeakMap();
const elementsMap = (view) => {
    let result = elements_map_map.get(view);
    if (!result) {
        result = {};
        elements_map_map.set(view, result);
    }
    return result;
};

;// CONCATENATED MODULE: ./src/modules/file-browser/fetch/load-items.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
async function loadItems(fb) {
    fb.files.setMod('active', true);
    fb.files.setMod('loading', true);
    return fb.dataProvider
        .items(fb.state.currentPath, fb.state.currentSource, {
        sortBy: fb.state.sortBy,
        onlyImages: fb.state.onlyImages,
        filterWord: fb.state.filterWord
    })
        .then(resp => {
        fb.state.elements = resp;
        fb.state.activeElements = [];
    })
        .catch(fb.status)
        .finally(() => fb.files.setMod('loading', false));
}

;// CONCATENATED MODULE: ./src/modules/file-browser/fetch/load-tree.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



async function loadTree(fb) {
    const errorUni = (e) => {
        throw e instanceof Error ? e : error_error(e);
    };
    fb.tree.setMod('active', true);
    dom_Dom.detach(fb.tree.container);
    const items = loadItems(fb);
    if (fb.o.showFoldersPanel) {
        fb.tree.setMod('loading', true);
        const tree = fb.dataProvider
            .tree(fb.state.currentPath, fb.state.currentSource)
            .then(resp => {
            fb.state.sources = resp;
        })
            .catch(e => {
            errorUni(e);
        })
            .finally(() => fb.tree.setMod('loading', false));
        return Promise.all([tree, items]).catch(error_error);
    }
    fb.tree.setMod('active', false);
    return items.catch(error_error);
}

;// CONCATENATED MODULE: ./src/modules/file-browser/listeners/state-listeners.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





const state_listeners_DEFAULT_SOURCE_NAME = 'default';
function stateListeners() {
    const elmMap = elementsMap(this);
    const { state, files, create, options } = this, getDomElement = (item) => {
        const key = item.uniqueHashKey;
        if (elmMap[key]) {
            return elmMap[key].elm;
        }
        const elm = create.fromHTML(options.getThumbTemplate.call(this, item, item.source, item.sourceName.toString()));
        elm.dataset.key = key;
        elmMap[key] = {
            item,
            elm
        };
        return elmMap[key].elm;
    };
    state
        .on(['change.currentPath', 'change.currentSource'], this.async.debounce(() => {
        if (this.o.saveStateInStorage &&
            this.o.saveStateInStorage.storeLastOpenedFolder) {
            this.storage
                .set('currentPath', this.state.currentPath)
                .set('currentSource', this.state.currentSource);
        }
        loadTree(this).catch(this.status);
    }, this.defaultTimeout))
        .on('beforeChange.activeElements', () => {
        state.activeElements.forEach(item => {
            const key = item.uniqueHashKey, { elm } = elmMap[key];
            elm &&
                elm.classList.remove(files.getFullElName('item', 'active', true));
        });
    })
        .on('change.activeElements', () => {
        this.e.fire('changeSelection');
        state.activeElements.forEach(item => {
            const key = item.uniqueHashKey, { elm } = elmMap[key];
            elm &&
                elm.classList.add(files.getFullElName('item', 'active', true));
        });
    })
        .on('change.view', () => {
        files.setMod('view', state.view);
        if (this.o.saveStateInStorage &&
            this.o.saveStateInStorage.storeView) {
            this.storage.set('view', state.view);
        }
    })
        .on('change.sortBy', () => {
        if (this.o.saveStateInStorage &&
            this.o.saveStateInStorage.storeSortBy) {
            this.storage.set('sortBy', state.sortBy);
        }
    })
        .on('change.elements', this.async.debounce(() => {
        dom_Dom.detach(files.container);
        if (state.elements.length) {
            state.elements.forEach(item => {
                this.files.container.appendChild(getDomElement(item));
            });
        }
        else {
            files.container.appendChild(create.div(this.componentName + '_no-files_true', this.i18n('There are no files')));
        }
    }, this.defaultTimeout))
        .on('change.sources', this.async.debounce(() => {
        dom_Dom.detach(this.tree.container);
        state.sources.forEach(source => {
            const sourceName = source.name;
            if (sourceName && sourceName !== state_listeners_DEFAULT_SOURCE_NAME) {
                this.tree.container.appendChild(create.div(this.tree.getFullElName('source-title'), sourceName));
            }
            source.folders.forEach((name) => {
                const folderElm = create.a(this.tree.getFullElName('item'), {
                    draggable: 'draggable',
                    href: '#',
                    'data-path': normalizePath(source.path, name + '/'),
                    'data-name': name,
                    'data-source': sourceName,
                    'data-source-path': source.path
                }, create.span(this.tree.getFullElName('item-title'), name));
                const action = (actionName) => (e) => {
                    this.e.fire(`${actionName}.filebrowser`, {
                        name,
                        path: normalizePath(source.path + '/'),
                        source: sourceName
                    });
                    e.stopPropagation();
                    e.preventDefault();
                };
                this.e.on(folderElm, 'click', action('openFolder'));
                this.tree.container.appendChild(folderElm);
                if (name === '..' || name === '.') {
                    return;
                }
                if (options.renameFolder &&
                    this.dataProvider.canI('FolderRename')) {
                    const btn = Button(this, {
                        icon: { name: 'pencil' },
                        name: 'rename',
                        tooltip: 'Rename',
                        size: 'tiny'
                    });
                    btn.onAction(action('renameFolder'));
                    folderElm.appendChild(btn.container);
                }
                if (options.deleteFolder &&
                    this.dataProvider.canI('FolderRemove')) {
                    const btn = Button(this, {
                        icon: { name: 'cancel' },
                        name: 'remove',
                        tooltip: 'Delete',
                        size: 'tiny'
                    });
                    btn.onAction(action('removeFolder'));
                    folderElm.appendChild(btn.container);
                }
            });
            if (options.createNewFolder &&
                this.dataProvider.canI('FolderCreate')) {
                const button = Button(this, 'plus', 'Add folder', 'secondary');
                button.onAction(() => {
                    this.e.fire('addFolder', {
                        path: normalizePath(source.path + '/'),
                        source: sourceName
                    });
                });
                this.tree.append(button);
            }
        });
    }, this.defaultTimeout));
}

;// CONCATENATED MODULE: ./src/modules/image-editor/templates/form.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const jie = 'jodit-image-editor';
const gi = Icon.get.bind(Icon);
const act = (el, className = 'jodti-image-editor_active') => el ? className : '';
const form_form = (editor, o) => {
    const i = editor.i18n.bind(editor);
    const switcher = (label, ref, active = true) => `<div class="jodit-form__group">
			<label>${i(label)}</label>

			<label class='jodit-switcher'>
				<input ${act(active, 'checked')} data-ref="${ref}" type="checkbox"/>
				<span class="jodit-switcher__slider"></span>
			</label>
	</div>`;
    return editor.create.fromHTML(`<form class="${jie} jodit-properties">
		<div class="jodit-grid jodit-grid_xs-column">
			<div class="jodit_col-lg-3-4 jodit_col-sm-5-5">
			${o.resize
        ? `<div class="${jie}__area ${jie}__area_resize ${jie}_active">
							<div data-ref="resizeBox" class="${jie}__box"></div>
							<div class="${jie}__resizer">
								<i class="jodit_bottomright"></i>
							</div>
						</div>`
        : ''}
			${o.crop
        ? `<div class="${jie}__area ${jie}__area_crop ${act(!o.resize)}">
							<div data-ref="cropBox" class="${jie}__box">
								<div class="${jie}__croper">
									<i class="jodit_bottomright"></i>
									<i class="${jie}__sizes"></i>
								</div>
							</div>
						</div>`
        : ''}
			</div>
			<div class="jodit_col-lg-1-4 jodit_col-sm-5-5">
			${o.resize
        ? `<div data-area="resize" class="${jie}__slider ${jie}_active">
							<div class="${jie}__slider-title">
								${gi('resize')}
								${i('Resize')}
							</div>
							<div class="${jie}__slider-content">
								<div class="jodit-form__group">
									<label>
										${i('Width')}
									</label>
									<input type="number" data-ref="widthInput" class="jodit-input"/>
								</div>
								<div class="jodit-form__group">
									<label>
										${i('Height')}
									</label>
									<input type="number" data-ref="heightInput" class="jodit-input"/>
								</div>
								${switcher('Keep Aspect Ratio', 'keepAspectRatioResize')}
							</div>
						</div>`
        : ''}
			${o.crop
        ? `<div data-area="crop" class="${jie}__slider ${act(!o.resize)}'">
							<div class="${jie}__slider-title">
								${gi('crop')}
								${i('Crop')}
							</div>
							<div class="${jie}__slider-content">
								${switcher('Keep Aspect Ratio', 'keepAspectRatioCrop')}
							</div>
						</div>`
        : ''}
			</div>
		</div>
	</form>`);
};

;// CONCATENATED MODULE: ./src/modules/image-editor/config.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

config_Config.prototype.imageeditor = {
    min_width: 20,
    min_height: 20,
    closeAfterSave: false,
    width: '85%',
    height: '85%',
    crop: true,
    resize: true,
    resizeUseRatio: true,
    resizeMinWidth: 20,
    resizeMinHeight: 20,
    cropUseRatio: true,
    cropDefaultWidth: '70%',
    cropDefaultHeight: '70%'
};

;// CONCATENATED MODULE: ./src/modules/image-editor/image-editor.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var ImageEditor_1;











const image_editor_jie = 'jodit-image-editor';
const TABS = {
    resize: 'resize',
    crop: 'crop'
};
let ImageEditor = ImageEditor_1 = class ImageEditor extends view_component_ViewComponent {
    constructor(editor) {
        super(editor);
        this.resizeUseRatio = true;
        this.cropUseRatio = true;
        this.clicked = false;
        this.start_x = 0;
        this.start_y = 0;
        this.top_x = 0;
        this.top_y = 0;
        this.width = 0;
        this.height = 0;
        this.activeTab = TABS.resize;
        this.naturalWidth = 0;
        this.naturalHeight = 0;
        this.ratio = 0;
        this.new_h = 0;
        this.new_w = 0;
        this.diff_x = 0;
        this.diff_y = 0;
        this.cropBox = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
        };
        this.resizeBox = {
            w: 0,
            h: 0
        };
        this.calcCropBox = () => {
            const node = this.crop_box.parentNode, w = node.offsetWidth * 0.8, h = node.offsetHeight * 0.8;
            let wn = w, hn = h;
            const { naturalWidth: nw, naturalHeight: nh } = this;
            if (w > nw && h > nh) {
                wn = nw;
                hn = nh;
            }
            else if (this.ratio > w / h) {
                wn = w;
                hn = nh * (w / nw);
            }
            else {
                wn = nw * (h / nh);
                hn = h;
            }
            css(this.crop_box, {
                width: wn,
                height: hn
            });
        };
        this.showCrop = () => {
            if (!this.cropImage) {
                return;
            }
            this.calcCropBox();
            const w = this.cropImage.offsetWidth ||
                this.image.offsetWidth ||
                this.image.naturalWidth;
            this.new_w = ImageEditor_1.calcValueByPercent(w, this.o.cropDefaultWidth);
            const h = this.cropImage.offsetHeight ||
                this.image.offsetHeight ||
                this.image.naturalHeight;
            if (this.cropUseRatio) {
                this.new_h = this.new_w / this.ratio;
            }
            else {
                this.new_h = ImageEditor_1.calcValueByPercent(h, this.o.cropDefaultHeight);
            }
            css(this.cropHandler, {
                backgroundImage: 'url(' + utils_attr(this.cropImage, 'src') + ')',
                width: this.new_w,
                height: this.new_h,
                left: w / 2 - this.new_w / 2,
                top: h / 2 - this.new_h / 2
            });
            this.j.e.fire(this.cropHandler, 'updatesize');
        };
        this.updateCropBox = () => {
            if (!this.cropImage) {
                return;
            }
            const ratioX = this.cropImage.offsetWidth / this.naturalWidth, ratioY = this.cropImage.offsetHeight / this.naturalHeight;
            this.cropBox.x = css(this.cropHandler, 'left') / ratioX;
            this.cropBox.y = css(this.cropHandler, 'top') / ratioY;
            this.cropBox.w = this.cropHandler.offsetWidth / ratioX;
            this.cropBox.h = this.cropHandler.offsetHeight / ratioY;
            this.sizes.textContent =
                this.cropBox.w.toFixed(0) + 'x' + this.cropBox.h.toFixed(0);
        };
        this.updateResizeBox = () => {
            this.resizeBox.w = this.image.offsetWidth || this.naturalWidth;
            this.resizeBox.h = this.image.offsetHeight || this.naturalHeight;
        };
        this.setHandlers = () => {
            const self = this;
            const { widthInput, heightInput } = refs(this.editor);
            self.j.e
                .on([
                self.editor.querySelector('.jodit_bottomright'),
                self.cropHandler
            ], `mousedown.${image_editor_jie}`, this.onResizeHandleMouseDown)
                .on(this.j.ow, `resize.${image_editor_jie}`, () => {
                this.j.e.fire(self.resizeHandler, 'updatesize');
                self.showCrop();
                this.j.e.fire(self.cropHandler, 'updatesize');
            });
            self.j.e
                .on(to_array_toArray(this.editor.querySelectorAll(`.${image_editor_jie}__slider-title`)), 'click', this.onTitleModeClick)
                .on([widthInput, heightInput], 'input', this.onChangeSizeInput);
            const { keepAspectRatioResize, keepAspectRatioCrop } = refs(this.editor);
            if (keepAspectRatioResize) {
                keepAspectRatioResize.addEventListener('change', () => {
                    this.resizeUseRatio = keepAspectRatioResize.checked;
                });
            }
            if (keepAspectRatioCrop) {
                keepAspectRatioCrop.addEventListener('change', () => {
                    this.cropUseRatio = keepAspectRatioCrop.checked;
                });
            }
            self.j.e
                .on(self.resizeHandler, 'updatesize', () => {
                css(self.resizeHandler, {
                    top: 0,
                    left: 0,
                    width: self.image.offsetWidth || self.naturalWidth,
                    height: self.image.offsetHeight || self.naturalHeight
                });
                this.updateResizeBox();
            })
                .on(self.cropHandler, 'updatesize', () => {
                if (!self.cropImage) {
                    return;
                }
                let new_x = css(self.cropHandler, 'left'), new_y = css(self.cropHandler, 'top'), new_width = self.cropHandler.offsetWidth, new_height = self.cropHandler.offsetHeight;
                if (new_x < 0) {
                    new_x = 0;
                }
                if (new_y < 0) {
                    new_y = 0;
                }
                if (new_x + new_width > self.cropImage.offsetWidth) {
                    new_width = self.cropImage.offsetWidth - new_x;
                    if (self.cropUseRatio) {
                        new_height = new_width / self.ratio;
                    }
                }
                if (new_y + new_height > self.cropImage.offsetHeight) {
                    new_height = self.cropImage.offsetHeight - new_y;
                    if (self.cropUseRatio) {
                        new_width = new_height * self.ratio;
                    }
                }
                css(self.cropHandler, {
                    width: new_width,
                    height: new_height,
                    left: new_x,
                    top: new_y,
                    backgroundPosition: -new_x - 1 + 'px ' + (-new_y - 1) + 'px',
                    backgroundSize: self.cropImage.offsetWidth +
                        'px ' +
                        self.cropImage.offsetHeight +
                        'px'
                });
                self.updateCropBox();
            });
            Object.values(self.buttons).forEach(button => {
                button.onAction(() => {
                    const data = {
                        action: self.activeTab,
                        box: self.activeTab === TABS.resize
                            ? self.resizeBox
                            : self.cropBox
                    };
                    switch (button) {
                        case self.buttons.saveas:
                            Prompt(self.j.i18n('Enter new name'), self.j.i18n('Save in new file'), (name) => {
                                if (!trim_trim(name)) {
                                    Alert(self.j.i18n('The name should not be empty')).bindDestruct(this.j);
                                    return false;
                                }
                                self.onSave(name, data, self.hide, (e) => {
                                    Alert(e.message).bindDestruct(self.j);
                                });
                            }).bindDestruct(this.j);
                            break;
                        case self.buttons.save:
                            self.onSave(undefined, data, self.hide, (e) => {
                                Alert(e.message).bindDestruct(self.j);
                            });
                            break;
                        case self.buttons.reset:
                            if (self.activeTab === TABS.resize) {
                                css(self.image, {
                                    width: null,
                                    height: null
                                });
                                widthInput.value = self.naturalWidth.toString();
                                heightInput.value = self.naturalHeight.toString();
                                self.j.e.fire(self.resizeHandler, 'updatesize');
                            }
                            else {
                                self.showCrop();
                            }
                            break;
                    }
                });
            });
        };
        this.options =
            editor && editor.o && editor.o.imageeditor
                ? editor.o.imageeditor
                : config_Config.defaultOptions.imageeditor;
        const o = this.options;
        this.resizeUseRatio = o.resizeUseRatio;
        this.cropUseRatio = o.cropUseRatio;
        this.buttons = {
            reset: Button(this.j, 'update', 'Reset'),
            save: Button(this.j, 'save', 'Save'),
            saveas: Button(this.j, 'save', 'Save as ...')
        };
        this.activeTab = o.resize ? TABS.resize : TABS.crop;
        this.editor = form_form(this.j, this.options);
        const { resizeBox, cropBox } = refs(this.editor);
        this.resize_box = resizeBox;
        this.crop_box = cropBox;
        this.sizes = this.editor.querySelector(`.${image_editor_jie}__area.${image_editor_jie}__area_crop .jodit-image-editor__sizes`);
        this.resizeHandler = this.editor.querySelector(`.${image_editor_jie}__resizer`);
        this.cropHandler = this.editor.querySelector(`.${image_editor_jie}__croper`);
        this.dialog = new Dialog({
            fullsize: this.j.o.fullsize,
            globalFullSize: this.j.o.globalFullSize,
            language: this.j.o.language,
            buttons: ['fullsize', 'dialog.close']
        });
        this.dialog.setContent(this.editor);
        this.dialog.setSize(this.o.width, this.o.height);
        this.dialog.setHeader([
            this.buttons.reset,
            this.buttons.save,
            this.buttons.saveas
        ]);
        this.setHandlers();
    }
    className() {
        return 'ImageEditor';
    }
    onTitleModeClick(e) {
        const self = this, title = e.target;
        const slide = title === null || title === void 0 ? void 0 : title.parentElement;
        if (!slide) {
            return;
        }
        selector_$$(`.${image_editor_jie}__slider,.${image_editor_jie}__area`, self.editor).forEach(elm => elm.classList.remove(`${image_editor_jie}_active`));
        slide.classList.add(`${image_editor_jie}_active`);
        this.activeTab = utils_attr(slide, '-area') || TABS.resize;
        const tab = self.editor.querySelector(`.${image_editor_jie}__area.${image_editor_jie}__area_` + self.activeTab);
        if (tab) {
            tab.classList.add(`${image_editor_jie}_active`);
        }
        if (self.activeTab === TABS.crop) {
            self.showCrop();
        }
    }
    onChangeSizeInput(e) {
        const self = this, input = e.target, { widthInput, heightInput } = refs(this.editor), isWidth = utils_attr(input, 'data-ref') === 'widthInput', x = parseInt(input.value, 10), minX = isWidth ? self.o.min_width : self.o.min_height, minY = !isWidth ? self.o.min_width : self.o.min_height;
        let y;
        if (x > minX) {
            css(self.image, isWidth ? 'width' : 'height', x);
            if (self.resizeUseRatio) {
                y = isWidth
                    ? Math.round(x / self.ratio)
                    : Math.round(x * self.ratio);
                if (y > minY) {
                    css(self.image, !isWidth ? 'width' : 'height', y);
                    if (isWidth) {
                        heightInput.value = y.toString();
                    }
                    else {
                        widthInput.value = y.toString();
                    }
                }
            }
        }
        this.j.e.fire(self.resizeHandler, 'updatesize');
    }
    onResizeHandleMouseDown(e) {
        const self = this;
        self.target = e.target;
        e.preventDefault();
        e.stopImmediatePropagation();
        self.clicked = true;
        self.start_x = e.clientX;
        self.start_y = e.clientY;
        if (self.activeTab === TABS.crop) {
            self.top_x = css(self.cropHandler, 'left');
            self.top_y = css(self.cropHandler, 'top');
            self.width = self.cropHandler.offsetWidth;
            self.height = self.cropHandler.offsetHeight;
        }
        else {
            self.width = self.image.offsetWidth;
            self.height = self.image.offsetHeight;
        }
        self.j.e
            .on(this.j.ow, 'mousemove', this.onGlobalMouseMove)
            .one(this.j.ow, 'mouseup', this.onGlobalMouseUp);
    }
    onGlobalMouseUp(e) {
        if (this.clicked) {
            this.clicked = false;
            e.stopImmediatePropagation();
            this.j.e.off(this.j.ow, 'mousemove', this.onGlobalMouseMove);
        }
    }
    onGlobalMouseMove(e) {
        const self = this;
        if (!self.clicked) {
            return;
        }
        const { widthInput, heightInput } = refs(this.editor);
        self.diff_x = e.clientX - self.start_x;
        self.diff_y = e.clientY - self.start_y;
        if ((self.activeTab === TABS.resize && self.resizeUseRatio) ||
            (self.activeTab === TABS.crop && self.cropUseRatio)) {
            if (self.diff_x) {
                self.new_w = self.width + self.diff_x;
                self.new_h = Math.round(self.new_w / self.ratio);
            }
            else {
                self.new_h = self.height + self.diff_y;
                self.new_w = Math.round(self.new_h * self.ratio);
            }
        }
        else {
            self.new_w = self.width + self.diff_x;
            self.new_h = self.height + self.diff_y;
        }
        if (self.activeTab === TABS.resize) {
            if (self.new_w > self.o.resizeMinWidth) {
                css(self.image, 'width', self.new_w + 'px');
                widthInput.value = self.new_w.toString();
            }
            if (self.new_h > self.o.resizeMinHeight) {
                css(self.image, 'height', self.new_h + 'px');
                heightInput.value = self.new_h.toString();
            }
            this.j.e.fire(self.resizeHandler, 'updatesize');
        }
        else {
            if (self.target !== self.cropHandler) {
                if (self.top_x + self.new_w > self.cropImage.offsetWidth) {
                    self.new_w = self.cropImage.offsetWidth - self.top_x;
                }
                if (self.top_y + self.new_h > self.cropImage.offsetHeight) {
                    self.new_h = self.cropImage.offsetHeight - self.top_y;
                }
                css(self.cropHandler, {
                    width: self.new_w,
                    height: self.new_h
                });
            }
            else {
                if (self.top_x + self.diff_x + self.cropHandler.offsetWidth >
                    self.cropImage.offsetWidth) {
                    self.diff_x =
                        self.cropImage.offsetWidth -
                            self.top_x -
                            self.cropHandler.offsetWidth;
                }
                css(self.cropHandler, 'left', self.top_x + self.diff_x);
                if (self.top_y + self.diff_y + self.cropHandler.offsetHeight >
                    self.cropImage.offsetHeight) {
                    self.diff_y =
                        self.cropImage.offsetHeight -
                            self.top_y -
                            self.cropHandler.offsetHeight;
                }
                css(self.cropHandler, 'top', self.top_y + self.diff_y);
            }
            this.j.e.fire(self.cropHandler, 'updatesize');
        }
    }
    get o() {
        return this.options;
    }
    hide() {
        this.dialog.close();
    }
    open(url, save) {
        return this.j.async.promise((resolve) => {
            const timestamp = new Date().getTime();
            this.image = this.j.c.element('img');
            selector_$$('img,.jodit-icon_loader', this.resize_box).forEach(dom_Dom.safeRemove);
            selector_$$('img,.jodit-icon_loader', this.crop_box).forEach(dom_Dom.safeRemove);
            css(this.cropHandler, 'background', 'transparent');
            this.onSave = save;
            this.resize_box.appendChild(this.j.c.element('i', { class: 'jodit-icon_loader' }));
            this.crop_box.appendChild(this.j.c.element('i', { class: 'jodit-icon_loader' }));
            if (/\?/.test(url)) {
                url += '&_tst=' + timestamp;
            }
            else {
                url += '?_tst=' + timestamp;
            }
            this.image.setAttribute('src', url);
            this.dialog.open();
            const { widthInput, heightInput } = refs(this.editor);
            const onload = () => {
                if (this.isDestructed) {
                    return;
                }
                this.image.removeEventListener('load', onload);
                this.naturalWidth = this.image.naturalWidth;
                this.naturalHeight = this.image.naturalHeight;
                widthInput.value = this.naturalWidth.toString();
                heightInput.value = this.naturalHeight.toString();
                this.ratio = this.naturalWidth / this.naturalHeight;
                this.resize_box.appendChild(this.image);
                this.cropImage = this.image.cloneNode(true);
                this.crop_box.appendChild(this.cropImage);
                selector_$$('.jodit-icon_loader', this.editor).forEach(dom_Dom.safeRemove);
                if (this.activeTab === TABS.crop) {
                    this.showCrop();
                }
                this.j.e.fire(this.resizeHandler, 'updatesize');
                this.j.e.fire(this.cropHandler, 'updatesize');
                this.dialog.setPosition();
                this.j.e.fire('afterImageEditor');
                resolve(this.dialog);
            };
            this.image.addEventListener('load', onload);
            if (this.image.complete) {
                onload();
            }
        });
    }
    destruct() {
        if (this.isDestructed) {
            return;
        }
        if (this.dialog && !this.dialog.isInDestruct) {
            this.dialog.destruct();
        }
        dom_Dom.safeRemove(this.editor);
        if (this.j.e) {
            this.j.e
                .off(this.j.ow, 'mousemove', this.onGlobalMouseMove)
                .off(this.j.ow, 'mouseup', this.onGlobalMouseUp)
                .off(this.ow, `.${image_editor_jie}`)
                .off(`.${image_editor_jie}`);
        }
        super.destruct();
    }
};
ImageEditor.calcValueByPercent = (value, percent) => {
    const percentStr = percent.toString();
    const valueNbr = parseFloat(value.toString());
    let match;
    match = /^[-+]?[0-9]+(px)?$/.exec(percentStr);
    if (match) {
        return parseInt(percentStr, 10);
    }
    match = /^([-+]?[0-9.]+)%$/.exec(percentStr);
    if (match) {
        return Math.round(valueNbr * (parseFloat(match[1]) / 100));
    }
    return valueNbr || 0;
};
__decorate([
    autobind
], ImageEditor.prototype, "onTitleModeClick", null);
__decorate([
    debounce(),
    autobind
], ImageEditor.prototype, "onChangeSizeInput", null);
__decorate([
    autobind
], ImageEditor.prototype, "onResizeHandleMouseDown", null);
__decorate([
    autobind
], ImageEditor.prototype, "onGlobalMouseUp", null);
__decorate([
    throttle(10)
], ImageEditor.prototype, "onGlobalMouseMove", null);
__decorate([
    autobind
], ImageEditor.prototype, "hide", null);
__decorate([
    autobind
], ImageEditor.prototype, "open", null);
ImageEditor = ImageEditor_1 = __decorate([
    component
], ImageEditor);

function openImageEditor(href, name, path, source, onSuccess, onFailed) {
    return this.getInstance('ImageEditor', this.o).open(href, (newname, box, success, failed) => call(box.action === 'resize'
        ? this.dataProvider.resize
        : this.dataProvider.crop, path, source, name, newname, box.box)
        .then(ok => {
        if (ok) {
            success();
            if (onSuccess) {
                onSuccess();
            }
        }
    })
        .catch(error => {
        failed(error);
        if (onFailed) {
            onFailed(error);
        }
    }));
}

;// CONCATENATED MODULE: ./src/modules/file-browser/fetch/delete-file.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function deleteFile(fb, name, source) {
    return fb.dataProvider
        .fileRemove(fb.state.currentPath, name, source)
        .then(message => {
        fb.status(message || fb.i18n('File "%s" was deleted', name), true);
    })
        .catch(fb.status);
}

;// CONCATENATED MODULE: ./src/modules/file-browser/builders/context-menu.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */










const CLASS_PREVIEW = 'jodit-filebrowser-preview', preview_tpl_next = (next = 'next', right = 'right') => `<div class="${CLASS_PREVIEW}__navigation ${CLASS_PREVIEW}__navigation_arrow_${next}">` +
    '' +
    Icon.get('angle-' + right) +
    '</a>';
/* harmony default export */ var context_menu = ((self) => {
    if (!self.o.contextMenu) {
        return () => { };
    }
    const contextmenu = makeContextMenu(self);
    return (e) => {
        const a = getItem(e.target, self.container);
        if (!a) {
            return;
        }
        let item = a;
        const opt = self.options, ga = (key) => utils_attr(item, key) || '';
        self.async.setTimeout(() => {
            const selectedItem = elementToItem(a, elementsMap(self));
            if (!selectedItem) {
                return;
            }
            self.state.activeElements = [selectedItem];
            contextmenu.show(e.clientX, e.clientY, [
                ga('data-is-file') !== '1' &&
                    opt.editImage &&
                    (self.dataProvider.canI('ImageResize') ||
                        self.dataProvider.canI('ImageCrop'))
                    ? {
                        icon: 'pencil',
                        title: 'Edit',
                        exec: () => {
                            return openImageEditor.call(self, ga('href'), ga('data-name'), ga('data-path'), ga('data-source'));
                        }
                    }
                    : false,
                self.dataProvider.canI('FileRename')
                    ? {
                        icon: 'italic',
                        title: 'Rename',
                        exec: async () => {
                            self.e.fire('fileRename.filebrowser', ga('data-name'), ga('data-path'), ga('data-source'));
                        }
                    }
                    : false,
                self.dataProvider.canI('FileRemove')
                    ? {
                        icon: 'bin',
                        title: 'Delete',
                        exec: async () => {
                            try {
                                await deleteFile(self, ga('data-name'), ga('data-source'));
                            }
                            catch (e) {
                                return self.status(e);
                            }
                            self.state.activeElements = [];
                            return loadTree(self).catch(self.status);
                        }
                    }
                    : false,
                opt.preview
                    ? {
                        icon: 'eye',
                        title: 'Preview',
                        exec: () => {
                            const preview = new Dialog({
                                fullsize: self.o.fullsize,
                                language: self.o.language,
                                buttons: ['fullsize', 'dialog.close']
                            }), temp_content = self.c.div(CLASS_PREVIEW, '<div class="jodit-icon_loader"></div>'), preview_box = self.c.div(CLASS_PREVIEW + '__box'), next = self.c.fromHTML(preview_tpl_next()), prev = self.c.fromHTML(preview_tpl_next('prev', 'left')), addLoadHandler = (src) => {
                                const image = self.c.element('img');
                                image.setAttribute('src', src);
                                const onload = () => {
                                    var _a;
                                    if (self.isInDestruct) {
                                        return;
                                    }
                                    self.e.off(image, 'load');
                                    dom_Dom.detach(temp_content);
                                    if (opt.showPreviewNavigation) {
                                        if (dom_Dom.prevWithClass(item, self.files.getFullElName('item'))) {
                                            temp_content.appendChild(prev);
                                        }
                                        if (dom_Dom.nextWithClass(item, self.files.getFullElName('item'))) {
                                            temp_content.appendChild(next);
                                        }
                                    }
                                    temp_content.appendChild(preview_box);
                                    preview_box.appendChild(image);
                                    preview.setPosition();
                                    (_a = self === null || self === void 0 ? void 0 : self.events) === null || _a === void 0 ? void 0 : _a.fire('previewOpenedAndLoaded');
                                };
                                self.e.on(image, 'load', onload);
                                if (image.complete) {
                                    onload();
                                }
                            };
                            self.e.on([next, prev], 'click', function () {
                                if (this === next) {
                                    item = dom_Dom.nextWithClass(item, self.files.getFullElName('item'));
                                }
                                else {
                                    item = dom_Dom.prevWithClass(item, self.files.getFullElName('item'));
                                }
                                if (!item) {
                                    throw error_error('Need element');
                                }
                                dom_Dom.detach(temp_content);
                                dom_Dom.detach(preview_box);
                                temp_content.innerHTML =
                                    '<div class="jodit-icon_loader"></div>';
                                addLoadHandler(ga('href'));
                            });
                            self.e.on('beforeDestruct', () => {
                                preview.destruct();
                            });
                            preview.container.classList.add(CLASS_PREVIEW + '__dialog');
                            preview.setContent(temp_content);
                            preview.setPosition();
                            preview.open();
                            addLoadHandler(ga('href'));
                            self.events
                                .on('beforeDestruct', () => {
                                preview.destruct();
                            })
                                .fire('previewOpened');
                        }
                    }
                    : false,
                {
                    icon: 'upload',
                    title: 'Download',
                    exec: () => {
                        const url = ga('href');
                        if (url) {
                            self.ow.open(url);
                        }
                    }
                }
            ]);
        }, self.defaultTimeout);
        self.e
            .on('beforeClose', () => contextmenu.close())
            .on('beforeDestruct', () => contextmenu.destruct());
        e.stopPropagation();
        e.preventDefault();
        return false;
    };
});

;// CONCATENATED MODULE: ./src/modules/file-browser/listeners/native-listeners.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





const getItem = (node, root, tag = 'a') => dom_Dom.closest(node, elm => dom_Dom.isTag(elm, tag), root);
const elementToItem = (elm, elementsMap) => {
    const { key } = elm.dataset, { item } = elementsMap[key || ''];
    return item;
};
function nativeListeners() {
    let dragElement = false;
    const elmMap = elementsMap(this);
    const self = this;
    self.e
        .on(self.tree.container, 'dragstart', (e) => {
        const a = getItem(e.target, self.container);
        if (!a) {
            return;
        }
        if (self.o.moveFolder) {
            dragElement = a;
        }
    })
        .on(self.tree.container, 'drop', (e) => {
        if ((self.o.moveFile || self.o.moveFolder) && dragElement) {
            let path = utils_attr(dragElement, '-path') || '';
            if (!self.o.moveFolder &&
                dragElement.classList.contains(this.tree.getFullElName('item'))) {
                return false;
            }
            if (dragElement.classList.contains(this.files.getFullElName('item'))) {
                path += utils_attr(dragElement, '-name');
                if (!self.o.moveFile) {
                    return false;
                }
            }
            const a = getItem(e.target, self.container);
            if (!a) {
                return;
            }
            self.dataProvider
                .move(path, utils_attr(a, '-path') || '', utils_attr(a, '-source') || '', dragElement.classList.contains(this.files.getFullElName('item')))
                .then(() => loadTree(this))
                .catch(self.status);
            dragElement = false;
        }
    })
        .on(self.files.container, 'contextmenu', context_menu(self))
        .on(self.files.container, 'click', (e) => {
        if (!ctrlKey(e)) {
            this.state.activeElements = [];
        }
    })
        .on(self.files.container, 'click', (e) => {
        const a = getItem(e.target, self.container);
        if (!a) {
            return;
        }
        const item = elementToItem(a, elmMap);
        if (!item) {
            return;
        }
        if (!ctrlKey(e)) {
            self.state.activeElements = [item];
        }
        else {
            self.state.activeElements = [
                ...self.state.activeElements,
                item
            ];
        }
        e.stopPropagation();
        return false;
    })
        .on(self.files.container, 'dragstart', (e) => {
        if (self.o.moveFile) {
            const a = getItem(e.target, self.container);
            if (!a) {
                return;
            }
            dragElement = a;
        }
    })
        .on(self.container, 'drop', (e) => e.preventDefault());
}

;// CONCATENATED MODULE: ./src/modules/file-browser/listeners/self-listeners.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */








function selfListeners() {
    const state = this.state, dp = this.dataProvider, self = this;
    self.e
        .on('view.filebrowser', (view) => {
        if (view !== state.view) {
            state.view = view;
        }
    })
        .on('sort.filebrowser', (value) => {
        if (value !== state.sortBy) {
            state.sortBy = value;
            loadItems(self).catch(self.status);
        }
    })
        .on('filter.filebrowser', (value) => {
        if (value !== state.filterWord) {
            state.filterWord = value;
            loadItems(self).catch(self.status);
        }
    })
        .on('openFolder.filebrowser', (data) => {
        let path;
        if (data.name === '..') {
            path = data.path
                .split('/')
                .filter((p) => p.length)
                .slice(0, -1)
                .join('/');
        }
        else {
            path = normalizePath(data.path, data.name);
        }
        self.state.currentPath = path;
        self.state.currentSource =
            data.name === '.' ? DEFAULT_SOURCE_NAME : data.source;
    })
        .on('removeFolder.filebrowser', (data) => {
        Confirm(self.i18n('Are you sure?'), self.i18n('Delete'), (yes) => {
            if (yes) {
                dp.folderRemove(data.path, data.name, data.source)
                    .then(message => {
                    self.status(message, true);
                    return loadTree(self);
                })
                    .catch(self.status);
            }
        }).bindDestruct(self);
    })
        .on('renameFolder.filebrowser', (data) => {
        Prompt(self.i18n('Enter new name'), self.i18n('Rename'), (newName) => {
            if (!isValidName(newName)) {
                self.status(self.i18n('Enter new name'));
                return false;
            }
            dp.folderRename(data.path, data.name, newName, data.source)
                .then(message => {
                self.state.activeElements = [];
                self.status(message, true);
                return loadTree(self);
            })
                .catch(self.status);
            return;
        }, self.i18n('type name'), data.name).bindDestruct(self);
    })
        .on('addFolder.filebrowser', (data) => {
        Prompt(self.i18n('Enter Directory name'), self.i18n('Create directory'), (name) => {
            dp.createFolder(name, data.path, data.source)
                .then(() => loadTree(self))
                .catch(self.status);
        }, self.i18n('type name')).bindDestruct(self);
    })
        .on('fileRemove.filebrowser', () => {
        if (self.state.activeElements.length) {
            Confirm(self.i18n('Are you sure?'), '', (yes) => {
                if (yes) {
                    const promises = [];
                    self.state.activeElements.forEach(item => {
                        promises.push(deleteFile(self, item.file || item.name || '', item.sourceName));
                    });
                    self.state.activeElements = [];
                    Promise.all(promises).then(() => loadTree(self).catch(self.status), self.status);
                }
            }).bindDestruct(self);
        }
    })
        .on('edit.filebrowser', () => {
        if (self.state.activeElements.length === 1) {
            const [file] = this.state.activeElements;
            openImageEditor.call(self, file.fileURL, file.file || '', file.path, file.sourceName);
        }
    })
        .on('fileRename.filebrowser', (name, path, source) => {
        if (self.state.activeElements.length === 1) {
            Prompt(self.i18n('Enter new name'), self.i18n('Rename'), (newName) => {
                if (!isValidName(newName)) {
                    self.status(self.i18n('Enter new name'));
                    return false;
                }
                dp.fileRename(path, name, newName, source)
                    .then(message => {
                    self.state.activeElements = [];
                    self.status(message, true);
                    loadItems(self).catch(self.status);
                })
                    .catch(self.status);
                return;
            }, self.i18n('type name'), name).bindDestruct(this);
        }
    })
        .on('update.filebrowser', () => {
        loadTree(this).then(this.status);
    });
}

;// CONCATENATED MODULE: ./src/modules/file-browser/ui/files/files.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


class files_FileBrowserFiles extends UIGroup {
    className() {
        return 'FilebrowserFiles';
    }
}

;// CONCATENATED MODULE: ./src/modules/file-browser/ui/tree/tree.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


class FileBrowserTree extends UIGroup {
    className() {
        return 'FilebrowserTree';
    }
}

;// CONCATENATED MODULE: ./src/modules/file-browser/ui/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



;// CONCATENATED MODULE: ./src/modules/file-browser/file-browser.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





















class FileBrowser extends ViewWithToolbar {
    constructor(options) {
        var _a;
        super(options);
        this.browser = this.c.div(this.componentName);
        this.status_line = this.c.div(this.getFullElName('status'));
        this.tree = new FileBrowserTree(this);
        this.files = new files_FileBrowserFiles(this);
        this.state = observable({
            currentPath: '',
            currentSource: DEFAULT_SOURCE_NAME,
            currentBaseUrl: '',
            activeElements: [],
            elements: [],
            messages: [],
            sources: [],
            view: 'tiles',
            sortBy: 'changed-desc',
            filterWord: '',
            onlyImages: false
        });
        this.errorHandler = (resp) => {
            if (resp instanceof Error) {
                this.status(this.i18n(resp.message));
            }
            else {
                this.status(this.dataProvider.getMessage(resp));
            }
        };
        this.close = () => {
            this.dialog.close();
        };
        this.attachEvents(options);
        const self = this;
        self.options = config_proto_ConfigProto(options || {}, config_Config.defaultOptions.filebrowser);
        self.storage = Storage.makeStorage(Boolean(this.o.saveStateInStorage), this.componentName);
        self.dataProvider = makeDataProvider(self, self.options);
        self.dialog = new Dialog({
            fullsize: self.o.fullsize,
            ownerWindow: self.ownerWindow,
            theme: self.o.theme,
            globalFullSize: self.o.globalFullSize,
            language: this.o.language,
            minWidth: Math.min(700, screen.width),
            minHeight: 300,
            buttons: (_a = this.o.headerButtons) !== null && _a !== void 0 ? _a : ['fullsize', 'dialog.close']
        });
        this.proxyDialogEvents(self);
        self.browser.component = this;
        self.container = self.browser;
        if (self.o.showFoldersPanel) {
            self.browser.appendChild(self.tree.container);
        }
        self.browser.appendChild(self.files.container);
        self.browser.appendChild(self.status_line);
        selfListeners.call(self);
        nativeListeners.call(self);
        stateListeners.call(self);
        self.dialog.setSize(self.o.width, self.o.height);
        const keys = [
            'getLocalFileByUrl',
            'crop',
            'resize',
            'create',
            'fileMove',
            'folderMove',
            'fileRename',
            'folderRename',
            'fileRemove',
            'folderRemove',
            'folder',
            'items',
            'permissions'
        ];
        keys.forEach(key => {
            if (this.options[key] != null) {
                this.options[key] = config_proto_ConfigProto(this.options[key], this.o.ajax);
            }
        });
        const { storeView, storeSortBy, storeLastOpenedFolder } = this.o
            .saveStateInStorage || {
            storeLastOpenedFolder: false,
            storeView: false,
            storeSortBy: false
        };
        const view = storeView && this.storage.get('view');
        if (view && this.o.view == null) {
            self.state.view = view === 'list' ? 'list' : 'tiles';
        }
        else {
            self.state.view = self.o.view === 'list' ? 'list' : 'tiles';
        }
        self.files.setMod('view', self.state.view);
        const sortBy = storeSortBy && self.storage.get('sortBy');
        if (sortBy) {
            const parts = sortBy.split('-');
            self.state.sortBy = ['changed', 'name', 'size'].includes(parts[0])
                ? sortBy
                : 'changed-desc';
        }
        else {
            self.state.sortBy = self.o.sortBy || 'changed-desc';
        }
        if (storeLastOpenedFolder) {
            const currentPath = self.storage.get('currentPath'), currentSource = self.storage.get('currentSource');
            self.state.currentPath = currentPath !== null && currentPath !== void 0 ? currentPath : '';
            self.state.currentSource = currentSource !== null && currentSource !== void 0 ? currentSource : '';
        }
        self.initUploader(self);
        self.setStatus(statuses_STATUSES.ready);
    }
    className() {
        return 'Filebrowser';
    }
    onSelect(callback) {
        return () => {
            if (this.state.activeElements.length) {
                const files = [];
                const isImages = [];
                this.state.activeElements.forEach(elm => {
                    const url = elm.fileURL;
                    if (url) {
                        files.push(url);
                        isImages.push(elm.isImage || false);
                    }
                });
                this.close();
                const data = {
                    baseurl: '',
                    files,
                    isImages
                };
                if (is_function_isFunction(callback)) {
                    callback(data);
                }
                this.close();
            }
            return false;
        };
    }
    get isOpened() {
        return this.dialog.isOpened && this.browser.style.display !== 'none';
    }
    status(message, success) {
        if (!is_string_isString(message)) {
            message = message.message;
        }
        if (!is_string_isString(message) || !trim_trim(message).length) {
            return;
        }
        const successClass = this.getFullElName('status', 'success', true), activeClass = this.getFullElName('status', 'active', true);
        this.status_line.classList.remove(successClass);
        this.status_line.classList.add(activeClass);
        const messageBox = this.c.div();
        messageBox.textContent = message;
        this.status_line.appendChild(messageBox);
        if (success) {
            this.status_line.classList.add(successClass);
        }
        this.async.setTimeout(() => {
            this.status_line.classList.remove(activeClass);
            dom_Dom.detach(this.status_line);
        }, {
            timeout: this.o.howLongShowMsg,
            label: 'fileBrowser.status'
        });
    }
    open(callback = this.o
        .defaultCallback, onlyImages = false) {
        this.state.onlyImages = onlyImages;
        return this.async.promise((resolve, reject) => {
            var _a;
            if (!this.o.items || !this.o.items.url) {
                throw error_error('Need set options.filebrowser.ajax.url');
            }
            let localTimeout = 0;
            this.e
                .off(this.files.container, 'dblclick')
                .on(this.files.container, 'dblclick', this.onSelect(callback))
                .on(this.files.container, 'touchstart', () => {
                const now = new Date().getTime();
                if (now - localTimeout < EMULATE_DBLCLICK_TIMEOUT) {
                    this.onSelect(callback)();
                }
                localTimeout = now;
            })
                .off('select.filebrowser')
                .on('select.filebrowser', this.onSelect(callback));
            const header = this.c.div();
            this.toolbar.build((_a = this.o.buttons) !== null && _a !== void 0 ? _a : []).appendTo(header);
            this.dialog.open(this.browser, header);
            this.e.fire('sort.filebrowser', this.state.sortBy);
            loadTree(this).then(resolve, reject);
        });
    }
    initUploader(editor) {
        var _a;
        const self = this, options = (_a = editor === null || editor === void 0 ? void 0 : editor.options) === null || _a === void 0 ? void 0 : _a.uploader, uploaderOptions = config_proto_ConfigProto(options || {}, config_Config.defaultOptions.uploader);
        const uploadHandler = () => loadItems(this);
        self.uploader = self.getInstance('Uploader', uploaderOptions);
        self.uploader
            .setPath(self.state.currentPath)
            .setSource(self.state.currentSource)
            .bind(self.browser, uploadHandler, self.errorHandler);
        this.state.on(['change.currentPath', 'change.currentSource'], () => {
            this.uploader
                .setPath(this.state.currentPath)
                .setSource(this.state.currentSource);
        });
        self.e.on('bindUploader.filebrowser', (button) => {
            self.uploader.bind(button, uploadHandler, self.errorHandler);
        });
    }
    proxyDialogEvents(self) {
        ['afterClose', 'beforeOpen'].forEach(proxyEvent => {
            self.dialog.events.on(self.dialog, proxyEvent, () => {
                this.e.fire(proxyEvent);
            });
        });
    }
    destruct() {
        if (this.isInDestruct) {
            return;
        }
        this.dialog.destruct();
        this.events && this.e.off('.filebrowser');
        this.uploader && this.uploader.destruct();
        super.destruct();
    }
}
__decorate([
    autobind
], FileBrowser.prototype, "status", null);
__decorate([
    autobind
], FileBrowser.prototype, "open", null);
function isFileBrowserFilesItem(target) {
    return (Dom.isElement(target) &&
        target.classList.contains(FileBrowserFiles.prototype.getFullElName('item')));
}

;// CONCATENATED MODULE: ./src/modules/file-browser/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


;// CONCATENATED MODULE: ./src/modules/observer/snapshot.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


class Snapshot extends view_component_ViewComponent {
    constructor() {
        super(...arguments);
        this.isBlocked = false;
    }
    className() {
        return 'Snapshot';
    }
    static equal(first, second) {
        return (first.html === second.html &&
            JSON.stringify(first.range) === JSON.stringify(second.range));
    }
    static countNodesBeforeInParent(elm) {
        if (!elm.parentNode) {
            return 0;
        }
        const elms = elm.parentNode.childNodes;
        let count = 0, last = null, j;
        for (j = 0; j < elms.length; j += 1) {
            if (last &&
                !(dom_Dom.isText(elms[j]) && elms[j].textContent === '') &&
                !(dom_Dom.isText(last) && dom_Dom.isText(elms[j]))) {
                count += 1;
            }
            if (elms[j] === elm) {
                return count;
            }
            last = elms[j];
        }
        return 0;
    }
    static strokeOffset(elm, offset) {
        while (dom_Dom.isText(elm)) {
            elm = elm.previousSibling;
            if (dom_Dom.isText(elm) && elm.textContent != null) {
                offset += elm.textContent.length;
            }
        }
        return offset;
    }
    calcHierarchyLadder(elm) {
        const counts = [];
        if (!elm || !elm.parentNode || !dom_Dom.isOrContains(this.j.editor, elm)) {
            return [];
        }
        while (elm && elm !== this.j.editor) {
            if (elm) {
                counts.push(Snapshot.countNodesBeforeInParent(elm));
            }
            elm = elm.parentNode;
        }
        return counts.reverse();
    }
    getElementByLadder(ladder) {
        let n = this.j.editor, i;
        for (i = 0; n && i < ladder.length; i += 1) {
            n = n.childNodes[ladder[i]];
        }
        return n;
    }
    make() {
        const snapshot = {
            html: '',
            range: {
                startContainer: [],
                startOffset: 0,
                endContainer: [],
                endOffset: 0
            }
        };
        snapshot.html = this.j.getNativeEditorValue();
        const sel = this.j.s.sel;
        if (sel && sel.rangeCount) {
            const range = sel.getRangeAt(0), startContainer = this.calcHierarchyLadder(range.startContainer), endContainer = this.calcHierarchyLadder(range.endContainer);
            let startOffset = Snapshot.strokeOffset(range.startContainer, range.startOffset), endOffset = Snapshot.strokeOffset(range.endContainer, range.endOffset);
            if (!startContainer.length &&
                range.startContainer !== this.j.editor) {
                startOffset = 0;
            }
            if (!endContainer.length && range.endContainer !== this.j.editor) {
                endOffset = 0;
            }
            snapshot.range = {
                startContainer,
                startOffset,
                endContainer,
                endOffset
            };
        }
        return snapshot;
    }
    restore(snapshot) {
        this.isBlocked = true;
        const scroll = this.storeScrollState();
        const value = this.j.getNativeEditorValue();
        if (value !== snapshot.html) {
            this.j.setEditorValue(snapshot.html);
        }
        this.restoreOnlySelection(snapshot);
        this.restoreScrollState(scroll);
        this.isBlocked = false;
    }
    storeScrollState() {
        return [this.j.ow.scrollY, this.j.editor.scrollTop];
    }
    restoreScrollState(scrolls) {
        const { j } = this, { ow } = j;
        ow.scrollTo(ow.scrollX, scrolls[0]);
        j.editor.scrollTop = scrolls[1];
    }
    restoreOnlySelection(snapshot) {
        try {
            if (snapshot.range) {
                const range = this.j.ed.createRange();
                range.setStart(this.getElementByLadder(snapshot.range.startContainer), snapshot.range.startOffset);
                range.setEnd(this.getElementByLadder(snapshot.range.endContainer), snapshot.range.endOffset);
                this.j.s.selectRange(range);
            }
        }
        catch (__ignore) {
            this.j.editor.lastChild &&
                this.j.s.setCursorAfter(this.j.editor.lastChild);
            if (false) {}
        }
    }
    destruct() {
        this.isBlocked = false;
        super.destruct();
    }
}

;// CONCATENATED MODULE: ./src/modules/observer/stack.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Stack {
    constructor(size) {
        this.size = size;
        this.commands = [];
        this.stackPosition = -1;
    }
    get length() {
        return this.commands.length;
    }
    clearRedo() {
        this.commands.length = this.stackPosition + 1;
    }
    clear() {
        this.commands.length = 0;
        this.stackPosition = -1;
    }
    push(command) {
        this.clearRedo();
        this.commands.push(command);
        this.stackPosition += 1;
        if (this.commands.length > this.size) {
            this.commands.shift();
            this.stackPosition -= 1;
        }
    }
    replace(command) {
        this.commands[this.stackPosition] = command;
    }
    current() {
        return this.commands[this.stackPosition];
    }
    undo() {
        if (this.canUndo()) {
            if (this.commands[this.stackPosition]) {
                this.commands[this.stackPosition].undo();
            }
            this.stackPosition -= 1;
            return true;
        }
        return false;
    }
    redo() {
        if (this.canRedo()) {
            this.stackPosition += 1;
            if (this.commands[this.stackPosition]) {
                this.commands[this.stackPosition].redo();
            }
            return true;
        }
        return false;
    }
    canUndo() {
        return this.stackPosition >= 0;
    }
    canRedo() {
        return this.stackPosition < this.commands.length - 1;
    }
}

;// CONCATENATED MODULE: ./src/modules/observer/command.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Command {
    constructor(oldValue, newValue, observer, tick) {
        this.oldValue = oldValue;
        this.newValue = newValue;
        this.observer = observer;
        this.tick = tick;
    }
    undo() {
        this.observer.snapshot.restore(this.oldValue);
    }
    redo() {
        this.observer.snapshot.restore(this.newValue);
    }
}

;// CONCATENATED MODULE: ./src/modules/observer/observer.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







config_Config.prototype.observer = {
    maxHistoryLength: Infinity,
    timeout: 100
};
class Observer extends view_component_ViewComponent {
    constructor(editor) {
        super(editor);
        this.stack = new Stack(this.j.o.observer.maxHistoryLength);
        this.snapshot = new Snapshot(this.j);
        this.updateTick = 0;
        editor.e.on('afterAddPlace.observer', () => {
            if (this.isInDestruct) {
                return;
            }
            this.startValue = this.snapshot.make();
            editor.events
                .on('internalChange', () => {
                this.startValue = this.snapshot.make();
            })
                .on(editor.editor, [
                'changeSelection',
                'selectionstart',
                'selectionchange',
                'mousedown',
                'mouseup',
                'keydown',
                'keyup'
            ]
                .map(f => f + '.observer')
                .join(' '), () => {
                if (this.startValue.html ===
                    this.j.getNativeEditorValue()) {
                    this.startValue = this.snapshot.make();
                }
            })
                .on(this, 'change.observer', this.onChange);
        });
    }
    className() {
        return 'Observer';
    }
    get startValue() {
        return this.__startValue;
    }
    set startValue(value) {
        this.__startValue = value;
    }
    upTick() {
        this.updateTick += 1;
    }
    onChange() {
        if (this.snapshot.isBlocked) {
            return;
        }
        this.updateStack();
    }
    updateStack(replace = false) {
        const newValue = this.snapshot.make();
        if (!Snapshot.equal(newValue, this.startValue)) {
            const newCommand = new Command(this.startValue, newValue, this, this.updateTick);
            if (replace) {
                const command = this.stack.current();
                if (command && this.updateTick === command.tick) {
                    this.stack.replace(newCommand);
                }
            }
            else {
                this.stack.push(newCommand);
            }
            this.startValue = newValue;
            this.fireChangeStack();
        }
    }
    redo() {
        if (this.stack.redo()) {
            this.startValue = this.snapshot.make();
            this.fireChangeStack();
        }
    }
    undo() {
        if (this.stack.undo()) {
            this.startValue = this.snapshot.make();
            this.fireChangeStack();
        }
    }
    clear() {
        this.startValue = this.snapshot.make();
        this.stack.clear();
        this.fireChangeStack();
    }
    replaceSnapshot() {
        this.updateStack(true);
    }
    fireChangeStack() {
        var _a;
        this.j && !this.j.isInDestruct && ((_a = this.j.events) === null || _a === void 0 ? void 0 : _a.fire('changeStack'));
    }
    destruct() {
        if (this.j.events) {
            this.j.e.off('.observer');
        }
        this.snapshot.destruct();
        super.destruct();
    }
}
__decorate([
    debounce()
], Observer.prototype, "onChange", null);

;// CONCATENATED MODULE: ./src/modules/status-bar/status-bar.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






let StatusBar = class StatusBar extends view_component_ViewComponent {
    constructor(jodit, target) {
        super(jodit);
        this.target = target;
        this.mods = {};
        this.container = jodit.c.div('jodit-status-bar');
        target.appendChild(this.container);
        this.hide();
    }
    className() {
        return 'StatusBar';
    }
    hide() {
        this.container.classList.add('jodit_hidden');
    }
    show() {
        this.container.classList.remove('jodit_hidden');
    }
    get isShown() {
        return !this.container.classList.contains('jodit_hidden');
    }
    setMod(name, value) {
        Mods.setMod.call(this, name, value);
        return this;
    }
    getMod(name) {
        return Mods.getMod.call(this, name);
    }
    getHeight() {
        var _a, _b;
        return (_b = (_a = this.container) === null || _a === void 0 ? void 0 : _a.offsetHeight) !== null && _b !== void 0 ? _b : 0;
    }
    findEmpty(inTheRight = false) {
        const items = Elms.getElms.call(this, inTheRight ? 'item-right' : 'item');
        for (let i = 0; i < items.length; i += 1) {
            if (!items[i].innerHTML.trim().length) {
                return items[i];
            }
        }
        return;
    }
    append(child, inTheRight = false) {
        var _a;
        const wrapper = this.findEmpty(inTheRight) ||
            this.j.c.div(this.getFullElName('item'));
        if (inTheRight) {
            wrapper.classList.add(this.getFullElName('item-right'));
        }
        wrapper.appendChild(child);
        (_a = this.container) === null || _a === void 0 ? void 0 : _a.appendChild(wrapper);
        if (this.j.o.statusbar) {
            this.show();
        }
        this.j.e.fire('resize');
    }
    destruct() {
        this.setStatus(statuses_STATUSES.beforeDestruct);
        dom_Dom.safeRemove(this.container);
        super.destruct();
    }
};
StatusBar = __decorate([
    component
], StatusBar);


;// CONCATENATED MODULE: ./src/modules/table/table.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







const markedValue = new WeakMap();
class Table extends view_component_ViewComponent {
    constructor() {
        super(...arguments);
        this.selected = new Set();
    }
    className() {
        return 'Table';
    }
    recalculateStyles() {
        const style = global_getContainer(this.j, Table, 'style', true);
        const selectors = [];
        this.selected.forEach(td => {
            const selector = cssPath(td);
            selector && selectors.push(selector);
        });
        style.innerHTML = selectors.length
            ? selectors.join(',') +
                `{${this.jodit.options.table.selectionCellStyle}}`
            : '';
    }
    addSelection(td) {
        this.selected.add(td);
        this.recalculateStyles();
        const table = dom_Dom.closest(td, 'table', this.j.editor);
        if (table) {
            const cells = Table.selectedByTable.get(table) || new Set();
            cells.add(td);
            Table.selectedByTable.set(table, cells);
        }
    }
    removeSelection(td) {
        this.selected.delete(td);
        this.recalculateStyles();
        const table = dom_Dom.closest(td, 'table', this.j.editor);
        if (table) {
            const cells = Table.selectedByTable.get(table);
            if (cells) {
                cells.delete(td);
                if (!cells.size) {
                    Table.selectedByTable.delete(table);
                }
            }
        }
    }
    getAllSelectedCells() {
        return to_array_toArray(this.selected);
    }
    static getSelectedCellsByTable(table) {
        const cells = Table.selectedByTable.get(table);
        return cells ? to_array_toArray(cells) : [];
    }
    destruct() {
        this.selected.clear();
        return super.destruct();
    }
    static getRowsCount(table) {
        return table.rows.length;
    }
    static getColumnsCount(table) {
        const matrix = Table.formalMatrix(table);
        return matrix.reduce((max_count, cells) => Math.max(max_count, cells.length), 0);
    }
    static formalMatrix(table, callback) {
        const matrix = [[]];
        const rows = to_array_toArray(table.rows);
        const setCell = (cell, i) => {
            if (matrix[i] === undefined) {
                matrix[i] = [];
            }
            const colSpan = cell.colSpan, rowSpan = cell.rowSpan;
            let column, row, currentColumn = 0;
            while (matrix[i][currentColumn]) {
                currentColumn += 1;
            }
            for (row = 0; row < rowSpan; row += 1) {
                for (column = 0; column < colSpan; column += 1) {
                    if (matrix[i + row] === undefined) {
                        matrix[i + row] = [];
                    }
                    if (callback &&
                        callback(cell, i + row, currentColumn + column, colSpan, rowSpan) === false) {
                        return false;
                    }
                    matrix[i + row][currentColumn + column] = cell;
                }
            }
        };
        for (let i = 0; i < rows.length; i += 1) {
            const cells = to_array_toArray(rows[i].cells);
            for (let j = 0; j < cells.length; j += 1) {
                if (setCell(cells[j], i) === false) {
                    return matrix;
                }
            }
        }
        return matrix;
    }
    static formalCoordinate(table, cell, max = false) {
        let i = 0, j = 0, width = 1, height = 1;
        Table.formalMatrix(table, (td, ii, jj, colSpan, rowSpan) => {
            if (cell === td) {
                i = ii;
                j = jj;
                width = colSpan || 1;
                height = rowSpan || 1;
                if (max) {
                    j += (colSpan || 1) - 1;
                    i += (rowSpan || 1) - 1;
                }
                return false;
            }
        });
        return [i, j, width, height];
    }
    static appendRow(table, line, after, create) {
        var _a;
        let row;
        if (!line) {
            const columnsCount = Table.getColumnsCount(table);
            row = create.element('tr');
            for (let j = 0; j < columnsCount; j += 1) {
                row.appendChild(create.element('td'));
            }
        }
        else {
            row = line.cloneNode(true);
            selector_$$('td,th', line).forEach(cell => {
                const rowspan = utils_attr(cell, 'rowspan');
                if (rowspan && parseInt(rowspan, 10) > 1) {
                    const newRowSpan = parseInt(rowspan, 10) - 1;
                    utils_attr(cell, 'rowspan', newRowSpan > 1 ? newRowSpan : null);
                }
            });
            selector_$$('td,th', row).forEach(cell => {
                cell.innerHTML = '';
            });
        }
        if (after && line && line.nextSibling) {
            line.parentNode &&
                line.parentNode.insertBefore(row, line.nextSibling);
        }
        else if (!after && line) {
            line.parentNode && line.parentNode.insertBefore(row, line);
        }
        else {
            (((_a = table.getElementsByTagName('tbody')) === null || _a === void 0 ? void 0 : _a[0]) || table).appendChild(row);
        }
    }
    static removeRow(table, rowIndex) {
        const box = Table.formalMatrix(table);
        let dec;
        const row = table.rows[rowIndex];
        box[rowIndex].forEach((cell, j) => {
            dec = false;
            if (rowIndex - 1 >= 0 && box[rowIndex - 1][j] === cell) {
                dec = true;
            }
            else if (box[rowIndex + 1] && box[rowIndex + 1][j] === cell) {
                if (cell.parentNode === row && cell.parentNode.nextSibling) {
                    dec = true;
                    let nextCell = j + 1;
                    while (box[rowIndex + 1][nextCell] === cell) {
                        nextCell += 1;
                    }
                    const nextRow = dom_Dom.next(cell.parentNode, elm => dom_Dom.isTag(elm, 'tr'), table);
                    if (nextRow) {
                        if (box[rowIndex + 1][nextCell]) {
                            nextRow.insertBefore(cell, box[rowIndex + 1][nextCell]);
                        }
                        else {
                            nextRow.appendChild(cell);
                        }
                    }
                }
            }
            else {
                dom_Dom.safeRemove(cell);
            }
            if (dec &&
                (cell.parentNode === row || cell !== box[rowIndex][j - 1])) {
                const rowSpan = cell.rowSpan;
                utils_attr(cell, 'rowspan', rowSpan - 1 > 1 ? rowSpan - 1 : null);
            }
        });
        dom_Dom.safeRemove(row);
    }
    static appendColumn(table, j, after, create) {
        const box = Table.formalMatrix(table);
        let i;
        if (j === undefined || j < 0) {
            j = Table.getColumnsCount(table) - 1;
        }
        for (i = 0; i < box.length; i += 1) {
            const cell = create.element('td');
            const td = box[i][j];
            let added = false;
            if (after) {
                if ((box[i] && td && j + 1 >= box[i].length) ||
                    td !== box[i][j + 1]) {
                    if (td.nextSibling) {
                        dom_Dom.before(td.nextSibling, cell);
                    }
                    else {
                        td.parentNode && td.parentNode.appendChild(cell);
                    }
                    added = true;
                }
            }
            else {
                if (j - 1 < 0 ||
                    (box[i][j] !== box[i][j - 1] && box[i][j].parentNode)) {
                    dom_Dom.before(box[i][j], cell);
                    added = true;
                }
            }
            if (!added) {
                utils_attr(box[i][j], 'colspan', parseInt(utils_attr(box[i][j], 'colspan') || '1', 10) + 1);
            }
        }
    }
    static removeColumn(table, j) {
        const box = Table.formalMatrix(table);
        let dec;
        box.forEach((cells, i) => {
            const td = cells[j];
            dec = false;
            if (j - 1 >= 0 && box[i][j - 1] === td) {
                dec = true;
            }
            else if (j + 1 < cells.length && box[i][j + 1] === td) {
                dec = true;
            }
            else {
                dom_Dom.safeRemove(td);
            }
            if (dec && (i - 1 < 0 || td !== box[i - 1][j])) {
                const colSpan = td.colSpan;
                utils_attr(td, 'colspan', colSpan - 1 > 1 ? (colSpan - 1).toString() : null);
            }
        });
    }
    static getSelectedBound(table, selectedCells) {
        const bound = [
            [Infinity, Infinity],
            [0, 0]
        ];
        const box = Table.formalMatrix(table);
        let i, j, k;
        for (i = 0; i < box.length; i += 1) {
            for (j = 0; box[i] && j < box[i].length; j += 1) {
                if (selectedCells.includes(box[i][j])) {
                    bound[0][0] = Math.min(i, bound[0][0]);
                    bound[0][1] = Math.min(j, bound[0][1]);
                    bound[1][0] = Math.max(i, bound[1][0]);
                    bound[1][1] = Math.max(j, bound[1][1]);
                }
            }
        }
        for (i = bound[0][0]; i <= bound[1][0]; i += 1) {
            for (k = 1, j = bound[0][1]; j <= bound[1][1]; j += 1) {
                while (box[i] && box[i][j - k] && box[i][j] === box[i][j - k]) {
                    bound[0][1] = Math.min(j - k, bound[0][1]);
                    bound[1][1] = Math.max(j - k, bound[1][1]);
                    k += 1;
                }
                k = 1;
                while (box[i] && box[i][j + k] && box[i][j] === box[i][j + k]) {
                    bound[0][1] = Math.min(j + k, bound[0][1]);
                    bound[1][1] = Math.max(j + k, bound[1][1]);
                    k += 1;
                }
                k = 1;
                while (box[i - k] && box[i][j] === box[i - k][j]) {
                    bound[0][0] = Math.min(i - k, bound[0][0]);
                    bound[1][0] = Math.max(i - k, bound[1][0]);
                    k += 1;
                }
                k = 1;
                while (box[i + k] && box[i][j] === box[i + k][j]) {
                    bound[0][0] = Math.min(i + k, bound[0][0]);
                    bound[1][0] = Math.max(i + k, bound[1][0]);
                    k += 1;
                }
            }
        }
        return bound;
    }
    static normalizeTable(table) {
        let i, j, min, not;
        const __marked = [], box = Table.formalMatrix(table);
        for (j = 0; j < box[0].length; j += 1) {
            min = 1000000;
            not = false;
            for (i = 0; i < box.length; i += 1) {
                if (box[i][j] === undefined) {
                    continue;
                }
                if (box[i][j].colSpan < 2) {
                    not = true;
                    break;
                }
                min = Math.min(min, box[i][j].colSpan);
            }
            if (!not) {
                for (i = 0; i < box.length; i += 1) {
                    if (box[i][j] === undefined) {
                        continue;
                    }
                    Table.mark(box[i][j], 'colspan', box[i][j].colSpan - min + 1, __marked);
                }
            }
        }
        for (i = 0; i < box.length; i += 1) {
            min = 1000000;
            not = false;
            for (j = 0; j < box[i].length; j += 1) {
                if (box[i][j] === undefined) {
                    continue;
                }
                if (box[i][j].rowSpan < 2) {
                    not = true;
                    break;
                }
                min = Math.min(min, box[i][j].rowSpan);
            }
            if (!not) {
                for (j = 0; j < box[i].length; j += 1) {
                    if (box[i][j] === undefined) {
                        continue;
                    }
                    Table.mark(box[i][j], 'rowspan', box[i][j].rowSpan - min + 1, __marked);
                }
            }
        }
        for (i = 0; i < box.length; i += 1) {
            for (j = 0; j < box[i].length; j += 1) {
                if (box[i][j] === undefined) {
                    continue;
                }
                if (box[i][j].hasAttribute('rowspan') &&
                    box[i][j].rowSpan === 1) {
                    utils_attr(box[i][j], 'rowspan', null);
                }
                if (box[i][j].hasAttribute('colspan') &&
                    box[i][j].colSpan === 1) {
                    utils_attr(box[i][j], 'colspan', null);
                }
                if (box[i][j].hasAttribute('class') &&
                    !utils_attr(box[i][j], 'class')) {
                    utils_attr(box[i][j], 'class', null);
                }
            }
        }
        Table.unmark(__marked);
    }
    static mergeSelected(table, jodit) {
        const html = [], bound = Table.getSelectedBound(table, Table.getSelectedCellsByTable(table));
        let w = 0, first = null, first_j = 0, td, cols = 0, rows = 0;
        const alreadyMerged = new Set(), __marked = [];
        if (bound && (bound[0][0] - bound[1][0] || bound[0][1] - bound[1][1])) {
            Table.formalMatrix(table, (cell, i, j, cs, rs) => {
                if (i >= bound[0][0] && i <= bound[1][0]) {
                    if (j >= bound[0][1] && j <= bound[1][1]) {
                        td = cell;
                        if (alreadyMerged.has(td)) {
                            return;
                        }
                        alreadyMerged.add(td);
                        if (i === bound[0][0] && td.style.width) {
                            w += td.offsetWidth;
                        }
                        if (trim_trim(cell.innerHTML.replace(/<br(\/)?>/g, '')) !== '') {
                            html.push(cell.innerHTML);
                        }
                        if (cs > 1) {
                            cols += cs - 1;
                        }
                        if (rs > 1) {
                            rows += rs - 1;
                        }
                        if (!first) {
                            first = cell;
                            first_j = j;
                        }
                        else {
                            Table.mark(td, 'remove', 1, __marked);
                            instance(jodit).removeSelection(td);
                        }
                    }
                }
            });
            cols = bound[1][1] - bound[0][1] + 1;
            rows = bound[1][0] - bound[0][0] + 1;
            if (first) {
                if (cols > 1) {
                    Table.mark(first, 'colspan', cols, __marked);
                }
                if (rows > 1) {
                    Table.mark(first, 'rowspan', rows, __marked);
                }
                if (w) {
                    Table.mark(first, 'width', ((w / table.offsetWidth) * 100).toFixed(ACCURACY) + '%', __marked);
                    if (first_j) {
                        Table.setColumnWidthByDelta(table, first_j, 0, true, __marked);
                    }
                }
                first.innerHTML = html.join('<br/>');
                instance(jodit).addSelection(first);
                alreadyMerged.delete(first);
                Table.unmark(__marked);
                Table.normalizeTable(table);
                to_array_toArray(table.rows).forEach((tr, index) => {
                    if (!tr.cells.length) {
                        dom_Dom.safeRemove(tr);
                    }
                });
            }
        }
    }
    static splitHorizontal(table, jodit) {
        let coord, td, tr, parent, after;
        const __marked = [];
        Table.getSelectedCellsByTable(table).forEach((cell) => {
            td = jodit.createInside.element('td');
            td.appendChild(jodit.createInside.element('br'));
            tr = jodit.createInside.element('tr');
            coord = Table.formalCoordinate(table, cell);
            if (cell.rowSpan < 2) {
                Table.formalMatrix(table, (tdElm, i, j) => {
                    if (coord[0] === i &&
                        coord[1] !== j &&
                        tdElm !== cell) {
                        Table.mark(tdElm, 'rowspan', tdElm.rowSpan + 1, __marked);
                    }
                });
                dom_Dom.after(dom_Dom.closest(cell, 'tr', table), tr);
                tr.appendChild(td);
            }
            else {
                Table.mark(cell, 'rowspan', cell.rowSpan - 1, __marked);
                Table.formalMatrix(table, (tdElm, i, j) => {
                    if (i > coord[0] &&
                        i < coord[0] + cell.rowSpan &&
                        coord[1] > j &&
                        tdElm.parentNode
                            .rowIndex === i) {
                        after = tdElm;
                    }
                    if (coord[0] < i && tdElm === cell) {
                        parent = table.rows[i];
                    }
                });
                if (after) {
                    dom_Dom.after(after, td);
                }
                else {
                    parent.insertBefore(td, parent.firstChild);
                }
            }
            if (cell.colSpan > 1) {
                Table.mark(td, 'colspan', cell.colSpan, __marked);
            }
            Table.unmark(__marked);
            instance(jodit).removeSelection(cell);
        });
        this.normalizeTable(table);
    }
    static splitVertical(table, jodit) {
        let coord, td, percentage;
        const __marked = [];
        Table.getSelectedCellsByTable(table).forEach(cell => {
            coord = Table.formalCoordinate(table, cell);
            if (cell.colSpan < 2) {
                Table.formalMatrix(table, (tdElm, i, j) => {
                    if (coord[1] === j && coord[0] !== i && tdElm !== cell) {
                        Table.mark(tdElm, 'colspan', tdElm.colSpan + 1, __marked);
                    }
                });
            }
            else {
                Table.mark(cell, 'colspan', cell.colSpan - 1, __marked);
            }
            td = jodit.createInside.element('td');
            td.appendChild(jodit.createInside.element('br'));
            if (cell.rowSpan > 1) {
                Table.mark(td, 'rowspan', cell.rowSpan, __marked);
            }
            const oldWidth = cell.offsetWidth;
            dom_Dom.after(cell, td);
            percentage = oldWidth / table.offsetWidth / 2;
            Table.mark(cell, 'width', (percentage * 100).toFixed(ACCURACY) + '%', __marked);
            Table.mark(td, 'width', (percentage * 100).toFixed(ACCURACY) + '%', __marked);
            Table.unmark(__marked);
            instance(jodit).removeSelection(cell);
        });
        Table.normalizeTable(table);
    }
    static setColumnWidthByDelta(table, column, delta, noUnmark, marked) {
        const box = Table.formalMatrix(table);
        let clearWidthIndex = 0;
        for (let i = 0; i < box.length; i += 1) {
            const cell = box[i][column];
            if (cell.colSpan > 1 && box.length > 1) {
                continue;
            }
            const w = cell.offsetWidth;
            const percent = ((w + delta) / table.offsetWidth) * 100;
            Table.mark(cell, 'width', percent.toFixed(ACCURACY) + '%', marked);
            clearWidthIndex = i;
            break;
        }
        for (let i = clearWidthIndex + 1; i < box.length; i += 1) {
            const cell = box[i][column];
            Table.mark(cell, 'width', null, marked);
        }
        if (!noUnmark) {
            Table.unmark(marked);
        }
    }
    static mark(cell, key, value, marked) {
        var _a;
        marked.push(cell);
        const dict = (_a = markedValue.get(cell)) !== null && _a !== void 0 ? _a : {};
        dict[key] = value === undefined ? 1 : value;
        markedValue.set(cell, dict);
    }
    static unmark(marked) {
        marked.forEach(cell => {
            const dict = markedValue.get(cell);
            if (dict) {
                Object.keys(dict).forEach((key) => {
                    const value = dict[key];
                    switch (key) {
                        case 'remove':
                            dom_Dom.safeRemove(cell);
                            break;
                        case 'rowspan':
                            utils_attr(cell, 'rowspan', isNumber(value) && value > 1 ? value : null);
                            break;
                        case 'colspan':
                            utils_attr(cell, 'colspan', isNumber(value) && value > 1 ? value : null);
                            break;
                        case 'width':
                            if (value == null) {
                                cell.style.removeProperty('width');
                                if (!utils_attr(cell, 'style')) {
                                    utils_attr(cell, 'style', null);
                                }
                            }
                            else {
                                cell.style.width = value.toString();
                            }
                            break;
                    }
                    delete dict[key];
                });
                markedValue.delete(cell);
            }
        });
    }
}
Table.selectedByTable = new WeakMap();
__decorate([
    debounce()
], Table.prototype, "recalculateStyles", null);
const instance = (j) => j.getInstance('Table', j.o);

;// CONCATENATED MODULE: ./src/modules/toolbar/button/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



;// CONCATENATED MODULE: ./src/modules/uploader/helpers/process-old-browser-drag.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





function processOldBrowserDrag(self, cData, handlerSuccess, handlerError, onFinally) {
    if (cData && (!cData.types.length || cData.types[0] !== TEXT_PLAIN)) {
        const div = self.j.c.div('', {
            tabindex: -1,
            style: 'left: -9999px; top: 0; width: 0; height: 100%;line-height: 140%; ' +
                'overflow: hidden; position: fixed; z-index: 2147483647; word-break: break-all;',
            contenteditable: true
        });
        getContainer(self.j, self.constructor).appendChild(div);
        const selection = isJoditObject(self.j) ? self.j.s.save() : null, restore = () => selection && isJoditObject(self.j) && self.j.s.restore();
        div.focus();
        self.j.async.setTimeout(() => {
            const child = div.firstChild;
            Dom.safeRemove(div);
            if (child && child.hasAttribute('src')) {
                const src = attr(child, 'src') || '';
                restore();
                sendFiles(self, [dataURItoBlob(src)], handlerSuccess, handlerError).finally(onFinally);
            }
        }, self.j.defaultTimeout);
    }
}

;// CONCATENATED MODULE: ./src/modules/uploader/helpers/build-data.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function build_data_buildData(uploader, data) {
    if (isFunction(uploader.o.buildData)) {
        return uploader.o.buildData.call(uploader, data);
    }
    const FD = uploader.j.ow.FormData;
    if (FD !== undefined) {
        if (data instanceof FD) {
            return data;
        }
        if (isString(data)) {
            return data;
        }
        const newData = new FD();
        Object.keys(data).forEach(key => {
            newData.append(key, data[key]);
        });
        return newData;
    }
    return data;
}

;// CONCATENATED MODULE: ./src/modules/uploader/helpers/send.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const send_ajaxInstances = new WeakMap();
function send_send(uploader, data) {
    const requestData = buildData(uploader, data);
    const sendData = (request) => {
        const ajax = new Ajax(uploader.j, {
            xhr: () => {
                const xhr = new XMLHttpRequest();
                if (uploader.j.ow.FormData !== undefined &&
                    xhr.upload) {
                    uploader.j.progressbar.show().progress(10);
                    xhr.upload.addEventListener('progress', evt => {
                        if (evt.lengthComputable) {
                            let percentComplete = evt.loaded / evt.total;
                            percentComplete *= 100;
                            console.log('progress', percentComplete);
                            uploader.j.progressbar
                                .show()
                                .progress(percentComplete);
                            if (percentComplete >= 100) {
                                uploader.j.progressbar.hide();
                            }
                        }
                    }, false);
                }
                else {
                    uploader.j.progressbar.hide();
                }
                return xhr;
            },
            method: uploader.o.method || 'POST',
            data: request,
            url: isFunction(uploader.o.url)
                ? uploader.o.url(request)
                : uploader.o.url,
            headers: uploader.o.headers,
            queryBuild: uploader.o.queryBuild,
            contentType: uploader.o.contentType.call(uploader, request),
            dataType: uploader.o.format || 'json',
            withCredentials: uploader.o.withCredentials || false
        });
        let instances = send_ajaxInstances.get(uploader);
        if (!instances) {
            instances = new Set();
            send_ajaxInstances.set(uploader, instances);
        }
        instances.add(ajax);
        return ajax
            .send()
            .then(resp => resp.json())
            .catch(error => {
            uploader.o.error.call(uploader, error);
        })
            .finally(() => {
            instances === null || instances === void 0 ? void 0 : instances.delete(ajax);
        });
    };
    if (isPromise(requestData)) {
        return requestData.then(sendData).catch(error => {
            uploader.o.error.call(uploader, error);
        });
    }
    return sendData(requestData);
}

;// CONCATENATED MODULE: ./src/modules/uploader/helpers/send-files.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function send_files_sendFiles(uploader, files, handlerSuccess, handlerError, process) {
    if (!files) {
        return Promise.reject(error('Need files'));
    }
    const { o } = uploader;
    let fileList = toArray(files);
    if (!fileList.length) {
        return Promise.reject(error('Need files'));
    }
    const promises = [];
    if (o.insertImageAsBase64URI) {
        let file, i;
        for (i = 0; i < fileList.length; i += 1) {
            file = fileList[i];
            if (file && file.type) {
                const mime = file.type.match(/\/([a-z0-9]+)/i);
                const extension = mime[1] ? mime[1].toLowerCase() : '';
                if (o.imagesExtensions.includes(extension)) {
                    const reader = new FileReader();
                    promises.push(uploader.j.async.promise((resolve, reject) => {
                        reader.onerror = reject;
                        reader.onloadend = () => {
                            const resp = {
                                baseurl: '',
                                files: [reader.result],
                                isImages: [true]
                            };
                            const handler = isFunction(handlerSuccess)
                                ? handlerSuccess
                                : o.defaultHandlerSuccess;
                            handler.call(uploader, resp);
                            resolve(resp);
                        };
                        reader.readAsDataURL(file);
                    }));
                    fileList[i] = null;
                }
            }
        }
    }
    fileList = fileList.filter(a => a);
    if (fileList.length) {
        const form = new FormData();
        form.append(o.pathVariableName, uploader.path);
        form.append('source', uploader.source);
        let file;
        for (let i = 0; i < fileList.length; i += 1) {
            file = fileList[i];
            if (file) {
                const mime = file.type.match(/\/([a-z0-9]+)/i);
                const extension = mime && mime[1] ? mime[1].toLowerCase() : '';
                let newName = fileList[i].name ||
                    Math.random().toString().replace('.', '');
                if (extension) {
                    let extForReg = extension;
                    if (['jpeg', 'jpg'].includes(extForReg)) {
                        extForReg = 'jpeg|jpg';
                    }
                    const reEnd = new RegExp('.(' + extForReg + ')$', 'i');
                    if (!reEnd.test(newName)) {
                        newName += '.' + extension;
                    }
                }
                form.append(o.filesVariableName(i), fileList[i], newName);
            }
        }
        if (process) {
            process(form);
        }
        if (o.data && isPlainObject(o.data)) {
            Object.keys(o.data).forEach((key) => {
                form.append(key, o.data[key]);
            });
        }
        o.prepareData.call(uploader, form);
        promises.push(send(uploader, form)
            .then(resp => {
            if (o.isSuccess.call(uploader, resp)) {
                const handler = isFunction(handlerSuccess)
                    ? handlerSuccess
                    : o.defaultHandlerSuccess;
                handler.call(uploader, o.process.call(uploader, resp));
                return resp;
            }
            const handler = isFunction(handlerError)
                ? handlerError
                : o.defaultHandlerError;
            handler.call(uploader, error(o.getMessage.call(uploader, resp)));
            return resp;
        })
            .then(() => {
            uploader.j.events && uploader.j.e.fire('filesWereUploaded');
        }));
    }
    return Promise.all(promises);
}

;// CONCATENATED MODULE: ./src/modules/uploader/helpers/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





function helpers_hasFiles(data) {
    return Boolean(data && data.files && data.files.length > 0);
}
function helpers_hasItems(data) {
    return Boolean(data && data.items && data.items.length > 0);
}

;// CONCATENATED MODULE: ./src/modules/uploader/config.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


config_Config.prototype.enableDragAndDropFileToEditor = true;
config_Config.prototype.uploader = {
    url: '',
    insertImageAsBase64URI: false,
    imagesExtensions: ['jpg', 'png', 'jpeg', 'gif'],
    headers: null,
    data: null,
    filesVariableName(i) {
        return `files[${i}]`;
    },
    withCredentials: false,
    pathVariableName: 'path',
    format: 'json',
    method: 'POST',
    prepareData(formData) {
        return formData;
    },
    isSuccess(resp) {
        return resp.success;
    },
    getMessage(resp) {
        return resp.data.messages !== undefined && isArray(resp.data.messages)
            ? resp.data.messages.join(' ')
            : '';
    },
    process(resp) {
        return resp.data;
    },
    error(e) {
        this.j.e.fire('errorMessage', e.message, 'error', 4000);
    },
    defaultHandlerSuccess(resp) {
        const j = this.j || this;
        if (!is_jodit_object_isJoditObject(j)) {
            return;
        }
        if (resp.files && resp.files.length) {
            resp.files.forEach((filename, index) => {
                const [tagName, attr] = resp.isImages && resp.isImages[index]
                    ? ['img', 'src']
                    : ['a', 'href'];
                const elm = j.createInside.element(tagName);
                elm.setAttribute(attr, resp.baseurl + filename);
                if (tagName === 'a') {
                    elm.textContent = resp.baseurl + filename;
                }
                if (tagName === 'img') {
                    j.s.insertImage(elm, null, j.o.imageDefaultWidth);
                }
                else {
                    j.s.insertNode(elm);
                }
            });
        }
    },
    defaultHandlerError(e) {
        this.j.e.fire('errorMessage', e.message);
    },
    contentType(requestData) {
        return this.j.ow.FormData !== undefined &&
            typeof requestData !== 'string'
            ? false
            : 'application/x-www-form-urlencoded; charset=UTF-8';
    }
};

;// CONCATENATED MODULE: ./src/modules/uploader/uploader.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







class Uploader extends (/* unused pure expression or super */ null && (ViewComponent)) {
    constructor(editor, options) {
        super(editor);
        this.path = '';
        this.source = 'default';
        this.options = ConfigProto(options || {}, ConfigProto(Config.defaultOptions.uploader, isJoditObject(editor) ? editor.o.uploader : {}));
    }
    className() {
        return 'Uploader';
    }
    get o() {
        return this.options;
    }
    setPath(path) {
        this.path = path;
        return this;
    }
    setSource(source) {
        this.source = source;
        return this;
    }
    bind(form, handlerSuccess, handlerError) {
        const onFinally = () => {
            form.classList.remove('jodit_drag_hover');
        };
        const self = this, onPaste = (e) => {
            let i, file, extension;
            const cData = e.clipboardData;
            const process = (formdata) => {
                if (file) {
                    formdata.append('extension', extension);
                    formdata.append('mimetype', file.type);
                }
            };
            if (!IS_IE && hasFiles(cData)) {
                sendFiles(self, cData.files, handlerSuccess, handlerError).finally(onFinally);
                return false;
            }
            if (IS_IE && !true) {}
            if (hasItems(cData)) {
                const { items } = cData;
                for (i = 0; i < items.length; i += 1) {
                    if (items[i].kind === 'file' &&
                        items[i].type === 'image/png') {
                        file = items[i].getAsFile();
                        if (file) {
                            const mime = file.type.match(/\/([a-z0-9]+)/i);
                            extension = mime[1]
                                ? mime[1].toLowerCase()
                                : '';
                            sendFiles(self, [file], handlerSuccess, handlerError, process).finally(onFinally);
                        }
                        e.preventDefault();
                        break;
                    }
                }
            }
        };
        if (self.j && self.j.editor !== form) {
            self.j.e.on(form, 'paste', onPaste);
        }
        else {
            self.j.e.on('beforePaste', onPaste);
        }
        this.attachEvents(form, handlerSuccess, handlerError, onFinally);
    }
    attachEvents(form, handlerSuccess, handlerError, onFinally) {
        const self = this;
        self.j.e
            .on(form, 'dragend dragover dragenter dragleave drop', (e) => {
            e.preventDefault();
        })
            .on(form, 'dragover', (event) => {
            if (hasFiles(event.dataTransfer) ||
                hasItems(event.dataTransfer)) {
                form.classList.add('jodit_drag_hover');
                event.preventDefault();
            }
        })
            .on(form, 'dragend dragleave', (event) => {
            form.classList.remove('jodit_drag_hover');
            if (hasFiles(event.dataTransfer)) {
                event.preventDefault();
            }
        })
            .on(form, 'drop', (event) => {
            form.classList.remove('jodit_drag_hover');
            if (hasFiles(event.dataTransfer)) {
                event.preventDefault();
                event.stopImmediatePropagation();
                sendFiles(self, event.dataTransfer.files, handlerSuccess, handlerError).finally(onFinally);
            }
        });
        const inputFile = form.querySelector('input[type=file]');
        if (inputFile) {
            self.j.e.on(inputFile, 'change', () => {
                sendFiles(self, inputFile.files, handlerSuccess, handlerError)
                    .then(() => {
                    inputFile.value = '';
                    if (!/safari/i.test(navigator.userAgent)) {
                        inputFile.type = '';
                        inputFile.type = 'file';
                    }
                })
                    .finally(onFinally);
            });
        }
    }
    uploadRemoteImage(url, handlerSuccess, handlerError) {
        const uploader = this, { o } = uploader;
        const handlerE = isFunction(handlerError)
            ? handlerError
            : o.defaultHandlerError;
        send(uploader, {
            action: 'fileUploadRemote',
            url
        })
            .then(resp => {
            if (o.isSuccess.call(uploader, resp)) {
                const handler = isFunction(handlerSuccess)
                    ? handlerSuccess
                    : o.defaultHandlerSuccess;
                handler.call(uploader, o.process.call(uploader, resp));
                return;
            }
            handlerE.call(uploader, error(o.getMessage.call(uploader, resp)));
        })
            .catch(e => handlerE.call(uploader, e));
    }
    destruct() {
        this.setStatus(STATUSES.beforeDestruct);
        const instances = ajaxInstances.get(this);
        if (instances) {
            instances.forEach(ajax => {
                try {
                    ajax.destruct();
                }
                catch (_a) { }
            });
            instances.clear();
        }
        super.destruct();
    }
}

;// CONCATENATED MODULE: ./src/modules/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



























;// CONCATENATED MODULE: ./src/core/vdom/helpers/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function attrsToDict(elm) {
    var _a, _b;
    const result = {};
    if (elm.nodeName === 'SCRIPT') {
        result.textContent = (_a = elm.textContent) !== null && _a !== void 0 ? _a : '';
    }
    if (elm.nodeType === Node.TEXT_NODE) {
        result.nodeValue = (_b = elm.nodeValue) !== null && _b !== void 0 ? _b : '';
    }
    if (dom_Dom.isElement(elm)) {
        for (let i = 0; i < elm.attributes.length; i += 1) {
            const attr = elm.attributes.item(i);
            if (attr) {
                result[attr.name] = attr.value;
            }
        }
    }
    return result;
}
function domToVDom(elm, noNode = true) {
    var _a;
    if (elm.nodeType === Node.TEXT_NODE) {
        return {
            type: 'TEXT_ELEMENT',
            props: {
                children: [],
                nodeValue: (_a = elm.nodeValue) !== null && _a !== void 0 ? _a : ''
            }
        };
    }
    return {
        type: elm.nodeName.toLowerCase(),
        props: {
            children: to_array_toArray(elm.childNodes).map(n => domToVDom(n, noNode)),
            ...attrsToDict(elm)
        }
    };
}

;// CONCATENATED MODULE: ./src/core/vdom/render/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




const isProperty = (key) => key !== 'children';
const isNew = (prev, next) => (key) => prev[key] !== next[key];
const isGone = (prev, next) => (key) => !(key in next);
const updateDom = (dom, prevProps, nextProps) => {
    Object.keys(prevProps)
        .filter(isProperty)
        .filter(isGone(prevProps, nextProps))
        .forEach(name => {
        dom[name] = '';
    });
    Object.keys(nextProps)
        .filter(isProperty)
        .filter(isNew(prevProps, nextProps))
        .forEach(name => {
        dom[name] = nextProps[name];
    });
};
const createDom = (fiber) => {
    const dom = fiber.type === 'TEXT_ELEMENT'
        ? document.createTextNode('')
        : document.createElement(fiber.type);
    updateDom(dom, {}, fiber.props);
    return dom;
};
let VDomRender = class VDomRender {
    constructor() {
        this.async = new Async();
        this.nextUnitOfWork = undefined;
        this.currentRoot = undefined;
        this.wipRoot = undefined;
        this.deletions = [];
        this.async.requestIdleCallback(this.workLoop);
    }
    commitRoot() {
        var _a;
        this.deletions.forEach(this.commitWork);
        this.deletions.length = 0;
        this.commitWork((_a = this.wipRoot) === null || _a === void 0 ? void 0 : _a.child);
        this.currentRoot = this.wipRoot;
        this.wipRoot = undefined;
    }
    commitWork(fiber) {
        var _a, _b;
        if (!fiber) {
            return;
        }
        let domParentFiber = fiber.parent;
        while (!(domParentFiber === null || domParentFiber === void 0 ? void 0 : domParentFiber.dom)) {
            domParentFiber = domParentFiber === null || domParentFiber === void 0 ? void 0 : domParentFiber.parent;
        }
        const domParent = domParentFiber.dom;
        if (fiber.effectTag === 'PLACEMENT' && fiber.dom != null) {
            domParent.appendChild(fiber.dom);
        }
        else if (fiber.effectTag === 'UPDATE' && fiber.dom != null) {
            updateDom(fiber.dom, (_b = (_a = fiber.alternate) === null || _a === void 0 ? void 0 : _a.props) !== null && _b !== void 0 ? _b : {}, fiber.props);
        }
        else if (fiber.effectTag === 'DELETION') {
            this.commitDeletion(fiber, domParent);
        }
        this.commitWork(fiber === null || fiber === void 0 ? void 0 : fiber.child);
        this.commitWork(fiber === null || fiber === void 0 ? void 0 : fiber.sibling);
    }
    commitDeletion(fiber, domParent) {
        if (fiber === null || fiber === void 0 ? void 0 : fiber.dom) {
            domParent.removeChild(fiber.dom);
        }
        else {
            this.commitDeletion(fiber === null || fiber === void 0 ? void 0 : fiber.child, domParent);
        }
    }
    render(element, container) {
        var _a;
        this.wipRoot = {
            type: 'div',
            dom: container,
            props: {
                children: [element]
            },
            alternate: (_a = this.currentRoot) !== null && _a !== void 0 ? _a : undefined
        };
        this.deletions = [];
        this.nextUnitOfWork = this.wipRoot;
    }
    workLoop(deadline) {
        let shouldYield = false;
        while (this.nextUnitOfWork && !shouldYield) {
            this.nextUnitOfWork = this.performUnitOfWork(this.nextUnitOfWork);
            shouldYield = deadline.timeRemaining() < 1;
        }
        if (!this.nextUnitOfWork && this.wipRoot) {
            this.commitRoot();
        }
        this.async.requestIdleCallback(this.workLoop);
    }
    performUnitOfWork(fiber) {
        this.__updateHostComponent(fiber);
        if (fiber.child) {
            return fiber.child;
        }
        let nextFiber = fiber;
        while (nextFiber) {
            if (nextFiber.sibling) {
                return nextFiber.sibling;
            }
            nextFiber = nextFiber.parent;
        }
        return;
    }
    __updateHostComponent(fiber) {
        if (!fiber.dom) {
            fiber.dom = createDom(fiber);
        }
        this.__reconcileChildren(fiber, fiber.props.children);
    }
    __reconcileChildren(wipFiber, elements) {
        let index = 0;
        let oldFiber = wipFiber.alternate && wipFiber.alternate.child;
        let prevSibling = undefined;
        while (index < elements.length || oldFiber) {
            const element = elements[index];
            let newFiber = undefined;
            const sameType = oldFiber && element && element.type === oldFiber.type;
            if (sameType && oldFiber) {
                newFiber = {
                    type: oldFiber.type,
                    props: element.props,
                    dom: oldFiber.dom,
                    parent: wipFiber,
                    alternate: oldFiber,
                    effectTag: 'UPDATE'
                };
            }
            if (element && !sameType) {
                newFiber = {
                    type: element.type,
                    props: element.props,
                    dom: null,
                    parent: wipFiber,
                    alternate: undefined,
                    effectTag: 'PLACEMENT'
                };
            }
            if (oldFiber && !sameType) {
                oldFiber.effectTag = 'DELETION';
                this.deletions.push(oldFiber);
            }
            if (oldFiber) {
                oldFiber = oldFiber.sibling;
            }
            if (index === 0 && wipFiber) {
                wipFiber.child = newFiber;
            }
            else if (element && prevSibling) {
                prevSibling.sibling = newFiber;
            }
            prevSibling = newFiber;
            index++;
        }
    }
    htmlToVDom(html) {
        const box = document.createElement('div');
        box.innerHTML = html;
        return domToVDom(box.children.length > 1 || !box.firstChild ? box : box.firstChild);
    }
};
VDomRender = __decorate([
    autobind
], VDomRender);


;// CONCATENATED MODULE: ./src/core/vdom/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



/******/ 	return __webpack_exports__;
/******/ })()
;
});