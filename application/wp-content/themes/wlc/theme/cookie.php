<?php

/**
 * Sets query var - should cookie be shown or not
 *
 **/
function cookies_info_func()
{
	$cookiesInfo    = $_COOKIE['show-cookies-info'];
	
	$showCookieInfo = false;

	if($cookiesInfo == null && $cookiesInfoOld == null) {
		$showCookieInfo = true;
	}

	set_query_var('show_cookie_info', $showCookieInfo);
}
add_action('wp', 'cookies_info_func', 10);
?>