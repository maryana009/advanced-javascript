function foo() {
	console.log (this.bar);
}

var obj = {bar: "bar"};
var obj2 = {bar: "bar2"};

var origin = foo;
foo = function() {origin.call(obj)};

foo();             //bar
foo.call(obj2);    //bar
