//javascript advance topic

//let || var || const

//var
// 1.we can assign value and reintialize is also done
//2.globla scope

// var x = 10
//  var x = 16
//    console.log(x);
//    x=17
//    console.log(x);

//globals scope

// if(x){
//     var x= 40
// }

// console.log(x);

//let
// 1.we can nassign value but can not reintialize the value
//2.block scope

// let y= 1;
// // let y=2;
// y=2;
// console.log(y);

//block scope
// if(y){
//     let y =55;
// }

// console.log(y);

//const
// 1.we can not assign value and can not  reintialize the value
//2.block scope

// const z =2;
// z=4;
// console.log(z);


// templet string

// let a="vikas"
// let b="swain"
// let c="bbdit"

// console.log(`hi ${a} ${b} u r compelte ur btech from ${c}`);

// var name = "vikas"
// var lname ="swain"

// function fullname(name,lname) {
//     return `${name}${lname}`
// }

// let fname=`hello ${fullname(name,lname)}`
// console.log(fname);

// let firstname ="vikas"
// let lastname ="swain"

// function fullname(firstname,lastname) {
//     return`${firstname}${lastname}`
// }

// let a=`hello ${fullname(firstname,lastname)}`
// console.log(a);

//normal function

// let ab=function (params) {
//     console.log("hhi norml function");
// }
// ab();

//arrow function
 
// let a=()=>{
//     console.log("hello arrow function");
// }
// a();

// let hello = (name,age)=>{
//     return`hello ${name}--ur age is ${age}`
// }
// console.log(hello("vikas",22))

//rest operator

//why we use rest operator

// function sum(num1,num2) {
//     console.log(num1+num2);
// }

// sum(2,3);
// sum(2,3,4)

//is problem ko solve krne ke liye humne for in loop use kiya 

// function sum(num1,num2) {
  
//   let sum=0;
//     for(i in args){
//         sum = sum + args[i]
//     }
//     console.log(sum);
// }

// sum(1,2)
//  sum(1,2,5)
//but isme ye problem hai agar hum starting mai string le to ye work nhi krega 
// sum("vikas",1,2,3)

//iss problem ko solve krne ke liye humne rest operatior use kiya

// function sum(name,...args) {
//     let sum =0;
//     for(i in args){
//         sum = sum + args[i]
//     }
//     console.log(sum);
//     console.log(name);
// }

// sum("vikas",1,2,3,4)
// function sum(name,course,...args) {
//     console.log(`hi ${name} graduate from ${course} and geting:`);
//         let sum =0;
//         for(i in args){
//             sum = sum + args[i]
//         }
//         console.log(sum);
//         // console.log(name);
//     }
    
//     sum("vikas","btech",2,3,4)
//     sum("akash","be",2,88,4)
//     sum("mourya","ba",2,99,4)

// note rest operator always return at the last 

//spread operator
// spread operator always use in calling ke time

// function sum(name,...args) {

//     console.log(`hi ${name}:`);
//      let sum =0;
//     for(i in args){
//         sum = sum + args[i]
//     }
//     console.log(sum);
// }

// var arr=[10,20,30]

// sum("vikas",...arr)

//use of speard operator

// let arr1=[10,20,30,40]
// let arr2=[...arr1]
// arr1.push(80)
// console.log(arr1);
// console.log(arr2);

// we can concate arr by spread operator

// let arr1 =[1,2,3]
// let arr2=[4,5,6,7]
// let arr3 =[17,...arr1,...arr2,98]
// console.log(arr3);

// we can merge object as well in sprad operator

// let obj1={
//     name:"vikas swain"
// }
// let obj2 ={
//     age:22
// }

// let obj3={...obj1,...obj2}
// console.log(obj3);

//object literals

// let name = "vikas"
// let obj ={
//     name,
//     age:22
// }
// console.log(obj);

//example 2

// let n = "name"
// let obj ={
//     [n]:"vikas",
//     age:22
// }
// console.log(obj);

//example3
// let n = "student"
// let obj ={
//     [n + "name"]:"vikas",
//     age:22,
//     detail(){
//         return `${this.studentname} and age  is ${this.age}`
//     }
// }
// // console.log(obj.detail())
// console.log(obj['detail']()) // calling a fuunction in different way in es6


// how we return a object in a function 
// let name ="vikas swain"
// let course ="btech"
// function detail(name,course) {
//     return{name,course}
// }
 
// console.log(detail(name,course));

// example 4

// let fname ="vikas"
// let lname ="swain"
// let course ="btech"

// function student(fname,lname,course) {
//     let fullname = fname + lname
//     return {fullname,course}
// }

// let d= student(fname,lname,course)

// console.log(d);

// array destructuring          feb 02-02-2022

// let user =["vikas",22]
// let [name,age]=user
// console.log(name);
// console.log(age);


// let user =["vikas",]
// let [name,age=55]=user
// console.log(name);
// console.log(age);

//nested array

// let user =["vikas",22,["male",1200]]
// let [name,age,[gender,salary]]=user
// console.log(name);
// console.log(age);
// console.log(gender);
// console.log(salary);


//use rest operator in destructuring

// let user =["vikas",22,"male"]
// let [name,...args]=user
// console.log(name)
// console.log(args);

// desturcture in function

// function detali([name,age,gender]) {
//     console.log(name);
//     console.log(age);
//     console.log(gender);

// }

// detali(["vikas",22,"male"])

// function details() {
//     return ["vikas",22,"male"]
// }

// let [name,age,gender] =details()

// console.log(name);
// console.log(age);
// console.log(gender);

//object destructuring
// always rember that ur variable name should be same as prperty name

// let user ={
//     name:"vikas",
//     age:22
// }

// let{name,age}=user
// console.log(name);
// console.log(age);

//allign bhi kr skte h name ko 
// let user ={
//     name:"vikas",
//     age:22
// }

// let{name:n,age:a}=user
// console.log(n);
// console.log(a);


//oop

// class hello{
//   message1(){
//       console.log("this is msge 1");
//   }
//   message2(){
//     console.log("this is msge 2");
// }
// }

// let a =new hello()
// a.message1()
// a.message2()

// genarlly  we have 3 types of method
//1=> constructor ==> isse mai call krne ke jarurat nhi hoti khud call hota hai ye
//syntax == constructor(){console.log("hello")}
//2=> prototype ==> isse hume hume call krna padta hai ,jb tk call nhi kroge ye run nhi hoga
// syntax ==> message(){console.log("hello")}
//3=> static == isse hume call nhi krna pdta run krte time

// constructor example
// class hello{

//     constructor(){
//         console.log("hello constructor");
//     }
// }

// let a = new hello()

// prototype
// class hello{

//     message(){
//         console.log("hello prototype");
//     }
// }

// let a = new hello()
// a.message()// call

//static
// class hello{

//     static message2(){
//         console.log("hello stactic");
//     }
// }

// hello.message2() // call krne ke liye object nhi bnana pdta hume isme

//example

// class hello{

//     constructor(){
//         let name;
//         console.log("hello constructor");
//     }
//     message(){
//         console.log("hello "+ this.name);
//     }
// }

// let a = new hello()
// a.name="vikas"
// a.message()

// class message{
//     constructor(name,age){
//         this.fullname=name
//         this.age=age
//         console.log("this is constructor part");
//     }
//     hello(){
//         console.log("hello " + this.fullname + this.age );
//     }
// }

// let a = new message("vikas swain",22)
// a.hello()

// we can call it multiple times
// class message{
//     constructor(name,age){
//         this.fullname=name
//         this.age=age
//         console.log("this is constructor part");
//     }
//     hello(){
//         console.log("hello " + this.fullname + this.age );
//     }
// }

// let a = new message("vikas swain",22)
// let b = new message("akash kumar swain",32)

// a.hello()
// b.hello()


// inheritance
class employee{

    constructor(name){
        let name =name
console.log("heelo constructutor"+name);
    }
}
class manager extends employee{

}
let a =new manager()





