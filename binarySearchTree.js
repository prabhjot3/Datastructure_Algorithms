class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null
    }
}
class BST {
    constructor() {
        this.root = null;
    }

insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
        this.root = newNode;
        return;
    }
    let current = this.root;
     const helper = (helperInput) => {
        if (helperInput === current.value) return;
        if(helperInput > current.value) {
            if(current.right !== null) {
            current = current.right;
            helper(helperInput);
            } else {
                current.right = newNode;
            }
            
            return;
        }
        else if(helperInput < current.value) {
            if(current.left !== null) {
            current = current.left;
            helper(helperInput);
            } else {
                current.left = newNode;
            }
            
             return;
        }
    };
    helper(value);
   return this;
}
search(value) {
    if (this.root === null ) {
        return false;
       } 
    let current = this.root;
    let matchFound = false;
       (function helper(helperInput) {
        if (helperInput === current.value) {
            matchFound = true;
            return matchFound;
        } else if(helperInput > current.value && current.right !== null) {
            current = current.right;
            helper(helperInput);
        } else if(helperInput < current.value && current.left !== null){
            current = current.left;
            helper(helperInput);
        }
       })(value)
   
   return matchFound;
}
bfs() {
    let node = this.root;
    let queue = [];
    let data = [];
    queue.push(node);
    while(queue.length) {
        node = queue.shift();
        data.push(node.value);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return data;
}
dfsPreorder() {
    let data = [];
    let current = this.root;
    (function traverse(node) {
        data.push(node.value)
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);

    })(current)
    return data;
}
dfsPostorder() {
    let data = [];
    let current = this.root;
    (function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.value);
    })(current)
    return data;
}
dfsInOrder() {
    let data = [];
    let current = this.root;
    (function traverse(node){
        if(node.left) traverse(node.left);
        data.push(node.value);
        if (node.right) traverse(node.right);
    })(current)
    return data;
}
}

bst = new BST();
bst.insert(10);
bst.insert(8);
bst.insert(15);
bst.insert(5);
bst.insert(11);
bst.insert(3);
console.log(bst.dfsInOrder())