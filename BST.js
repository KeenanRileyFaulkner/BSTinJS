//binary search tree implementation
//needs add, remove, clear, find
//returns bool, bool, void, int
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(root = null) {
        this.root = root;
    }

    print(node = this.root) {
        node === null ? console.log("The tree is empty") : console.log(node);
    }

    clear() {
        if(this.root !== null) {
            this._clear(this.root);
        }
        this.root = null;
    }

    _clear(node) {
        if(node === null) {
            return;
        }

        this._clear(node.left);
        this._clear(node.right);
        console.log("Removing", node, "in _clear()")
        node = null;
    }

    add(val) {
        const nodeToAdd = new Node(val);
        if(this.root === null) {
            this.root = nodeToAdd;
            console.log("Tree was empty. Added", nodeToAdd, "to root");
            return true;
        } else {
            return this._add(this.root, nodeToAdd);
        }
    }

    _add(node, toAdd) {
        if(node.val === toAdd.val) {
            console.log(toAdd.val, "is already in the tree");
            return false;
        } else if (toAdd.val < node.val) {
            if(node.left === null) {
                node.left = toAdd;
                console.log("Added", toAdd);
                return true;
            } else {
                return this._add(node.left, toAdd);
            }
        } else if (toAdd. val > node.val) {
            if(node.right === null) {
                node.right = toAdd;
                console.log("Added", toAdd);
                return true;
            } else {
                return this._add(node.right, toAdd);
            }
        }
    }

    remove() {}

    query() {}
}

let tr = new BST();
tr.add(5)
tr.add(7);
tr.add(3);
tr.add(4);
tr.add(2);
tr.add(9);
tr.add(6);
// tr.print();
tr.clear();
// tr.print();
console.log(tr.root);