function foo() {
	this.baz = "baz";
	console.log (this.bar + " " + baz);
}

var bar = "bar";
//foo();
var baz = new foo();
console.log("trata");
