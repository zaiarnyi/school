<?php
/*
Template Name: Administration
Template Post Type: administration,page
*/
?>

<?php get_header(); ?>
    <div class="staf">
        <div class="staf__container _container">
            <div class="staf__top">
                <div class="staf__title title _scr-item"><?php the_title(); ?></div>
            </div>
                <?php
                $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
                $argsAdmin = array(
                    'post_type' => 'team',
                    'posts_per_page' => 10,
                    'order' => 'DESC',
                    'paged' => $paged
                );
                query_posts( $argsAdmin );
                the_field('admin_work');
                // Цикл WordPress
                if( have_posts() ){ ?>
                    <div class="staf__body">
                   <?php while( have_posts() ){
                        the_post(); ?>
                        <div class="staf__item" id="post-<?php echo get_post()->ID ?>">
                            <div class="item-staf">
                                <div class="item-staf__icons">
                                    <?php echo get_the_post_thumbnail(null, 'medium'); ?>
                                </div>
                                <div class="item-staf__body">
                                    <div class="item-staf__name"><span><?php the_title(); ?></span></div>
                                    <div class="item-staf__position"><?php the_field('admin_work'); ?></div>
                                    <div class="item-staf__status"><?php the_field('regalyy') ?></div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                    </div>
                    <div class="staf__pagination">
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

                        the_posts_pagination(); ?>
                    </div>
                    <?php  wp_reset_query();
                }
                ?>
        </div>
    </div>
<?php get_footer(); ?>