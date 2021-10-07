<?php get_header(); ?>
    <section class="news">
        <div class="news__container _container">
            <div class="news__top _scr-item">
                <div class="news__title-top">
                    <h2 class="news__title title _scr-item">Новини</h2>
                </div>
                <div class="news__all">
                    <a href="<?php echo esc_url(is_ssl() ? home_url('/', 'https') : home_url('/', 'http')); ?>news" class="news__all-link" data-da=".news__title-top ,992,1">Усі новини</a>
                </div>
            </div>
            <div class="news__content">
                <div class="news__slider _swiper">
                    <?php
                    $argsNews = array(
                        'post_type' => 'post',
                        'category_name' => 'news',
                        'posts_per_page' => 20,
                        'order' => 'DESC'
                    );
                    $queryNews = new WP_Query( $argsNews );
                    $countNews = count($queryNews -> posts);
                    if ( $queryNews->have_posts() ) {
                        while ( $queryNews->have_posts() ) {
                            $queryNews->the_post();?>
                            <div class="news__slide" id="post-<?php echo get_post() -> ID ?>">
                                <div class="slide-news">
                                    <div class="slide-news__image _ibg">
                                        <?php echo get_the_post_thumbnail(null, 'small' ); ?>
                                    </div>
                                    <div class="slide-news__content">
                                        <div class="slide-news__title">
                                            <a href="<?php the_permalink(); ?>" class="slide-news__title-link">
                                                <?php the_title(); ?>
                                            </a>
                                        </div>
                                        <div class="slide-news__text">
                                    <span>
                                       <?php the_excerpt(); ?>
                                        </span>
                                        </div>
                                        <div class="slide-news__button">
                                            <a href="<?php the_permalink(); ?>" class="slide-news__link">детальніше</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php }
                    }
                    wp_reset_postdata();
                    ?>
                </div>
                <?php
                if ($countNews > 4) { ?>
                    <div class="news__pagination">
                        <div class="news__arrow news__arrow_prev"></div>
                        <div class="news__arrow news__arrow_next"></div>
                    </div>
                <?php } ?>

            </div>
        </div>
    </section>
    <section class="incoming">
        <div class="incoming__container _container">
            <div class="incoming__top">
                <h2 class="incoming__title title _scr-item">Умови вступу</h2>
            </div>
            <div class="incoming__body">
                <div class="body-incoming _tabs">
                    <nav class="body-incoming__nav">
                        <button class="body-incoming__item _tabs-item _active">
                            <span>Мікрорайон</span>
                        </button>
                        <button class="body-incoming__item _tabs-item">
                            <span>Перший клас</span>
                        </button>
                        <button class="body-incoming__item _tabs-item">
                            <span>5-9 клас</span>
                        </button>
                        <button class="body-incoming__item _tabs-item">
                            <span>10-11 клас</span>
                        </button>
                    </nav>
                    <div class="body-incoming__blocks">
                        <div class="body-incoming__block _tabs-block _active">
                            <div class="body-incoming__content">
                                <div class="body-incoming__title">
                                    ПРИЙОМ ДО 1 – ГО КЛАСУ ЛІЦЕЮ МІЖНАРОДНИХ ВІДНОСИН №51
                                    м.КИЄВА
                                </div>
                                <div class="body-incoming__text">
                                    Ласкаво просимо! Ліцей міжнародних відносин № 51
                                    розпочинає набір дітей до 1 класу на 2020-2021 навч.рік
                                    з 03 квітня 2020р. Установча конференція для батьків
                                    майбутніх першокласників відбудеться 12 березня о 16 год
                                    у актовій залі Ліцею.
                                </div>
                            </div>
                            <div class="body-incoming__bottom">
                                <div class="body-incoming__button">
                                    <a href="/" class="body-incoming__link">Детальніше</a>
                                </div>
                            </div>
                        </div>
                        <div class="body-incoming__block _tabs-block">
                            <div class="body-incoming__content">
                                <div class="body-incoming__title">
                                    ПРИЙОМ ДО 4 – ГО КЛАСУ ЛІЦЕЮ МІЖНАРОДНИХ ВІДНОСИН №51
                                    м.КИЄВА
                                </div>
                                <div class="body-incoming__text">
                                    Ласкаво просимо! Ліцей міжнародних відносин № 51
                                    розпочинає набір дітей до 1 класу на 2020-2021 навч.рік
                                    з 03 квітня 2020р. Установча конференція для батьків
                                    майбутніх першокласників відбудеться 12 березня о 16 год
                                    у актовій залі Ліцею.
                                </div>
                            </div>
                            <div class="body-incoming__bottom">
                                <div class="body-incoming__button">
                                    <a href="/" class="body-incoming__link">Детальніше</a>
                                </div>
                            </div>
                        </div>
                        <div class="body-incoming__block _tabs-block">
                            <div class="body-incoming__content">
                                <div class="body-incoming__title">
                                    ПРИЙОМ ДО 3 – ГО КЛАСУ ЛІЦЕЮ МІЖНАРОДНИХ ВІДНОСИН №51
                                    м.КИЄВА
                                </div>
                                <div class="body-incoming__text">
                                    Ласкаво просимо! Ліцей міжнародних відносин № 51
                                    розпочинає набір дітей до 1 класу на 2020-2021 навч.рік
                                    з 03 квітня 2020р. Установча конференція для батьків
                                    майбутніх першокласників відбудеться 12 березня о 16 год
                                    у актовій залі Ліцею.
                                </div>
                            </div>
                            <div class="body-incoming__bottom">
                                <div class="body-incoming__button">
                                    <a href="/" class="body-incoming__link">Детальніше</a>
                                </div>
                            </div>
                        </div>
                        <div class="body-incoming__block _tabs-block">
                            <div class="body-incoming__content">
                                <div class="body-incoming__title">
                                    ПРИЙОМ ДО 2 – ГО КЛАСУ ЛІЦЕЮ МІЖНАРОДНИХ ВІДНОСИН №51
                                    м.КИЄВА
                                </div>
                                <div class="body-incoming__text">
                                    Ласкаво просимо! Ліцей міжнародних відносин № 51
                                    розпочинає набір дітей до 1 класу на 2020-2021 навч.рік
                                    з 03 квітня 2020р. Установча конференція для батьків
                                    майбутніх першокласників відбудеться 12 березня о 16 год
                                    у актовій залі Ліцею.
                                </div>
                            </div>
                            <div class="body-incoming__bottom">
                                <div class="body-incoming__button">
                                    <a href="/" class="body-incoming__link">Детальніше</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php
    $argsNews = array(
        'post_type' => 'partnership',
        'posts_per_page' => 15,
        'order' => 'DESC'
    );
    $queryNews = new WP_Query( $argsNews );
    $countNews = count($queryNews -> posts);
    if ( $queryNews->have_posts() ) { ?>
    <section class="word-map">
        <div class="word-map__container _container">
            <div class="word-map__top">
                <h2 class="word-map__title title _scr-item">Партнерство</h2>
            </div>
            <div class="word-map__content">
                <div class="word-map__items">
                    <div class="word-map__item">
                        <div class="info-word">
                            <ul class="info-word__list">
                            <?php while ( $queryNews->have_posts() ) { $queryNews->the_post(); ?>
                                <li data-country="<?php the_field('country'); ?>"><?php the_title(); ?></li>
                                 <?php } ?>
                            </ul>
                        </div>
                    </div>
                    <div class="word-map__item">
                        <object data="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/word/map.svg'); ?>" type="image/svg+xml"></object>
                    </div>
                </div>
                <div class="word-map__info">
                    <div class="word-map__country"><span></span></div>
                    <div class="word-map__text"></div>
                </div>
            </div>
        </div>
    </section>
 <?php } wp_reset_postdata(); ?>
<?php
$argsAchievements = array(
    'post_type' => 'post',
    'category_name' => 'achievements',
    'posts_per_page' => 12,
);
$queryAchievements = new WP_Query($argsAchievements);
if ($queryAchievements->have_posts()) { ?>
    <?php while ($queryAchievements->have_posts()) {
        $queryAchievements->the_post();
        $args = array(
            'post_type' => 'attachment',
            'numberposts' => -1,
            'post_status' => 'any',
            'post_parent' => $post->ID,
            'order' => 'DESC'
        );
        $attachments = get_posts($args);
        if ($attachments) { ?>
            <section class="achievements _scr-item">
                <div class="achievements__container _container">
                    <div class="achievements__top">
                        <h2 class="achievements__title title _scr-item">Досягнення</h2>
                    </div>
                    <div class="achievements__body _gallery">
                        <?php foreach ($attachments as $attachment) { ?>
                            <div class="achievements__item">
                                <a href="<?php echo esc_url($attachment->guid); ?>" class="achievements__link">
                                    <img src="<?php echo esc_url($attachment->guid); ?>"
                                         alt="<?php echo $attachment->post_title; ?>"/>
                                </a>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </section>
        <?php }
    } ?>
<?php }
wp_reset_postdata();
?>
<?php get_footer(); ?>