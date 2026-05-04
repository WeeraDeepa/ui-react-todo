import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <App/>
  // </StrictMode>,
)

/*   array and objects    */

/*  create
let arr1 = ['blue', 'green', 'red', 'blue']
console.log(arr1)
*/

/*  read
let arr1_1 = arr1[1]
console.log(arr1_1)
*/

/*  array destructuring
let [first,second] = arr1
console.log(first,second)
*/

/*  spread operator
let arr2 = ['one','two',...arr1]
console.log(arr2)

let arr3 = [...arr2,...arr1]
console.log(arr3)

*/

/*  for loop
for (let i = 0; i < 3; i++) {
    console.log(arr1[i])
}
*/

/*  map function
let arr3 = ['A', 'B', 'C', 'D', 'E', 'F']
function fn1(x){
    return x
}
// let arr4 = arr3.map(fn1)
// let arr4 = arr3.map(x=>x)
let arr4 = arr3.map((x,idx)=>{
    console.log(idx)
    return x
})
// console.log(arr4)


function fn2(x){
    if(Number.isInteger(x)){
        return x
    }
    return 0
}
let arr5= ['a',2,'b','c',10]
let res_arr5 = arr5.map(fn2)
console.log(res_arr5)
*/

/*   delete array element using splice or filter
let arr6 = ['green','red','blue','orange','yellow']
arr6.splice(0, 1)
console.log(arr6)

function filter_fn1(x){
    if(x === 'green'){
        return true
    }
}
let arr7 = ['red','green','blue','orange','yellow','green']
let filter_arr = arr7.map(item => filter_fn1(item))
console.log(filter_arr)
let filter_arr2 = arr7.filter(item => item === 'green')
console.log(filter_arr2)

*/

/* javas script objects -> object literals , prop name can be double quoted */
/* jason objects-> prop name must be double quoted,can not express method  */

/*
let obj1 = {firstName:"John",lastName:"Smith",age:30,address:"New York"};
console.log(obj1);
let l1='test1'
let l2='test2'
let l3='test3'
let obj2={l1,l2,l3}
console.log(obj2);

*/

/* read object prop
console.log(obj1.firstName);

let {firstName, lastName} = obj1;
console.log(firstName,lastName);
*/

/* spread operator
let obj3 = {firstName:"John",lastName:"Smith",age:30,address:"New York"};
let obj_new ={...obj3,firstName:"Weera",email:"weera@mail.com"}
console.log(obj_new);

*/

/*  react-> attribute prop and content prop  */
