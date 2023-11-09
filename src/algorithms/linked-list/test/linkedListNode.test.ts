import LinkedListNode from '../linkedListNode';

describe('LinkedListNode', () => {
  it('should create a linked list node', () => {
    const node = new LinkedListNode(10);
    expect(node.value).toBe(10);
    expect(node.next).toBeNull();
  });

  it('should create a linked list node', () => {
    const value = 'monday';
    const node = new LinkedListNode(value);
    expect(node.value).toBe(value);
    expect(node.next).toBeNull();
  });

  it('should create a linked list node with next', () => {
    const value = 'monday';
    const nextValue = 'tuesday';
    const nextNode = new LinkedListNode(nextValue);
    const node = new LinkedListNode(value, nextNode);
    expect(node.value).toBe(value);
    expect(node.next.value).toBe(nextValue);
  });
});
