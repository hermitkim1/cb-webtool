$(function() {
	//body scrollbar
	jQuery('.scrollbar-dynamic').scrollbar();
	//Server List scrollbar
	jQuery('.ds_cont .listbox.scrollbar-inner').scrollbar();
	//selectbox
	jQuery('.selectbox').niceSelect();
	
	/* lnb s */
	var $menu_li = $('.menu > li'),
			$ul_sub = $('.menu > li ul'),
			$lnb = $('#lnb'), 
			$mobileCate = $('#mobileCate'), 
			$contents = $('#contents'), 
			$menubg = $('#lnb.on .bg'),
			$topmenu = $contents.find('.topmenu'),
			$btn_menu = $('#btn_menu'),
			$btn_top = $('#btn_top');
			
	//left menu upDwon
	$menu_li.children('a').not('.link').click(function(){
		if($(this).next().css('display') === 'none'){
			$menu_li.removeClass('on');
			$ul_sub.slideUp(300);
			$(this).parent().addClass('on');
			$(this).next().slideDown(300);
		}else{
			$(this).parent().removeClass('on');
			$(this).next().slideUp(300);
		}
		return false;
	});
	
	
	//mobile on(open)
	$btn_menu.click(function(){
		$menubg.stop(true,true).fadeIn(300);
		$lnb.animate({right:0}, 300);
		$lnb.addClass('on');
		$('html, body').addClass('body_hidden');
	});
	//mobile topmenu copy
	$lnb.find('.bottom').append($topmenu.clone());
	
	//mobile off(close)
	$('#m_close, #lnb .bg').click(function(){
		$menubg.stop(true,true).fadeOut(300);
		$lnb.animate({right:-350}, 300);
		$lnb.removeClass('on');
		$('html, body').removeClass('body_hidden');
	});
	
	//left Name Space mouse over
	$("#lnb .topbox .txt_2").each(function(){
		var $btn = $(this);
		var list =  $btn.find('.infobox');
		var menuTime;
		$btn.mouseenter(function(){
			list.fadeIn(300);
			clearTimeout(menuTime);
		}).mouseleave(function(){
			clearTimeout(menuTime);
    	menuTime = setTimeout(mTime, 200);
		});
		function mTime() {
	    list.stop().fadeOut(200);
	  }
	});
	/* lnb e */
	
	//header menu mouse over
	$(".header .topmenu > ul > li, #lnb .topmenu > ul > li").each(function(){
		var $btn = $(this);
		var list =  $btn.find('.infobox');
		var menuTime;
		$btn.mouseenter(function(){
			list.fadeIn(300);
			clearTimeout(menuTime);
		}).mouseleave(function(){
			clearTimeout(menuTime);
    	menuTime = setTimeout(mTime, 200);
		});
		function mTime() {
	    list.stop().fadeOut(200);
	  }
	});
	
	//Action menu mouse over
	$(".dashboard .top_info > ul > li").each(function(){
		var $btn = $(this);
		var list =  $btn.find('.infobox');
		var menuTime;
		$btn.mouseenter(function(){
			list.fadeIn(300);
			clearTimeout(menuTime);
		}).mouseleave(function(){
			clearTimeout(menuTime);
    	menuTime = setTimeout(mTime, 200);
		});
		function mTime() {
	    list.stop().fadeOut(200);
	  }
	});

	//common table on/off
	$(".dashboard .status_list tbody tr").each(function(){
  	var $td_list = $(this),
  			$status = $(".server_status"),
  			$detail = $(".server_info");
  	$td_list.off("click").click(function(){
			$td_list.addClass("on");
			$td_list.siblings().removeClass("on");
			$status.addClass("view");
			$status.siblings().removeClass("on");
  		$(".dashboard.register_cont").removeClass("active");
	   	$td_list.off("click").click(function(){
				if( $(this).hasClass("on") ) {
					$td_list.removeClass("on");
					$status.removeClass("view");
					$detail.removeClass("active");
		    } else {
					$td_list.addClass("on");
					$td_list.siblings().removeClass("on");
					$status.addClass("view");
					$status.siblings().removeClass("view");
  				$(".dashboard.register_cont").removeClass("active");
		    }
			});
		});
	});
	
	//RuleSet(s) mouse over
	$(".bubble_box .box").each(function(){
		var $list = $(this);
		var bubble =  $list.find('.bb_info');
		var menuTime;
		$list.mouseenter(function(){
			bubble.fadeIn(300);
			clearTimeout(menuTime);
		}).mouseleave(function(){
			clearTimeout(menuTime);
    	menuTime = setTimeout(mTime, 100);
		});
		function mTime() {
	    bubble.stop().fadeOut(100);
	  }
	});

	//Manage MCIS Server List on/off
	$(".dashboard .ds_cont .area_cont .listbox li.sel_cr").each(function(){
  	var $sel_list = $(this),
  			$detail = $(".server_info");
  	$sel_list.off("click").click(function(){
			$sel_list.addClass("active");
			$sel_list.siblings().removeClass("active");
			$detail.addClass("active");
			$detail.siblings().removeClass("active");
	   	$sel_list.off("click").click(function(){
				if( $(this).hasClass("active") ) {
					$sel_list.removeClass("active");
					$detail.removeClass("active");
		    } else {
					$sel_list.addClass("active");
					$sel_list.siblings().removeClass("active");
					$detail.addClass("active");
					$detail.siblings().removeClass("active");
		    }
			});
		});
	});

	//Monitoring MCIS Server List on/off
	$(".ds_cont_mbox .mtbox .g_list .listbox li.sel_cr").each(function(){
  	var $sel_list = $(this),
  			$detail_view = $(".monitoring_view");
  	$sel_list.off("click").click(function(){
			$sel_list.addClass("active");
			$sel_list.siblings().removeClass("active");
			$detail_view.addClass("active");
			$detail_view.siblings().removeClass("active");
	   	$sel_list.off("click").click(function(){
				if( $(this).hasClass("active") ) {
					$sel_list.removeClass("active");
					$detail_view.removeClass("active");
		    } else {
					$sel_list.addClass("active");
					$sel_list.siblings().removeClass("active");
					$detail_view.addClass("active");
					$detail_view.siblings().removeClass("active");
		    }
			});
		});
	});
	
	/*
	$(".graph_list .glist .gbox").each(function(){
  	var $glist = $(this),
  			$detail_view = $(".g_detail_view");
  	$glist.off("click").click(function(){
			$glist.addClass("active");
			$glist.siblings().removeClass("active");
			$detail_view.addClass("active");
			$detail_view.siblings().removeClass("active");
	   	$glist.off("click").click(function(){
				if( $(this).hasClass("active") ) {
					$glist.removeClass("active");
					$detail_view.removeClass("active");
		    } else {
					$glist.addClass("active");
					$glist.siblings().removeClass("active");
					$detail_view.addClass("active");
					$detail_view.siblings().removeClass("active");
		    }
			});
		});
	});
	*/
	
	$(".dashboard.dashboard_cont .ds_cont .dbinfo").each(function(){
  	var $list = $(this);
  	$list.on('click', function(){
			if( $(this).hasClass("active") ) {
				$list.removeClass("active");
	    } else {
				$list.addClass("active");
				$list.siblings().removeClass("active");
	    }
		});
	});

	// btn_top
	$("#footer .btn_top").click(function(){
		$("html,body,#wrap").stop().animate({
			scrollTop:0
		});
	});
	
	$(".pop_setting_chbox input:checkbox").on('click', function() { 
		if ( $(this).prop('checked') ) { 
			$(this).parent().addClass("selected");
		} else { 
			$(this).parent().removeClass("selected"); 
		} 
	}); 
	

});

// mobile table
$(function() {
	$(".dataTable tr span.ov").each(function(){
		$(this).on('click', function(){
			$(this).parent().parent().find(".btn_mtd").toggleClass("over");
			$(this).parent().parent().find(".overlay").toggleClass("hidden");
		});
	});
});

/*
$('.graph_list .glist a[href*="#"]').click(function(event) {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body ,#wrap').animate({
        scrollTop: target.offset().top
      }, 500);
      return false;
    }
  }
});
*/