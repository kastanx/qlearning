import { BaseEntity } from './BaseEntity';
import { Px } from '../util/Px';

export class GarbageMan extends BaseEntity {
  createVision = (radius: number) => {
    const position = this.getPosition();
    const basePosition = { x: Px.toPx(position[0]) - radius, y: Px.toPx(position[1]) - radius };
    const fullRadius = radius * 2 + 1;

    const positions = [];
    for (let row = 0; row < fullRadius; row++) {
      for (let column = 0; column < fullRadius; column++) {
        positions.push(`${basePosition.x + column},${basePosition.y + row}`);
      }
    }

    return positions;
  };

  move = (direction: string) => {
    switch (direction) {
      case 'left':
        this.x -= this.size;
        break;
      case 'right':
        this.x += this.size;
        break;
      case 'top':
        this.y -= this.size;
        break;
      case 'down':
        this.y += this.size;
        break;
    }
  };
}
