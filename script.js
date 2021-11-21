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

class MyArray {
    constructor(){
        this.length = 0;
        this.data = {}
    }
    get(index){
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item
        this.length++;
        return this.length
    }
    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
    }
    shiftItems(index){
        for(let i = index; i<this.length-1;i++){
            this.data[i]=this.data[i+1]
        }
        delete this.data[this.length-1];
        this.length--;
    }
}
const newArray = new MyArray();
newArray.push('hi')
newArray.push('you')
newArray.push('!')
newArray.pop()
console.log(newArray);
