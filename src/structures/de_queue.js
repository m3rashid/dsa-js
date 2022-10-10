//node of double ended queue
class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

//double ended queue class
class DEQueue {
  constructor() {
    //front and rear of queue
    this.head = null
    this.tail = null

    //size of queue
    this.length = 0
  }

  //function for inserting element at front
  enqueueFront(data) {
    let node = new Node(data)

    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
    this.length++
    return true
  }

  //function for inserting element at rear
  enqueueRear(data) {
    let node = new Node(data)

    if (this.tail === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
    return true
  }

  //function to remove front element from the queue
  dequeueFront() {
    //if queue is empty
    if (this.head === null) {
      return false
    }
    this.head = this.head.next
    this.length--
    return true
  }

  //function to remove rear element from the queue
  dequeueRear() {
    //if queue is empty
    if (this.tail === null) {
      return false
    }
    this.tail = this.tail.prev
    this.length--
    return true
  }

  //function to get front element of the queue
  front() {
    //if queue is empty
    if (this.head === null) {
      return null
    }
    return this.head.data
  }

  //function to get rear element of the queue
  rear() {
    //
    if (this.tail === null) {
      return null
    }
    return this.tail.data
  }

  //function to check if queue is empty
  isEmpty() {
    return this.length === 0
  }

  //function to get size of the queue
  size() {
    return this.length
  }

  //function to reverse the queue
  reverse() {
    let current = this.head
    let temp = null

    //exchange next and prev for all nodes of the queue
    while (current !== null) {
      temp = current.prev
      current.prev = current.next
      current.next = temp
      current = current.prev
    }
    if (temp !== null) {
      this.head = temp.prev
    }
  }

  //
  print() {
    let current = this.head
    let result = '['
    while (current) {
      result += current.data
      if (current.next) {
        result += ','
      }
      current = current.next
    }
    result += ']'
    return result
  }
}

// //creating double ended queue
// const deQueue = new DEQueue()

// deQueue.enqueueFront(1)
// //deQueue: [1]

// deQueue.enqueueFront(2)
// //deQueue: [2,1]

// deQueue.enqueueFront(3)
// //deQueue: [3,2,1]

// deQueue.enqueueRear(4)
// //deQueue: [3,2,1,4]

// deQueue.enqueueRear(5)
// //deQueue: [3,2,1,4,5]

// console.log(deQueue.front())
// //3

// console.log(deQueue.rear())
// //5

// console.log(deQueue.isEmpty())
// //false

// console.log(deQueue.size())
// //5

// console.log(deQueue.print())
// //[3,2,1,4,5]

// deQueue.reverse()
// //deQueue: [5,4,1,2,3]

// console.log(deQueue.print())
// //[5,4,1,2,3]
