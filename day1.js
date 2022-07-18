const user = {
  name: "Haris",
  id: 6,
};

Object.freeze(user);

user.name = "log";

console.log(user);

console.log("start");

// 1 sec delay
function delay() {
  var i = 0;
  for (i = 0; i < 1000; i++);
  console.log("1 sec delay", i);
}
delay();

console.log("end");

console.log("start");

// 1 sec delay
setTimeout(function () {
  console.log("delay");
}, 0);

console.log("end");

console.log(typeof null);

a = 10;
console.log("value of a: ", a);
var a = 8;

fun();

function fun() {
  console.log("func call!");
}

const words = ["hello", "WORLD", "Whatever"];
const downcasedWords = words.map((word) => word.toLowerCase());
console.log(downcasedWords, words);

function xa() {
  xa = 3283289;
}

var x = 7;

function getName() {
  console.table("Hello Javascript!");
}

getName();

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var me = new Person("John", "Smith");

console.table(me);

console.table(["apple", "banana", "tintash"]);

// an array of arrays

var people = [
  ["John", "Smith"],
  ["Jane", "Doe"],
  ["Emily", "Jones"],
];
console.table(people);

{
  var v = 7;
}

console.log("Here is v variable: ", v);

var v;
let l;

{
  const c = 5;
  console.log(c);
}

var $l = 4;
console.log(`Varibale $l is ${$l}`);
