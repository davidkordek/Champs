class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
//create linked list with letters
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;
//create linked list with numbers
const e = new Node(2);
const f = new Node(8);
const g = new Node(3);
const h = new Node(7);

e.next = f;
f.next = g;
g.next = h;

//recursive solution to print Linked List
const printLinkedList = (head) => {
    if(head === null){
        return head;
    }
    console.log(head.val);
    return printLinkedList(head.next);
};
printLinkedList(a);

//iterative solution to print Linked List
const print = (head) => {
    let string = "";
    let current = head;
    while(current !==null){
        if(current.next === null){
            string += current.val;
        }else{
            string += current.val + "->";
        }
        current = current.next;
    }
    return string;
};


//create array from the list.
const createArray = (head) => {
    const values = [];
    fillValues(head,values);
    return values;
};
const fillValues= (head,values) => {
    if(head ===null){
        return head;
    }
    values.push(head.val);
    return fillValues(head.next,values);
};
console.log(createArray(a));


//sum of list, recursive
const sumList = (head) => {
    if(head ===null){
        return 0;
    }
    return head.val + sumList(head.next);
};
console.log(sumList(e));

//sum of list, iterative
const sum = (head) => {
    let sum = 0;
    let current = head;
    while(current !== null){
        sum += current.val;
        current= current.next;
    }
    return sum;
};
console.log(sum(e));


//find target iteratively
const find = (head,target) => {
    let current = head;
    while(current !== null){
        if(current.val === target){
            return true;
        }
        current= current.next;
    }
    return false;
};
console.log(find(e,5));

const findRecursive = (head,target) => {
    if(head === null){
        return false;
    }
    if(head.val===target){
        return true;
    }
    return findRecursive(head.next,target);
};
console.log(findRecursive(e,7));



const getNode = (head,index) => {
    let current = head;
    let count = 0;
    while(current !== null){
        if(count === index){
            return current.val;    
        }
        count += 1;
        current = current.next;
    }
    return current;
};
console.log(getNode(a,3));

const getNodeRecursive = (head,index) => {
    if(head === null){
        return null;
    }
    if(index === 0){
        return head.val;
    }
    return getNodeRecursive(head.next,index-1);
};
console.log(getNodeRecursive(a,1));

const reverseList = (head) => {
    let dummy = null;
    let current = head;
    while(current !== null){
        const next = current.next;
        current.next = dummy;
        dummy = current;
        current = next;
    }
    return dummy;
};

const reverseListRecursion = (head,prev=null) => {
    if(head === null){
        return prev;
    }
    const next = head.next;
    head.next = prev;
    return reverseListRecursion(next,head);
    
};
console.log(print(reverseListRecursion(a)));
console.log(print(reverseList(d)));

const zigzag = (head1,head2) => {
    let tail = head1;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;
    while(current1 !== null && current2 !== null){
        if(count %2 === 0){
            tail.next = current2;
            current2 = current2.next;
        }else{
            tail.next = current1;
            current1 = current1.next;
        }
        tail = tail.next;
        count +=1;
    }
    if(current1 !== null){
        tail.next = current1;
    }else{
        tail.next = current2;
    }
    return head1;
};
//console.log(print(zigzag(a,e)));
const zigzagRecursion = (head1,head2) => { 
    if(head1 === null && head2 === null){
        return null;
    }
    if(head1 === null){
        return head2;
    }
    if(head2 == null){
        return head1;
    }
    let next1 = head1.next;
    let next2 = head2.next;
    head1.next = head2;
    head2.next = zigzagRecursion(next1,next2);

    return head1;
};
//console.log(print(zigzagRecursion(a,e)));

const swapPairs = (head) => {
     if(head === null){
        return head;
    }
    if(head.next === null){
        return head;
    }
    let nextPair = head.next.next;

    let second = head.next;
    let first = head;

    second.next = head;
    first.next = nextPair;
    head = second;
    head.next.next = swapPairs(nextPair);
    return head;

};
console.log(print(swapPairs(a)));
console.log("--------------------------");