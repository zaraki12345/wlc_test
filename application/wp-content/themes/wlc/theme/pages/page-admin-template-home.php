<?php     

// add on init
add_action('init', 'home_page_upgrades');
// on save post - needs to be separate, not in 'init' action
add_action('save_post', 'home_save_metabox', 10, 3);

// custom fields
function home_page_upgrades() {
  // if on admin page AND specific template selected
  if(!is_admin() || get_page_template_slug($_GET['post']) != 'page-home.php') {
    return;
  }

  // remove post type support
  remove_post_type_support('page','editor');
  remove_post_type_support('page','excerpt');
  remove_post_type_support('page','author');
  remove_post_type_support('page','custom-fields');
  remove_post_type_support('page','comments');
  remove_post_type_support('page','thumbnail');
  
  // add metaboxes
  add_action('add_meta_boxes', 'home_page_create_meta_box');
  
  // add js scripts
  add_action('admin_enqueue_scripts', 'home_page_admin_scripts');
}

// add css/js scritps
function home_page_admin_scripts() {
  // media uploader
  wp_enqueue_media();
  wp_enqueue_script('media-grid');
  wp_enqueue_script('media');
  wp_enqueue_script('wp-color-picker');

  // tooltips js
  wp_enqueue_script('jquery-ui-tooltip');
  
  // tooltips css
  wp_enqueue_style('ta-jquery-ui');
}

// metaboxes - blocks
function home_page_create_meta_box() {
  
  add_meta_box(
    'logo_website_header',
    __('Logo Header'),
    'logo_website_header',
    'page',
    'normal'
  );

  add_meta_box(
    'home_page_intro',
    __('Intro Section'),
    'home_page_intro',
    'page',
    'normal'
  );

}
function logo_website_header() {
  global $post;
  ?>
  
  <div class="st-custom-admin">
    <p>
      <label for="LogoHeader"><strong>Image</strong></label>
      <input type="text" class="widefat custom-image-upload-input" name="LogoHeader" id="LogoHeader" value="<?php echo wp_get_attachment_url(get_post_meta($post->ID, 'LogoHeader_ID', true)); ?>" disabled>
      <a class="button" data-for="LogoHeader" href="#">Select Image</a>
      <span class="description">Image should be in png format. Size: 261x91 px<span class="st-tooltip-gallery">Preview here</span> <a href="#clear">Clear</a></span>
      <input type="hidden" class="custom-image-upload-id" name="LogoHeader-ID" value="<?php echo get_post_meta($post->ID, 'LogoHeader_ID', true); ?>">
    </p>
  </div>
  <?php     
}

// intro content metaboxes
function home_page_intro() {
  global $post;
  ?>
  
  <div class="st-custom-admin">
    <p>
      <label for="homePageIntroTitle"><strong>Main Title (blue)</strong></label>
      <textarea rows="1" cols="40" class="widefat" name="homePageIntroTitle" id="homePageIntroTitle"><?php echo get_post_meta($post->ID, 'homePageIntroTitle', true); ?></textarea>
    </p>
    <p>
      <label for="homePageIntroSubtitle"><strong>Subtitle</strong></label>
      <textarea rows="2" cols="40" class="widefat" name="homePageIntroSubtitle" id="homePageIntroSubtitle"><?php echo get_post_meta($post->ID, 'homePageIntroSubtitle', true); ?></textarea>
    </p>
    <p>
      <label for="homePageIntroParagraph"><strong>Paragraph</strong></label>
      <textarea rows="2" cols="40" class="widefat" name="homePageIntroParagraph" id="homePageIntroParagraph"><?php echo get_post_meta($post->ID, 'homePageIntroParagraph', true); ?></textarea>
    </p>
    <p>
      <label for="homePageIntroButton"><strong>Button Text</strong></label>
      <textarea rows="1" cols="40" class="widefat" name="homePageIntroButton" id="homePageIntroButton"><?php echo get_post_meta($post->ID, 'homePageIntroButton', true); ?></textarea>
    </p>
    <p>
      <label for="homePageIntroButtonLink"><strong>Button Link</strong></label>
      <textarea rows="1" cols="40" class="widefat" name="homePageIntroButtonLink" id="homePageIntroButtonLink"><?php echo get_post_meta($post->ID, 'homePageIntroButtonLink', true); ?></textarea>
    </p>
    <p>
      <label for="homePageIntroImage"><strong>Image</strong></label>
      <input type="text" class="widefat custom-image-upload-input" name="homePageIntroImage" id="homePageIntroImage" value="<?php echo wp_get_attachment_url(get_post_meta($post->ID, 'homePageIntroImage_ID', true)); ?>" disabled>
      <a class="button" data-for="homePageIntroImage" href="#">Select Image</a>
      <span class="description">Image should be in svg format. <span class="st-tooltip-gallery">Preview here</span> <a href="#clear">Clear</a></span>
      <input type="hidden" class="custom-image-upload-id" name="homePageIntroImage-ID" value="<?php echo get_post_meta($post->ID, 'homePageIntroImage_ID', true); ?>">
    </p>
  </div>
  <?php     
}


function home_save_metabox($postId, $post, $update) {
  
  // check if admin and is selected page template file
  if(!is_admin() || get_page_template_slug($postId) != 'page-home.php') {
    return;
  }
  
  // additional custom meta boxes
  $metaBoxes = [
    'LogoHeader-ID',

    'homePageIntroTitle',
    'homePageIntroSubtitle',
    'homePageIntroParagraph',
    'homePageIntroButton',
    'homePageIntroButtonLink',
    'homePageIntroPardot',
    'homePageIntroImage-ID',
  ];
  
  // // prepare dynamic metaboxes to be more user friendly saved
  // $metaBoxesPositions = [
  //   'homePageWhyBoxes',
  //   'homePageTestimonials',
  // ];

  // // foreach dynamic metabox
  // foreach($metaBoxesPositions as $metaBoxesPosition) {
  //   $temp = [];
  //   // create placeholder
  //   $metaBoxes[] = $metaBoxesPosition;
  //   // check is set
  //   if(isset($_POST[$metaBoxesPosition])) {
  //     $keys = array_keys($_POST[$metaBoxesPosition]);
  //     // foreach position
  //     foreach($_POST[$metaBoxesPosition]['position'] as $k => $position) {
  //       // foreach sent key
  //       foreach($keys as $key) {
  //         // foreach keys
  //         foreach($_POST[$metaBoxesPosition][$key] as $k => $value) {
  //           // prepared properly
  //           $temp[$k][$key] = $value;
  //         }
  //       }
  //     }
  //   }
  //   usort($temp, function($a, $b)
  //   {
  //     if ($a['position'] > $b['position'])
  //     {
  //       return 1;
  //     }
  //     else {
  //       return 0;
  //     }
  //   });
    
  //   // set new POST data
  //   $_POST[$metaBoxesPosition] = $temp;
  // }

  // save
  mx_new_meta_save($metaBoxes, $postId);
}
?>
