class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;

        }
        this.length--;
        return poppedNode;
    }
    shift() {
        if (!this.head) return undefined;
        let poppedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = poppedNode.next;
            this.head.prev = null;
            poppedNode.next = null;
        }
        this.length--;
        return poppedNode;
    }
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            newNode.prev = null;
            this.head = newNode;

        }
        this.length++;
        return this;
    }
    get(index) {
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = null;
        if(index <= Math.floor(this.length/2)){
            current = this.head;
            while(counter !== index){
                counter++;
                current = current.next;
            }
            
        } else {
            current = this.tail;
            counter = this.length-1;
            while(counter !== index) {
                counter--;
                current = current.prev;
            }
        }
        return current;
    }
    set(index, val) {
        if (index < 0 || index >= this.length) return false;
        const current = this.get(index);
        current.val = val;
        return this;
    }
    insert(index, val) {
        const current = this.get(index);
        if(current === null) return false;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);
        let newNode = new Node(val);
        current.prev.next = newNode;
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev = newNode;
        this.length++;
        return this;
        
    }
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length -1) return this.pop();
        const toBeRemoved = this.get(index);
        toBeRemoved.prev.next = toBeRemoved.next;
        toBeRemoved.next.prev = toBeRemoved.prev;
        toBeRemoved.next = null;
        toBeRemoved.prev = null;
        this.length--;
        return toBeRemoved;
    }
}

const list = new DoublyLinkedList();
list.push("Prabhjot")
list.push("Singh")
list.push("Kalra")
console.log(list.remove(1));
// console.log(list)