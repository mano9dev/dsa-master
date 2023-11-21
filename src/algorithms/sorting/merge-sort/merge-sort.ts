import { Sort } from '../sort';

export class MergeSort<T> extends Sort {
  sort(array: T[]) {
    if (array.length <= 1) {
      return array;
    }

    // split array on the middle
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    // sort two halves of splitted arrays
    const leftSortedArray = this.sort(leftArray);
    const rightSortedArray = this.sort(rightArray);

    return this.mergeSortedArray(leftSortedArray, rightSortedArray);
  }

  mergeSortedArray(leftArray: Array<T>, rightArray: Array<T>) {
    const sortedArray = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      let minElement: T;
      if (leftArray[leftIndex] <= rightArray[rightIndex]) {
        minElement = leftArray[leftIndex];
        leftIndex++;
      } else {
        minElement = rightArray[rightIndex];
        rightIndex++;
      }

      // add the minimum element to the sorted array
      sortedArray.push(minElement);
    }

    return sortedArray
      .concat(leftArray.splice(leftIndex))
      .concat(rightArray.slice(rightIndex));
  }
}
