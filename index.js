let stack = function () {
  this.count = 0;
  this.storage = {};

  //add value onto end of stack

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //remove a value
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  this.peek = function () {
    this.storage[this.count - 1];
  };
};
