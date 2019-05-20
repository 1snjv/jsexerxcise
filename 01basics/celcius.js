var f = 100;
var c = (f-32)*(5/9)
console.log(c)
if(f==12)
    console.log("here1")
else if(f==121)
    console.log("here2")
else
    console.log("finally")

names = ['sanjeev','shaikha', 'abcd']
// console.log(names)
// for (let index = 0; index < names.length; index++) {
//     console.log(names[index])
// }
names.splice(2,1)
console.log(names)
// names.forEach(element => {
//     console.log(element)
// });
names.forEach(function name(i,element){
    console.log(element)
    console.log(i)
});
