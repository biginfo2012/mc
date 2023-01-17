$(document).ready(function() {
	$('.top_pickup_slider').bxSlider({
		mode: 'horizontal',
		pause : 6000,
		speed: 500,
		auto: true,
		moveSlides: 4,
		slideWidth: 211,
		slideMargin: 14,
		minSlides: 2,
		maxSlides: 4,
		shrinkItems: true,
		touchEnabled : false,
		stopAutoOnClick : true,
	});

	var pageupHeight = 92;
	$('.totop').hide();
	$(window).scroll(function(){
		var screenHeight = 0;
		if( $(window).height() > screen.height ) {
			screenHeight = screen.height;
		} else {
			screenHeight = $(window).height();
		}

		if( $(this).scrollTop() > 200 ) {
			$('.totop').fadeIn();
		} else {
			$('.totop').fadeOut();
		}

		var footerHeight = $('.footer').outerHeight();
				if( $(this).scrollTop() > pageupHeight ) {
			if( $(this).scrollTop() + screenHeight > $(document).height() - footerHeight ) {
				diff = $(this).scrollTop() + screenHeight - $(document).height();
				$('.totop').css('bottom', diff + footerHeight + 'px');
			} else {
				$('.totop').css('bottom', '');
			}
		} else {
			$('.totop').css('bottom', '');
		}
	});

	var speed = 500;
	var adjust = 0;
	var href = location.href;
	var index = href.indexOf('#');
	if(index != -1) {
		var target = $(href.substring(index));
		if(target[0]) {
			var position = target.offset().top - $('.header').outerHeight() - adjust;
			$("html, body").animate({
				scrollTop: position
				}, speed, "swing");
		}
	}

	$('a[href^="#"]').click(function() {
		var speed = 500;
		var href = $(this).attr("href");
		if(href == "#" || href == "") return false;
		var target = $(href);
		var adjust = 0;
		var position = target.offset().top - $('.header').outerHeight() - adjust;
		$("html, body").animate({
			scrollTop: position
			}, speed, "swing");
		return false;
	});

	$('.header_menu_btn a').click(function(){
		var src = $('img', this).attr('src');
		if( src.indexOf('close') != -1) {
			src = src.replace('close', 'open');
		} else {
			src = src.replace('open', 'close');
		console.log(src);
		}
		$('img', this).attr('src', src);
		$('html').toggleClass('open-menu');
		return false;
	});

	$('.overlay .accordion').click(function(){
		var text = $(this).text();
		if(text == '＋') {
			$(this).text('―');
		} else {
			$(this).text('＋');
		}
		$(this).next('ul').slideToggle();
		return false;
	});

	// 業種選択
	var cate = 0;
	var urlParam = location.search.substring(1);
	if(urlParam) {
		var param = urlParam.split('&');
		var paramArray = [];
		  for (i = 0; i < param.length; i++) {
			  var paramItem = param[i].split('=');
			  if(paramItem[0] == 'cate') cate = paramItem[1];
		  }
	} else {
		$('.solution_item_box.hide').hide();
		$('.all_categories').addClass('selected');
	}
	if(cate) {
		cate = parseInt(cate);
		$('.solution_item_box').hide();
		$('.cate' + cate).show();
		var li = $('.solution_categories_list li').eq(cate - 1);
		var src = $(li).find('img').attr('src');
		if(src) {
			src = src.replace('.jpg', '_selected.jpg');
		}
		$('img', $('.solution_categories_list li').eq(cate - 1)).attr('src', src);
		$('img', $('.solution_categories_list li').eq(cate + 7)).attr('src', src);
		switch(cate) {
			case 1:
				$('.solution_selected span').text('交通');
				break;
			case 2:
				$('.solution_selected span').text('流通');
				break;
			case 3:
				$('.solution_selected span').text('ITインフラ');
				break;
			case 4:
				$('.solution_selected span').text('物流');
				break;
			case 5:
				$('.solution_selected span').text('公共・放送・文教');
				break;
			case 6:
				$('.solution_selected span').text('Webソリューション');
				break;
			case 7:
				$('.solution_selected span').text('ホテル・レジャー');
				break;
			case 8:
				$('.solution_selected span').text('その他(ビジネス全般)');
				break;
			default:
				$('.solution_item_box').show();
				$('.solution_item_box.hide').hide();
				$('.solution_selected span').text('全てを選択');
				$('.all_categories').addClass('selected');
				break;
		}
	}
	$('.solution_categories_list li').click(function(){
		$('.all_categories').removeClass('selected');
		cate = $('.solution_categories_list li').index(this) % 8 + 1;
		cate = parseInt(cate);
		$('.solution_item_box').hide();
		$('.cate' + cate).show();
		$('.solution_categories_list li').each(function(){
			var src = $('img', this).attr('src');
			src = src.replace('_selected', '');
			$('img', this).attr('src', src);
		});
		var src = $('img', this).attr('src');
		if(src) {
			if( src.indexOf('selected') != -1) {
				src = src.replace('_selected', '');
			} else {
				src = src.replace('.jpg', '_selected.jpg');
			}
		}
		$('img', $('.solution_categories_list li').eq(cate - 1)).attr('src', src);
		$('img', $('.solution_categories_list li').eq(cate + 7)).attr('src', src);
		switch(cate) {
			case 1:
				$('.solution_selected span').text('交通');
				break;
			case 2:
				$('.solution_selected span').text('流通');
				break;
			case 3:
				$('.solution_selected span').text('ITインフラ');
				break;
			case 4:
				$('.solution_selected span').text('物流');
				break;
			case 5:
				$('.solution_selected span').text('公共・放送・文教');
				break;
			case 6:
				$('.solution_selected span').text('Webソリューション');
				break;
			case 7:
				$('.solution_selected span').text('ホテル・レジャー');
				break;
			case 8:
				$('.solution_selected span').text('その他(ビジネス全般)');
				break;
			default:
				$('.solution_item_box').show();
				$('.solution_item_box.hide').hide();
				$('.solution_selected span').text('全てを選択');
				$('.all_categories').addClass('selected');
				break;
		}

		var speed = 500;
		var target = $('.solution_selected');
		var adjust = 0;
		var position = target.offset().top - $('.header').outerHeight() - adjust;
		$("html, body").animate({
			scrollTop: position
			}, speed, "swing");

		return false;
	});
	$('.all_categories').click(function(){
		$('.solution_item_box').show();
		$('.solution_item_box.hide').hide();
		$('.solution_selected span').text('全てを選択');
		$('.all_categories').addClass('selected');

		$('.solution_categories_list li').each(function(){
			var src = $('img', this).attr('src');
			src = src.replace('_selected', '');
			$('img', this).attr('src', src);
		});

		var speed = 500;
		var target = $('.solution_selected');
		var adjust = 0;
		var position = target.offset().top - $('.header').outerHeight() - adjust;
		$("html, body").animate({
			scrollTop: position
			}, speed, "swing");

		return false;
	});
});
