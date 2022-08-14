// let item_1 = 5
// console.log(item_1)

// let item_2=3
// console.log(item_2)

// let item_3=item_1+ item_2
// console.log(item_3)

// let item_4="Yolochka"
// console.log(item_4)

// console.log(item_3+item_4)
// console.log(item_3*item_4)

// let item_5=item_3

// // let item_6
// // let item_6_type
// // item_6=15
// // item_6_type=typeof(item_6)

// // console.log("item_6==" + item_6, "item_6_type==" + item_6_type)
// // // console.log(item_6_type)

// // let item_7 = String(item_6)
// // let item_7_type = typeof(item_7)

// // console.log("item_7 == ",  item_7,  "item_7_type == ",  item_7_type)



// // let age_1=10
// // let age_2=18
// // let age_3=60
// // if (age_1 < age_2){
// //     console.log("You don't have access cause your age is " + age_1 + " It's less then ")
// // }

// // else if (age_1<=age_2 && age_1<age_3) {
// //     console.log("Welcome!")
// // }

// // else if (age_1>age_3) {
// //     console.log("Keep calm and look Culture channel")
// // } else {
// //     console.log("Technical work")
// // }

// function yolochka(){
//     let text_1 = "Hello world"
//     console.log(text_1)

// }

// function yolochka_1(q1,q2){
//     let result = q1+q2
//     console.log("summ=" + result)

// }
// yolochka()
// yolochka_1(5,10)


// function yolochka2(...arguments){
//     let result=0
//     for (let arg of arguments){
//         result += arg
//     }
//     console.log(result)

// }
// yolochka2(5,60,100)



// names=['Alex','Inna','Vadim','Anatoly','Natalia']
// function names_editor (person_name){
//     let name_1 = "Hello " + person_name + "!"
//     console.log(name_1)
// }
// for (let i=0; i<names.length; i++) {
//     names_editor (names[i])
// } 




// let f1=()=> console.log("===")
// f1()

// let t1=10;
// let t2=15;
// let t3=20;

// let sum=(n1, n2)=>{console.log(`Sum = ${n1 + n2}`)}
// sum(t1, t2)


// function yolochka_pro (){}
// yolochka_pro.prototype.method_1=function(){
//     console.log ('method_1')
// }

// yolochka_pro.prototype.method_2=function(tt1, tt2){
//     console.log(`method_2 = ${tt1+tt2}`)
// }

// let wood=new yolochka_pro()

// wood.method_1()
// wood.method_2(10,30)


let t1 = 7;
let f3 = (t1 > 10) ?
    (tt1,tt2) => console.log(tt1+tt2):
    (tt1,tt2) => console.log(tt1-tt2);

f3(10, 30)
