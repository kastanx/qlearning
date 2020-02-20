"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vision_1 = require("./Vision");
var Px_1 = require("../util/Px");
var VisionFactory = /** @class */ (function () {
    function VisionFactory() {
    }
    VisionFactory.create = function (positions, context) {
        var visions = [];
        positions.forEach(function (position) {
            var x = parseInt(position.split(',')[0]);
            var y = parseInt(position.split(',')[1]);
            visions.push(new Vision_1.Vision(Px_1.Px.toSq(1), Px_1.Px.toSq(x), Px_1.Px.toSq(y), context, 'yellow'));
        });
        return visions;
    };
    return VisionFactory;
}());
exports.VisionFactory = VisionFactory;
//# sourceMappingURL=VisionFactory.js.map