//*Description
// You are given the pointer to the head node of a linked list and an integer to add to the list. Create a new node with the given integer. Insert this node at the tail of the linked list and return the head node of the linked list formed after inserting this new node. The given head pointer may be null, meaning that the initial list is empty.

// Function Description

// Complete the insertNodeAtTail function in the editor below.

// insertNodeAtTail has the following parameters:

// SinglyLinkedListNode pointer head: a reference to the head of a list
// int data: the data value for the node to insert
// Returns

// SinglyLinkedListNode pointer: reference to the head of the modified linked list
// Input Format

// The first line contains an integer , the number of elements in the linked list.
// The next  lines contain an integer each, the value that needs to be inserted at tail.

//*My solution
function insertNodeAtTail(head, data) {
	if (!head) {
		head = new SinglyLinkedListNode(data, null);
		return head;
	}
	let current = head;
	while (current.next) {
		current = current.next;
	}
	current.next = new SinglyLinkedListNode(data, null);
	return head;
}
