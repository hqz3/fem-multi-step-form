export class FormError extends Error {
  constructor(public label: string, public message: string) {
    super(message);
    this.label = label;
  }
}
