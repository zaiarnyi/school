<?php
/*
Template Name: Search
*/
?>

<?php get_header(); ?>
    <div class="search-page">
        <div class="search-page__container _container">
            <div class="search-page__top" style="display:flex;align-items:center;">
                <div class="search-page__result">Результат пошуку: </div>
                <div class="search-page__title title title_search _scr-item"><?php echo get_search_query() ; ?></div>
            </div>
            <div class="search-page__body">
            <?php if(have_posts()) { ?>
                     <div class="news-page__items">
            <?php } ?>
            <?php
            if (have_posts()) :
            while (have_posts()) : the_post(); ?>
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
                            <div class="item-news-page__content"><?php echo wp_trim_words( get_the_content(), 100, '...' ); ?></div>
                            <div class="item-news-page__button">
                                <a href="<?php the_permalink(); ?>" class="item-news-page__link">
                                    детальніше
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endwhile; ?>
                        </div>
            <?php else : ?>
                <div style="text-align:center;padding:40px 0;color:rgba(0,0,0,.4);background-color:#fff;border-radius:10px;padding:40px 0;">Вибачте за Вашим результату нічого не знайдено</div>
                 <div class="staf__pagination" style="margin-top:40px;">
                 <?php
                 $argsPagination = array(
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

                 the_posts_pagination($argsPagination); ?>
             </div>
            <?php endif; ?>
            </div>
        </div>
    </div>
<?php get_footer(); ?>