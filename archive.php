<?php
/*
Template Name: Posts
Template Post Type: page
*/
?>

<?php get_header(); ?>
<div class="news-page">
    <div class="news-page__container _container">
        <div class="news-page__top">
            <div class="news-page__title title _scr-item"><?php echo get_the_title( get_option('page_for_posts', true) ); ?></div>
        </div>
        <div class="news-page__body">
            <div class="news-page__items">
                <?php
                $argsNews = array(
                    'post_type' => 'post',
                    'category_name' => 'news',
                    'posts_per_page' => 10,
                    'order' => 'DESC'
                );
                $queryNews = new WP_Query( $argsNews );
                $countNews = count($queryNews -> have_posts());
                if ( $queryNews->have_posts() ) {
                while ( $queryNews->have_posts() ) {
                $queryNews->the_post();?>
                    <div class="news-page__item" id="post-<?php echo get_post() -> ID ?>">
                            <div class="item-news-page">
                                <a href="<?php the_permalink(); ?>" class="item-news-page__image _ibg">
                                    <?php echo get_the_post_thumbnail(null, 'medium' ); ?>
                                </a>
                                <div class="item-news-page__body">
                                    <div class="item-news-page__top">
                                        <div class="item-news-page__name">
                                            <a href="<?php the_permalink(); ?>"><?php  the_title() ?></a>
                                        </div>
                                        <div class="item-news-page__date"><?php the_time('d.m.Y') ?></div>
                                    </div>
                                    <div class="item-news-page__content"><?php the_content(); ?></div>
                                    <div class="item-news-page__button"><a href="<?php the_permalink(); ?>" class="item-news-page__link">детальніше</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                <?php }
                }
                wp_reset_postdata();
                ?>
            </div>
        </div>
    </div>
</div>
<?php
if($countNews > 0){ ?>
<div class="pagging">
    <a href="" class="pagging__arrow"></a>
    <ul class="pagging__list">
        <li><a href="" class="pagging__item _active"><span>1</span></a></li>
        <li><a href="" class="pagging__item"><span>2</span></a></li>
        <li><a href="" class="pagging__item"><span>3</span></a></li>
        <li><a href="" class="pagging__item"><span>4</span></a></li>
        <li><a href="" class="pagging__item"><span>5</span></a></li>
    </ul>
    <a href="" class="pagging__arrow"></a>
</div>
<?php } ?>
<?php get_footer(); ?>
