import { Trash } from './Trash';
import { GarbageMan } from './GarbageMan';
import { GarbageManFactory } from './GarbageManFactory';
import { Px } from '../util/Px';
import { TrashFactory } from './TrashFactory';
import { ObstacleFactory } from './ObstacleFactory';
import { Obstacle } from './Obstacle';
import { Collider } from './Collider';
import { BaseEntity } from './BaseEntity';
import { VisionFactory } from './VisionFactory';
import { Vision } from './Vision';
import { StateMap } from './StateMap';

export class Game {
  context: any;
  canvas: any;
  trash: Trash[];
  garbageMan: GarbageMan;
  gameSize: number;
  obstacles: Obstacle[];
  collider: Collider;
  visions: Vision[];
  updateCallback?: CallableFunction;
  endGameCallback?: CallableFunction;

  constructor(canvas: any, gameSize: number) {
    this.gameSize = gameSize;
    this.canvas = canvas;
    this.canvas.width = Px.toSq(gameSize);
    this.canvas.height = Px.toSq(gameSize);
    this.context = canvas.getContext('2d');
    this.collider = new Collider();
  }

  start = () => {
    this.clear();
    this.reset();

    this.garbageMan = GarbageManFactory.create(this.context, this.gameSize);

    const fence = ObstacleFactory.generateFence(this.gameSize, this.context);

    const obstacles = ObstacleFactory.create(
      400,
      this.gameSize,
      this.context,
      [this.garbageMan.getStringPosititonInPx()].concat(fence.except)
    );

    this.obstacles = obstacles.entities.concat(fence.entities);

    this.trash = TrashFactory.create(50, this.gameSize, this.context, obstacles.except);

    this.collider.add([this.garbageMan], this.obstacles, (object1: BaseEntity, object2: BaseEntity) => {
      if (this.endGameCallback) this.endGameCallback();
      this.start();
    });

    this.collider.add([this.garbageMan], this.trash, (object1: BaseEntity, object2: BaseEntity) => {
      object2.setPosition([-5000, -5000]);
      this.update();
    });

    this.visions = VisionFactory.create(this.garbageMan.createVision(2), this.context);

    this.update();
  };

  update = () => {
    this.clear();

    this.visions.forEach(element => {
      element.update();
    });

    this.garbageMan.update();

    this.trash.forEach(element => {
      element.update();
    });

    this.obstacles.forEach(element => {
      element.update();
    });

    if (this.updateCallback)
      this.updateCallback(StateMap.createStateMap(this.garbageMan.createVision(2), [this.obstacles, this.trash]));

    this.collider.check();
  };

  clear = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  reset = () => {
    this.collider.reset();
  };

  move = (direction: string) => {
    this.garbageMan.move(direction);

    this.visions.forEach(element => {
      element.move(direction);
    });

    this.update();
  };

  controls = (e: any) => {
    e = e || window.event;

    if (e.keyCode == '38') {
      // up arrow
      this.move('top');
    } else if (e.keyCode == '40') {
      // down arrow
      this.move('down');
    } else if (e.keyCode == '37') {
      // left arrow
      this.move('left');
    } else if (e.keyCode == '39') {
      // right arrow
      this.move('right');
    } else if (e.key == 'w') {
      // right arrow
      this.start();
    }
  };

  createControls = (document: any) => {
    document.onkeydown = this.controls;
  };
}
