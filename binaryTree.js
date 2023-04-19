//Its a tip of tree: Where each node has at most two childre.
class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }   
}
const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")
a.left = b
a.right = c
b.left = d
b.right = e
c.right = f


// const breadFirstPrint = (root) => {
//     const queue = [ root ]
//     while(queue.length > 0) {
//         const curr = queue.shift()
//         console.log(curr.val)
//         if(curr.left !== null) {
//             queue.push(curr.left)
//         }
//         if(curr.right !== null) {
//             queue.push(curr.right)
//         }
//     }
// }
// console.log(breadFirstPrint(a))

// const depthFirstPrint = (root) => {
//     const stack = [ root ]
    
//     while(stack.length > 0) {
//         const curr = stack.pop()
//         console.log(curr)
//         if(curr.right !== null) {
//             stack.push(curr.right)
//         } 
//         if(curr.left !== null) {
//             stack.push(curr.left)
//         }
//     }
// }

// const depthFirstPrint = (root) => {
//     if(root === null) return
//     console.log(root.val)
//     depthFirstPrint(root.left)
//     depthFirstPrint(root.right)
// }
// console.log(depthFirstPrint(a))

//&pre-order: self, left, right
//&post-order: left, right, self
//&in-order: left, self, right

