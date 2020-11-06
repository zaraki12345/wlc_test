<?php     

/**
 * Enqueue scripts and styles.
 **/
function st_admin_scripts()
{
  wp_enqueue_media();
  wp_enqueue_script('media-grid');
  wp_enqueue_script('media');
  wp_enqueue_script('wp-color-picker');
  wp_enqueue_style('wp-color-picker');

  wp_enqueue_script('jquery-ui-datepicker');

  // tooltips js
  wp_enqueue_script('jquery-ui-tooltip');
  wp_enqueue_style('st-admin-style', get_template_directory_uri() . '/dist/admin/admin-app.css');
  wp_enqueue_script('st-admin-scripts', get_template_directory_uri() . '/dist/admin/admin-app.js', ['jquery'], '', true);
}

add_action('admin_print_scripts', 'st_admin_scripts');



/**
 * Add admin head scripts
 **/
function localize_script_header()
{
  ob_start();?>

  <script type="text/javascript">
    var steditor = {
      ajaxUrl: '<?php echo admin_url('admin-ajax.php') ?>',
      baseUrl: '<?php echo home_url('/') ?>',
      themeUrl: '<?php echo get_template_directory_uri() ?>',
    }
    var base = {
      ajaxUrl: '<?php echo admin_url('admin-ajax.php') ?>',
      baseUrl: '<?php echo home_url('/') ?>',
      themeUrl: '<?php echo get_template_directory_uri() ?>',
    }
  </script>

  <?php echo ob_get_clean();
}

add_action('admin_head', 'localize_script_header');

function mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'mime_types');
?>