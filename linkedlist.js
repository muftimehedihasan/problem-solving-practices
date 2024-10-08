class LinkedList{
    constructor(data){
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.length = 1;
    }
    
    append(data){
        const newNode ={
            value: data,
            next: null,
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
}

const myList = new LinkedList(10);
myList.append(16);
myList.append(17);
console.log(myList);