export abstract class Sort<T = any> {
  isSorted: boolean = false;
  constructor(public tab: Array<T> = []) {
    //
  }
  abstract sort(array: Array<T>);
}
