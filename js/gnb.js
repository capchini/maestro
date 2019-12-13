$(function(){
	$("#nav > ul > li").hover(
		function(){
			$("#header .menu").addClass("over");
		},
		function(){
			$("#header .menu").removeClass("over");
		}
	);
	$("#nav > ul > li:first-child > ul > li:first-child").focusin(function(){
		$("#header .menu").addClass("over");
	});
	$("#nav > ul > li:last-child > ul > li:last-child").focusout(function(){
		$("#header .menu").removeClass("over");
	});
});
