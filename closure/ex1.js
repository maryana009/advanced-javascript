function foo() {
	var bar = 0;
	setTimeout(function(){
		console.log(bar++)
	}, 100);

debugger;
	setTimeout(function(){
		console.log(bar++)
	}, 200);
}

foo();
