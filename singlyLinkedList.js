class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current; 
    }
    shift() {
        if(!this.head) return undefined;
        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return oldHead;
    }
    unshift(val) {
        const newNode = new Node(val);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let current = this.head;
        let counter = 0;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set (val, index) {
        const node = this.get(index);
        if (node === undefined) return false;
        else {
            node.val = val;
            return true;
        }
    }
    insert(val, index) {
        if (index <0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return this.unshift(val);
        }
        if (index === this.length) {
            return this.push(val);
        }
        let counter = 0;
        let previous = this.head;
        let current = this.head.next;
        const newNode = new Node(val);
        while((index-counter) !== 1) {
            current = current.next;
            previous = previous.next;
            counter ++;
        }
        previous.next = newNode;
        newNode.next = current;
        this.length++;
        return this;

    }
    remove(index) {
        if (index< 0 || index >= this.length) return false;
        if (index === 0) {
            return this.shift()
        }
        if (index === this.length -1) {
            return this.pop();
        }
        let counter = 0;
        let current = this.head.next;
        let previous = this.head;
        while((index-counter) !== 1) {
            current = current.next;
            previous = previous.next;
            counter++;
        }
        previous.next = current.next;
        current.next = null;
        this.length--;
        return current;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next = null;
        for(let i=0;i< this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
const list  = new SinglyLinkedList();
list.push("My")
list.push("name")
list.push("is")
list.push("Prabhjot")
// list.();
// console.log(list.insert("is",1))
// console.log(list.insert("loves",1))
// console.log(list.insert("chicken",1))
// console.log(list)
console.log(list.reverse())
