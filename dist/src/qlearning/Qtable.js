"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Qtable = /** @class */ (function () {
    function Qtable() {
        var _this = this;
        this.table = {};
        this.getQ = function (state, action) {
            var config = state + "," + action;
            if (!(config in _this.table)) {
                return 0;
            }
            return _this.table[config];
        };
        this.setQ = function (state, action, reward) {
            var config = state + "," + action;
            if (!(config in _this.table)) {
                _this.table[config] = 0;
            }
            _this.table[config] += reward;
        };
    }
    return Qtable;
}());
exports.Qtable = Qtable;
//# sourceMappingURL=Qtable.js.map