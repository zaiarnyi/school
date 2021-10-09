<?php
/*
Template Name: Incoming
Template Post Type: incoming
*/
?>

<?php get_header(); ?>
<div class="article">
    <div class="article__container _container">
         <div class="article__top">
                <div class="article__title title title_incoming _scr-item"><?php the_title(); ?></div>
            </div>
        <div class="article__body article__body_custom">
            <?php if(get_the_post_thumbnail()) { ?>
              <div class="article__image"><?php echo get_the_post_thumbnail(null, 'large' ); ?></div>
             <?php } ?>
            <?php the_content(); ?>
        </div>
    </div>
</div>
<?php get_footer(); ?>
