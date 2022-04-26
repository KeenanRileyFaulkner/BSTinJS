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

    //will print out every node from starting position down, starting with the one passed in as param (default is root)
    printTree(node = this.root) {
        this._print(node);
    }

    _print(nodeToPrint) {
        if(nodeToPrint === null) {
            return;
        }

        console.log(nodeToPrint);
        this._print(nodeToPrint.leftChild);
        this._print(nodeToPrint.rightChild);
    }

    //clear is a void recursive method and _clear is the helped function (invoke clear not _clear when using tree)
    clear() {
        if(this.root !== null) {
            this._clear(this.root);
        }
    }

    _clear(node) {
        if(node === null) {
            return;
        }

        this._clear(node.leftChild);
        this._clear(node.rightChild);

        // console.log("Clearing", node);
        node = null;
        console.log("The node after clear is", node);
    }

    //add returns bool if added (will not add duplicates)
    add(value) {
        let nodeToAdd = new Node(value);
        if(this.root === null) {
            this.root = nodeToAdd;
            console.log("Added value", value, "to root");
            return true;
        } else {
            return this._add(this.root, nodeToAdd);
        }
    }

    _add(node, toAdd) {

        if(node.value === toAdd.value) { //value is already in tree
            console.log("The value is already in the tree");
            return false;
        }else if(node.value > toAdd.value) { //value is less than current node
            if(node.leftChild === null) {
                node.leftChild = toAdd;
                console.log("Added", toAdd);
                return true;
            } else {
                return this._add(node.leftChild, toAdd);
            }
        } else if (node.value < toAdd.value) { //value is greater than current node
            if(node.rightChild === null) {
                console.log("Added", toAdd);
                node.rightChild = toAdd;
                return true;
            } else {
                return this._add(node.rightChild, toAdd);
            }
        }
    }
}

let tree = new BST();
tree.printTree();
tree.clear();
tree.add(5);
tree.add(7);
tree.add(5);
tree.printTree();
tree.clear();
tree.printTree();