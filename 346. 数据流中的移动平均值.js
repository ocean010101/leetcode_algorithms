/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.queue = [];
    this.capacity = size;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    this.queue.push(val);
    let i,
        res = 0,
        len = this.queue.length;
    if (len < this.capacity) {
        for (i = len - 1; i >= 0; i--) {
            res += this.queue[i];
        }
        return (res / len);
    } else {
        for (i = len - 1; i >= len - this.capacity; i--) {
            res += this.queue[i];
        }
        return (res / this.capacity);
    }
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */