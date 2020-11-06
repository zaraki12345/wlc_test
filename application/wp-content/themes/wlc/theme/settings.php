<?php

/**
 * Theme Settings
 */
add_action('after_setup_theme', 'theme_setup');

function theme_setup()
{
	add_theme_support('post-thumbnails');
	add_theme_support('html5');

	add_post_type_support('post', 'page-attributes');

	register_nav_menus([
		'header' => esc_html__('Header', 'codelabs'),
	]);
}

function remove_calendar_widget()
{
	/* Unregiste Widgets */
	unregister_widget('WP_Widget_Pages');
	unregister_widget('WP_Widget_Calendar');
	unregister_widget('WP_Widget_Archives');
	unregister_widget('WP_Widget_Links');
	unregister_widget('WP_Widget_Media_Audio');
	unregister_widget('WP_Widget_Media_Video');
	unregister_widget('WP_Widget_Meta');
	unregister_widget('WP_Widget_Search');
	unregister_widget('WP_Widget_Categories');
	unregister_widget('WP_Widget_Recent_Posts');
	unregister_widget('WP_Widget_Recent_Comments');
	unregister_widget('WP_Widget_RSS');
	unregister_widget('WP_Widget_Tag_Cloud');
	unregister_widget('WP_Nav_Menu_Widget');
	unregister_widget('WP_Widget_Custom_HTML');
}

// register/unregister widgets
add_action('widgets_init', 'remove_calendar_widget');

/**
 * Disable the emoji's
 */
function disable_emojis() {
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    // remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_action( 'admin_print_styles', 'print_emoji_styles' ); 
    remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
    remove_filter( 'comment_text_rss', 'wp_staticize_emoji' ); 
    remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
    add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
    add_filter( 'wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2 );
}

add_action( 'init', 'disable_emojis' );

/**
 * Filter function used to remove the tinymce emoji plugin.
 * 
 * @param array $plugins 
 * @return array Difference betwen the two arrays
 */
function disable_emojis_tinymce($plugins)
{
    if ( is_array( $plugins ) ) {
        return array_diff( $plugins, array( 'wpemoji' ) );
    } else {
        return array();
    }
}

/**
 * Remove emoji CDN hostname from DNS prefetching hints.
 *
 * @param array $urls URLs to print for resource hints.
 * @param string $relation_type The relation type the URLs are printed for.
 * @return array Difference betwen the two arrays.
 */
function disable_emojis_remove_dns_prefetch( $urls, $relation_type )
{
    if ( 'dns-prefetch' == $relation_type ) {
        $emoji_svg_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/' );
        $urls = array_diff( $urls, array( $emoji_svg_url ) );
    }

    return $urls;
}

/**
 * Enqueue scripts and styles.
 */
function theme_front_scripts()
{
    // css bundle
    wp_enqueue_style('theme-style', get_template_directory_uri() . '/dist/css/app.css', [], THEME_VERSION);
    // js bundle
    wp_enqueue_script('theme-scripts', get_template_directory_uri() . '/dist/js/app.js', [], THEME_VERSION, true);
    // maps
    // wp_enqueue_script('gmaps', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBTkVpem3MkX1nf3mz9RibsjLqmrqPM_Hs&callback=initMap', ['theme-scripts'], THEME_VERSION, true);
   
    
    // additional variables
    wp_localize_script('theme-scripts', 'theme', [
        'ajaxurl'  => admin_url('admin-ajax.php'),
        'baseurl'  => get_site_url(),
        'themeurl' => get_template_directory_uri(),
    ]);
    // deregister jquery
    // wp_deregister_script('jquery');
    wp_deregister_script('wp-embed');
}

add_action('wp_enqueue_scripts', 'theme_front_scripts', 1);
add_action( 'wp_print_styles', 'wps_deregister_styles', 100 );
function wps_deregister_styles() {
    wp_dequeue_style( 'wp-block-library' );
}