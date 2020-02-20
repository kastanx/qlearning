"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StateMap = /** @class */ (function () {
    function StateMap() {
    }
    StateMap.createStateMap = function (vision, entities) {
        var stateMap = {};
        entities.forEach(function (element) { return element.forEach(function (entity) { return (stateMap[entity.getStringPosititonInPx()] = entity); }); });
        var state = [];
        vision.forEach(function (element) {
            if (element in stateMap) {
                state.push(stateMap[element].getType());
            }
            else {
                state.push(0);
            }
        });
        return state.join(',');
    };
    return StateMap;
}());
exports.StateMap = StateMap;
//# sourceMappingURL=StateMap.js.map