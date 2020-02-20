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
var Vision = /** @class */ (function (_super) {
    __extends(Vision, _super);
    function Vision() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
    return Vision;
}(BaseEntity_1.BaseEntity));
exports.Vision = Vision;
//# sourceMappingURL=Vision.js.map