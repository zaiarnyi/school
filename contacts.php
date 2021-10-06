<?php
/*
Template Name: Contacts
Template Post Type: page
*/
?>
<?php get_header(); ?>
<div class="contacts-banner">
    <div class="contacts-banner__container _container">
        <div class="contacts-banner__top">
            <div class="contacts-banner__title title _scr-item"><?php the_title(); ?></div>
        </div>
        <div class="contacts-banner__body _ibg" data-title="<?php  esc_url(bloginfo('name')); ?>">
           <?php echo get_the_post_thumbnail(null, 'large' ); ?>
        </div>
    </div>
</div>
<div class="contacts-info">
    <div class="contacts-info__container _container">
        <div class="contacts-info__body">
            <div class="contacts-info__title"><?php  esc_url(bloginfo('name')); ?></div>
            <div class="contacts-info__items">
                <div class="contacts-info__item">
                    <p>01024 Україна, м.Київ</p>
                    <p>вул. П. Орлика, 13</p>
                    </div>
                <div class="contacts-info__item">
                    <div class="info-contacts">
                        <ul class="info-contacts__list"><p>Email</p>
                            <li>
                            <a href="mailto:<?php echo get_theme_mod('sample_first_email_contacts'); ?>" class="footer__contacts-link" >
                                <?php echo get_theme_mod('sample_first_email_contacts'); ?>
                            </a>
                            </li>
                            <li>
                                <a href="mailto:<?php echo get_theme_mod('sample_second_email_contacts'); ?>" class="footer__contacts-link" >
                                    <?php echo get_theme_mod('sample_second_email_contacts'); ?>
                                </a>
                            </li>
                        </ul>
                        <ul class="info-contacts__list"><p>Телефон</p>
                            <li><?php $int1 = preg_replace('/[^0-9]/', '', get_theme_mod('sample_first_phone_contacts')); ?>
                                <a href="tel:+<?php echo $int1; ?>" class="footer__contacts-link" >
                                    <?php echo get_theme_mod('sample_first_phone_contacts'); ?>
                                </a>
                            </li>
                            <li><?php $int2 = preg_replace('/[^0-9]/', '', get_theme_mod('sample_second_phone_contacts')); ?>
                                <a href="tel:+<?php echo $int2; ?>" class="footer__contacts-link" >
                                    <?php echo get_theme_mod('sample_second_phone_contacts'); ?>
                                </a>
                            </li>
                            <li><?php $int3 = preg_replace('/[^0-9]/', '', get_theme_mod('sample_third_phone_contacts')); ?>
                                <a href="tel:+<?php echo $int3; ?>" class="footer__contacts-link" >
                                    <?php echo get_theme_mod('sample_third_phone_contacts'); ?>
                                </a>
                            </li>
                            <li><?php $int4 = preg_replace('/[^0-9]/', '', get_theme_mod('sample_fourth_phone_contacts')); ?>
                                <a href="tel:+<?php echo $int4; ?>" class="footer__contacts-link" >
                                    <?php echo get_theme_mod('sample_fourth_phone_contacts'); ?>
                                </a>
                            </li>
                            <p>Факс</p>
                            <li><?php $int5 = preg_replace('/[^0-9]/', '', get_theme_mod('sample_fifth_phone_contacts')); ?>
                                <a href="tel:+<?php echo $int5; ?>" class="footer__contacts-link" >
                                    <?php echo get_theme_mod('sample_fifth_phone_contacts'); ?>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="contacts-info__map #map">
            <?php the_content(); ?>
        </div>
    </div>
</div>
<?php get_footer(); ?>


