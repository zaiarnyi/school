<!DOCTYPE html>
<html lang="ua">
	<head>
		<title><?php esc_url(bloginfo('name')); echo " | "; esc_url(bloginfo('description'));  ?></title>
		<meta charset="UTF-8" />
		<meta name="format-detection" content="telephone=no" />
		<link rel="shortcut icon" href="favicon.ico" />
		<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover">
		<?php wp_head(); ?>
	</head>
	<body>
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
									<a href="<?php echo esc_url(home_url('/', 'https')); ?>">
										<picture>
											<source srcset="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/icons/logo.webp'); ?>" type="image/webp" />
											<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/icons/logo.png'); ?>" alt=""/>
									</picture>
									</a>
								</div>
								<div class="menu__content">
									<ul class="menu__list">
										<li><a href="#" class="menu__link">Головна</a></li>
										<li><a href="#" class="menu__link">Наш ліцей</a></li>
										<li><a href="#" class="menu__link">Історія</a></li>
										<li>
											<a href="#" class="menu__link">Міжнародна діяльність</a>
										</li>
										<li>
											<a href="#" class="menu__link">Прозорість діяльності</a>
										</li>
										<li><a href="#" class="menu__link">Стоп булінг!</a></li>
										<li><a href="#" class="menu__link">Контакти</a></li>
									</ul>
								</div>
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
					<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/banner/logo.svg'); ?>" alt="content picture"/>
				</section>
				<section class="slider">
					<div class="slider__container _container">
						<div class="slider__content">
							<div class="slider__items _swiper">
								<div class="slider__item">
									<a href="/">
										<picture >
											<source srcset="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/slider/1.webp'); ?>" type="image/webp" />
											<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/slider/1.jpg'); ?>" alt="title" /></picture >
									</a>
								</div>
								<div class="slider__item">
									<a href="/" >
										<picture >
											<source srcset="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/slider/2.webp'); ?>" type="image/webp" />
											<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/slider/2.jpg'); ?>" alt="title" /></picture >
									</a>
								</div>
								<div class="slider__item">
									<a href="/" >
										<picture >
											<source srcset="<?php echo esc_url(get_bloginfo('template_url') . '/assets/iimg/slider/3.webp'); ?>" type="image/webp" />
											<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/slider/3.jpg'); ?>" alt="title" /></picture >
									</a>
								</div>
								<div class="slider__item">
									<a href="/" >
										<picture >
											<source srcset="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/slider/4.webp'); ?>" type="image/webp" />
											<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/slider/4.jpg'); ?>" alt="title" /></picture >
									</a>
								</div>
								<div class="slider__item">
									<a href="/" >
										<picture >
											<source srcset="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/slider/1.webp'); ?>" type="image/webp" />
											<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/slider/1.jpg'); ?>" alt="title" /></picture >
									</a>
								</div>
								<div class="slider__item">
									<a href="/" >
										<picture >
											<source srcset="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/slider/2.webp'); ?>" type="image/webp" />
											<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/slider/2.jpg'); ?>" alt="title" /></picture >
									</a>
								</div>
								<div class="slider__item">
									<a href="/">
										<picture>
											<source srcset="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/slider/3.webp'); ?>" type="image/webp" />
											<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/slider/3.jpg'); ?>" alt="title" />
										</picture>
									</a>
								</div>
							</div>
							<div class="slider__button">
								<div class="slider__pagination slider__pagination_prev"></div>
								<div class="slider__pagination slider__pagination_next"></div>
							</div>
						</div>
					</div>
				</section>
				<section class="main-menu">
					<div class="main-menu__container _container">
						<div class="main-menu__items" data-da=".menu__content,992,1">
							<div class="main-menu__item">
								<a href="/" class="item-menu">
									<div class="item-menu__image">
										<img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/menu/1.svg'); ?>" alt="content picture"/>
									</div>
									<span>Адміністрація</span>
								</a>
							</div>
							<div class="main-menu__item">
								<a href="/" class="item-menu">
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