export interface IStack<T> {
  push(item: T): void;
  pop(): T;
  size(): number;
  isEmpty(): boolean;
  value: T[];
}

export class Stack<T> implements IStack<T> {
  constructor(private _stack: T[] = []) {}

  push(item: T) {
    this._stack.push(item);
    return this.size();
  }

  pop() {
    return this._stack.pop();
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
