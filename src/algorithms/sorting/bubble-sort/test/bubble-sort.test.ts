import { firstMock, secondMock } from '../../sort.mock';
import { BubbleSort } from '../bubble-sort';

describe('BubbleSort', () => {
  it('should sort array', () => {
    const bubbleSort = new BubbleSort();

    const sortedArray = bubbleSort.sort(firstMock.tab);
    expect(sortedArray.length).toBe(firstMock.sortedTab.length);
    expect(sortedArray.toString()).toBe(firstMock.sortedTab.toString());

    const sortedArray2 = bubbleSort.sort(secondMock.tab);
    expect(sortedArray2.length).toBe(secondMock.sortedTab.length);
    expect(sortedArray2.toString()).toBe(secondMock.sortedTab.toString());
  });
});
