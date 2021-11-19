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
const findNemo = (array) => {
    for(let i=0; i<array.length; i++){
        if(array[i]==='nemo'){
            console.log('found nemo')
        }
    }
}
findNemo(['nemo', 'dog'])

const findNemo2 = (array) =>{
    array.forEach(i=>{
        if(i==='nemo'){
            console.log('found nemo')
        }
    })
}
findNemo2(['dog', 'nemo'])

const findNemo3 = (array)=>{
    for(let i of array){
        if(i==='nemo'){
            console.log('found nemo')
        }
    }
}
findNemo3(['nemo', 'dog'])