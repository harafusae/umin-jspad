//=========================================================
//
//	jQuery FADE.JS
//
//=========================================================
$(function(){
	var fadeTime = 1500;
	var switchTime = 4000;

	$(window).load(function(){
		$('#keyvisual img').css({opacity:'0'});
		$('#image01').stop().animate({opacity:'1'},fadeTime);
		setTimeout(function(){imgChange01();},switchTime);
	});
	function imgChange01() {
		$('#image01').stop().animate({opacity:'0'},fadeTime);
		$('#image02').stop().animate({opacity:'1'},fadeTime);
		setTimeout(function(){imgChange02();},switchTime);
	};
	function imgChange02() {
		$('#image02').stop().animate({opacity:'0'},fadeTime);
		$('#image03').stop().animate({opacity:'1'},fadeTime);
	};
});

