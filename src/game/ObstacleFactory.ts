import { Px } from '../util/Px';
import { Obstacle } from './Obstacle';
import { GeneratedEntity } from './GeneratedEntities';

export class ObstacleFactory {
  public static create(count: number, gameSize: number, context: any, except?: string[]): GeneratedEntity {
    const obstacles: Obstacle[] = [];
    for (let i = 0; i < count; i++) {
      const position = ObstacleFactory.generateUnique(gameSize, except);
      except.push(position);

      const x = parseInt(position.split(',')[0]);
      const y = parseInt(position.split(',')[1]);
      obstacles.push(new Obstacle(Px.toSq(1), Px.toSq(x), Px.toSq(y), context, 'black'));
    }

    return { entities: obstacles, except };
  }

  public static generateUnique = (gameSize: number, except: string[]): string => {
    const position = `${Math.floor(Math.random() * gameSize)},${Math.floor(Math.random() * gameSize)}`;

    if (except.find(pos => pos === position)) {
      return ObstacleFactory.generateUnique(gameSize, except);
    }

    return position;
  };

  public static generateFence = (gameSize: number, context: any) => {
    const obstacles: Obstacle[] = [];
    const except: string[] = [];

    for (let x = 0; x < gameSize; x++) {
      except.push(`${x},${0}`);
      obstacles.push(new Obstacle(Px.toSq(1), Px.toSq(x), Px.toSq(0), context, 'black'));
      except.push(`${x},${gameSize - 1}`);
      obstacles.push(new Obstacle(Px.toSq(1), Px.toSq(x), Px.toSq(gameSize - 1), context, 'black'));
    }

    for (let y = 0; y < gameSize; y++) {
      except.push(`${0},${y}`);
      obstacles.push(new Obstacle(Px.toSq(1), Px.toSq(0), Px.toSq(y), context, 'black'));
      except.push(`${gameSize - 1},${y}`);
      obstacles.push(new Obstacle(Px.toSq(1), Px.toSq(gameSize - 1), Px.toSq(y), context, 'black'));
    }

    return { entities: obstacles, except };
  };
}
