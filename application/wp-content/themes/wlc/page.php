<?php get_header(); ?>
  <div class="pt-6">
    <div class="container">
      <?php echo apply_filters('the_content', $post->post_content); ?>
    </div>
  </div>
<?php get_footer(); ?>