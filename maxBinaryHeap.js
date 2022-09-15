class MaxBinaryHeap {
    constructor() {
        this.values = [41,39,33,18,27];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
        return this.values;
    }
    bubbleUp() {
        let index = this.values.length -1;
        if(index ===0) return this.values;
        let parentIndex = Math.floor((index-1)/2);
        while(this.values[parentIndex] < this.values[index]){
            let temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[index];
            this.values[index] = temp;
            index = parentIndex;
            parentIndex = Math.floor((index-1)/2);

        }
    }
    extractMax() {
        let max = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        
         return max;
    }
    sinkDown() {
        const length = this.values.length;
        let index = 0;
        let leftChildIndex = 2*index + 1;
        let rightChildIndex = 2*index + 2;
        
        let leftChild, rightChild;
        while(true) {
            let swapIndex = null;
            if(leftChildIndex < length ) {
                leftChild = this.values[leftChildIndex];
                if(this.values[index] < leftChild) {
                    swapIndex = leftChildIndex;
                }
            }
            if(rightChildIndex  < length) {
                rightChild = this.values[rightChildIndex];
                if (this.values[index] < rightChild && rightChild > leftChild) {
                    swapIndex = rightChildIndex;
                }
            } 
            if (swapIndex === null) return;
            const temp = this.values[index];
            this.values[index] = this.values[swapIndex];
            this.values[swapIndex] = temp;
            
            index = swapIndex;
            leftChildIndex = 2*index + 1;
            rightChildIndex = 2*index + 2;
            
        }
    }
}

const mbh = new MaxBinaryHeap();
// mbh.insert(45);

// mbh.extractMax();
// mbh.extractMax();
// mbh.extractMax();
mbh.extractMax();
mbh.extractMax();

// console.log(mbh.extractMax())
console.log(mbh.values)