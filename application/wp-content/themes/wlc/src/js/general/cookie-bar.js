/**
 * Cookie bar
 * Version 1.0
 * 
 **/

/**
 * Constructor
 *
 **/
function cookieBar()
{
	this.buttonDomEl    = 'a[href="#close-cookie-bar"]';
	this.cookieBarDomEl = '#cookie-bar';

	this.initEvents();
}

/**
 * Inits Event
 *
 **/
cookieBar.prototype.initEvents = function()
{
	$(this.buttonDomEl).on('click', {obj:this}, this.closeBar);
};

/**
 * Close Cookie Bar
 *
 **/
cookieBar.prototype.closeBar = function(e)
{
	e.preventDefault();

	var obj = e.data.obj;
	
	// set cookie
	obj.setCookie('show-cookies-info', 'no', 365);
	// hide bar
	obj.hideBar();
};

/**
 * Close Cookie Bar
 *
 **/
cookieBar.prototype.hideBar = function()
{
	var height = $(this.cookieBarDomEl).height();
	var obj    = this;

	$(this.cookieBarDomEl).css('height', height + 'px');

	setTimeout (function() {
		$(obj.cookieBarDomEl).css('height', '0px');
	}, 50);
};

/**
 * Sets cookie
 *
 **/
cookieBar.prototype.setCookie = function(cname, cvalue, exdays)
{
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

new cookieBar();
