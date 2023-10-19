import LinkedListNode from './linkedListNode';

export default class LinkedList<T = any> {
  head: LinkedListNode<T> | null = null;
  tail: LinkedListNode<T> | null = null;

  append(value: T) {}
}
