<!DOCTYPE html>
<html lang="pl" class="no-js">
<head>
	<meta charset="<?php bloginfo('charset');?>">
	<meta name="viewport" content="width=device-width, initial-scale=1" />
  	<title><?php wp_title('');?></title>
  	<?php /* js vars placeholder */?>
  	<script type="text/javascript">
		window.wlc = {
			baseUrl: '<?php echo get_site_url() ?>',
			ajaxUrl: '<?php echo admin_url('admin-ajax.php') ?>'
		};
  	</script>
	<?php wp_head();?>
</head>
<body class="<?php echo !empty($bodyClass) ? $bodyClass : bodyClass() ?>">


<header class="header">
	<div class="header__top">
		<div class="container d-flex align-items-center justify-content-between">
			<a href="<?php echo home_url() ?>">
				<img class="header__logo" src="<?php echo wp_get_attachment_url(get_post_meta($post->ID, 'LogoHeader_ID', true)); ?>" alt="Logo Ukala"/>
			</a>
			<div class="header__links">
				<a href="#" class="link">Find a UKALA agent</a>
				<a class="header__links--middle link" href="#">Join UKALA</a>
				<?php if(!is_user_logged_in()):?>  
					<a class="btn btn-white" href="/login">
						<span>
							<img class="" src="<?php echo get_template_directory_uri() ?>/src/img/logged_out_icon.png" alt="Icon Logged Out">
						</span>
						Log in
					</a>
				<?php else:?>
					<a class="btn btn-white" href="/my-account">
						<span>
							<img class="" src="<?php echo get_template_directory_uri() ?>/src/img/logged_in_icon.png" alt="Icon Logged In">
						</span>
						My Profile
					</a>
				<?php endif;?>
			</div>
		</div>
	</div>
	<div class="container">
		<nav class="header__main__nav d-flex align-items-center justify-content-between">
			<?php
				wp_nav_menu(
					array(
						'menu' => 'Main Menu',
						'container' => false,
						'link_class' => 'text-line-1',
						'items_wrap' => '<ul id="%1$s" class="%2$s unstyled d-flex align-items-center justify-content-between" tabindex="0">%3$s</ul>',
					)
				);
			?>
			<form role="search" method="get" class="header__main__nav__search" action="">
				<input type="text" placeholder="Search..." value="" name="s">
			</form>
		</nav>
		<div id="mobile-ico" class="mr-sm-0">
			<div>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	</div>
</header>

<div class="mobile-nav shadow-light">
	<nav>
		<?php
			wp_nav_menu(
				array(
					'menu' => 'Main Menu',
					'container' => false,
					'link_class' => 'text-line-1',
					'items_wrap' => '<ul id="%1$s" class="%2$s unstyled d-flex flex-column align-items-center" tabindex="0">%3$s</ul>',
				)
			);
		?>
	</nav>
</div>

<div id="main" class="above relative">