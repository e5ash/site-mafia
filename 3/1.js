var a = $('#project'), aa = $('.project'), b = $('#price'), bb = $('.price'), c = $('#law'), cc = $('.law'), d = $('#order'), dd = $('.order'), e = $('#contacts'), ee = $('.contacts'), s = 500;

a.on('click', function () {
	if (a.hasClass('hide')) {
	    aa.slideUp(s);
	    a.removeClass('hide');

	    bb.slideUp(s);
	    b.removeClass('hide');

	    cc.slideUp(s);
	    c.removeClass('hide');

	    dd.slideUp(s);
	    d.removeClass('hide');

	    ee.slideUp(s);
	    e.removeClass('hide');
	}
	else {
	    aa.slideDown(s);
	    a.addClass('hide');

	    bb.slideUp(s);
	    b.removeClass('hide');

	    cc.slideUp(s);
	    c.removeClass('hide');

	    dd.slideUp(s);
	    d.removeClass('hide');

	    ee.slideUp(s);
	    e.removeClass('hide');
	}
});
b.on('click', function () {
	if (b.hasClass('hide')) {
	    aa.slideUp(s);
	    a.removeClass('hide');

	    bb.slideUp(s);
	    b.removeClass('hide');

	    cc.slideUp(s);
	    c.removeClass('hide');

	    dd.slideUp(s);
	    d.removeClass('hide');

	    ee.slideUp(s);
	    e.removeClass('hide');
	}
	else {
	    bb.slideDown(s);
	    b.addClass('hide');

	    aa.slideUp(s);
	    a.removeClass('hide');

	    cc.slideUp(s);
	    c.removeClass('hide');

	    dd.slideUp(s);
	    d.removeClass('hide');

	    ee.slideUp(s);
	    e.removeClass('hide');
	}
});
c.on('click', function () {
	if (c.hasClass('hide')) {
	    aa.slideUp(s);
	    a.removeClass('hide');

	    bb.slideUp(s);
	    b.removeClass('hide');

	    cc.slideUp(s);
	    c.removeClass('hide');

	    dd.slideUp(s);
	    d.removeClass('hide');

	    ee.slideUp(s);
	    e.removeClass('hide');
	}
	else {
	    cc.slideDown(s);
	    c.addClass('hide');

	    aa.slideUp(s);
	    a.removeClass('hide');

	    bb.slideUp(s);
	    b.removeClass('hide');

	    dd.slideUp(s);
	    d.removeClass('hide');

	    ee.slideUp(s);
	    e.removeClass('hide');
	}
});
d.on('click', function () {
	if (d.hasClass('hide')) {
	    aa.slideUp(s);
	    a.removeClass('hide');

	    bb.slideUp(s);
	    b.removeClass('hide');

	    cc.slideUp(s);
	    c.removeClass('hide');

	    dd.slideUp(s);
	    d.removeClass('hide');

	    ee.slideUp(s);
	    e.removeClass('hide');
	}
	else {
	    dd.slideDown(s);
	    d.addClass('hide');

	    aa.slideUp(s);
	    a.removeClass('hide');

	    bb.slideUp(s);
	    b.removeClass('hide');

	    cc.slideUp(s);
	    c.removeClass('hide');

	    ee.slideUp(s);
	    e.removeClass('hide');
	}
});
e.on('click', function () {
	if (e.hasClass('hide')) {
	    aa.slideUp(s);
	    a.removeClass('hide');

	    bb.slideUp(s);
	    b.removeClass('hide');

	    cc.slideUp(s);
	    c.removeClass('hide');

	    dd.slideUp(s);
	    d.removeClass('hide');

	    ee.slideUp(s);
	    e.removeClass('hide');
	}
	else {
	    ee.slideDown(s);
	    e.addClass('hide');

	    aa.slideUp(s);
	    a.removeClass('hide');

	    bb.slideUp(s);
	    b.removeClass('hide');

	    cc.slideUp(s);
	    c.removeClass('hide');

	    dd.slideUp(s);
	    d.removeClass('hide');
	}
});
	var a1 = $('.callback');
	var b1 = $('.callback_b');
	var c1 = $('.call');
	var d1 = $('.callback_c');
	var speed = 1000;
	a1.click(function(){
		b1.fadeIn(speed);
		c1.fadeIn(speed);
	})
	d1.click(function(){
		c1.fadeOut(speed);
		b1.fadeOut(speed);
	})
	b1.click(function(){
		c1.fadeOut(speed);
		b1.fadeOut(speed);
	})