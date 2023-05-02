class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty()  {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    
    print() {
        if(this.isEmpty()) {
            console.log("List is empty")
        } else {
            let curr = this.head
            let listValue = ""
            while(curr) {
                listValue += `${curr.value}`
                curr = curr.next
            }
            console.log(listValue)
        }
    }
       
    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head 
            this.head = node
        }
        this.size++
    }
    
     append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
     }
     
    removeFromFront() {
        if(this.isEmpty()) {
            return null
        } 
        const value = this.head.value
        this.head = this.head.next 
        this.size--
        return value
    }
    
    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.tail.value
        if(this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            let prev = this.head
            while(prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }
}

//*Linked List with Stack
class LinkedListStack {
    constructor() {
        this.list = new LinkedList
    }
    
    push(value) {
        this.list.prepend(value)
    }
    
    pop() {
        return this.list.removeFromFront()
    }
    
    peek(){
        return this.list.head.value
    }
    
    isEmpty(){
        return this.list.isEmpty()
    }
    
    getSize(){
        return this.list.getSize()
    }
    
    print(){
        return this.list.print()
    }
}
// const stack = new LinkedListStack()
// console.log(stack.isEmpty())
// stack.push(20)
// stack.push(10)
// stack.push(30)
// console.log(stack.getSize())
// stack.print()
// console.log(stack.pop())
// console.log(stack.peek())

//*Linked list with Queue
class LinkedListQueue {
    constructor() {
        this.list = new LinkedList
    }
    
    enqueue(value) {
        this.list.append(value)
    }
    
    dequeue() {
        return this.list.removeFromFront()
    }
    
    peek() {
        return this.list.head.value
    }
    
    isEmpty() {
        return this.list.isEmpty()
    }
    
    getSize(){
        return this.list.getSize()
    }
    
    print() {
        return this.list.print()
    }
}
// const queue = new LinkedListQueue()
// console.log(queue.isEmpty())
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.getSize())
// queue.print()
// console.log(queue.dequeue())
// queue.print()
// console.log(queue.peek())
