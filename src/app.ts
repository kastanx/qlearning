import { Game } from './game/Game';
import { Agent } from './qlearning/Agent';

const game = new Game(document.getElementById('canvas'), 50);
const agent = new Agent();

game.start();
game.createControls(document);

game.updateCallback = (state: string) => {
  agent.setNextAction(state);
};

game.endGameCallback = () => {
  agent.reward();
  console.log({ rules: agent.qtable.ruleCount() });
};

const interval = setInterval(() => {
  agent.executeAction(document);
}, 1);
