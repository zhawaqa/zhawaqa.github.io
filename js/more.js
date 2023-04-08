$(function() {

	
	$(".top-right>div.fl").hover(function(){
		$(this).find('ul').stop().slideToggle()
	})
	$(".subbar li").hover(function(){
		$(this).find('div').stop().slideToggle()
	})
	
	jQuery(".focusBox").hover(function() {
		jQuery(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.8)
	}, function() {
		jQuery(this).find(".prev,.next").fadeOut()
	});
	jQuery(".focusBox").slide({
		mainCell: ".pic",
		effect: "fold",
		autoPlay: true,
		delayTime: 600,
		trigger: "click"
	});

	//input
	$('input[type=text]').bind({
		focus: function() {
			if(this.value == this.defaultValue) {
				this.value = "";
			}
		},
		blur: function() {
			if(this.value == "") {
				this.value = this.defaultValue;
			}
		}
	});
	
	jQuery(".txtScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,scroll:1,vis:4});
	
	$('.proleft .ul1 li').hover(function() {		
		var $this = $(this),
			index = $this.index();
			$this.addClass('on').siblings().removeClass('on');
		$('.proright .box ').eq(index).addClass('on').siblings('.box').removeClass('on')
	})
	
	$('.youlian .div2 h3').click(function(){
		$(this).siblings('ul').stop().toggle()
	})
	

})