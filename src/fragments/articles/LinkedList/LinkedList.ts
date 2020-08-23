// TODO Переписать на Прокси

export interface ILinkedList<T> {
  head: Node<T> | null;
  length: number;
  push(value: T): number;
  insert(value: T, index: number): void;
  remove(value: T): 1 | -1;
  indexOf(value: T): number;
  isEmpty(): boolean;
  print(message?: string): void;
  values(): T[];
  clear(): void;
}

export class LinkedList<T> implements ILinkedList<T> {
  constructor(
    initial: T[] = [],
    public head: Node<T> | null = null,
    public length: number = 0
  ) {
    if (initial.length) {
      initial.forEach(this.push);
    }
  }

  push = (value: T) => {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.length++;

      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = new Node(value);

    this.length++;

    return this.length;
  };

  insert(value: T, index: number) {
    let current = this.head;
    let pointer = 0;

    while (current.next) {
      if (pointer === index) {
        current.next = new Node(value);
        return;
      }

      current = current.next;
      pointer++;
    }

    current.next = new Node(value);
  }

  remove(value: T) {
    let current = this.head;

    while (current.next) {
      if (current.value === value) {
        current = current.next;
        return 1;
      }

      current = current.next;
    }
    return -1;
  }

  indexOf(value: T) {
    let current = this.head;
    let pointer = 0;

    while (current.next) {
      if (current.value === value) return pointer;
      pointer++;
      current = current.next;
    }
  }

  isEmpty() {
    return this.length === 0;
  }

  print(message: string) {
    let current = this.head;

    message && console.log(message);

    while (current.next) {
      console.log(current.value);
      current = current.next;
    }
  }

  values() {
    let result: T[] = [];
    let current = this.head;

    while (current.next) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  clear() {
    this.length = 0;
    this.head = null;
  }
}

interface INode<T> {
  value: T;
  next: Node<T> | null;
}

class Node<T> implements INode<T> {
  constructor(public value: T, public next: Node<T> | null = null) {}
}
