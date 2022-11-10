class MinStack {
    constructor() {
        this.data = [];
    }

    push(int) {
        this.data.push({ value: int, min: this.data.length ? Math.min(int, this.getMin()) : int });
    }

    pop() {
        this.data.pop();
    }

    top() {
        return this.data[this.data.length - 1].value;
    }

    getMin() {
        return this.data[this.data.length - 1].min;
    }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3
minStack.pop();
console.log(minStack.top()); // 0
console.log(minStack.getMin()); // -2