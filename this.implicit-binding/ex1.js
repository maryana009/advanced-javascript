function foo() {
	console.log (this.bar);
}

var bar = "bar1";
var ob1 = {bar: "bar2", foo: foo};
var ob2 = {bar: "bar3", foo: foo};

foo();        //bar1
ob1.foo();    //bar2
ob2.foo();    //bar3

//
var o1 = {
	bar: "bar1",
	foo: function () {
		console.log (this.bar);
	}
}

var o2 = {bar: "bar2", foo: o1.foo};

var bar = "bar3";

o1.foo();        //bar1
o2.foo();    //bar2
foo();    //bar3
