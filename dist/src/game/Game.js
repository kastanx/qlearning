"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GarbageManFactory_1 = require("./GarbageManFactory");
var Px_1 = require("../util/Px");
var TrashFactory_1 = require("./TrashFactory");
var ObstacleFactory_1 = require("./ObstacleFactory");
var Collider_1 = require("./Collider");
var VisionFactory_1 = require("./VisionFactory");
var StateMap_1 = require("./StateMap");
var Game = /** @class */ (function () {
    function Game(canvas, gameSize) {
        var _this = this;
        this.start = function () {
            _this.clear();
            _this.reset();
            _this.garbageMan = GarbageManFactory_1.GarbageManFactory.create(_this.context);
            var obstacles = ObstacleFactory_1.ObstacleFactory.create(250, _this.gameSize, _this.context, ['1,1']);
            _this.obstacles = obstacles.entities;
            _this.trash = TrashFactory_1.TrashFactory.create(50, _this.gameSize, _this.context, obstacles.except);
            _this.collider.add([_this.garbageMan], _this.obstacles, function (object1, object2) {
                _this.start();
            });
            _this.collider.add([_this.garbageMan], _this.trash, function (object1, object2) {
                object2.setPosition([-5000, -5000]);
                _this.update();
            });
            _this.visions = VisionFactory_1.VisionFactory.create(_this.garbageMan.createVision(1), _this.context);
            _this.update();
        };
        this.update = function () {
            _this.clear();
            _this.visions.forEach(function (element) {
                element.update();
            });
            _this.garbageMan.update();
            _this.trash.forEach(function (element) {
                element.update();
            });
            _this.obstacles.forEach(function (element) {
                element.update();
            });
            if (_this.updateCallback)
                _this.updateCallback(StateMap_1.StateMap.createStateMap(_this.garbageMan.createVision(1), [_this.obstacles, _this.trash]));
            _this.collider.check();
        };
        this.clear = function () {
            _this.context.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
        };
        this.reset = function () {
            _this.collider.reset();
        };
        this.move = function (direction) {
            _this.garbageMan.move(direction);
            _this.visions.forEach(function (element) {
                element.move(direction);
            });
            _this.update();
        };
        this.gameSize = gameSize;
        this.canvas = canvas;
        this.canvas.width = Px_1.Px.toSq(gameSize);
        this.canvas.height = Px_1.Px.toSq(gameSize);
        this.context = canvas.getContext('2d');
        this.collider = new Collider_1.Collider();
    }
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=Game.js.map