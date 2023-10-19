import LinkedListNode from '../linkedListNode';

describe('LinkedListNode', () => {
  it('should create a linked list node', () => {
    const node = new LinkedListNode(10);
    expect(node.value).toBe(10);
    expect(node.next).toBeNull();
  });
});
