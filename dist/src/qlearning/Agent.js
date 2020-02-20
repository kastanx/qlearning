"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Qtable_1 = require("./Qtable");
var Action_1 = require("./Action");
var Agent = /** @class */ (function () {
    function Agent() {
        var _this = this;
        this.getAction = function (state) {
            var takeRandomDecision = Math.ceil(Math.random() * 100000) % 90001;
            if (takeRandomDecision == 0) {
                return Action_1.Action.random();
            }
            var rewards = {
                up: _this.qtable.getQ(state, Action_1.Action.UP),
                down: _this.qtable.getQ(state, Action_1.Action.DOWN),
                left: _this.qtable.getQ(state, Action_1.Action.LEFT),
                right: _this.qtable.getQ(state, Action_1.Action.RIGHT)
            };
            var highestReward = Object.keys(rewards).reduce(function (a, b) { return (rewards[a] > rewards[b] ? a : b); });
            switch (highestReward) {
                case 'up':
                    return Action_1.Action.UP;
                case 'down':
                    return Action_1.Action.DOWN;
                case 'left':
                    return Action_1.Action.LEFT;
                case 'right':
                    return Action_1.Action.RIGHT;
            }
        };
        this.qtable = new Qtable_1.Qtable();
    }
    return Agent;
}());
exports.Agent = Agent;
//# sourceMappingURL=Agent.js.map