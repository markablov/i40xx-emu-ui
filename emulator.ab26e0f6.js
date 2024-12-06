// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ecGan":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "a8fb9c35fdafe466";
module.bundle.HMR_BUNDLE_ID = "a7b900d9ab26e0f6";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"44SXX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _i40XxEmu = require("i40xx-emu");
var _i40XxEmuDefault = parcelHelpers.interopDefault(_i40XxEmu);
let system;
let breakpoints = new Set();
const sendState = ()=>{
    postMessage({
        command: "state",
        ram: system.memory,
        registers: system.registers,
        selectedRamBank: system.selectedRamBank
    });
};
/*
 * Interrupt execution loop to check if there is some messages into channel
 */ const yieldToMacrotasks = ()=>new Promise((resolve)=>{
        setTimeout(()=>resolve(), 0);
    });
const YIELD_PERIOD_TO_CHECK_FOR_NEW_MESSAGES_IN_EMULATOR_INSTRUCTIONS = 100000;
const commands = {
    breakpoints: ({ breakpoints: inputBreakpoints  })=>{
        breakpoints = inputBreakpoints;
    },
    continue: async ()=>{
        let stepsFromLastChannelCheck = 0;
        while(!system.isFinished()){
            system.instruction();
            if (breakpoints.has(`${system.registers.selectedRomBank}:${system.registers.pc}`)) {
                sendState();
                return;
            }
            stepsFromLastChannelCheck++;
            if (stepsFromLastChannelCheck % YIELD_PERIOD_TO_CHECK_FOR_NEW_MESSAGES_IN_EMULATOR_INSTRUCTIONS === 0) {
                await yieldToMacrotasks();
                stepsFromLastChannelCheck = 0;
            }
        }
        sendState();
        postMessage({
            command: "finish"
        });
    },
    run: async ({ breakpoints: inputBreakpoints , mode , ramDump , romDump  })=>{
        if (mode !== "debug" && mode !== "run") throw "Unknown emulator mode";
        breakpoints = inputBreakpoints || new Set();
        system = new (0, _i40XxEmuDefault.default)({
            ramDump,
            ramOutputHandler: ({ address , data , type  })=>postMessage({
                    address,
                    command: "IOOutput",
                    data,
                    type
                }),
            romDump
        });
        sendState();
        if (mode === "run") {
            let stepsFromLastChannelCheck = 0;
            while(!system.isFinished()){
                system.instruction();
                stepsFromLastChannelCheck++;
                if (stepsFromLastChannelCheck % YIELD_PERIOD_TO_CHECK_FOR_NEW_MESSAGES_IN_EMULATOR_INSTRUCTIONS === 0) {
                    await yieldToMacrotasks();
                    stepsFromLastChannelCheck = 0;
                }
            }
            sendState();
            postMessage({
                command: "finish"
            });
        }
    },
    stepInto: ()=>{
        if (!system.isFinished()) {
            system.instruction();
            sendState();
        } else postMessage({
            command: "finish"
        });
    },
    stepOver: async ()=>{
        const currentNestingLevel = system.registers.sp;
        if (!system.isFinished()) {
            system.instruction();
            let stepsFromLastChannelCheck = 0;
            while(currentNestingLevel !== system.registers.sp){
                if (system.isFinished()) {
                    sendState();
                    postMessage({
                        command: "finish"
                    });
                    return;
                }
                system.instruction();
                stepsFromLastChannelCheck++;
                if (stepsFromLastChannelCheck % YIELD_PERIOD_TO_CHECK_FOR_NEW_MESSAGES_IN_EMULATOR_INSTRUCTIONS === 0) {
                    await yieldToMacrotasks();
                    stepsFromLastChannelCheck = 0;
                }
            }
            sendState();
        } else postMessage({
            command: "finish"
        });
    },
    stop: ()=>{
        system.terminate();
        postMessage({
            command: "finish"
        });
    }
};
onmessage = ({ data: { command , ...args }  })=>{
    try {
        if (!commands[command]) {
            postMessage({
                command,
                error: "Unknown command"
            });
            return;
        }
        commands[command](args);
    } catch (err) {
        postMessage({
            command,
            error: err.toString()
        });
    }
};

},{"i40xx-emu":"4fg3x","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"4fg3x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _romJs = require("./rom.js");
var _romJsDefault = parcelHelpers.interopDefault(_romJs);
var _ramJs = require("./ram.js");
var _ramJsDefault = parcelHelpers.interopDefault(_ramJs);
var _cpuJs = require("./cpu/cpu.js");
var _cpuJsDefault = parcelHelpers.interopDefault(_cpuJs);
class System {
    #cpu;
    #rom;
    #ram;
    #terminated = false;
    #instructionCycles = 0n;
    constructor({ romDump , ramDump , ramOutputHandler  }){
        this.#cpu = new (0, _cpuJsDefault.default)(this);
        this.#rom = new (0, _romJsDefault.default)(this.#cpu.pins);
        this.#rom.loadDump(Array.isArray(romDump) ? romDump : [
            romDump
        ]);
        this.#ram = new (0, _ramJsDefault.default)(this.#cpu.pins, ramDump, ({ chip , data  })=>ramOutputHandler?.({
                address: `${this.selectedRamBank}:${chip}`,
                data,
                type: "RAM"
            }));
        // initial tick to set SYNC signal and on next tick it would be A1 stage and first machine cycle
        this.#tick();
    }
    #tick() {
        this.#cpu.tick();
        this.#rom.tick();
        this.#ram.tick();
    }
    #cycle() {
        // every machine cycle has 8 stages
        for(let stage = 0; stage < 8; stage++)this.#tick();
        this.#instructionCycles += 1n;
    }
    instruction() {
        this.#cycle();
        if (this.#cpu.isExecutingTwoCycleOperation() && !this.isFinished()) this.#cycle();
    }
    isFinished() {
        return this.#terminated || !this.#rom.isAddressValid(this.#cpu.registers.pc) || this.#cpu.halted;
    }
    terminate() {
        this.#terminated = true;
    }
    get registers() {
        return this.#cpu.registers;
    }
    get memory() {
        return this.#ram.banks;
    }
    get selectedRamBank() {
        return (0, _ramJsDefault.default).getBankNoFromPinsData(this.#cpu.registers.ramControl);
    }
    get instructionCycles() {
        return this.#instructionCycles;
    }
}
exports.default = System;

},{"./rom.js":"9N5MB","./ram.js":"3ca2j","./cpu/cpu.js":"bQIZN","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"9N5MB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pinsJs = require("./cpu/pins.js");
class ROM {
    state = 0;
    address = 0;
    banks = [
        new Uint8Array(0),
        new Uint8Array(0)
    ];
    selectedBank = 0;
    constructor(cpuPins){
        this.cpu = cpuPins;
    }
    /*
   * Check if provided address is in range for ROM
   */ isAddressValid(address) {
        return address >= 0 && address < this.banks[this.selectedBank].length;
    }
    /*
   * Load dump to ROM
   */ loadDump(banks) {
        this.banks = banks;
    }
    /*
   * Main function, that is called every machine cycle and works with internal state and CPU pins
   */ tick() {
        if (this.cpu.getPin((0, _pinsJs.SYNC))) {
            this.state = 0;
            return;
        }
        switch(this.state){
            // A1 stage
            case 0:
                this.address = this.cpu.getPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ]);
                break;
            // A2 stage
            case 1:
                this.address |= this.cpu.getPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ]) << 4;
                break;
            // A3 stage
            case 2:
                this.address |= this.cpu.getPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ]) << 8;
                this.selectedBank = this.cpu.getPin((0, _pinsJs.CM_ROM1)) === 1 ? 1 : 0;
                if (!this.isAddressValid(this.address)) throw `Address ${this.address} is not valid`;
                this.cpu.setPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ], this.banks[this.selectedBank][this.address] >> 4);
                break;
            // M1 stage
            case 3:
                this.cpu.setPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ], this.banks[this.selectedBank][this.address] & 0xF);
                break;
            // M2 stage
            case 4:
                break;
            default:
                break;
        }
        this.state++;
    }
}
exports.default = ROM;

},{"./cpu/pins.js":"79mc1","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"79mc1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SYNC", ()=>SYNC);
parcelHelpers.export(exports, "CM_ROM0", ()=>CM_ROM0);
parcelHelpers.export(exports, "CM_ROM1", ()=>CM_ROM1);
parcelHelpers.export(exports, "CM_RAM0", ()=>CM_RAM0);
parcelHelpers.export(exports, "CM_RAM1", ()=>CM_RAM1);
parcelHelpers.export(exports, "CM_RAM2", ()=>CM_RAM2);
parcelHelpers.export(exports, "CM_RAM3", ()=>CM_RAM3);
parcelHelpers.export(exports, "D0", ()=>D0);
parcelHelpers.export(exports, "D1", ()=>D1);
parcelHelpers.export(exports, "D2", ()=>D2);
parcelHelpers.export(exports, "D3", ()=>D3);
const SYNC = Symbol("cpu/pins/SYNC");
const CM_ROM0 = Symbol("cpu/pins/CM_ROM0");
const CM_ROM1 = Symbol("cpu/pins/CM_ROM1");
const CM_RAM0 = Symbol("cpu/pins/CM_RAM0");
const CM_RAM1 = Symbol("cpu/pins/CM_RAM1");
const CM_RAM2 = Symbol("cpu/pins/CM_RAM2");
const CM_RAM3 = Symbol("cpu/pins/CM_RAM3");
const D0 = Symbol("cpu/pins/D0");
const D1 = Symbol("cpu/pins/D1");
const D2 = Symbol("cpu/pins/D2");
const D3 = Symbol("cpu/pins/D3");
class CPUPins {
    #pins = {
        [SYNC]: 0,
        [CM_ROM0]: 1,
        [CM_ROM1]: 0,
        [CM_RAM0]: 0,
        [CM_RAM1]: 0,
        [CM_RAM2]: 0,
        [CM_RAM3]: 0,
        [D0]: 0,
        [D1]: 0,
        [D2]: 0,
        [D3]: 0
    };
    /*
   * Set specified pin to LOW or HIGH (0 or 1)
   */ setPin(pin, value) {
        this.#pins[pin] = value ? 1 : 0;
    }
    /*
   * Assign numeric value to set of pins
   *
   * For example put 0xA to [D0, D1, D2, D3] pins, and you would got D0 = 0, D1 = 1, D2 = 0, D3 = 1
   */ setPinsData(pins, value) {
        for (const [idx, pin] of pins.entries())this.#pins[pin] = value & 1 << idx ? 1 : 0;
    }
    /*
   * Get value of specified pin
   */ getPin(pin) {
        return this.#pins[pin];
    }
    /*
   * Get numeric value for set of pins
   */ getPinsData(pins) {
        return pins.reduce((acc, pin, idx)=>this.#pins[pin] ? acc | 1 << idx : acc, 0);
    }
}
exports.default = CPUPins;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"fn8Fk":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3ca2j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pinsJs = require("./cpu/pins.js");
class RAM {
    #cpu;
    #outputHandler;
    constructor(cpuPins, ramDump, outputHandler){
        this.#outputHandler = outputHandler;
        this.#cpu = cpuPins;
        this.banks = RAM.#constructRAMBanks(ramDump || RAM.#getEmptyRAM());
        this.state = 0;
    }
    static #constructRAMBanks(dump) {
        return dump.map((registers)=>({
                registers,
                outputs: Array(4).fill(0),
                selectedRegister: 0,
                selectedCharacter: 0
            }));
    }
    static #getEmptyRAM() {
        return Array.from(Array(8), ()=>Array.from(Array(16), ()=>({
                    main: Array(16).fill(0),
                    status: Array(4).fill(0)
                })));
    }
    static getBankNoFromPinsData(pins) {
        // if CM_RAM0 is set, it's always bank #0
        if ((pins & 0x1) === 0x1) return 0;
        pins >>= 1;
        switch(pins){
            // CM_RAM1 => bank #1
            case 1:
                return 1;
            // CM_RAM2 => bank #2
            case 2:
                return 2;
            // CM_RAM3 => bank #3
            case 4:
                return 3;
            // CM_RAM1 + CM_RAM2 => bank #4
            case 3:
                return 4;
            // CM_RAM1 + CM_RAM3 => bank #5
            case 5:
                return 5;
            // CM_RAM2 + CM_RAM3 => bank #6
            case 6:
                return 6;
            // CM_RAM1 + CM_RAM2 + CM_RAM3 => bank #7
            case 7:
                return 7;
            default:
                throw Error("Unknown value for CMRAM!");
        }
    }
    #selectedBank() {
        const cmRam = this.#cpu.getPinsData([
            (0, _pinsJs.CM_RAM0),
            (0, _pinsJs.CM_RAM1),
            (0, _pinsJs.CM_RAM2),
            (0, _pinsJs.CM_RAM3)
        ]);
        return cmRam ? this.banks[RAM.getBankNoFromPinsData(cmRam)] : null;
    }
    #execute(bank, opa, data) {
        switch(opa){
            /*
       * RDM instruction (Read RAM character)
       */ case 0x9:
                this.#cpu.setPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ], bank.registers[bank.selectedRegister].main[bank.selectedCharacter]);
                break;
            /*
       * RD0 instruction (Read RAM status character 0)
       */ case 0xC:
                this.#cpu.setPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ], bank.registers[bank.selectedRegister].status[0]);
                break;
            /*
       * RD1 instruction (Read RAM status character 1)
       */ case 0xD:
                this.#cpu.setPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ], bank.registers[bank.selectedRegister].status[1]);
                break;
            /*
       * RD2 instruction (Read RAM status character 2)
       */ case 0xE:
                this.#cpu.setPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ], bank.registers[bank.selectedRegister].status[2]);
                break;
            /*
      * RD3 instruction (Read RAM status character 3)
      */ case 0xF:
                this.#cpu.setPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ], bank.registers[bank.selectedRegister].status[3]);
                break;
            /*
       * WRM instruction (Write accumulator into RAM character)
       */ case 0x0:
                bank.registers[bank.selectedRegister].main[bank.selectedCharacter] = data;
                break;
            /*
       * WMP instruction (Write RAM port)
       */ case 0x1:
                this?.#outputHandler({
                    chip: bank.selectedRegister >> 2,
                    data
                });
                bank.outputs[bank.selectedRegister >> 2] = data;
                break;
            /*
       * WR0 instruction (Write accumulator into RAM status character 0)
       */ case 0x4:
                bank.registers[bank.selectedRegister].status[0] = data;
                break;
            /*
       * WR1 instruction (Write accumulator into RAM status character 1)
       */ case 0x5:
                bank.registers[bank.selectedRegister].status[1] = data;
                break;
            /*
       * WR2 instruction (Write accumulator into RAM status character 2)
       */ case 0x6:
                bank.registers[bank.selectedRegister].status[2] = data;
                break;
            /*
       * WR3 instruction (Write accumulator into RAM status character 3)
       */ case 0x7:
                bank.registers[bank.selectedRegister].status[3] = data;
                break;
            /*
       * ADM instruction (Add from memory with carry)
       */ case 0xB:
                this.#cpu.setPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ], bank.registers[bank.selectedRegister].main[bank.selectedCharacter]);
                break;
            /*
       * SBM instruction (Subtract from memory with borrow)
       */ case 0x8:
                this.#cpu.setPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ], bank.registers[bank.selectedRegister].main[bank.selectedCharacter]);
                break;
            default:
                break;
        }
    }
    /*
   * Main function, that is called every machine cycle and works with internal state and CPU pins
   */ tick() {
        // X3 stage
        if (this.#cpu.getPin((0, _pinsJs.SYNC)) || this.state === 7) {
            // check if SRC command is executing, in that case need to store character index in selected register
            if (this.bankToSetOffset) {
                this.bankToSetOffset.selectedCharacter = this.#cpu.getPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ]);
                this.bankToSetOffset = null;
            }
            this.state = 0;
            return;
        }
        switch(this.state){
            // A1 stage
            case 0:
                break;
            // A2 stage
            case 1:
                break;
            // A3 stage
            case 2:
                break;
            // M1 stage
            case 3:
                break;
            // M2 stage
            case 4:
                this.bankForExecution = this.#selectedBank();
                if (this.bankForExecution) this.opa = this.#cpu.getPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ]);
                break;
            // X1 stage
            case 5:
                break;
            // X2 stage
            case 6:
                {
                    const data = this.#cpu.getPinsData([
                        (0, _pinsJs.D0),
                        (0, _pinsJs.D1),
                        (0, _pinsJs.D2),
                        (0, _pinsJs.D3)
                    ]);
                    // check if SRC command is executing, in that case need to store chip index and register index in this chip
                    this.bankToSetOffset = this.#selectedBank();
                    if (this.bankToSetOffset) this.bankToSetOffset.selectedRegister = data;
                    // at M2 we have received instruction to execute, so perform it now
                    if (this.bankForExecution) {
                        this.#execute(this.bankForExecution, this.opa, data);
                        this.bankForExecution = null;
                    }
                    break;
                }
            default:
                break;
        }
        this.state++;
    }
}
exports.default = RAM;

},{"./cpu/pins.js":"79mc1","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"bQIZN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pinsJs = require("./pins.js");
var _pinsJsDefault = parcelHelpers.interopDefault(_pinsJs);
const STACK_DEPTH = 7;
class CPU {
    halted = false;
    registers = {
        acc: 0,
        carry: 0,
        indexBanks: [
            Array.from(Array(16), ()=>0),
            Array.from(Array(16), ()=>0)
        ],
        pc: 0,
        // CM-RAM0 should be selected by default
        ramControl: 1,
        selectedRomBank: 0,
        selectedRegisterBank: 0,
        sp: 0,
        stack: Array.from(Array(STACK_DEPTH), ()=>0)
    };
    #pins;
    #syncStep = 0;
    #requestToSwitchRomBank = null;
    #system;
    constructor(system){
        this.#pins = new (0, _pinsJsDefault.default)();
        this.#system = system;
    }
    // it's circular buffer
    #push(value) {
        this.registers.stack[this.registers.sp] = value;
        this.registers.sp = (this.registers.sp + 1) % STACK_DEPTH;
    }
    #pop() {
        this.registers.sp = (this.registers.sp - 1 + STACK_DEPTH) % STACK_DEPTH;
        return this.registers.stack[this.registers.sp];
    }
    #add(value1, ignoreCarry = false) {
        const result = this.registers.acc + value1 + (ignoreCarry ? 0 : this.registers.carry);
        this.registers.acc = result & 0xF;
        this.registers.carry = +(result > 0xF);
    }
    // acc = acc - reg - carry = acc + ~reg + ~carry, set carry = 1 if no borrow, 0 otherwise
    #sub(value2, ignoreCarry1 = false) {
        this.registers.carry = ignoreCarry1 ? 1 : ~this.registers.carry & 0x1;
        this.#add(~value2 & 0xF);
    }
    #getFullAddressFromShort(pm, pl) {
        const ph = (this.registers.pc & 0xF00) + ((this.registers.pc & 0xFF) === 0xFF ? 0x100 : 0);
        return ph | pm << 4 | pl;
    }
    isExecutingTwoCycleOperation() {
        if (!this.previousOp) return false;
        // JUN/JMS/JCN/ISZ
        if ([
            0x4,
            0x5,
            0x1,
            0x7
        ].includes(this.previousOp.opr)) return true;
        // FIN/FIM
        return [
            0x3,
            0x2
        ].includes(this.previousOp.opr) && (this.previousOp.opa & 0x1) === 0x0;
    }
    #readIndexRegister(regNo) {
        return this.registers.indexBanks[this.registers.selectedRegisterBank][regNo];
    }
    #writeIndexRegister(regNo1, value3) {
        if (regNo1 < 8) {
            this.registers.indexBanks[this.registers.selectedRegisterBank][regNo1] = value3;
            return;
        }
        // high segment of index register file is shared between banks
        for (const indexBank of this.registers.indexBanks)indexBank[regNo1] = value3;
    }
    /*
   * Return new value for PC if it's 2nd cycle for two-cycle operation or "undefined" otherwise
   */ #executeTwoCycleOperation(currentOpr, currentOpa) {
        const { opa: previousOpa , opr: previousOpr , pc: previousPC  } = this.previousOp;
        switch(previousOpr){
            /*
       * FIN instruction (Fetch indirect from ROM)
       */ case 0x3:
                // check if it was JIN instruction, which is regular one-cycle operation
                if ((previousOpa & 0x1) === 0x1) return 0;
                this.#writeIndexRegister(previousOpa, currentOpr);
                this.#writeIndexRegister(previousOpa + 1, currentOpa);
                return previousPC + 1;
            /*
       * JUN instruction (Jump unconditional)
       */ case 0x4:
                return previousOpa << 8 | currentOpr << 4 | currentOpa;
            /*
       * JMS instruction (Jump to Subroutine)
       */ case 0x5:
                this.#push(this.registers.pc + 1);
                return previousOpa << 8 | currentOpr << 4 | currentOpa;
            /*
      * JCN instruction (Jump conditional)
      */ case 0x1:
                {
                    const invert = (previousOpa & 0x8) === 0x8;
                    const accIsZero = (previousOpa & 0x4) === 0x4;
                    const cfIsSet = (previousOpa & 0x2) === 0x2;
                    const cond = accIsZero && this.registers.acc === 0 || cfIsSet && this.registers.carry === 1;
                    const finalCond = invert ? !cond : cond;
                    return finalCond ? this.#getFullAddressFromShort(currentOpr, currentOpa) : this.registers.pc + 1;
                }
            /*
       * ISZ instruction (Increment index register skip if zero)
       */ case 0x7:
                {
                    const newValue = this.#readIndexRegister(previousOpa) + 1 & 0xF;
                    this.#writeIndexRegister(previousOpa, newValue);
                    return newValue === 0 ? this.registers.pc + 1 : this.#getFullAddressFromShort(currentOpr, currentOpa);
                }
            /*
       * FIM instruction (Fetched immediate from ROM)
      */ case 0x2:
                // check if it was SRC instruction, which is regular one-cycle operation
                if ((previousOpa & 0x1) === 0x1) return 0;
                this.#writeIndexRegister(previousOpa, currentOpr);
                this.#writeIndexRegister(previousOpa + 1, currentOpa);
                return this.registers.pc + 1;
            default:
                return 0;
        }
    }
    #executeAtX3(opr, opa) {
        if (this.halted) return this.registers.pc;
        switch(opr){
            case 0x0:
                switch(opa){
                    /*
           * NOP instruction (No Operation)
           */ case 0x0:
                        break;
                    /*
           * HLT instruction
           */ case 0x1:
                        this.halted = true;
                        break;
                    /*
          * OR4 instruction
          */ case 0x4:
                        this.registers.acc |= this.#readIndexRegister(4);
                        break;
                    /*
          * OR5 instruction
          */ case 0x5:
                        this.registers.acc |= this.#readIndexRegister(5);
                        break;
                    /*
          * AN6 instruction
          */ case 0x6:
                        this.registers.acc &= this.#readIndexRegister(6);
                        break;
                    /*
          * AN7 instruction
          */ case 0x7:
                        this.registers.acc &= this.#readIndexRegister(7);
                        break;
                    /*
          * DB0 instruction
          */ case 0x8:
                        this.#requestToSwitchRomBank = {
                            targetCycle: this.#system.instructionCycles + 2n,
                            bankNo: 0
                        };
                        break;
                    /*
          * DB1 instruction
          */ case 0x9:
                        this.#requestToSwitchRomBank = {
                            targetCycle: this.#system.instructionCycles + 2n,
                            bankNo: 1
                        };
                        break;
                    /*
          * SB0 instruction
          */ case 0xA:
                        this.registers.selectedRegisterBank = 0;
                        break;
                    /*
          * SB1 instruction
          */ case 0xB:
                        this.registers.selectedRegisterBank = 1;
                        break;
                    default:
                        throw "Unknown instruction";
                }
                break;
            /*
       * LDM instruction (Load Data to Accumulator)
       */ case 0xD:
                this.registers.acc = opa;
                break;
            /*
       * LD instruction (Load index register to Accumulator)
       */ case 0xA:
                this.registers.acc = this.#readIndexRegister(opa);
                break;
            /*
       * XCH instruction (Exchange index register and accumulator)
       */ case 0xB:
                {
                    const t = this.registers.acc;
                    this.registers.acc = this.#readIndexRegister(opa);
                    this.#writeIndexRegister(opa, t);
                    break;
                }
            /*
       * ADD instruction (Add index register to accumulator with carry)
       */ case 0x8:
                this.#add(this.#readIndexRegister(opa));
                break;
            /*
       * SUB instruction (Subtract index register to accumulator with borrow)
       */ case 0x9:
                this.#sub(this.#readIndexRegister(opa));
                break;
            /*
       * INC instruction (Increment index register)
       */ case 0x6:
                this.#writeIndexRegister(opa, this.#readIndexRegister(opa) + 1 & 0xF);
                break;
            /*
       * BBL instruction (Branch back and load data to the accumulator)
       */ case 0xC:
                this.registers.acc = opa;
                return this.#pop();
            /*
       * JIN instruction (Jump indirect) or FIN instruction (Fetch indirect from ROM)
       */ case 0x3:
                {
                    // for FIN we are using reg pair 0 for indirect addressing
                    const reg = (opa & 0x1) === 0x0 ? 0 : opa & 0xE;
                    return this.#getFullAddressFromShort(this.#readIndexRegister(reg), this.#readIndexRegister(reg + 1));
                }
            case 0x2:
                /*
         * SRC instruction (Send register control)
         *
         * At X3 stage we need to send low 4bit of address
         */ if ((opa & 0x1) === 0x1) {
                    this.#pins.setPinsData([
                        (0, _pinsJs.D0),
                        (0, _pinsJs.D1),
                        (0, _pinsJs.D2),
                        (0, _pinsJs.D3)
                    ], this.#readIndexRegister((opa & 0xE) + 1));
                    // need to reset CM_RAM lines
                    this.#pins.setPinsData([
                        (0, _pinsJs.CM_RAM0),
                        (0, _pinsJs.CM_RAM1),
                        (0, _pinsJs.CM_RAM2),
                        (0, _pinsJs.CM_RAM3)
                    ], 0);
                }
                break;
            /*
       * JUN instruction (Jump unconditional)
       *
       * It's two-byte operator, wait 2nd byte to come before processing it
       */ case 0x4:
                break;
            /*
       * JMS instruction (Jump to Subroutine)
       *
       * It's two-byte operator, wait 2nd byte to come before processing it
       */ case 0x5:
                break;
            /*
       * JCN instruction (Jump conditional)
       *
       * It's two-byte operator, wait 2nd byte to come before processing it
       */ case 0x1:
                break;
            /*
       * ISZ instruction (Increment index register skip if zero)
       *
       * It's two-byte operator, wait 2nd byte to come before processing it
       */ case 0x7:
                break;
            case 0xE:
                switch(opa){
                    /*
           * RDM instruction (Read RAM character)
           */ case 0x9:
                        this.registers.acc = this.#pins.getPinsData([
                            (0, _pinsJs.D0),
                            (0, _pinsJs.D1),
                            (0, _pinsJs.D2),
                            (0, _pinsJs.D3)
                        ]);
                        break;
                    /*
           * RD0 instruction (Read RAM status character 0)
           */ case 0xC:
                        this.registers.acc = this.#pins.getPinsData([
                            (0, _pinsJs.D0),
                            (0, _pinsJs.D1),
                            (0, _pinsJs.D2),
                            (0, _pinsJs.D3)
                        ]);
                        break;
                    /*
           * RD1 instruction (Read RAM status character 1)
           */ case 0xD:
                        this.registers.acc = this.#pins.getPinsData([
                            (0, _pinsJs.D0),
                            (0, _pinsJs.D1),
                            (0, _pinsJs.D2),
                            (0, _pinsJs.D3)
                        ]);
                        break;
                    /*
           * RD2 instruction (Read RAM status character 2)
           */ case 0xE:
                        this.registers.acc = this.#pins.getPinsData([
                            (0, _pinsJs.D0),
                            (0, _pinsJs.D1),
                            (0, _pinsJs.D2),
                            (0, _pinsJs.D3)
                        ]);
                        break;
                    /*
           * RD3 instruction (Read RAM status character 3)
           */ case 0xF:
                        this.registers.acc = this.#pins.getPinsData([
                            (0, _pinsJs.D0),
                            (0, _pinsJs.D1),
                            (0, _pinsJs.D2),
                            (0, _pinsJs.D3)
                        ]);
                        break;
                    /*
           * ADM instruction (Add from memory with carry)
           */ case 0xB:
                        this.#add(this.#pins.getPinsData([
                            (0, _pinsJs.D0),
                            (0, _pinsJs.D1),
                            (0, _pinsJs.D2),
                            (0, _pinsJs.D3)
                        ]));
                        break;
                    /*
           * SBM instruction (Subtract from memory with borrow)
           */ case 0x8:
                        this.#sub(this.#pins.getPinsData([
                            (0, _pinsJs.D0),
                            (0, _pinsJs.D1),
                            (0, _pinsJs.D2),
                            (0, _pinsJs.D3)
                        ]));
                        break;
                    default:
                        break;
                }
                break;
            case 0xF:
                switch(opa){
                    /*
           * CLB instruction (Clear both)
           */ case 0x0:
                        this.registers.acc = 0;
                        this.registers.carry = 0;
                        break;
                    /*
           * CLC instruction (Clear carry)
           */ case 0x1:
                        this.registers.carry = 0;
                        break;
                    /*
           * CMC instruction (Complement carry)
           */ case 0x3:
                        this.registers.carry = ~this.registers.carry & 0x1;
                        break;
                    /*
           * STC instruction (Set carry)
           */ case 0xA:
                        this.registers.carry = 1;
                        break;
                    /*
           * CMA instruction (Complement Accumulator)
           */ case 0x4:
                        this.registers.acc = ~this.registers.acc & 0xF;
                        break;
                    /*
           * IAC instruction (Increment accumulator)
           */ case 0x2:
                        this.#add(1, true);
                        break;
                    /*
           * DAC instruction (decrement accumulator)
           */ case 0x8:
                        this.#sub(1, true);
                        break;
                    /*
           * RAL instruction (Rotate left)
           */ case 0x5:
                        {
                            const oldCarry = this.registers.carry;
                            this.registers.carry = this.registers.acc >> 3;
                            this.registers.acc = this.registers.acc << 1 & 0xF | oldCarry;
                            break;
                        }
                    /*
           * RAR instruction (Rotate right)
           */ case 0x6:
                        {
                            const oldCarry1 = this.registers.carry;
                            this.registers.carry = this.registers.acc & 0x1;
                            this.registers.acc = this.registers.acc >> 1 | oldCarry1 << 3;
                            break;
                        }
                    /*
           * TCC instruction (Transmit carry and clear)
           */ case 0x7:
                        this.registers.acc = this.registers.carry;
                        this.registers.carry = 0;
                        break;
                    /*
           * DAA instruction (Decimal adjust accumulator)
           */ case 0xB:
                        if (this.registers.carry === 1 || this.registers.acc > 9) {
                            const result1 = this.registers.acc + 6;
                            this.registers.acc = result1 & 0xF;
                            if (result1 > 0xF) this.registers.carry = 1;
                        }
                        break;
                    /*
           * TCS instruction (Transfer carry subtract)
           */ case 0x9:
                        this.registers.acc = this.registers.carry === 1 ? 10 : 9;
                        this.registers.carry = 0;
                        break;
                    /*
           * KBP instruction (Keyboard process)
           */ case 0xC:
                        switch(this.registers.acc){
                            case 0x0:
                                this.registers.acc = 0;
                                break;
                            case 0x1:
                                this.registers.acc = 1;
                                break;
                            case 0x2:
                                this.registers.acc = 2;
                                break;
                            case 0x4:
                                this.registers.acc = 3;
                                break;
                            case 0x8:
                                this.registers.acc = 4;
                                break;
                            default:
                                this.registers.acc = 0xF;
                        }
                        break;
                    /*
           * DCL instruction (Designate command line)
           */ case 0xD:
                        {
                            const accBits = this.registers.acc & 0x7;
                            this.registers.ramControl = accBits === 0 ? 1 : accBits << 1;
                            break;
                        }
                    default:
                        throw "Unknown instruction";
                }
                break;
            default:
                throw "Unknown instruction";
        }
        return this.registers.pc + 1;
    }
    #executeAtX2(opr1, opa1) {
        if (this.isExecutingTwoCycleOperation() || this.halted) return;
        switch(opr1){
            case 0x2:
                /*
         * SRC instruction (Send register control)
         *
         * At X2 stage we need to send high 4bit of address
         */ if ((opa1 & 0x1) === 0x1) {
                    this.#pins.setPinsData([
                        (0, _pinsJs.D0),
                        (0, _pinsJs.D1),
                        (0, _pinsJs.D2),
                        (0, _pinsJs.D3)
                    ], this.#readIndexRegister(opa1 & 0xE));
                    this.#pins.setPinsData([
                        (0, _pinsJs.CM_RAM0),
                        (0, _pinsJs.CM_RAM1),
                        (0, _pinsJs.CM_RAM2),
                        (0, _pinsJs.CM_RAM3)
                    ], this.registers.ramControl);
                }
                break;
            default:
                break;
        }
    }
    #executeAtX1(opr2, opa2) {
        if (this.isExecutingTwoCycleOperation() || this.halted) return;
        switch(opr2){
            case 0xE:
                switch(opa2){
                    /*
           * WRM instruction (Write accumulator into RAM character)
           */ case 0x0:
                        this.#pins.setPinsData([
                            (0, _pinsJs.D0),
                            (0, _pinsJs.D1),
                            (0, _pinsJs.D2),
                            (0, _pinsJs.D3)
                        ], this.registers.acc);
                        break;
                    /*
           * WMP instruction (Write RAM port)
           */ case 0x1:
                        this.#pins.setPinsData([
                            (0, _pinsJs.D0),
                            (0, _pinsJs.D1),
                            (0, _pinsJs.D2),
                            (0, _pinsJs.D3)
                        ], this.registers.acc);
                        break;
                    /*
           * WR0 instruction (Write accumulator into RAM status character 0)
           */ case 0x4:
                        this.#pins.setPinsData([
                            (0, _pinsJs.D0),
                            (0, _pinsJs.D1),
                            (0, _pinsJs.D2),
                            (0, _pinsJs.D3)
                        ], this.registers.acc);
                        break;
                    /*
           * WR1 instruction (Write accumulator into RAM status character 1)
           */ case 0x5:
                        this.#pins.setPinsData([
                            (0, _pinsJs.D0),
                            (0, _pinsJs.D1),
                            (0, _pinsJs.D2),
                            (0, _pinsJs.D3)
                        ], this.registers.acc);
                        break;
                    /*
           * WR2 instruction (Write accumulator into RAM status character 2)
           */ case 0x6:
                        this.#pins.setPinsData([
                            (0, _pinsJs.D0),
                            (0, _pinsJs.D1),
                            (0, _pinsJs.D2),
                            (0, _pinsJs.D3)
                        ], this.registers.acc);
                        break;
                    /*
           * WR3 instruction (Write accumulator into RAM status character 3)
           */ case 0x7:
                        this.#pins.setPinsData([
                            (0, _pinsJs.D0),
                            (0, _pinsJs.D1),
                            (0, _pinsJs.D2),
                            (0, _pinsJs.D3)
                        ], this.registers.acc);
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }
    get pins() {
        return this.#pins;
    }
    /*
   * Main function, that is called every machine cycle
   */ tick() {
        // generate SYNC signal every 8 cycles
        switch(this.#syncStep){
            // X3 stage
            case 0:
                if (this.opr !== undefined) {
                    // decode and execute instruction
                    if (this.isExecutingTwoCycleOperation()) {
                        this.registers.pc = this.#executeTwoCycleOperation(this.opr, this.opa);
                        this.previousOp = null;
                    } else {
                        const oldPC = this.registers.pc;
                        this.registers.pc = this.#executeAtX3(this.opr, this.opa);
                        this.previousOp = {
                            opa: this.opa,
                            opr: this.opr,
                            pc: oldPC
                        };
                    }
                }
                if (this.#requestToSwitchRomBank?.targetCycle === this.#system.instructionCycles) {
                    this.registers.selectedRomBank = this.#requestToSwitchRomBank.bankNo;
                    this.#requestToSwitchRomBank = null;
                }
                this.#pins.setPin((0, _pinsJs.SYNC), 1);
                break;
            // A1 stage
            case 1:
                this.#pins.setPin((0, _pinsJs.SYNC), 0);
                this.#pins.setPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ], this.registers.pc & 0x000F);
                break;
            // A2 stage
            case 2:
                this.#pins.setPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ], (this.registers.pc & 0x00F0) >> 4);
                break;
            // A3 stage
            case 3:
                this.#pins.setPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ], (this.registers.pc & 0x0F00) >> 8);
                this.#pins.setPinsData([
                    (0, _pinsJs.CM_ROM0),
                    (0, _pinsJs.CM_ROM1)
                ], this.registers.selectedRomBank === 1 ? 2 : 1);
                break;
            // M1 stage
            case 4:
                // highest 4bit of instruction
                this.opr = this.#pins.getPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ]);
                break;
            // M2 stage
            case 5:
                // if it's I/O or RAM instruction we need to trigger CM-RAMx lines
                if (this.opr === 0xE && !this.isExecutingTwoCycleOperation()) this.#pins.setPinsData([
                    (0, _pinsJs.CM_RAM0),
                    (0, _pinsJs.CM_RAM1),
                    (0, _pinsJs.CM_RAM2),
                    (0, _pinsJs.CM_RAM3)
                ], this.registers.ramControl);
                // lowest 4bit of instruction
                this.opa = this.#pins.getPinsData([
                    (0, _pinsJs.D0),
                    (0, _pinsJs.D1),
                    (0, _pinsJs.D2),
                    (0, _pinsJs.D3)
                ]);
                this.#pins.setPinsData([
                    (0, _pinsJs.CM_ROM0),
                    (0, _pinsJs.CM_ROM1)
                ], 0);
                break;
            // X1 stage
            case 6:
                // reset CM-RAMx lines if they were set at M2 stage
                if (this.#pins.getPinsData([
                    (0, _pinsJs.CM_RAM0),
                    (0, _pinsJs.CM_RAM1),
                    (0, _pinsJs.CM_RAM2),
                    (0, _pinsJs.CM_RAM3)
                ])) this.#pins.setPinsData([
                    (0, _pinsJs.CM_RAM0),
                    (0, _pinsJs.CM_RAM1),
                    (0, _pinsJs.CM_RAM2),
                    (0, _pinsJs.CM_RAM3)
                ], 0);
                this.#executeAtX1(this.opr, this.opa);
                break;
            // X2 stage
            case 7:
                this.#executeAtX2(this.opr, this.opa);
                this.#syncStep = -1;
                break;
            default:
                break;
        }
        this.#syncStep++;
    }
}
exports.default = CPU;

},{"./pins.js":"79mc1","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}]},["ecGan","44SXX"], "44SXX", "parcelRequired6a3")

//# sourceMappingURL=emulator.ab26e0f6.js.map
