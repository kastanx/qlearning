"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseEntity_1 = require("./BaseEntity");
var Px_1 = require("../util/Px");
var GarbageMan = /** @class */ (function (_super) {
    __extends(GarbageMan, _super);
    function GarbageMan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createVision = function (radius) {
            var position = _this.getPosition();
            var basePosition = { x: Px_1.Px.toPx(position[0]) - radius, y: Px_1.Px.toPx(position[1]) - radius };
            var fullRadius = radius * 2 + 1;
            var positions = [];
            for (var row = 0; row < fullRadius; row++) {
                for (var column = 0; column < fullRadius; column++) {
                    positions.push(basePosition.x + column + "," + (basePosition.y + row));
                }
            }
            return positions;
        };
        _this.move = function (direction) {
            switch (direction) {
                case 'left':
                    _this.x -= _this.size;
                    break;
                case 'right':
                    _this.x += _this.size;
                    break;
                case 'top':
                    _this.y -= _this.size;
                    break;
                case 'down':
                    _this.y += _this.size;
                    break;
            }
        };
        return _this;
    }
    return GarbageMan;
}(BaseEntity_1.BaseEntity));
exports.GarbageMan = GarbageMan;
//# sourceMappingURL=GarbageMan.js.map