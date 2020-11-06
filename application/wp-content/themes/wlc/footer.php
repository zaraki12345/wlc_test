<footer>
	<div class="container footer-container text-white">
		<div class="row w-100 justify-content-around text-center text-md-left" id="footerAccordion">

			<div class="col-md-3 footer-0">
				<?php /*<a href="<?php echo home_url() ?>"><img class="my-4 " src="<?php echo get_template_directory_uri()?>/src/img/logo-white.svg" /></a>*/?>
			</div>

			<div class="col-md-3 footer-1">
				<ul class="d-flex d-md-block unstyled align-items-center justify-content-center flex-wrap">
					<?php $menu = wp_get_nav_menu_items('footer-1'); ?>
					<?php foreach($menu as $item): ?>
						<li>
							<a class="text-white" href="<?php echo $item->url ?>">
								<?php echo $item->title ?>
							</a>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>

			<div class="col-md-3 footer-2">
				<ul class="d-flex d-md-block unstyled align-items-center justify-content-center flex-wrap">
					<?php $menu = wp_get_nav_menu_items('footer-2'); ?>
					<?php foreach($menu as $item): ?>
						<li>
							<a class="text-white" href="<?php echo $item->url ?>">
								<?php echo $item->title ?>
							</a>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>

			<div class="col-md-3 footer-3">
				<ul class="mt-3 mt-md-0 d-flex d-md-block unstyled align-items-center justify-content-center">
					<?php $menu = wp_get_nav_menu_items('footer-3'); ?>
					<?php foreach($menu as $item): ?>
						<li>
							<a class="text-primary" href="<?php echo $item->url ?>">
								<?php echo $item->title ?>
							</a>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>

		</div>
	</div>
<?php /*
	<div class="copyright text-center">
		<hr>
		<div class="d-md-flex justify-content-between align-items-center">
			<div class="d-md-flex align-items-center">
                <p><a href="#" class="text-white">Regulamin serwisu</a></p>
                <p><a href="#" class="text-white">Polityka prywatności</a></p>
			</div>
			<div class="allrights text-white">
                <p>Wszystkie prawa zastrzeżone: Lorem Ipsim Sp. z o.o.</p>
            </div>
		</div>
	</div>
*/?>
</footer>



<?php /* COOKIES INFORMATION */ ?>
<?php if(get_query_var('show_cookie_info')): ?>
	<div id="cookie-bar" class="animated">
		<div class="py-3 bg-primary">
      <div class="container">
        <div class="row">
          <div class='col-12 col-md-8 d-sm-flex align-items-center justify-content-center text-white text-center'>
            <span>Dla zapewnienia najwyższej jakości usług nasza strona korzysta z plików cookies. Dalsze korzystanie ze strony, bez zmiany ustawień przeglądarki, oznacza, że wyrażasz zgodę na wykorzystanie plików cookies, zgodnie z naszą <a class="font-primary text-white" target="_blank" href="<?php echo get_permalink(3)?>">Polityką Prywatności</a></span>
          </div>
          <div class="col-12 col-md-4 text-center">
            <a class="btn btn-default mt-2" href="#close-cookie-bar">Ok, dziękuję</a>
          </div>
        </div>
      </div>
		</div>
	</div>
<?php endif; ?>
<?php wp_footer(); ?>

</body>
</html>