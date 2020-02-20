import { Qtable } from './Qtable';
import { Action } from './Action';
import { FrameBuffer } from './FrameBuffer';
import { EntityType } from '../game/EntityType';

export class Agent {
  public qtable: Qtable;
  private gamma: number = 0.8;
  private alpha: number = 0.1;

  constructor() {
    this.qtable = new Qtable();
  }

  getAction = (state: string) => {
    const takeRandomDecision = Math.ceil(Math.random() * 100000) % 90001;
    if (takeRandomDecision == 0) {
      return Action.random();
    }

    if (Object.keys(this.qtable.table).length < 30000) {
      return Action.random();
    }

    const rewards: any = {
      up: this.qtable.getQ(state, Action.UP),
      down: this.qtable.getQ(state, Action.DOWN),
      left: this.qtable.getQ(state, Action.LEFT),
      right: this.qtable.getQ(state, Action.RIGHT)
    };

    console.table(rewards);
    const highestReward = Object.keys(rewards).reduce((a, b) => (rewards[a] > rewards[b] ? a : b));

    switch (highestReward) {
      case 'up':
        return Action.UP;
      case 'down':
        return Action.DOWN;
      case 'left':
        return Action.LEFT;
      case 'right':
        return Action.RIGHT;
    }
  };

  executeAction = (action: number, document: any) => {
    switch (action) {
      case Action.UP:
        // @ts-ignore
        document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: '38' }));
        break;
      case Action.DOWN:
        // @ts-ignore
        document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: '40' }));
        break;
      case Action.LEFT:
        // @ts-ignore
        document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: '37' }));
        break;
      case Action.RIGHT:
        // @ts-ignore
        document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: '39' }));
        break;
    }
  };

  reward = (frameBuffer: FrameBuffer) => {
    for (let i = frameBuffer.buffer.length - 1; i >= 0; --i) {
      const middleIndex = (frameBuffer.buffer.length - 1) / 2;

      const state = frameBuffer.buffer[i].state;
      const arrayState = state.split(',');

      let reward: number;
      if (frameBuffer.buffer[i - 1]) {
        const previousFrame = frameBuffer.buffer[i - 1];
        if (parseInt(arrayState[middleIndex]) === EntityType.OBSTACLE) {
          reward = -5;
          //this.qtable.setQ(previousFrame.state, previousFrame.action, -5);
        } else if (parseInt(arrayState[middleIndex]) === EntityType.TRASH) {
          reward = 5;
          //this.qtable.setQ(previousFrame.state, previousFrame.action, 5);
        } else if (parseInt(arrayState[middleIndex]) === EntityType.VOID) {
          reward = 1;
          //this.qtable.setQ(previousFrame.state, previousFrame.action, 1);
        }

        if (reward) {
          const optimalFutureValue = Math.max(
            this.qtable.getQ(state, Action.UP),
            this.qtable.getQ(state, Action.DOWN),
            this.qtable.getQ(state, Action.LEFT),
            this.qtable.getQ(state, Action.RIGHT)
          );

          const updateValue =
            this.alpha *
            (reward + this.gamma * optimalFutureValue - this.qtable.getQ(previousFrame.state, previousFrame.action));

          this.qtable.setQ(previousFrame.state, previousFrame.action, updateValue);
        }
      }
    }
  };
}
