var menuLeft = document.getElementById('menu_kathreen'),
showLeftPush = document.getElementById('nav_kathreen'),
header = document.getElementById('header_kathreen'),
intro = document.getElementById('intro_kathreen'),
main = document.getElementById('base_kathreen'),
container = document.getElementById('container_kathreen'),
page = document.getElementById('post_kathreen'),
footer = document.getElementById('foot_kathreen'),
pagination = document.getElementById ('pagination_kathreen'),
body = document.body;

showLeftPush.onclick = function(){
	classie.toggle(body, 'menu-push-toright');
	classie.toggle(menuLeft, 'menu-open');
	classie.toggle(header, 'pushRight');
	if (intro) classie.toggle(intro, 'pushRight');
    if (main) classie.toggle(main, 'pushRight');
    if (container) classie.toggle(container, 'pushRight');
	if (page) classie.toggle(page, 'pushRight');
    if (pagination) classie.toggle(pagination, 'pushRight');
    if (footer) classie.toggle(footer, 'pushRight');
}

// Include google web font Roboto
WebFontConfig = {
	google: { families: [ 'Roboto:400,100,300,400italic,500,700,900:latin' ] }
};

$(document).ready(function(){
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
	'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
});

/* Hack */
$(document).ready(function(){
	$('article img').before(function(){
		var elem = $(this);
		$(this).closest('article').prepend(elem);
		$(this).closest('p').remove();
	});

    $('article iframe').before(function(){
        var elem = $(this);
        $(this).closest('article').prepend(elem);
        $(this).closest('p').remove();
    });

    $('#post_kathreen img').before(function(){
        $(this).first().addClass('featured');
    });

    $('article iframe.twitter-tweet').before(function(){
        var elem = $(this);
        $('.twitter-tweet').parent(elem).addClass('upart');
    });

    $('article iframe.twitter-tweet').before(function(){
        var elem = $(this);
        $(this).closest('article').prepend(elem);
        $(this).closest('p').remove();
    });

	$(document).scroll(function(){
		var header_pos = $(window).scrollTop();
		if (header_pos >= 400){
			$('header').addClass('move');
			$('header a').css({'color':'#fff',});
			$('.bar').css('background-color','#fff');
			$('header nav').css('border-right','1px solid #999');
		}
		if (header_pos < 400) {
			$('header').removeClass('move');
			$('header a').css('color', '#5b6064');
			$('.bar').css('background-color', '#5b6064');
			$('header nav').css('border-right','1px solid #d9d9d9');
		}
		
		$('#intro_kathreen img').css('bottom', header_pos/5);
		$('#intro_kathreen #description_kathreen').css('bottom', header_pos/3);
	});
	
	$('#container_kathreen').masonry({
		itemSelector: 'article'
	});
	
});

