import { BaseEntity } from './BaseEntity';
import { EntityType } from './EntityType';

export class Trash extends BaseEntity {
  getType = (): number => {
    return EntityType.TRASH;
  };
}
