let items = [];

class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    // this.length ++
    this.items.sort((a, b) => a - b);
    return (this.length = this.items.length);
  }

  get(pos) {
    if (this.items.length >= pos) {
      return this.items.indexOf(pos);
    } else {
      throw new Error("OutOfBounds");
    }
    // could I also do this with charAt()?
  }

  max() {
    if (this.items.length == 0) throw new Error("OutOfBounds");

    // return this.items[this.items.length - 1];
    return this.items.slice(-1);
  }

  min() {
    if (this.items.length == 0) throw new Error("OutOfBounds");

    return this.items[0];
  }

  sum() {
    if (this.items.length == 0) return 0;
    return this.items.reduce((total, amount) => total + amount);
  }

  avg() {
    if (this.items.length == 0) throw new Error("EmptySortedList");
    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
