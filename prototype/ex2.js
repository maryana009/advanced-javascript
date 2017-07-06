//the same functionality as in ex1, just simpler way and less code
//the meaning is to delegate behavior, but the end leaf hold the state
//if there are 1 ..1000 b1, there is still one init function
var Foo =  {
	init: function(who) {
		this.me = who;
	},
	identify: function() {
		return "I'm " + this.me;
	}
}

var Bar = Object.create (Foo);

Bar.speak = function () {
	alert("Hello, " +  this.identify() + ".");
}

var b1 = Object.create(Bar);
b1.init("b1");
b1.speak();
