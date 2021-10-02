<?php
/*
Template Name: Single Posts
Template Post Type: posts
*/
?>

<?php get_header(); ?>
<?php setPostViews(get_the_ID()); ?>
<div class="full-news-info">
    <div class="full-news-info__container _container">
        <div class="full-news-info__top">
            <div class="full-news-info__title title _scr-item"><?php the_title(); ?></div>
        </div>
        <div class="full-news-info__body">
            <div class="body-full-info">
                <div class="body-full-info__image _ibg" data-currentData="<?php the_time('d.m.Y') ?>">
                    <?php the_post_thumbnail() ?>
                </div>
                <div class="body-full-info__descr"><span class="body-full-info__school">Ліцей №51</span></div>
                <div class="body-full-info__content"> <?php the_content(); ?>
                </div>
            </div>
        </div>
            <?php
            $args = array(
                'post_type'   => 'attachment',
                'numberposts' => -1,
                'post_status' => 'any',
                'post_parent' => $post->ID,
                'exclude'     => get_post_thumbnail_id()
            );
            $attachments = get_posts( $args );
            if ( $attachments ) { ?>
                <div class="full-news-info__additional" data-spollers>
                    <div class="additional-full-news">
                        <div class="additional-full-news__title" data-spoller> Подивитись інші фотографії</div>
                        <div class="additional-full-news__items _gallery">
                            <?php foreach ( $attachments as $attachment ) { ?>
                                <div class="additional-full-news__item _ibg">
                                    <a href="<?php echo esc_url($attachment -> guid); ?>">
                                        <img src="<?php echo esc_url($attachment -> guid); ?>" alt="<?php echo $attachment -> post_title; ?>"/>
                                    </a>
                                </div>
                           <?php } } ?>
                        </div>
                    </div>
                </div>
    </div>
</div>
<?php get_footer(); ?>
