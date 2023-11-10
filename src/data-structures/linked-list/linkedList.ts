import LinkedListNode from './linkedListNode';

export default class LinkedList<T = any> {
  head: LinkedListNode<T> | null = null;
  tail: LinkedListNode<T> | null = null;

  constructor();
  constructor(values: T[]);

  constructor(values: T[] = []) {
    if (Array.isArray(values)) {
      this.fromArray(values);
    }
  }

  /**
   * append a value to end of the linked list
   * @param {T} value value to append to the end of the list
   * @returns {LinkedList}
   */
  append(value: T) {
    const node = new LinkedListNode(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;

      return this;
    }

    this.tail.next = node;
    this.tail = node;
    return this;
  }

  /**
   * add value to the start of the linked list
   * @param {T} value value to prepend to the start of the list
   * @returns {LinkedList}
   */
  prepend(value: T) {
    const node = new LinkedListNode(value);
    node.next = this.head;
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }

    return this;
  }

  insert(value: T, indice: number) {
    const head = this.head;
    // append
    if (indice === 0 || head === null) {
      return this.prepend(value);
    }
    let counter = 0;
    let currentNode = head;
    while (currentNode) {
      if (counter === indice - 1) {
        break;
      }
      currentNode = currentNode.next;
      counter++;
    }

    if (currentNode) {
      const next = currentNode.next;
      const newNode = new LinkedListNode(value, next);
      currentNode.next = newNode;
      return this;
    } else {
      if (counter + 1 === indice) {
        const newNode = new LinkedListNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  }

  /**
   * Delete the fist node in the list that conform to call back fontion
   * @param callback
   * @returns {LinkedListNode} return deleted linked list node
   */
  delete(callback: Function): LinkedListNode<T> | undefined {
    let deletedNode: LinkedListNode<T> | undefined;
    if (!this.head) {
      return deletedNode;
    }
    let prevNode: LinkedListNode<T> | undefined;
    let currentNode: LinkedListNode<T> | undefined = this.head;
    let isHead: boolean = true;

    let truthy;
    while (currentNode) {
      truthy = callback(currentNode.value);
      // only for head node
      if (isHead) {
        // delete head if it's corresponding value and exist the boucle;
        if (truthy) {
          deletedNode = this.head;
          this.head = this.head.next;
          if (!this.head || !this.head.next) {
            this.tail = this.head;
          }
          break;
        }
        // Go to the next iteration of the boucle
        prevNode = currentNode;
        currentNode = currentNode.next;
        isHead = false;
        continue;
      }

      // for other node different of the header
      if (truthy) {
        prevNode.next = currentNode.next;
        deletedNode = currentNode;
        if (!prevNode.next) {
          this.tail = prevNode;
        }
        break;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    return deletedNode;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  /**
   * create linked list from array values
   * @param values create new linked list from values
   * @returns {LinkedList}
   */
  fromArray(values: T[]) {
    values.forEach((value) => this.append(value));
    return this;
  }

  toString(callback = undefined) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }
}
