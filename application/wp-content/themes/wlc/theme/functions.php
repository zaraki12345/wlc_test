<?php

function add_menu_link_class( $atts, $item, $args ) {
  if (property_exists($args, 'link_class')) {
    $atts['class'] = $args->link_class;
  }
  return $atts;
}
add_filter( 'nav_menu_link_attributes', 'add_menu_link_class', 1, 3 );


/* ----- clear body classes ----- */
function bodyClass()
{
  global $post;
  
  $page = '';
  
  if (is_front_page() || is_home()) {
    $page .= 'home';
  }
  elseif (is_404()) {
    $page .= 'page-404';
  }
  elseif (is_single()) {
    $page .= 'single';
  }
  elseif (is_archive()) {
    $page .= $post->post_type;
  }
  else {
    $page .= $post->post_name;
  }

  if(is_singular()) {
    $page .= ' ' . $post->post_type;
  }
  if(is_user_logged_in()){
    $page .= ' logged-in';
  }

  return $page;
}

register_nav_menu('footer_menu', 'Footer Menu');   

// Breadcrumbs
function custom_breadcrumbs() {
       
  // Settings
  $separator          = '▸';
  $breadcrums_id      = 'breadcrumbs';
  $breadcrums_class   = 'breadcrumbs';
  $home_title         = 'Strona Główna';
    
  // If you have any custom post types with custom taxonomies, put the taxonomy name below (e.g. product_cat)
  $custom_taxonomy    = 'product_cat';
     
  // Get the query & post information
  global $post,$wp_query;
     
  // Do not display on the homepage
  if ( !is_front_page() ) {
     
      // Build the breadcrums
      echo '<ul id="' . $breadcrums_id . '" class="' . $breadcrums_class . ' pt-6">';
         
      // Home page
      // echo '<li class="item-home"><a class="bread-link bread-home" href="' . get_permalink( get_option( 'page_for_posts' ) ) . '" title="' . $home_title . '">' . $home_title . '</a></li>';
      echo '<li class="item-home"><a class="bread-link bread-home" href="' . '/' . '" title="' . $home_title . '">' . $home_title . '</a></li>';
      echo '<li class="separator separator-home"> ' . $separator . ' </li>';
         
      if ( is_archive() && !is_tax() && !is_category() && !is_tag() ) {
            
          echo '<li class="item-current item-archive"><div class="bread-current bread-archive">' . post_type_archive_title($prefix, false) . '</div></li>';
            
      } else if ( is_archive() && is_tax() && !is_category() && !is_tag() ) {
            
          // If post is a custom post type
          $post_type = get_post_type();
            
          // If it is a custom post type display name and link
          if($post_type != 'post') {
                
              $post_type_object = get_post_type_object($post_type);
              $post_type_archive = get_post_type_archive_link($post_type);
            
              echo '<li class="item-cat item-custom-post-type-' . $post_type . '"><a class="bread-cat bread-custom-post-type-' . $post_type . '" href="' . $post_type_archive . '" title="' . $post_type_object->labels->name . '">' . $post_type_object->labels->name . '</a></li>';
              echo '<li class="separator"> ' . $separator . ' </li>';
            
          }
            
          $custom_tax_name = get_queried_object()->name;
          echo '<li class="item-current item-archive"><div class="bread-current bread-archive">' . $custom_tax_name . '</div></li>';
            
      } else if ( is_single() ) {
            
          // If post is a custom post type
          $post_type = get_post_type();
            
          // If it is a custom post type display name and link
          if($post_type != 'post') {
                
              $post_type_object = get_post_type_object($post_type);
              $post_type_archive = get_post_type_archive_link($post_type);
            
              echo '<li class="item-cat item-custom-post-type-' . $post_type . '"><a class="bread-cat bread-custom-post-type-' . $post_type . '" href="' . $post_type_archive . '" title="' . $post_type_object->labels->name . '">' . $post_type_object->labels->name . '</a></li>';
              echo '<li class="separator"> ' . $separator . ' </li>';
            
          }
            
          // Get post category info
          $category = get_the_category();
           
          if(!empty($category)) {
            
              // Get last category post is in
              $last_category = end(array_values($category));
                
              // Get parent any categories and create array
              $get_cat_parents = rtrim(get_category_parents($last_category->term_id, true, ','),',');
              $cat_parents = explode(',',$get_cat_parents);
                
              // Loop through parent categories and store in variable $cat_display
              $cat_display = '';
              foreach($cat_parents as $parents) {
                  // $cat_display .= '<li class="item-cat">'.$parents.'</li>';
                  $cat_display .= '<li class="item-cat"><a href="/poradniki">Poradniki</a></li>';
                  $cat_display .= '<li class="separator"> ' . $separator . ' </li>';
              }
           
          }
            
          // If it's a custom post type within a custom taxonomy
          $taxonomy_exists = taxonomy_exists($custom_taxonomy);
          if(empty($last_category) && !empty($custom_taxonomy) && $taxonomy_exists) {
                 
              $taxonomy_terms = get_the_terms( $post->ID, $custom_taxonomy );
              $cat_id         = $taxonomy_terms[0]->term_id;
              $cat_nicename   = $taxonomy_terms[0]->slug;
              $cat_link       = get_term_link($taxonomy_terms[0]->term_id, $custom_taxonomy);
              $cat_name       = $taxonomy_terms[0]->name;
             
          }
            
          // Check if the post is in a category
          if(!empty($last_category)) {
              echo $cat_display;
              echo '<li class="item-current item-' . $post->ID . '"><div class="bread-current bread-' . $post->ID . '" title="' . get_the_title() . '">' . get_the_title() . '</div></li>';
                
          // Else if post is in a custom taxonomy
          } else if(!empty($cat_id)) {
                
              echo '<li class="item-cat item-cat-' . $cat_id . ' item-cat-' . $cat_nicename . '"><a class="bread-cat bread-cat-' . $cat_id . ' bread-cat-' . $cat_nicename . '" href="' . $cat_link . '" title="' . $cat_name . '">' . $cat_name . '</a></li>';
              echo '<li class="separator"> ' . $separator . ' </li>';
              echo '<li class="item-current item-' . $post->ID . '"><div class="bread-current bread-' . $post->ID . '" title="' . get_the_title() . '">' . get_the_title() . '</div></li>';
            
          } else {
                
              echo '<li class="item-current item-' . $post->ID . '"><div class="bread-current bread-' . $post->ID . '" title="' . get_the_title() . '">' . get_the_title() . '</div></li>';
                
          }
            
      } 
      echo '</ul>';
         
  }
     
}


  // section for editable pages
  function mx_new_meta_save($meta_names, $post_id) {
    foreach ($meta_names as $meta_name) {
      $meta_key = str_replace('-','_',$meta_name);
      $new_meta_value = $_POST[$meta_name];
      if (isset($_POST[$meta_name])) {
        if (is_array($new_meta_value)) {
          update_post_meta($post_id, $meta_key, $new_meta_value);
        } else {
           mx_meta_update($post_id, $meta_key, $new_meta_value, true);
        }
      }
    }
  }
  function mx_meta_update($post_id, $meta_key, $new_meta_value, $single){
    $meta_value = get_post_meta( $post_id, $meta_key, $single );

    if (strlen($new_meta_value) > 0 && strlen($meta_value) == 0){
      add_post_meta($post_id, $meta_key, $new_meta_value, $single);
    } elseif (strlen($new_meta_value) > 0 && $new_meta_value != $meta_value) {
      update_post_meta($post_id, $meta_key, $new_meta_value);
    } elseif (strlen($new_meta_value) == 0 && strlen($meta_value) > 0) {
      delete_post_meta($post_id, $meta_key, $meta_value);
    }
  }



  add_action('wp_ajax_load_posts_by_ajax', 'load_posts_by_ajax_callback');
  add_action('wp_ajax_nopriv_load_posts_by_ajax', 'load_posts_by_ajax_callback');
  
  function load_posts_by_ajax_callback() {

    check_ajax_referer('load_more_posts', 'security');
    $paged = $_POST['page'];
    $argsRequest = $_POST['query'];
    
    $next_args = array(
      'post_type'        => 'post',
      'post_status'      => 'publish',
      'posts_per_page'   => '3',
      'order'            => 'DESC',
      'orderby'          => 'date',
      'post__not_in'     => $argsRequest[0],
      'paged'            => $paged,
      // 'category__not_in' => 5
    );
    $next_the_query = new WP_Query( $next_args );
    
    $count = $next_the_query->post_count;
  ?>
 
     <?php if ( $next_the_query->have_posts() ) : ?>
         <?php while ( $next_the_query->have_posts() ) : $next_the_query->the_post(); ?>
          <div class="single-post">
            <div class="thumbnail">
              <a href="<?php echo the_permalink(); ?>">
                <?php the_post_thumbnail('full'); ?>
              </a>
            </div>
            <div class="info">
              <span class="text-m d-block text-dark mb-3"><?php echo get_the_date('d F Y')?></span>
              <a href="<?php echo the_permalink(); ?>">
                <h5 class="font-bold d-block text-line-2"><?php echo the_title(); ?></h5>
              </a>								
              <a class="more font-bold text-primary" href="<?php echo the_permalink(); ?>">Czytaj więcej</a>
            </div>
          </div>
         <?php endwhile; ?>
    <?php
    endif;
    
    if ($count === 0 || $count <= 2):?>
      <script>
        $('.load-more').removeClass('d-block');
        $('.load-more').addClass('d-none');
      </script>
    <?php 
    endif;
    wp_reset_postdata();
    wp_die();
   }
  //  WP post rating plugin - image from gif to png
  function custom_rating_image_extension() {
    return 'png';
  }
  add_filter( 'wp_postratings_image_extension', 'custom_rating_image_extension' );



add_action('wp_ajax_my_ajax_filter_search', 'my_ajax_filter_search_callback');
add_action('wp_ajax_nopriv_my_ajax_filter_search', 'my_ajax_filter_search_callback');
 
function my_ajax_filter_search_callback() {
 
    header("Content-Type: application/json"); 
 
    $tax_query = array();
    if (empty($_GET['genre'])) {
      $args = array(
        'post_type' => 'insurers',
        'posts_per_page' => -1,
      );
    }
    elseif(isset($_GET['genre'])) {
        $genre = sanitize_text_field( $_GET['genre'] );
        $tax_query[] = array(
            'taxonomy' => 'ubezpieczyciele',
            'field' => 'slug',
            'terms' => $genre
        ); 
        $args = array(
            'post_type' => 'insurers',
            'posts_per_page' => -1,
            'tax_query' => $tax_query
        );
    }

    $search_query = new WP_Query( $args );

    if ( $search_query->have_posts() ) {
 
        $result = array();
 
        while ( $search_query->have_posts() ) {
            $search_query->the_post();
 
            $cats = strip_tags( get_the_category_list(", ") );
            $result[] = array(
                "id" => get_the_ID(),
                "title" => get_the_title(),
                "content" => get_the_content(),
                "permalink" => get_permalink(),
                "genre" => $cats,
                "poster" => wp_get_attachment_url(get_post_thumbnail_id($post->ID),'full')
            );
            
        }
        wp_reset_query();
 
        echo json_encode($result);
 
    } else {
        // no posts found
    }
    wp_die();
}

?>