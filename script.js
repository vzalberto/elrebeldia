$(document).ready(function() {
	var angle = 0;
	var margin = 0;
	setInterval(function(){
      angle+=3;
      margin+=5;
     $("#image").rotate(angle);
     $("#image").css("marginLeft", margin+'px')
	},10);
});