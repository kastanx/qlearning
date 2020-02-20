interface Buffer {
  state: string;
  action?: number;
}

export class FrameBuffer {
  public buffer: Buffer[] = [];

  add = (state: string, action: number) => {
    this.buffer.push({ state, action });
  };

  clear = () => {
    this.buffer = [];
  };
}
