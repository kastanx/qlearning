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
var Trash = /** @class */ (function (_super) {
    __extends(Trash, _super);
    function Trash() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getType = function () {
            return 2;
        };
        return _this;
    }
    return Trash;
}(BaseEntity_1.BaseEntity));
exports.Trash = Trash;
//# sourceMappingURL=Trash.js.map