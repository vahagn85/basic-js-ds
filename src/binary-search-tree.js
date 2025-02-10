const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.node = null;
  }
  root() {
    return this.node;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.node === null) {
      this.node = newNode;
      return this;
    }
    let current = this.node;
    while (true) {
      if (data === current.data) return undefined;
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    let current = this.node;
    while (true) {
      if (data === current.data) return true;
      if (data < current.data) {
        if (current.left === null) {
          return false;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          return false;
        }
        current = current.right;
      }
    }
  }

  find(data) {
    let current = this.node;
    while (true) {
      if (data === current.data) return current;
      if (data < current.data) {
        if (current.left === null) {
          return null;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          return null;
        }
        current = current.right;
      }
    }
  }

  remove(data) {
    let current = this.node;
    let prevNode = null;

    while (current !== null) {
      if (data === current.data) {
        if (current.left === null && current.right === null) {
          if (prevNode === null) {
            this.node = null;
          } else if (prevNode.left === current) {
            prevNode.left = null;
          } else {
            prevNode.right = null;
          }
        } else if (current.left === null) {
          if (prevNode === null) {
            this.node = current.right;
          } else if (prevNode.left === current) {
            prevNode.left = current.right;
          } else {
            prevNode.right = current.right;
          }
        } else if (current.right === null) {
          if (prevNode === null) {
            this.node = current.left;
          } else if (prevNode.left === current) {
            prevNode.left = current.left;
          } else {
            prevNode.right = current.left;
          }
        } else {
          let minParent = current;
          let minNode = current.right;

          while (minNode.left !== null) {
            minParent = minNode;
            minNode = minNode.left;
          }

          current.data = minNode.data;

          if (minParent.left === minNode) {
            minParent.left = minNode.right;
          } else {
            minParent.right = minNode.right;
          }
        }

        return this;
      }

      prevNode = current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return undefined;
  }

  min() {
    if (this.node.data === null) return null;
    let current = this.node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (this.node.data === null) return null;
    let current = this.node;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
