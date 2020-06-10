const array = [5,4,5,6,9];
// const output = [];
// for(let i = 0 ; i<array.length; i++){
//     const element = array[i];
//     const result = element*element;
//     output.push(result);

// }

// function square (element){
//     return element*element;
// }
// array.map(function(element,index,array){
//     console.log(element,index,array);
// });

const result = array.map(function (element){
    return element*element;
})

// const result2 = array.map(x => x*x);
// console.log(result2);

const bigger = array.filter(x => x>5);;
console.log(bigger);


