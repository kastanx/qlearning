import { BaseEntity } from './BaseEntity';
import { EntityType } from './EntityType';

export class StateMap {
  public static createStateMap = (vision: string[], entities: BaseEntity[][]) => {
    const stateMap: any = {};
    entities.forEach(element => element.forEach(entity => (stateMap[entity.getStringPosititonInPx()] = entity)));

    const state: any = [];
    vision.forEach(element => {
      if (element in stateMap) {
        state.push(stateMap[element].getType());
      } else {
        state.push(EntityType.VOID);
      }
    });

    return state.join(',');
  };
}
