// example of binary tree
let tree = {
  val: 5, 
  left: {
    val: 3,
    left: {
      val: 20
    },
    right: {
      val: 21
    }
  },
  right: {
    val: 10,
    left: {
      val: 1
    },
    right: {
      val: 12,
      right: {
        val: 15
      }
    }
  }
}

// pass through all nodes and print the value of each node  
function passAndPrint(t) {
  if (!t) return;

  if (t.val) {
    console.log(t.val);
    pass(t.left);
    pass(t.right);
  }
}

// search for a node with a value
function searchForVal(t, val) {
  if (!t) return null;
  if (t.val === val) return t;

  let valueLeft = searchForVal(t.left, val)
  if (!!valueLeft) {
    return valueLeft;
  }

  let valueRight = searchForVal(t.right, val)
  if (!!valueRight) {
    return valueRight;
  }
  
  return null;
}

// count all nodes that has a bigger value than the parent node value
function availableNodes(t, sum) {
  if (!t) return sum;
  if (t.left && t.val < t.left.val) {
    sum++;
  }
  if (t.right && t.val < t.right.val) {
    sum++;
  }

  if (t.val) {
    sum = availableNodes(t.left, sum);
    sum = availableNodes(t.right, sum);
  }

  return sum;
}