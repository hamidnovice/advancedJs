const students = [{id:21, name:"karim"},{id:41, name:"hamid"},{id:53, name:"jakil"}];
// const objectName = [];
// const idz = [];

// for(let i= 0; i<students.length;i++){
//     const element = students[i];
//     const names = element.name;
//     objectName.push(names);
//     const ids = element.id;
//     idz.push(ids);
    

// }
// console.log(objectName);
// console.log(idz);

const names = students.map (x=>x.name);
const id = students.map(x => x.id);
const fils = students.filter(y => y.id> 41);
const bigger = students.find(x =>x.id>41);
console.log(bigger);
console.log(id);
console.log(names);
console.log(fils);