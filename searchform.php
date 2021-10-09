<form role="search" class="field-search" method="get" action="<?php echo home_url( '/' ); ?>">
        <input autocomplete="off" type="text" name="s" id="s" class="input field-search__input" data-value="Строка пошуку..."  value="<?php echo get_search_query(); ?>"/>
        <button class="field-search__button" title="Очистити пошук" aria-label="Очистити пошук">
            <img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/icons/search-close.svg'); ?>" alt="content picture" />
        </button>
        <input type="hidden" value="post" name="post_type" />
        <input type="submit" class="search-submit" value="<?php echo esc_attr_x( 'Search', 'submit button' ) ?>" aria-label="<?php echo esc_attr_x( 'Search', 'submit button' ) ?>"/>
</form>