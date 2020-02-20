import { Trash } from './Trash';
import { Px } from '../util/Px';

export class TrashFactory {
  public static create(count: number, gameSize: number, context: any, except?: string[]): Trash[] {
    const trash: Trash[] = [];
    for (let i = 0; i < count; i++) {
      const position = TrashFactory.generateUnique(gameSize, except);
      except.push(position);

      const x = parseInt(position.split(',')[0]);
      const y = parseInt(position.split(',')[1]);
      trash.push(new Trash(Px.toSq(1), Px.toSq(x), Px.toSq(y), context, 'blue'));
    }

    return trash;
  }

  public static generateUnique = (gameSize: number, except: string[]): string => {
    const position = `${Math.floor(Math.random() * gameSize)},${Math.floor(Math.random() * gameSize)}`;

    if (except.find(pos => pos === position)) {
      return TrashFactory.generateUnique(gameSize, except);
    }

    return position;
  };
}
