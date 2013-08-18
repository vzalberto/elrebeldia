$(document).ready(function() {
	var angle = 0;
	var margin = 0;
	setInterval(function(){
	  bWidth = parseInt($(window).width());
	  actualMargin = parseInt($("#image").css("marginLeft"));
	  $("#info").text(actualMargin + ', ' + bWidth);
	  if (actualMargin < bWidth - 200){
	        angle+=3;
	        margin+=5;
	       $("#image").rotate(angle);
	       $("#image").css("marginLeft", margin+'px')};
	},10);
});