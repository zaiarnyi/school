</main>
			<footer class="footer">
				<div class="footer__container _container">
					<div class="footer__content">
						<div class="footer__top">
							<div class="footer__title"><?php esc_url(bloginfo('name'));  ?></div>
						</div>
						<div class="footer__body">
							<div class="footer__items">
								<div class="footer__item">
									<p>01024 Україна, м.Київ</p>
									<p>вул. П. Орлика, 13</p>
								</div>
								<div class="footer__item">
									<ul class="footer__contacts-list">
										<div class="footer__contacts-item">
											<p>Телефон:</p>
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
											<p>Факс:</p>
											<li><?php $int5 = preg_replace('/[^0-9]/', '', get_theme_mod('sample_fifth_phone_contacts')); ?>
												<a href="tel:+<?php echo $int5; ?>" class="footer__contacts-link" >
                                                    <?php echo get_theme_mod('sample_fifth_phone_contacts'); ?>
												</a>
											</li>
										</div>
										<div class="footer__contacts-item">
											<p>Email:</p>
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
										</div>
									</ul>
								</div>
                                <?php if(get_theme_mod('sample_first_social_contacts') or get_theme_mod('sample_second_social_contacts') or get_theme_mod('sample_third_social_contacts')){ ?>
                                    <div class="footer__item">
                                        <p class="footer__social-title">Соціальні мережі</p>
                                        <ul class="footer__social-list">
                                            <?php if(get_theme_mod('sample_first_social_contacts')){ ?>
                                                <li data-text="facebook">
                                                    <a href="<?php echo get_theme_mod('sample_first_social_contacts','https://facebook.com'); ?>" target="_blank" rel="noopener noreferrer">
                                                        <img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/icons/fb.svg');?>" alt="link to out official facebook page" />
                                                    </a>
                                                </li>
                                            <?php } ?>
                                            <?php if(get_theme_mod('sample_second_social_contacts')){ ?>
                                                <li data-text="telegram">
                                                    <a href="<?php echo get_theme_mod('sample_second_social_contacts','https://telegram.com'); ?>" target="_blank" rel="noopener noreferrer" >
                                                        <img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/icons/tg.svg');?>" alt="link to out official telegram group" />
                                                    </a>
                                                </li>
                                            <?php } ?>
                                            <?php if(get_theme_mod('sample_third_social_contacts')){ ?>
                                                <li data-text="instagram">
                                                    <a href="<?php echo get_theme_mod('sample_third_social_contacts', 'https://instagram.com'); ?>" target="_blank" rel="noopener noreferrer">
                                                        <img src="<?php echo esc_url(get_bloginfo('template_url') . '/assets/img/icons/inst.svg');?>" alt="link to out official instagram page"/>
                                                    </a>
                                                </li>
                                            <?php } ?>
                                        </ul>
                                    </div>
                                <?php } ?>
							</div>
						</div>
						<div
							class="footer__bottom"
							aria-label="2008 — 2019 International Relations Lyceum 51 | Ліцей Міжнародних Відносин №51"
							title="design and create code Denis Zayarnyi"
						>
							© 2008 — <?php echo date('Y') ?> International Relations Lyceum 51 | Ліцей
							Міжнародних Відносин №51
						</div>
					</div>
				</div>
			</footer>
		</div>
<?php wp_footer(); ?>
	</body>
</html>
