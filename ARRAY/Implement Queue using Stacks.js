// Question 232


let MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
};

MyQueue.prototype.push = function (x) {
    this.stack1.push(x);
};

MyQueue.prototype.pop = function () {
    while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
    }

    let pop = this.stack2.pop();

    while (this.stack2.length !== 0) {
        this.stack1.push(this.stack2.pop());
    }

    return pop;
};

MyQueue.prototype.peek = function () {
    while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
    }

    let pop = this.stack2.pop();
    this.stack2.push(pop);

    while (this.stack2.length !== 0) {
        this.stack1.push(this.stack2.pop());
    }

    return pop;
};

MyQueue.prototype.empty = function () {
    return this.stack1.length > 0 ? false : true;
};