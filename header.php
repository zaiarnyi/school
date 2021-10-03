<!DOCTYPE html>
<html lang="ua">
	<head>
		<title><?php  esc_url(bloginfo('name')); echo " | "; is_home() ? esc_url(bloginfo('description')) : esc_url(wp_title('') || the_title());  ?></title>
		<meta charset="UTF-8" />
		<meta name="format-detection" content="telephone=no" />
		<link rel="shortcut icon" href="<?php echo esc_url(get_bloginfo('template_url') . '/favicon.ico'); ?>" />
		<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover">
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>
		<div class="wrapper">
			<header class="header">
				<div class="header__container _container">
					<div class="header__content">
						<div class="header__menu menu">
							<div class="menu__icon icon-menu" role="button" aria-label="burger menu" tabindex="0" >
								<span></span> 
								<span></span> 
								<span></span>
							</div>
							<nav class="menu__body">
								<div class="menu__title">
									<a href="<?php echo esc_url(is_ssl() ? home_url('/', 'https') : home_url('/', 'http')); ?>">
										<picture>
											<source srcset="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/icons/logo.webp'); ?>" type="image/webp" />
											<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/icons/logo.png'); ?>" alt=""/>
									</picture>
									</a>
								</div>
                                <?php
                                wp_nav_menu( array(
                                    'menu'            => 'main-menu',              // (string) Название выводимого меню (указывается в админке при создании меню, приоритетнее
                                    // чем указанное местоположение theme_location - если указано, то параметр theme_location игнорируется)
                                    'container'       => 'nav',           // (string) Контейнер меню. Обворачиватель ul. Указывается тег контейнера (по умолчанию в тег div)
                                    'container_class' => 'menu__content',              // (string) class контейнера (div тега)
                                    'container_id'    => '',              // (string) id контейнера (div тега)
                                    'menu_class'      => 'menu__list',          // (string) class самого меню (ul тега)
                                    'menu_id'         => '',              // (string) id самого меню (ul тега)
                                    'echo'            => true,            // (boolean) Выводить на экран или возвращать для обработки
                                    'fallback_cb'     => 'wp_page_menu',  // (string) Используемая (резервная) функция, если меню не существует (не удалось получить)
                                    'before'          => '',              // (string) Текст перед <a> каждой ссылки
                                    'after'           => '',              // (string) Текст после </a> каждой ссылки
                                    'link_before'     => '<span>',              // (string) Текст перед анкором (текстом) ссылки
                                    'link_after'      => '</span>',              // (string) Текст после анкора (текста) ссылки
                                    'depth'           => 0,               // (integer) Глубина вложенности (0 - неограничена, 2 - двухуровневое меню)
                                    'walker'          => '',              // (object) Класс собирающий меню. Default: new Walker_Nav_Menu
                                    'theme_location'  => 'main-menu'               // (string) Расположение меню в шаблоне. (указывается ключ которым было зарегистрировано меню в функции register_nav_menus)
                                ) );
                                ?>
								<div class="menu__search">
									<div class="search-menu">
										<button class="search-menu__button">
											<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/icons/search.svg'); ?>" alt="content picture" />
										</button>
										<div class="search-menu__field">
											<div class="field-search">
												<input autocomplete="off" type="text" name="search" id="search" class="input field-search__input" data-value="Строка пошуку..." />
												<button class="field-search__button">
													<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/icons/search-close.svg'); ?>" alt="content picture" />
												</button>
											</div>
										</div>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</header>
			<main class="page">
				<section class="banner">
					<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/banner/logo.svg'); ?>" alt="logo <?php  esc_url(bloginfo('name')); ?>"/>
				</section>
				<section class="slider">
					<div class="slider__container _container">
						<div class="slider__content">
							<div class="slider__items _swiper">
                                <?php
                                $query = new WP_Query( 'category_name=news&posts_per_page=15&meta_key=post_views_count&orderby=meta_value_num' );
                                $count = count($query -> posts);
                                if ( $query->have_posts() ) {
                                    while ( $query->have_posts() ) {
                                        $query->the_post(); ?>
                                        <div class="slider__item">
                                            <a href="<?php the_permalink(); ?>">
                                                <?php echo get_the_post_thumbnail(null, 'medium' ); ?>
                                            </a>
                                        </div>
                                   <?php }
                                }
                                wp_reset_postdata();
                                ?>
							</div>
                            <?php
                            if ( $query->have_posts() AND $count > 4) { ?>
                            <div class="slider__button">
                                <div class="slider__pagination slider__pagination_prev"></div>
                                <div class="slider__pagination slider__pagination_next"></div>
                            </div>
                            <?php } wp_reset_postdata(); ?>

						</div>
					</div>
				</section>
				<section class="main-menu">
					<div class="main-menu__container _container">
						<div class="main-menu__items" data-da=".menu__content,992,1">
							<div class="main-menu__item">
								<a href="<?php echo esc_url(is_ssl() ? home_url('/', 'https') : home_url('/', 'http')); ?>administration" class="item-menu">
									<div class="item-menu__image">
										<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/menu/1.svg'); ?>" alt="content picture"/>
									</div>
									<span>Адміністрація</span>
								</a>
							</div>
							<div class="main-menu__item">
								<a href="<?php echo esc_url(is_ssl() ? home_url('/', 'https') : home_url('/', 'http')); ?>teachers" class="item-menu">
									<div class="item-menu__image">
										<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/menu/2.svg'); ?>" alt="content picture" />
									</div>
									<span>Вчителі</span>
								</a>
							</div>
							<div class="main-menu__item">
								<a href="/" class="item-menu">
									<div class="item-menu__image">
										<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/menu/3.svg'); ?>" alt="content picture" />
									</div>
									<span>Програма</span>
								</a>
							</div>
							<div class="main-menu__item">
								<a href="/" class="item-menu">
									<div class="item-menu__image">
										<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/menu/4.svg'); ?>" alt="content picture" />
									</div>
									<span>Документи</span>
								</a>
							</div>
							<div class="main-menu__item">
								<a href="/" class="item-menu">
									<div class="item-menu__image">
										<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/menu/5.svg'); ?>" alt="content picture" />
									</div>
									<span>Прозорість діяльності</span>
								</a>
							</div>
							<div class="main-menu__item">
								<a href="/" class="item-menu">
									<div class="item-menu__image">
										<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/menu/6.svg'); ?>" alt="content picture"/>
									</div>
									<span>Оголошення</span>
								</a>
							</div>
						</div>
					</div>
				</section>