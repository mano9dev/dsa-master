import { Sort } from '../sort';

export class BubbleSort<T> extends Sort {
  sort(array: Array<T>): Array<T> {
    //

    const tab = [...array];
    let isSorted = false;
    while (!isSorted) {
      let tabLength = tab.length;
      let lastUnsorted = tabLength - 1;
      isSorted = true;
      for (let i = 0; i < tabLength - 1; i++) {
        if (tab[i] > tab[i + 1]) {
          this.swap(tab, i, i + 1);
          isSorted = false;
        }
      }
      lastUnsorted--;
    }
    return tab;
  }

  swap(tab: Array<T>, i: number, j: number) {
    let tem: T = tab[i];
    tab[i] = tab[j];
    tab[j] = tem;
  }
}
