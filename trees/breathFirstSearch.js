
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (this.root === null) {
            this.root = node;
            return this;
        }
        else {
            let current = this.root;

            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = node;
                        return this;
                    }
                    else {
                        current = current.left;
                    }
                }
                else if (value > current.value) {
                    if (current.right === null) {
                        current.right = node;
                        return this;
                    }
                    else {
                        current = current.right;
                    }
                }
            }
        }
    }
    
    breathFirstSearch() {
        let node = this.root;
        const queue = [];
        const data = [];

        queue.push(this.root);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        return data;
    }
};

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst.breathFirstSearch());