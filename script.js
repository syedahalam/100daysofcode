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

//LL

class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
}
const myLinkedList = new LinkedList(10)