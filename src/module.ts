export class Module {
  constructor(readonly name: string) {}

  public fullName() {
    return `Module ${this.name}`;
  }
}
