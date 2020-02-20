import { BaseEntity } from './BaseEntity';

export class Vision extends BaseEntity {
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
