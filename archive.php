<?php
/*
Template Name: News
Template Post Type: page
*/
?>

<?php get_header(); ?>
<div class="news-page">
    <div class="news-page__container _container">
        <div class="news-page__top">
            <div class="news-page__title title _scr-item"><?php echo get_the_title(get_option('page_for_posts', true)); ?></div>
        </div>
        <div class="news-page__body">
                <?php
                $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
                $argsNews = array(
                    'post_type' => 'post',
                    'category_name' => 'news',
                    'posts_per_page' => 10,
                    'order' => 'DESC',
                    'paged' => $paged
                );
                query_posts( $argsNews );

                // Цикл WordPress
                if( have_posts() ){ ?>
                    <div class="news-page__items">
                    <?php while( have_posts() ){
                        the_post(); ?>
                        <div class="news-page__item" id="post-<?php echo get_post()->ID ?>">
                            <div class="item-news-page">
                                <a href="<?php the_permalink(); ?>" class="item-news-page__image _ibg">
                                    <?php echo get_the_post_thumbnail(null, 'medium'); ?>
                                </a>
                                <div class="item-news-page__body">
                                    <div class="item-news-page__top">
                                        <div class="item-news-page__name">
                                            <a href="<?php the_permalink(); ?>"><?php the_title() ?></a>
                                        </div>
                                        <div class="item-news-page__date"><?php the_time('d.m.Y') ?></div>
                                    </div>
                                    <div class="item-news-page__content"><?php the_content(); ?></div>
                                    <div class="item-news-page__button">
                                        <a href="<?php the_permalink(); ?>" class="item-news-page__link">
                                            детальніше
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                    </div>
                    <div class="news-page__pagination">
                    <?php $argsPagination = array(
                        'show_all' => false, // показаны все страницы участвующие в пагинации
                        'end_size' => 1,     // количество страниц на концах
                        'mid_size' => 1,     // количество страниц вокруг текущей
                        'prev_next' => true,  // выводить ли боковые ссылки "предыдущая/следующая страница".
                        'prev_text' => __('Previous'),
                        'next_text' => __('Next'),
                        'add_args' => false, // Массив аргументов (переменных запроса), которые нужно добавить к ссылкам.
                        'add_fragment' => '',     // Текст который добавиться ко всем ссылкам.
                        'screen_reader_text' => __('Posts navigation'),
                    );

                    the_posts_pagination(); ?>
                    </div>
                    <?php wp_reset_query();
                }
                ?>
        </div>
    </div>
</div>
<?php get_footer(); ?>
