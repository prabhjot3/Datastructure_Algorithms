class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
        return this.values;
    }
    bubbleUp() {
        let index = this.values.length -1;
        if(index ===0) return this.values;
        let parentIndex = Math.floor((index-1)/2);
        while(this.values[parentIndex].priority > this.values[index].priority){
            let temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[index];
            this.values[index] = temp;
            index = parentIndex;
            parentIndex = Math.floor((index-1)/2);

        }
    }
    dequeue() {
        let min = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        
         return min;
    }
    sinkDown() {
        const length = this.values.length;
        let index = 0;
        let leftChildIndex = 2*index + 1;
        let rightChildIndex = 2*index + 2;
        
        let leftChild, rightChild;
        while(true) {
            let swapIndex = 0;
            if(leftChildIndex < length ) {
                leftChild = this.values[leftChildIndex];
                if(this.values[index].priority > leftChild.priority) {
                    swapIndex = leftChildIndex;
                }
            }
            if(rightChildIndex  < length) {
                rightChild = this.values[rightChildIndex];
                if (this.values[index].priority < rightChild.priority && rightChild.priority < leftChild.priority) {
                    swapIndex = rightChildIndex;
                }
            } 
            if (swapIndex === 0) return;
            const temp = this.values[index];
            this.values[index] = this.values[swapIndex];
            this.values[swapIndex] = temp;
            index = swapIndex;
            leftChildIndex = 2*index + 1;
            rightChildIndex = 2*index + 2;
            
        }
    }
}

const pq = new PriorityQueue();
pq.enqueue(45, 1);
pq.enqueue(25, 3);
pq.enqueue(55, 2);
pq.enqueue(75, 1);
pq.enqueue(78, 5);



console.log(pq.dequeue())
console.log(pq.dequeue())
// console.log(pq.dequeue())
// console.log(pq.dequeue())
// console.log(pq.dequeue())
// console.log(pq.dequeue())
console.log(pq.values)