"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Px_1 = require("../util/Px");
var BaseEntity = /** @class */ (function () {
    function BaseEntity(size, x, y, context, color) {
        var _this = this;
        this.getColor = function () {
            return _this.color;
        };
        this.setColor = function (color) {
            _this.color = color;
        };
        this.getX = function () {
            return _this.x;
        };
        this.setX = function (x) {
            _this.x = x;
        };
        this.getY = function () {
            return _this.y;
        };
        this.setY = function (y) {
            _this.y = y;
        };
        this.getPosition = function () {
            return [_this.x, _this.y];
        };
        this.setPosition = function (position) {
            _this.x = position[0];
            _this.y = position[1];
        };
        this.getContext = function () {
            return _this.context;
        };
        this.setContext = function (context) {
            _this.context = context;
        };
        this.getSize = function () {
            return _this.size;
        };
        this.setSize = function (size) {
            _this.size = size;
        };
        this.getStringPosititonInPx = function () {
            var pos = _this.getPosition();
            return Px_1.Px.toPx(pos[0]) + "," + Px_1.Px.toPx(pos[1]);
        };
        this.getStringPosititon = function () {
            return _this.getPosition().join(',');
        };
        this.update = function () {
            _this.getContext().fillStyle = _this.color;
            _this.getContext().fillRect(_this.x, _this.y, _this.size, _this.size);
        };
        this.x = x;
        this.y = y;
        this.size = size;
        this.context = context;
        this.color = color;
    }
    return BaseEntity;
}());
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=BaseEntity.js.map