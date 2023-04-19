//&Fisrt node === "head"
//&Last node === "tail"

//#One of the main differences betwen a LinkedList and an Array, is when we try to insert or delete one elment or node in our DSA, in LinkedList we only need to point the element we want to the next of other, while in an array wi will need to shift all the elementes one space to the right to insert one element.

//&Example of a LinkedList
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

a.next = b;
b.next = c;
c.next = d;

// const printLinkedList = (head) => {
//     let current = head
//     while (current !== null) {
//         console.log(current.val)
//         current = current.next
//     }
// }
// printLinkedList(a)

// //!Whit recursivity
// const pintedLinkedList = (head) => {
// 	if (head === null) return;
// 	console.log(head.val);
// 	pintedLinkedList(head.next);
// };
// pintedLinkedList(a);

//*Give the values of a linkedList
// const linkedList = (head) => {
// 	const values = [];
// 	let current = head;

// 	while (current !== null) {
// 		values.push(current.val);
// 		current = current.next;
// 	}
// 	return values;
// };
//*With recursive
// const linkedList = (head) => {
// 	const values = []
// 	fillValues(head, values)
// 	return values
// };

// const fillValues = (head, values) => {
// 	if(head === null) return
// 	values.push(head.val)
// 	fillValues(head.next, values)
// }

//!Sum with linkList
// const sumList = (head) => {
// 	const total = 0
// 	let current = head
// 	while(current !== null) {
// 		total += current.val
// 		current = current.next
// 	}
// 	return total
// }
//*Recursive
// const sumList = (head) => {
// 	if (head === null) return 0;
// 	return head.val + sumList(head.next);
// };

//*FindList
// const linkedListFind = (head, target) => {
// 	let current = head
// 	while(current !== null) {
// 		if(current.val === target) {
// 			return true
// 		}
// 		current = current.next
// 	}
// 	return false
// }

// const linkedListFind = (head, target) => {
// 	if(head === null) return false
// 	if(head.val === target) return true

// 	return linkedListFind(head.next, target)
// };

//*Get Node
//#With recursivity
// const getNodeValue = (head, index) => {
// 	if(head === null) return null
// 	if(index === 0) return head.val

// 	return getNodeValue(head.next, index - 1)
// }
// console.log(getNodeValue(a, 2))

//#With iteration
// const getNodeValue = (head, index) => {
// 	let current = head
//  let count = 0
// 	while(current !== null) {
// 		if(count === index) return current.val
// 		count += 1
// 		current = current.next
// 	}
// 	return null
// }

//*Reverse LinkedList
//&Iterative
// const reverseList = (head) => {
// 	let prev = null;
// 	let current = head;
// 	while (current !== current.next) {
// 		current.next = prev;
// 		prev = current;
// 		current = current.next;
// 	}
// 	return prev;
// };
//&Recursive
// const reverseList = (head, prev = null) => {
// 	if (head === null) return prev;
// 	const next = head.next;
// 	head.next = prev;
// 	return reverseList(next, head);
// };

//*Zipper List
//&Iterative
// const zipperLists = (head1, head2) => {
// 	let tail = head1;
// 	let current1 = head1.next;
// 	let current2 = head2;
// 	let count = 0;

// 	while (current1 !== null && current2 !== null) {
// 		if (count % 2 === 0) {
// 			tail.next = current2;
// 			current2 = current2.next;
// 		} else {
// 			tail.next = current1;
// 			current1 = current1.next;
// 		}
// 		tail = tail.next;
// 		count += 1;
// 	}
// 	if (current1 !== null) tail.next = current1;
// 	if (current2 !== null) tail.next = current2;

// 	return head1;
// };

//&Recursive
// const zipperList = (head1, head2) => {
// 	if (head1 === null && head2 === null) return null;
// 	if (head1 === null) return head2;
// 	if (head2 === null) return head1;

// 	const next1 = head1.next;
// 	const next2 = head2.next;
// 	head1.next = head2;
// 	head2.next = zipperList(next1, next2);
// 	return head1;
// };

