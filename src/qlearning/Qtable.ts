export class Qtable {
  public table: any = {};

  getQ = (state: string, action: number): number => {
    const config = `${state},${action}`;
    if (!(config in this.table)) {
      return 0;
    }

    return this.table[config];
  };

  setQ = (state: string, action: number, reward: number) => {
    const config = `${state},${action}`;
    if (!(config in this.table)) {
      this.table[config] = 0;
    }

    this.table[config] += reward;
  };
}
