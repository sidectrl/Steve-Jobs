"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgb = void 0;
function rgb(r, g, b) {
    return (r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0'));
    /*if (hex.length == 6) {
        return hex;
    }
    else {
        for (let i = hex.length; i < 6; i++) {
            hex += 0
        }
        return hex;
    }*/
    //let dummy = hex ? hex.length <6 : 0 for (let i=0; i<= 6 - hex.length; i++);
}
exports.rgb = rgb;
console.log(rgb(0, 0, 0));
