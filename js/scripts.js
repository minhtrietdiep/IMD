/*
	JavaScript to load random banners. Banner paths in /style/generic.css
*/
var banner = [ 'banner1', 'banner2', 'banner3', 'banner4' ];
var banner = banner[Math.floor(Math.random() * banner.length)];
document.querySelector('#banner').classList.add(banner);

/*
	Sticky menubar
*/
window.onscroll = function OnScroll() {
	var offset = 100; //height of header
	var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	if ( scrollTop >= offset) {
		document.querySelector('nav').classList.add('stickToTop');
		document.querySelector('.show-menu').classList.add('stickToTop');
	} else {
		document.querySelector('nav').classList.remove('stickToTop');
		document.querySelector('.show-menu').classList.remove('stickToTop');
	}
}