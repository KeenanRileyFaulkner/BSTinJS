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
    _clear(node) {
        if(node === null) {
            return;
        }

        _clear(node.leftChild);
        _clear(node.rightChild);

        node = null;
    }

    clear() {
        if(this.root !== null) {
            _clear(this.root);
        }
    }

    //add returns bool if added (will not add duplicates)
    _add(node, toAdd) {
        if(node === null) {
            //this is the place
            this.root = toAdd;
            return true;
        }


    }

    add(value) {
        nodeToAdd = new Node(value);
        return _add(this.root, nodeToAdd);
    }
}