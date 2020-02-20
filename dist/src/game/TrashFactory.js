"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Trash_1 = require("./Trash");
var Px_1 = require("../util/Px");
var TrashFactory = /** @class */ (function () {
    function TrashFactory() {
    }
    TrashFactory.create = function (count, gameSize, context, except) {
        var trash = [];
        for (var i = 0; i < count; i++) {
            var position = TrashFactory.generateUnique(gameSize, except);
            except.push(position);
            var x = parseInt(position.split(',')[0]);
            var y = parseInt(position.split(',')[1]);
            trash.push(new Trash_1.Trash(Px_1.Px.toSq(1), Px_1.Px.toSq(x), Px_1.Px.toSq(y), context, 'blue'));
        }
        return trash;
    };
    TrashFactory.generateUnique = function (gameSize, except) {
        var position = Math.floor(Math.random() * gameSize + 1) + "," + Math.floor(Math.random() * gameSize + 1);
        if (except.find(function (pos) { return pos === position; })) {
            return TrashFactory.generateUnique(gameSize, except);
        }
        return position;
    };
    return TrashFactory;
}());
exports.TrashFactory = TrashFactory;
//# sourceMappingURL=TrashFactory.js.map