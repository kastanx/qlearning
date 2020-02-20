import { Game } from './game/Game';
import { Agent } from './qlearning/Agent';
import { FrameBuffer } from './qlearning/FrameBuffer';

const game = new Game(document.getElementById('canvas'), 50);
const agent = new Agent();
const frameBuffer = new FrameBuffer();

game.start();
let action: number;

game.updateCallback = (state: string) => {
  action = agent.getAction(state);
  frameBuffer.add(state, action);
};

game.endGameCallback = () => {
  agent.reward(frameBuffer);
  frameBuffer.clear();
  console.log({ rules: Object.keys(agent.qtable.table).length });
};

const interval = setInterval(() => {
  agent.executeAction(action, document);
}, 1);

document.onkeydown = checkKey;

function checkKey(e: any) {
  e = e || window.event;

  if (e.keyCode == '38') {
    // up arrow
    game.move('top');
  } else if (e.keyCode == '40') {
    // down arrow
    game.move('down');
  } else if (e.keyCode == '37') {
    // left arrow
    game.move('left');
  } else if (e.keyCode == '39') {
    // right arrow
    game.move('right');
  } else if (e.key == 'w') {
    // right arrow
    game.start();
  }
}
