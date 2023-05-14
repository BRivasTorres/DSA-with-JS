//&How i can breake the problem in a small sus-porblems
//&When i stop, where is me stop condition
//&Call Stack ===
//-----Referes to phe proces when we have a taske but for certain rezonn we first need to complete others task in order -------to complete that first tass. A good example of this is utilizing the analogy of an employer when is interrupeted -------by his bos to do others things.

// function reverseString(str) {
//When i can no longre continue?
// 	if (str === "") return "";

//what is the smallest unit of work i can do to contrubtue to the goal?
// 	return reverseString(str.substring(1)) + str.charAt(0);
// }

// function findBinary(decimal, result) {
//     if(decimal === 0) return result
//     result = decimal % 2 + result
//     return findBinary(decimal / 2, result)
// }

//&Merge two sorted linkedLIsts
// function sorted_merge(a, b) {
//     if(a === null) return b
//     if(b === null) return a
    
//     if(a.data <  b.data) {
//         a.next = sorted_merge(a.next, b)
//         return a
//     } else {
//         b.next = sorted_merge(a, b.next) 
//         return b
//     }
// }

//&Insert a value into binary search
// function insertNode(head, data) {
//     if(head === null) {
//         head = new Node()
//         head.data = data
//         return head
//     }
//     if(head.data < data) {
//         head.right = insertNode(head.right, data)
//     } else {
//         head.left = insertNode(head.left, data)
//     }   
//     return head
// }

 
