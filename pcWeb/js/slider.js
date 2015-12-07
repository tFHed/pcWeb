// jQuery Document

// 
function slide(picArea,picWidth,buttonLeft,buttonRight){
	var tipsNum = 1; //定义TIPS的位置
	var picNum = picArea.find("img").length; //定义图片的个数 

	$(".phone-info").eq(0).fadeIn(0);

	// 点击向左按钮时的动作
	buttonLeft.click(function(){
		picArea.stop(false, true);
		$(".phone-info").stop(false, true);
		picLeft();
		}
	);
	// 点击向右按钮时的动作
	buttonRight.click(function(){
		picArea.stop(false, true);
		$(".phone-info").stop(false, true);
		picRight();
		}
	);

	// 向右移动
	function picRight() {
		if(tipsNum != picNum) {
			// 当前图片不是最后一张时移动
			var moveLength = '-' + tipsNum * 100 + '%' ;
			picArea.animate({
				left : moveLength
			} ,1000 ,'easeOutExpo');
			$(".phone-info").siblings().fadeOut(500);
			$(".phone-info").eq(tipsNum).fadeIn(2000);
			tipsNum ++;
		}
		else {
			// 当前图片是最后一张时移动
			picArea.animate({
				left : '0'
			} ,1000 ,'easeOutExpo');
			$(".phone-info").siblings().fadeOut(500);
			$(".phone-info").eq(0).fadeIn(2000);
			tipsNum = 1;
		}
	}

	// 向左移动
	function picLeft() {
		if(tipsNum != 1) {
			// 当前图片不是第一张时移动
			var moveLength = '-' + (tipsNum - 2) * 100 + '%' ;
			picArea.animate({
				left : moveLength
			} ,1000,'easeOutExpo');
			$(".phone-info").siblings().fadeOut(500);
			$(".phone-info").eq(tipsNum - 2).fadeIn(2000);
			tipsNum -- ;
		}
		else {
			// 当前图片是第一张时移动
			var moveLength = '-' + (picNum - 1) * 100 + '%' ;
			picArea.animate({
				left : moveLength
			} ,1000,'easeOutExpo');
			$(".phone-info").siblings().fadeOut(500);
			$(".phone-info").eq(2).fadeIn(2000);
			tipsNum = picNum;
		}
	}

	// autoPlay
	function auto() {
		setInterval(function() {
			picRight();
		} , 5000);
	}
	auto();
}