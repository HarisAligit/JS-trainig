var bvar = 109;
valueOfB();

xa();
console.log("xa value: ", xa);

var a = "Hello world...";

function first() {
  var b = "I am Rahul.";
  second();

  function second() {
    var c = " Subscribe to my RAHULISM newsletter.";
    console.log(a + b + c);
    third();
  }

  function third() {
    var d = " ⚡⚡";
    console.log(a + b + d);
  }
}

function up() {
  var u1 = 1;
  function down() {
    var d1 = 2;
    console.log(u1);
    function inner() {
      var i1 = 3;
      console.log(u1, d1, i1);
    }
    inner();
  }
  down();
  return down;
}

var xx = up();

xx();
first();

function outer() {
  var ix = 12;
  function inner() {
    console.log(ix);
  }
  return inner;
}

let xi = outer();

xi();
