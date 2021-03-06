// 二叉树
function Node(data,left,right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show () {
  return this.data;
}

// 二叉查找树（BST）
function BST() {
  this.root = null;
  this.insert = insert;//插入节点
  this.minAbs = minAbs;//查找二叉树最小深度
};

function insert(data) {
  let n = new Node(data,null,null);
  if(this.root == null) {
    this.root = n;
  }else {
    let current = this.root;
    let parent;
    while(true) {
      parent = current;
      if(data < current.data) {
        current = current.left;
        if(current == null) {
          parent.left = n;
          break;
        }
      }
      else {
        current = current.right;
        if(current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
};
// leetCode:
// Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.
function minAbs(node,val = {prev: undefined,min: Number.MAX_VALUE}){
  if(!node) {
    return;
  }
  minAbs(node.left,val);
  if( val.prev >= 0) {
    val.min = Math.min(val.min, Math.abs(val.prev - node.data));
  }
  val.prev = node.data;
  minAbs(node.right,val);
  return val.min;
}

// test code
let nums = new BST();
nums.insert(23);
nums.insert(16);
nums.insert(3);
nums.insert(20);
nums.insert(18);
nums.insert(25);
nums.insert(45);
nums.insert(37);
console.log(`最小绝对值为：${minAbs(nums.root)}`);
