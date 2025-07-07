/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
    events.sort((a, b) => a[0] - b[0]);

    // MinHeap class for end days
    class MinHeap {
        constructor() {
            this.heap = [];
        }
        push(val) {
            this.heap.push(val);
            this.bubbleUp(this.heap.length - 1);
        }
        pop() {
            const top = this.heap[0];
            const end = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = end;
                this.bubbleDown(0);
            }
            return top;
        }
        peek() {
            return this.heap[0];
        }
        bubbleUp(index) {
            while (index > 0) {
                const parent = Math.floor((index - 1) / 2);
                if (this.heap[parent] <= this.heap[index]) break;
                [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
                index = parent;
            }
        }
        bubbleDown(index) {
            const length = this.heap.length;
            while (true) {
                let smallest = index;
                const left = 2 * index + 1;
                const right = 2 * index + 2;

                if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
                if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;
                if (smallest === index) break;

                [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
                index = smallest;
            }
        }
        size() {
            return this.heap.length;
        }
    }

    let heap = new MinHeap();
    let i = 0, res = 0;
    const n = events.length;

    // Get min and max days
    const minDay = Math.min(...events.map(e => e[0]));
    const maxDay = Math.max(...events.map(e => e[1]));

    for (let day = minDay; day <= maxDay; day++) {
        // Add events that start today
        while (i < n && events[i][0] === day) {
            heap.push(events[i][1]); // push end day
            i++;
        }

        // Remove expired events
        while (heap.size() > 0 && heap.peek() < day) {
            heap.pop();
        }

        // Attend one event
        if (heap.size() > 0) {
            heap.pop();
            res++;
        }
    }

    return res;
};
