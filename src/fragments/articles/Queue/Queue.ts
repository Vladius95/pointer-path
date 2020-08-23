export interface IQeueu<T> {
  push(item: T): void;
  pop(): T;
  size(): number;
  isEmpty(): boolean;
  value: T[];
}

export class Qeueu<T> implements IQeueu<T> {
  constructor(private _stack: T[] = []) {}

  push(item: T) {
    this._stack.push(item);
  }

  pop() {
    const [item, ...rest] = this._stack;
    this._stack = rest;
    return item;
  }

  size() {
    return this._stack.length;
  }

  isEmpty() {
    return this._stack.length === 0;
  }

  get value() {
    return this._stack;
  }
}
