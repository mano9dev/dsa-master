import LinkedList from '../linkedList';

function linkedListScope<T = any>(list: LinkedList<T>, values: Array<T> = []) {
  return {
    insert(value: T, position: number) {
      values.splice(position, 0, value);
      list.insert(value, position);
    },
    push(value: T) {
      values.push(value);
      list.append(value);
    },
    delete(cb: Function, start: number) {
      values.splice(start, 1);
      list.delete(cb);
    },
  };
}
describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.toString()).toBe('');
  });

  it('should append to the end of linked list', () => {
    const values = [10];
    const list = new LinkedList();
    const scope = linkedListScope(list, values);
    list.append(values[0]);
    scope.push(15);
    expect(list.head.value).toBe(values[0]);
    expect(list.tail.value).toBe(values[1]);
    scope.push(20);
    expect(list.tail.value).toBe(values[2]);
    expect(list.toString()).toBe(values.toString());
  });

  it('should create linked list from array', () => {
    const values = [2, 4, 6, 8, 10];
    const list = new LinkedList(values);
    expect(list.head.value).toBe(values[0]);
    expect(list.tail.value).toBe(values[values.length - 1]);
    expect(list.toString()).toBe(values.toString());
  });

  it('should insert value to linked list', () => {
    const values = [1, 5];
    const list = new LinkedList(values);
    expect(list.toString()).toBe(values.toString());

    const scope = linkedListScope(list, values);
    const inserted1 = {
      value: 3,
      position: 1,
    };
    scope.insert(inserted1.value, inserted1.position);
    expect(list.toString()).toBe(values.toString());

    scope.insert(values[0], 0);

    const inserted2 = {
      value: 2,
      position: 2,
    };
    scope.insert(inserted2.value, inserted2.position);
    expect(list.toString()).toBe(values.toString());

    const inserted3 = {
      value: 4,
      position: 4,
    };
    scope.insert(inserted3.value, inserted3.position);
    expect(list.toString()).toBe(values.toString());
  });

  it('should delete node from linked list', () => {
    const values = [1];
    const list = new LinkedList(values);
    const scope = linkedListScope(list, values);

    // delete 2 from array: values should be [1]
    scope.delete((value) => value === 2, 1);
    expect(list.toString()).toBe(values.toString());

    scope.push(2);
    // delete 1 from array values should be [2]
    scope.delete((value) => value === 1, 0);
    expect(list.head.value).toBe(values[0]);

    // delete 2 from arrat values should be []
    scope.delete((value) => value === 2, 0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    scope.push(1);
    scope.push(2);
    scope.push(3);
    scope.push(4);
    scope.push(5);

    scope.delete((value) => value === 5, 4);
    expect(list.toString()).toBe(values.toString());
    expect(list.head.value).toBe(values[0]);
    console.log('values ===> ', values);
    expect(list.tail.value).toBe(values[values.length - 1]);
  });
});
