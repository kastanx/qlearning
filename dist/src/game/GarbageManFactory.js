"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GarbageMan_1 = require("./GarbageMan");
var Px_1 = require("../util/Px");
var GarbageManFactory = /** @class */ (function () {
    function GarbageManFactory() {
    }
    GarbageManFactory.create = function (context) {
        return new GarbageMan_1.GarbageMan(Px_1.Px.toSq(1), Px_1.Px.toSq(1), Px_1.Px.toSq(1), context, 'red');
    };
    return GarbageManFactory;
}());
exports.GarbageManFactory = GarbageManFactory;
//# sourceMappingURL=GarbageManFactory.js.map