import { BaseEntity } from './BaseEntity';
import { EntityType } from './EntityType';

export class Obstacle extends BaseEntity {
  getType = (): number => {
    return EntityType.OBSTACLE;
  };
}
