// Given the root of a binary tree, invert the tree, and return its root.

var invertTree = (root) => {
	const isBaseCase = root === null;
	if (isBaseCase) return root;

	return dfs(root);
};

const dfs = (root) => {
	const left = invertTree(root.left);
	const right = invertTree(root.right);

	root.left = right;
	root.right = left;

	return root;
};
