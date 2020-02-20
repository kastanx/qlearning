"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Px_1 = require("../util/Px");
var Obstacle_1 = require("./Obstacle");
var ObstacleFactory = /** @class */ (function () {
    function ObstacleFactory() {
    }
    ObstacleFactory.create = function (count, gameSize, context, except) {
        var obstacles = [];
        for (var i = 0; i < count; i++) {
            var position = ObstacleFactory.generateUnique(gameSize, except);
            except.push(position);
            var x = parseInt(position.split(',')[0]);
            var y = parseInt(position.split(',')[1]);
            obstacles.push(new Obstacle_1.Obstacle(Px_1.Px.toSq(1), Px_1.Px.toSq(x), Px_1.Px.toSq(y), context, 'black'));
        }
        return { entities: obstacles, except: except };
    };
    ObstacleFactory.generateUnique = function (gameSize, except) {
        var position = Math.floor(Math.random() * gameSize + 1) + "," + Math.floor(Math.random() * gameSize + 1);
        if (except.find(function (pos) { return pos === position; })) {
            return ObstacleFactory.generateUnique(gameSize, except);
        }
        return position;
    };
    return ObstacleFactory;
}());
exports.ObstacleFactory = ObstacleFactory;
//# sourceMappingURL=ObstacleFactory.js.map