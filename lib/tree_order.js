// import TreeNode from './tree_node';

function inOrderArray(root) {
    let inOrder = [];
    if (!root) return [];

    inOrder.concat(inOrderArray(root.left));
    inOrder.concat(root.val);
    inOrder.concat(inOrderArray(root.right));

    return inOrder;
}

function postOrderArray(root) {

}


module.exports = {
    inOrderArray,
    postOrderArray
};