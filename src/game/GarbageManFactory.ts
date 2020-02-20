import { GarbageMan } from './GarbageMan';
import { Px } from '../util/Px';

export class GarbageManFactory {
  public static create(context: any, gameSize: number): GarbageMan {
    const x = Math.floor(Math.random() * gameSize);
    const y = Math.floor(Math.random() * gameSize);
    return new GarbageMan(Px.toSq(1), Px.toSq(x), Px.toSq(y), context, 'red');
  }
}
