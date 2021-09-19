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
        <div class="contacts-banner__body _ibg">
            <picture>
                <source srcset="img/contacts/school.webp" type="image/webp">
                <img src="img/contacts/school.jpg?_v=1631362948196" alt=""/></picture>
        </div>
    </div>
</div>
<div class="contacts-info">
    <div class="contacts-info__container _container">
        <div class="contacts-info__body">
            <div class="contacts-info__title">Ліцей Міжнародних Відносин №51</div>
            <div class="contacts-info__items">
                <div class="contacts-info__item"><p>01024 Україна, м.Київ</p>
                    <p>вул. П. Орлика, 13</p></div>
                <div class="contacts-info__item">
                    <div class="info-contacts">
                        <ul class="info-contacts__list"><p>Email</p>
                            <li><a href="mailto:irl51_kiev@ukr.net" class="info-contacts__link">irl51_kiev@ukr.net</a>
                            </li>
                            <li><a href="mailto:lmv@irl51.kiev.ua"
                                   class="info-contacts__link">lmv@irl51.kiev.ua</a></li>
                        </ul>
                        <ul class="info-contacts__list"><p>Телефон</p>
                            <li><a href="tel:+380442535423" class="info-contacts__link">+38 (044) 253 5423</a>
                            </li>
                            <li><a href="tel:+380442533567" class="info-contacts__link">+38 (044) 253 3567</a>
                            </li>
                            <li><a href="tel:+380442530551" class="info-contacts__link">+38 (044) 253 0551</a>
                            </li>
                            <li><a href="tel:+380442531448" class="info-contacts__link">+38 (044) 253 1448</a>
                            </li>
                            <p>Факс</p>
                            <li><a href="tel:380442540203" class="info-contacts__link">+38 (044) 254 0203</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php get_footer(); ?>
