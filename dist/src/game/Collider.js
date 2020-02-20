"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collider = /** @class */ (function () {
    function Collider() {
        var _this = this;
        this.map = [];
        this.add = function (entities1, entities2, callback) {
            _this.map.push({ entities1: entities1, entities2: entities2, callback: callback });
        };
        this.check = function () {
            var collidees = [];
            _this.map.forEach(function (collide, index) {
                collidees[index] = [];
                collide.entities1.forEach(function (element) {
                    collidees[index][element.getStringPosititon()] = element;
                });
                collide.entities2.forEach(function (element) {
                    if (element.getStringPosititon() in collidees[index]) {
                        collide.callback(collidees[index][element.getStringPosititon()], element);
                    }
                });
            });
        };
        this.reset = function () {
            _this.map = [];
        };
    }
    return Collider;
}());
exports.Collider = Collider;
//# sourceMappingURL=Collider.js.map