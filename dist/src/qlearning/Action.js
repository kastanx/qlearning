"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Action = /** @class */ (function () {
    function Action() {
    }
    Action.UP = 1;
    Action.DOWN = 2;
    Action.LEFT = 3;
    Action.RIGHT = 4;
    Action.toArray = function () {
        return Object.values(Action);
    };
    Action.random = function () {
        return Action.toArray()[Math.floor(Math.random() * Action.toArray().length)];
    };
    return Action;
}());
exports.Action = Action;
//# sourceMappingURL=Action.js.map