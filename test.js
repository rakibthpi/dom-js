// function compare(a, b) {
//     if (a.toString() == b) {
//      return true;
//     } else {
//      return false;
//     }
//    }
   
//    const result = compare(25, 25);
//    console.log(result);
//    console.log("123" + 123);
//    let a="hi"
// let b="there"
// console.log(a+b)
const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {

 if (i == 5) {
  continue;
 }
 console.log(array[i]);
 
}