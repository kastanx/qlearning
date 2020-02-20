import { Vision } from './Vision';
import { Px } from '../util/Px';

export class VisionFactory {
  public static create(positions: string[], context: any) {
    const visions: Vision[] = [];

    positions.forEach(position => {
      const x = parseInt(position.split(',')[0]);
      const y = parseInt(position.split(',')[1]);

      visions.push(new Vision(Px.toSq(1), Px.toSq(x), Px.toSq(y), context, 'yellow'));
    });

    return visions;
  }
}
