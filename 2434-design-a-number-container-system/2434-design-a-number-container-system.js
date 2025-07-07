class MinHeap {
  constructor() {
    this.heap = [];
  }
  
  size() {
    return this.heap.length;
  }
  
  peek() {
    return this.heap[0];
  }
  
  push(val) {
    this.heap.push(val);
    this._bubbleUp(this.heap.length - 1);
  }
  
  pop() {
    if (this.heap.length === 0) return null;
    const top = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this._bubbleDown(0);
    }
    return top;
  }
  
  _bubbleUp(idx) {
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent] <= this.heap[idx]) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }
  
  _bubbleDown(idx) {
    const n = this.heap.length;
    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let smallest = idx;
      
      if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;
      if (smallest === idx) break;
      
      [this.heap[smallest], this.heap[idx]] = [this.heap[idx], this.heap[smallest]];
      idx = smallest;
    }
  }
}

var NumberContainers = function() {
    this.indexToNum = new Map();             
    this.numToHeap = new Map();              
};

NumberContainers.prototype.change = function(index, number) {
    this.indexToNum.set(index, number);
    if (!this.numToHeap.has(number)) {
        this.numToHeap.set(number, new MinHeap());
    }
    this.numToHeap.get(number).push(index);
};

NumberContainers.prototype.find = function(number) {
    if (!this.numToHeap.has(number)) return -1;

    const heap = this.numToHeap.get(number);

    // Lazy cleanup of outdated indices
    while (heap.size() > 0) {
        const idx = heap.peek();
        if (this.indexToNum.get(idx) !== number) {
            heap.pop();  // remove outdated index
        } else {
            return idx;  // smallest valid index
        }
    }
    return -1;
};
