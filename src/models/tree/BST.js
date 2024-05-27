import Node from "./Node.js"

class BST {
    #root

    constructor() {
        this.#root = null
    }

    add(value) {
        if (this.#root == null){
            this.#root = new Node(value)
            if (this.#root != null) return true
        }
        else
            return this.insertNode(this.#root, value)
    }

    insertNode(node, value){
        if (value.isbn < node.value.isbn){
            if (node.left == null){
                node.left = new Node(value)
                if (node.left != null) return true
            }
            else
                return this.insertNode(node.left, value)
        } else {
            if (node.right == null){
                node.right = new Node(value)
                if (node.right != null) return true
            }
            else
                return this.insertNode(node.right, value)
        }
    }
    
    search(value) {
        return this.searchNode(this.#root, value);
    }

    searchNode(node, value) {
        if (node === null) {
            return "Valor no encontrado";
        }
        if (node.value.isbn === value.isbn) {
            return `${node.value.isbn}  ${node.value.titulo} se ha encontrado`;
        }
        if (value.isbn < node.value.isbn) {
            return this.searchNode(node.left, value);
        } else {
            return this.searchNode(node.right, value);
        }
    }

    inOrderTraversal(callback) {
        this.inOrderRecorrido(this.#root, callback);
    }
    
    inOrderRecorrido(node, callback) {
        if (node != null) {
            this.inOrderRecorrido(node.left, callback);
            callback(node.value); 
            this.inOrderRecorrido(node.right, callback);
        }
    }

    min() {
        const minNode = this.minNode(this.#root);
        return minNode ? minNode.value : "El árbol está vacío";
    }

    minNode(node) {
        if (node != null && node.left != null) {
            return this.minNode(node.left);
        } else {
            return node;
        }
    }

    max() {
        const maxNode = this.maxNode(this.#root);
        return maxNode ? maxNode.value : "El árbol está vacío";
    }

    maxNode(node) {
        if (node != null && node.right != null) {
            return this.maxNode(node.right);
        } else {
            return node;
        }
    } 
}

export default BST;
