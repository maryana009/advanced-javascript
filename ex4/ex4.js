function Widget(width,height) {
	this.width = width || 50;
	this.height = height || 50;
	this.$elem = null;
}

Widget.prototype.render = function($where){
	if (this.$elem) {
		this.$elem.css({
			width: this.width + "px",
			height: this.height + "px"
		}).appendTo($where);
	}
};

function Button(width,height, label) {
	Widget.call(this, width,height);
	this.label = label;
	this.$elem = $("<button>").text(this.label);
}

Button.prototype = Object.create (Widget.prototype);

Button.prototype.render = function($where) {
	// call the parent render()
	//this.render($where);
	Widget.prototype.render.call(this, $where );
	// add a click handler -> onClick
	this.$elem.bind("click", this.onClick.bind(this));

}

Button.prototype.onClick = function(evt) {
	console.log("Button " + this.label + "clicked.");
}

$(document).ready(function(){
	var $body = $(document.body);

	var btn1 = new Button(100, 50, "Button small");
	var btn2 = new Button(200, 100, "I am Big Button");

	btn1.render($body);
	btn2.render($body);
});
