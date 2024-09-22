import lib from "./lib.js"
import libES5 from "./lib-es5.js"
import libDecorators from "./lib-decorators.js"
import libDecoratorsLegacy from "./lib-decorators-legacy.js"
import libDom from "./lib-dom.js"

export const libDeclarations: Hash<string> = {
    "lib.d.ts": lib,
    "lib.es5.d.ts": libES5,
    "lib.decorators.d.ts": libDecorators,
    "lib.decorators.legacy.d.ts": libDecoratorsLegacy,
    "lib.dom.d.ts": libDom,
    "lib.webworker.importscripts.d.ts": "",
    "lib.scripthost.d.ts": "",
}
