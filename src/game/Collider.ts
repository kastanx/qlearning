import { BaseEntity } from './BaseEntity';

interface Collide {
  entities1: BaseEntity[];
  entities2: BaseEntity[];
  callback: CallableFunction;
}

export class Collider {
  private map: Collide[] = [];

  add = (entities1: BaseEntity[], entities2: BaseEntity[], callback: CallableFunction) => {
    this.map.push({ entities1, entities2, callback });
  };

  check = () => {
    const collidees: any = [];
    this.map.forEach((collide, index: number) => {
      collidees[index] = [];

      collide.entities1.forEach(element => {
        collidees[index][element.getStringPosititon()] = element;
      });
      collide.entities2.forEach(element => {
        if (element.getStringPosititon() in collidees[index]) {
          collide.callback(collidees[index][element.getStringPosititon()], element);
        }
      });
    });
  };

  reset = () => {
    this.map = [];
  };
}
