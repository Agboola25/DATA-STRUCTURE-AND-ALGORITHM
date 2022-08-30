//STACKS

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
    return this.storage[this.count - 1];
  };
};

let myStack = new stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
myStack.push("ali");
myStack.push("aliii");
myStack.push("aliii");
myStack.push("aliiii");
console.log(myStack.pop());
console.log(myStack.size());

//ACADEMIND DATA STRUCTURE AND ALGORITHM
//SETS
const set = new Set();

//LINKED LIST DATA STRUCTURE

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = { value: value, next: null };
    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  delete(value) {
    if (!this.head) {
      return; // return null;
    }

    let curNode = this.head;
    while (curNode){

    }
  }
  
  prepend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  toArray() {
    const elements = [];
    let curNode = this.head;
    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }
    return elements;
  }
}

const LinkedList1 = new LinkedList();

LinkedList1.append("hey");
LinkedList1.append(true);
LinkedList1.append(12.85);
LinkedList1.prepend("first value");

console.log(LinkedList1.toArray());
