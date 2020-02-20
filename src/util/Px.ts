export class Px {
  public static pxInSquare: number = 10;

  public static toSq(pixels: number): number {
    return pixels * Px.pxInSquare;
  }

  public static toPx(square: number): number {
    return square / Px.pxInSquare;
  }
}
