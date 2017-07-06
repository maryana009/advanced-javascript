//the meaning is to delegate behavior, but the end leaf hold the state
//if there are 1 ..1000 b1, there is still one init function
function Foo(who) {
	this.me = who;
}

Foo.prototype.identify = function () {
	return "I'm " + this.me;
}

function Bar(who) {
	Foo.call(this, who);
}

Bar.prototype = Object.create (Foo.prototype);

Bar.prototype.speak = function () {
	alert("Hello, " +  this.identify() + ".");
}

var b1 = new Bar("b1");
b1.speak();
