"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./game/Game");
var Agent_1 = require("./qlearning/Agent");
var game = new Game_1.Game(document.getElementById('canvas'), 50);
var agent = new Agent_1.Agent();
game.start();
game.updateCallback = function (state) {
    console.log(agent.getAction(state));
    console.log(state);
};
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        game.move('top');
    }
    else if (e.keyCode == '40') {
        // down arrow
        game.move('down');
    }
    else if (e.keyCode == '37') {
        // left arrow
        game.move('left');
    }
    else if (e.keyCode == '39') {
        // right arrow
        game.move('right');
    }
    else if (e.key == 'w') {
        // right arrow
        game.start();
    }
}
//# sourceMappingURL=app.js.map