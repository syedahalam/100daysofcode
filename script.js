// const nemo = ['nemo']
// const findNemo = (array) =>{
//     let t0 = performance.now();
//     for(let i=0; i<array.length;i++){
//         if(array[i]==='nemo'){
//             console.log('Found Nemo haha :)')
//         }
//     }
//     let t1 = performance.now()
//     console.log(` call to find nemo took ${t1-t0} milliseconds`)
// }
// findNemo(nemo)
// const findNemo = (array) => {
//     for(let i=0; i<array.length; i++){
//         if(array[i]==='nemo'){
//             console.log('found nemo')
//         }
//     }
// }
// findNemo(['nemo', 'dog'])

// const findNemo2 = (array) =>{
//     array.forEach(i=>{
//         if(i==='nemo'){
//             console.log('found nemo')
//         }
//     })
// }
// findNemo2(['dog', 'nemo'])

// const findNemo3 = (array)=>{
//     for(let i of array){
//         if(i==='nemo'){
//             console.log('found nemo')
//         }
//     }
// }
// findNemo3(['nemo', 'dog'])

// class player {
//     constructor(name, type){
//         this.name = name;
//         this.type = type;
//     }
//     introduction(){
//         console.log(`Hi, my name is ${this.name} and I am ${this.type}`)
//     }
// }

// 

// const revFunct = (str) => {
//     return str.split('').reverse().join('');
// }
// console.log(revFunct('my name is humna'))

// const mergedSortedArrays = (arr1, arr2) => {
//     const merArr = [];
//     let i=0;
//     let j=0;
   
// while(arr1[0]||arr2[0]){

//     if(arr1[i]<arr2[j]){
//         merArr.push(arr1[i])
//         console.log(merArr)
//         i++
// }else{
//     merArr.push(arr2[j])
// }
// }

//     }

  


// mergedSortedArrays([2,4,6], [5,1,3])

// function solution(str, ending){
//    str.endsWith(ending);
// }
// solution('abcd', 'cd')

// const posChar = (str) => {
// 	let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
// 	//  let alphabetsPosition =
// 	let lCase = str.toLowerCase();
// 	 let code = lCase.split('').map(x=>alphabets.indexOf(x)+1)
// 	//  let alphabetsPosition = str.split('').map(x=>alphabets.indexOf(x)+1)
// 	//  return alphabetsPosition
// 	return code;
// }
// console.log(posChar("The sunset sets at twelve o' clock."));
// function repeatStr (n, s) {

//   return s.repeat(n);
// }
// console.log(repeatStr(3, 'hi'))
// const eve = (array) => {
//     let len = array.length;
//     // console.log(len)
//     if(len%2===0) return even
// }
// eve([1,2,3])

// const evenOrOdd = (num) => {
//     if(num%2===0) return 'even'
//     else return 'odd'
// }
// console.log(evenOrOdd(5))

// const evenOrOddArray = (array) => {
// let sum = array.reduce((acc, value)=>acc+value, 0)
// return (sum%2===0 || sum===[] || sum===[0])?'even':'odd'
    
//  }

// console.log(evenOrOddArray([0]))
// array = [2,5,1,2,3,5,1,2,4]
//should return 2

// const repeat = (arr) =>{
//     // const rep = [];

//         for(let i=0;i<arr.length;i++){
//             for(let j=1;j<arr.length;j++){
//                 if(arr[j]===arr[j+1]){
//                    return arr[j] 
//                 } else if(arr[i]===arr[j]){
//                     return arr[i]
//                 }return 'no recurrance'
//             }
//         }
// }
// console.log(repeat([1,2,1,4]));

// const repeat = (arr) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = i+ 1; j < arr.length; j++) {
// 			if(arr[i] === arr[j]) {
// 				return arr[i];
// 			} else if (arr[j]===arr[j+1]){
//                 return arr[j]
//             }
		
// 		}
//         return 'no recurrance';
// 	}
// };
// console.log(repeat([2, 1,1,2,3,5,1,2,4]));

// const repeatHash = (arr) => {
//     let map = {}
//     for(let i=0;i<arr.length;i++){
//         if(map[arr[i]]!== undefined){
//             return arr[i]
//         } else {
//             map[arr[i]] = i
//         }
//     }
//     return 'no occurance'
// }
// console.log(repeat([2, 1, 1, 2]));

//Single Linked List

// class LinkedList{
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }
//     append(value){
//         const newNode = {
//             value: value,
//             next: null
//         }
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++
//     }
//     prepend(value){
//         const preNode = {
//             value:value,
//             next: null
//         }
//         preNode.next = this.head;
//         this.head = preNode;
//         this.length++;
//         return this


//     }
//     printList(){
//         const array = []
//         let currentNode = this.head;
//         while(currentNode!==null){
//             array.push(currentNode.value);
//             currentNode = currentNode.next;
//         }
//         return array
//     }
//     insert(index, value){
//         if(index>=this.length){
//             return this.append(value)
//         }
//         const newNode = {
//             value:value,
//             next:null
//         }
//         const leader = this.traverseToIndex(index-1)
//         const holdingPointer = leader.next;
//         leader.next = newNode;
//         newNode.next = holdingPointer;
//         this.length++
//         return this.printList()

//     }
//     traverseToIndex(index){
//         let counter = 0;
//         let currentNode = this.head;
//         while(counter!==index){
//             currentNode = currentNode.next;
//             counter++
//         }
//         return currentNode;
//     }
//     remove(index){
        
//         const leader = this.traverseToIndex(index-1) 
//         const unwantedNode = leader.next;
//         leader.next=unwantedNode.next;
//         this.length--;
//         return this.printList()
//     }
// }
// const myLinkedList = new LinkedList(10)
// myLinkedList.append(5)
// myLinkedList.append(15)
// myLinkedList.prepend(1)
// myLinkedList.insert(20, 99)
// myLinkedList.insert(2, 9)
// myLinkedList.remove(2)
// console.log(myLinkedList.printList())

//Doubly Linked List

// class DoubleLinkedList {
// 	constructor(value) {
// 		this.head = {
// 			value: value,
// 			next: null,
// 			pre: null,
// 		};
// 		this.tail = this.head;
// 		this.length = 1;
// 	}
// 	printList() {
// 		let array = [];
// 		let currentNode = this.head;
// 		while (currentNode !== null) {
// 			array.push(currentNode.value);
// 			currentNode = currentNode.next;
// 		}
// 		return array;
// 	}
// 	append(value) {
// 		const newNode = {
// 			value: value,
// 			next: null,
// 			pre: null,
// 		};
// 		newNode.pre = this.tail;
// 		this.tail.next = newNode;
// 		this.tail = newNode;
// 		this.length++;
// 		return this;
// 	}
// 	    prepend(value){
// 	        const newNode = {
// 	            value:value,
// 	            next: null,
//                 pre: null
// 	        }
// 	        newNode.next = this.head;
// 	        this.head.pre = newNode;
// 	        this.head = newNode;
// 	        this.length++;
// 	        return this;

// 	    }
//         insert(index, value){
//         if(index>=this.length){
//             return this.append(value)
//         }
//         const newNode = {
//             value:value,
//             next:null,
//             pre:null
//         }
//         const leader = this.traverseToIndex(index-1)
//         const follower = leader.next;
//         leader.next = newNode;
//         newNode.next = follower;
//         newNode.pre=leader;
//         follower.pre=newNode
//         this.length++
//         return this.printList()

//     }
//     traverseToIndex(index){
//         let counter = 0;
//         let currentNode = this.head;
//         while(counter!==index){
//             currentNode = currentNode.next;
//             counter++
//         }
//         return currentNode;
//     }
// }
// const myDoubleLinkedList = new DoubleLinkedList(22)
// console.log(myDoubleLinkedList.append(22))
// console.log(myDoubleLinkedList.prepend(1))
// console.log(myDoubleLinkedList.insert(2,99))
// console.log(myDoubleLinkedList.insert(1,19))
// console.log(myDoubleLinkedList.printList());

//linked list
class LinkedList{
    constructor(value){
        this.head= {
            value:value,
            next:null
        }
        this.tail= this.head;
        this.length=1;
    }
    append(value){
        const newNode = {
            value:value,
            next:null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = {
            value:value,
            next:null
        }
        newNode.next = this.head;
        this.head=newNode;
        this.length++;
        return this;
    }
    insert(index, value){
        if(index>=this.length){
            return this.append(value)
        }
        const newNode = {
            value:value,
            next:null
        }
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next=newNode;
        newNode.next=holdingPointer;
        this.length++;
        return this;

    }
    traverseToIndex(index){
        let counter = 0;
        let currentNode=this.head;
        while(counter!==index){
            currentNode=currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index){
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;      
        this.length--;
        return this;
    }
    reverse(){
      if(!this.head.next) return this.head;
      let first = this.head;
      let second = first.next;
      while(second){
          let temp = second.next;
          second.next= first;
          first = second;
          second = temp;
      }
        
    }
    printList(){
        let array =[];
        let currentNode = this.head;
        while(currentNode!==null){
            array.push(currentNode.value);
            currentNode=currentNode.next;
        }
        return array;
    }
}
 const myLinkedList = new LinkedList(10)

// const myLinkedList = new DoublyLinkedList(10)
// console.log(myLinkedList)
// console.log(myLinkedList.append(5))
// console.log(myLinkedList.append(16))
// console.log(myLinkedList.prepend(1))
// console.log(myLinkedList.insert(2,99))
// console.log(myLinkedList.insert(20,88))
// console.log(myLinkedList.remove(3))
// console.log(myLinkedList.remove(1))
// // console.log(myLinkedList.remove(2))
// // console.log(myLinkedList.remove(2))
// // console.log(myLinkedList.remove(1))
// console.log(myLinkedList.reverse())
// console.log(myLinkedList.printList());

/////Doubly Linked List

// class DoublyLinkedList{
//     constructor(value){

//         this.head={
//             value:value,
//             next:null,
//             prev:null
//         }
//         this.tail=this.head;
//         this.length=1;
//     }
//     append(value){
//       const newNode = {
//           value:value,
//           next:null,
//           prev:null
//       }
//       newNode.prev=this.tail;
//       this.tail.next=newNode;
//       this.tail=newNode;
//       this.length++;
//       return this;
//     }
//     prepend(value){
//         const newNode = {
//             value:value,
//             next:null,
//             prev:null
//         }

//        newNode.next=this.head;
//        this.head.prev=newNode;
//        this.head=newNode;
//        this.length++;
//        return this;
//     }
//     insert(index, value){
//         if(index>=this.length){
//             return this.append(value)
//         }
//         const newNode = {
//             value:value,
//             next:null,
//             prev:null
//         }
//       const leader = this.traverseToIndex(index-1);
//       const follower = leader.next;
//       leader.next=newNode;
//       newNode.prev=leader;
//       newNode.next=follower;
//       follower.prev=newNode;
//       this.length++;
//       return this;
//     }
//     traverseToIndex(index){
//         let counter = 0;
//         let currentNode = this.head;
//         while(counter!==index){
//             currentNode=currentNode.next;
//             counter++;
//         }
//         return currentNode;
//     }
//     remove(index){
//         const leader = this.traverseToIndex(index-1);
//         const unwantedNode = leader.next;
//         leader.next=unwantedNode.next;
//         this.length--;
//         return this;
//     }

//     printList(){
//         let array =[];
//         let currentNode=this.head;
//         while(currentNode!==null){
//             array.push(currentNode.value);
//             currentNode=currentNode.next;
//         }
//         return array;
//     }
// }
// const myDoublyLinkedList = new DoublyLinkedList(10)
// // console.log(myDoublyLinkedList(10))
// console.log(myDoublyLinkedList.append(5))
// console.log(myDoublyLinkedList.append(16))
// console.log(myDoublyLinkedList.prepend(1))
// console.log(myDoublyLinkedList.insert(20,88))
// console.log(myDoublyLinkedList.insert(2,99))
// console.log(myDoublyLinkedList.remove(3))
// console.log(myDoublyLinkedList.remove(1))
// console.log(myDoublyLinkedList.printList())
////////////////////////////////////////////////
// const sum = (num) => {
//     let arr =[]
//     let prod =0;
//    for(let i=0; i<num.length;i++){
//      arr.push(num[i]*num[i])
//      prod+=arr[i]
     
//    }
//    return prod
// }
// console.log(sum([2,4]))
///////////////////////////////////////////////
// const bool1 = (bool) => {
//     if(bool===true)return 'Yes'
//     if(bool===false)return 'No'
// }
// console.log(bool1(false))
// //////////////////////////////////////////
// const sheep = (arrayOfSheep)=>{
//     let counter =0;
//     let array = [];
//     for(let i=0;i<arrayOfSheep.length;i++){
//         if(arrayOfSheep[i]===true){
//             counter++
//         }
//     }
//     return counter
// }
// console.log(sheep([true,false,true, false, true, true, true, false]))

/////////////////////////////////////

const fakeBin = (x) =>{
    let arr =[]
    for(let i=0;i<x.length;i++){
           if(x[i]>=5)arr.push(1)
           else arr.push(0)
    }
    return arr.join('')
}
console.log(fakeBin('4567382901'))