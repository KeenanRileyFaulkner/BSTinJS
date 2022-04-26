//binary search tree implementation
//needs add, remove, clear, find
//returns bool, bool, void, int
class Node {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class BST {
    constructor(root = null){
        this.root = root;
    }

    //clear is a void recursive method and _clear is the helped function (invoke clear not _clear when using tree)
    clear() {
        if(this.root !== null) {
            _clear(this.root);
        }
    }

    _clear(node) {
        if(node === null) {
            return;
        }

        _clear(node.leftChild);
        _clear(node.rightChild);

        node = null;
    }

    //add returns bool if added (will not add duplicates)
    _add(node, toAdd) {
        if(node === null) {
            //this is the place
            node = toAdd;
            console.log("Added", toAdd);
            return true;
        }

        if(node.value === toAdd.value) { //value is already in tree
            console.log("The value is already in the tree");
            return false;
        }else if(node.value > toAdd.value) { //value is less than current node
            console.log("Went left");
            return _add(node.leftChild, toAdd);
        } else if (node.value < toAdd.value) { //value is greater than current node
            console.log("Went right");
            return _add(node.rightChild, toAdd);
        }
    }

    add(value) {
        let nodeToAdd = new Node(value);
        return this._add(this.root, nodeToAdd);
    }
}

let tree = new BST();
tree.clear();
tree.add(5);
tree.add(7);
tree.add(5);