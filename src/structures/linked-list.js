//node of linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//linked list class
class LinkedList {
    constructor() {
        this.head = null;
        this.s = 0;
    }


    insertAtBeginning(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.s++;

        return true;
    }

    insertAtEnd(data) {
        let node = new Node(data);
        let current = this.head;

        //iterate to the end of the list
        while (current.next) {
            current = current.next;
        }

        //add node
        current.next = node;
        this.s++;

        return true;
    }

    insertAt(data, index) {

        //if index is out of range
        if (index < 0 || index > this.s) {
            return false;
        }

        //if index is first position
        if (index === 0) {
            this.insertAtBeginning(data);
            return false;
        }


        let node = new Node(data);
        let current = this.head;
        let previous;
        let count = 0;

        //iterate to the position - 1 to insert
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        //insert node
        node.next = current;
        previous.next = node;
        this.s++;

        return true;
    }

    removeFromBeginning() {

        //if list is empty
        if (this.s === 0) {
            return false;
        }

        //move head to next node
        this.head = this.head.next;
        this.s--;

        return true;
    }

    removeFromEnd() {
        //if list is empty
        if (this.s === 0) {
            return false;
        }
        let current = this.head;
        let previous;

        //iterate to the end of the list
        while (current.next) {
            previous = current;
            current = current.next;
        }

        //remove node
        previous.next = null;
        this.s--;

        return true;
    }

    removeAt(index) {
        //if index is out of range
        if (index < 0 || index >= this.s) {
            return false;
        }

        //if index is first position
        if (index === 0) {
            this.removeFromBeginning();
            return true;
        }
        let current = this.head;
        let previous;
        let count = 0;

        //iterate to the position to remove
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        //remove node
        previous.next = current.next;
        this.s--;

        return true;
    }

    indexOfFirst(data) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (current.data === data) {

                //return when data is found at first time
                return count;
            }
            current = current.next;
            count++;
        }
        return -1;
    }

    indexOfLast(data) {
        let current = this.head;
        let count = 0;
        let index = -1;
        while (current) {
            if (current.data === data) {
                //store the index at each iteration
                index = count;
            }
            current = current.next;
            count++;
        }
        //return the last index
        return index;
    }

    isEmpty() {
        return this.s === 0;
    }

    size() {
        return this.s;
    }

    printList() {
        let current = this.head;
        let list = '';
        list+='[';
        while (current) {
            list += current.data;
            if (current.next) {
                list += ',';
            }
            current = current.next;
        }
        list+=']';
        console.log(list);
    }

    reverse() {
        //three pointer approach
        let current = this.head;
        let previous = null;
        let next = null;
        while (current) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }  

}


//sample code to test the linked list
// let list = new LinkedList();

// list.insertAtBeginning(1);
// [1]

// list.insertAtBeginning(2);
// [2,1]

// list.insertAtEnd(5);
// [2,1,5]

// list.insertAtEnd(6);
// [2,1,5,6]

// list.insertAt(7, 2);
// [2,1,7,5,6]

// list.removeFromBeginning();
// [1,7,5,6]

// list.printList();
// [2,7,5,6]

// list.reverse();
// [6,5,7,2]

// list.printList();
// [6,5,7,2]