// var arr = [1, 2, 3];
// console.log(arr[0]);
// console.log(arr.length);
// console.log(arr.toString());
// console.log(arr.concat(5));
// console.log(arr);
// console.log(arr.concat([5,6,7,8,9,10]));
// console.log(arr.unshift(0));
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

// var arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.slice(0,4));
// console.log(arr.slice(1,3));
// console.log(arr.slice(-2));
// console.log(arr.splice(3));
// console.log(arr);
// arr.push(4,5,6,7,8);
// console.log(arr);
// console.log(arr.splice(4,2));
// console.log(arr);

// var arr = [1, 2, 3, 4, 5, 6, 7];
// var sum = 0;
// arr.forEach(function( item, index ){
//     sum += item;
//     // console.log( item, index );
// });
// console.log(sum);

// var arr = [1, 2, 3, 4, 5, 6, 7];
// var every = arr.every( function( item ) { //  verifica se todos sao menores q 5
//     return item < 5;
// });
// console.log(every);

// var arr = [1, 2, 3, 4, 5, 6, 7];
// var some = arr.some(function(item){ // pelo menos um tem q atender a condicao
//     return item % 2 === 0
// });
// console.log(some);

// var arr = [1, 2, 3, 4, 5];
// var map = arr.map(function(item, index){
//     return item + 1;
// });
// console.log(map);

// var arr = [1, 2, 3, 4, 5];
// var map = arr.map(function(item){
//     return item + 10;
// });

// var filter = map.filter(function(item){
//     return item > 13;
// });
// console.log(filter);

// var arr = [1, 2, 3, 4, 5];
// var reduce = arr.reduce(function(acumulado, atual, index, array){
//     return acumulado + atual;
// }, 0);
// console.log(reduce);

// var arr = [ 1, 2, 3, 4, 5, 5, 5];
// console.log(arr.lastIndexOf( 5 ));

var arr =  [ 1, 2, 3, 4, 5, 5, 5];
console.log( Array.isArray(arr) );
console.log(typeof null)