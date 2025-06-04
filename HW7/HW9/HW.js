// Array.prototype.myForEach = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         if (i in this) {
//             callback(this[i], i, this);
//         }
//     }
// };
//
// const arr = [1, 2, 3];
// arr.myForEach((value, index) => {
//     console.log(`Index ${index}: ${value}`);
// });

// Array.prototype.myFilter = function(callback) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (i in this) {
//             if (callback(this[i], i, this)) {
//                 result.push(this[i]);
//             }
//         }
//     }
//     return result;
// };
//
// const arr = [1, 2, 3, 4, 5];
// const filtered = arr.myFilter((value) => value % 2 === 0);
// console.log(filtered);