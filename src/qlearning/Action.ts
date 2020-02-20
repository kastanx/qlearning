export class Action {
  static UP = 1;
  static DOWN = 2;
  static LEFT = 3;
  static RIGHT = 4;

  public static toArray = () => {
    return Object.values(Action);
  };

  public static random = () => {
    const array = [1, 2, 3, 4];
    return array[(Math.random() * array.length) | 0];
  };
}
