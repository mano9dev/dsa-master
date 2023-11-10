export default class LinkedListNode<T = any> {
  next: LinkedListNode | null;
  value: T;
  constructor(value: T, node: LinkedListNode | null = null) {
    this.value = value;
    this.next = node;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
