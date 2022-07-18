const bears = { grizzly: true, black: true, EBrown: true };

let gcount = 0,
  bcount = 0,
  blcount = 0;

const Bearproxy = new Proxy(bears, {
  get: function (target, prop) {
    if (prop === "grizzly") gcount++;
    return target[prop];
  },
  set: function (target, prop, value) {
    if (["grizzly", "brown", "polar"].indexOf(prop) === -1) {
      throw new Error("NOT A bear!");
    }
    target[prop] = value;
  },
});

Bearproxy.grizzly;
Bearproxy.grizzly;
console.table(Bearproxy.grizzly);

console.log(gcount);

const date = new Date();
console.log(date);

console.log("foo" + +"bar");

console.log("true" == true);
console.log(!!"false" == !!"true");
console.log((0 || "0") && {});

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);

console.log(fruits);

const f1 = ["Banana", "Orange", "Apple", "Mango"];
const f = f1.entries();

console.log(f);

for (let x of f) {
  console.table(x);
}

const ages = [32, 33, 16, 40];

console.log(ages.every(checkAge));

function checkAge(age) {
  return age > 18;
}

const f2 = ["Banana", "Orange", "Apple", "Mango"];
f2.fill("Kiwi");
console.log(f2);

const ages1 = [32, 33, 16, 40];
const result = ages1.filter(checkAdult);

console.log("result: ", result, "\nOriginal: ", ages1);

function checkAdult(age) {
  return age >= 18;
}

let arr = ["el1", "el2", "el3"];

arr.addedProp = "arrProp";

console.table(arr);

// elKey are the property keys
for (let elKey in arr) {
  console.log(elKey);
}

console.log("\n\nfor of:\n");

// elValue are the property values
for (let elValue of arr) {
  console.log(elValue);
}

let n1 = "12337837";
console.log(Array.from(n1));

var ax = [1, 2, 3];
ax.a = 1;
ax.b = 1;

console.log("Double ==: ", [1, 2, 3] == [1, 2, 3]);
console.log([1, 2, 3] === [1, 2, 3]);
console.log(ax.a == ax.b);

var ar = [1, 2, 3, 4, 5, 6];

var vrr = ar.map((index) => {
  index += index;
  console.log(index);
});

console.log(vrr);

function valueOfB() {
  insideB();
  function insideB() {
    console.log("Value of B: ", bvar);
  }
}
