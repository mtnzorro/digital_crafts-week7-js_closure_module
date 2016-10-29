// function counter(){
//   var count = 0;
//   function doTheCount(x){
//     count += x;
//     return count;
//   }
//   return doTheCount;
// }
//
// var count1 = counter();
// var count2 = counter();
//
// console.log(count1(9),
// count1(2),
// count1(4),
// count2(10),
// count2(11),
// count2(20));

// function fire(){
//   var board = [
//   ['o', ' ', 'o', 'o', ' '],
//   ['o', ' ', ' ', ' ', ' '],
//   ['o', ' ', 'o', 'o', 'o'],
//   ['o', ' ', ' ', ' ', ' '],
//   [' ', ' ', 'o', ' ', 'o'],
//   [' ', ' ', 'o', ' ', 'o']
// ];
//   function actuallyFire(row, col){
//   if (board[row][col] === 'o') {
//     board[row][col] = 'x';
//     return 'Hit!';
//   } else {
//     return 'Miss';
//   }
//   return board;
// }
// return actuallyFire;
// }
// var fire1 = fire();
// console.log(fire1(0,0));
// console.log(fire1(0,2));
// console.log(fire1(4,3));

//MODULE

var fire = function(){
  var board = [
  ['o', ' ', 'o', 'o', ' '],
  ['o', ' ', ' ', ' ', ' '],
  ['o', ' ', 'o', 'o', 'o'],
  ['o', ' ', ' ', ' ', ' '],
  [' ', ' ', 'o', ' ', 'o'],
  [' ', ' ', 'o', ' ', 'o']
];
  function actuallyFire(row, col){
  if (board[row][col] === 'o') {
    board[row][col] = 'x';
    return 'Hit!';
  } else {
    return 'Miss';
  }
  return board;
}
return actuallyFire;
}();

console.log(fire(0,0));
console.log(fire(0,2));
console.log(fire(4,3));
