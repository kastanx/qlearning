"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Px = /** @class */ (function () {
    function Px() {
    }
    Px.toSq = function (pixels) {
        return pixels * Px.pxInSquare;
    };
    Px.toPx = function (square) {
        return square / Px.pxInSquare;
    };
    Px.pxInSquare = 10;
    return Px;
}());
exports.Px = Px;
//# sourceMappingURL=Px.js.map