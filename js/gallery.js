$(function(){
	var galleryNum=2;
	var n=0;
	var pos;

	$(".left").click(function(e){
		e.preventDefault();
		if(n > 0){
			n--;
			pos=n*-1*100+"%";
			$(".keyvisual_image").animate({left:pos}, 500);
		}
	});
	$(".right").click(function(e){
		e.preventDefault();
		if(n < (galleryNum-1)){
			n++;
			pos=n*-1*100+"%";
			$(".keyvisual_image").animate({left:pos}, 500);
		}
		else{
			n=0;
			$(".keyvisual_image").animate({left:0}, 500);
		}
	});
	setInterval(function(){
		n=n+1;
		pos=n*-1*100+"%";
		$(".keyvisual_image").animate({left : pos}, 500, function(){
			if(n == 2) {
				n=0;
					$(".keyvisual_image").animate({left : 0}, 0);
			}
		});
	},5000);
});
