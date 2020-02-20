import { Px } from '../util/Px';

export class BaseEntity {
  protected x: number;
  protected y: number;
  protected context: any;
  protected size: number;
  protected color: string;

  constructor(size: number, x: number, y: number, context: any, color: string) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.context = context;
    this.color = color;
  }

  getColor = (): string => {
    return this.color;
  };

  setColor = (color: string) => {
    this.color = color;
  };

  getX = (): number => {
    return this.x;
  };

  setX = (x: number) => {
    this.x = x;
  };

  getY = (): number => {
    return this.y;
  };

  setY = (y: number) => {
    this.y = y;
  };

  getPosition = (): number[] => {
    return [this.x, this.y];
  };

  setPosition = (position: number[]) => {
    this.x = position[0];
    this.y = position[1];
  };

  getContext = (): any => {
    return this.context;
  };

  setContext = (context: any) => {
    this.context = context;
  };

  getSize = (): number => {
    return this.size;
  };

  setSize = (size: number) => {
    this.size = size;
  };

  getStringPosititonInPx = (): string => {
    const pos = this.getPosition();
    return `${Px.toPx(pos[0])},${Px.toPx(pos[1])}`;
  };

  getStringPosititon = (): string => {
    return this.getPosition().join(',');
  };

  update = () => {
    this.getContext().fillStyle = this.color;
    this.getContext().fillRect(this.x, this.y, this.size, this.size);
  };
}
