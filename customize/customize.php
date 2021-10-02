<?php

/** Customizer */
add_action('customize_register', function($wp_customize){
    /**
     * Add our Header & Navigation Panel
     */
    $wp_customize->add_panel( 'staff_info_panel',
        array(
            'title' => __( 'Служебная информация' ),
            'description' => esc_html__( 'Текст во всплывающих окнах' ), // Include html tags such as
            'priority' => 160, // Not typically needed. Default is 160
            'capability' => 'edit_theme_options', // Not typically needed. Default is edit_theme_options
            'theme_supports' => '', // Rarely needed
            'active_callback' => '', // Rarely needed
        )
    );

    /**
     * Add our Sample Section - Phone
     */
    $wp_customize->add_section( 'exclusive_custom_controls_section_phone',
        array(
            'title' => __( 'Телефоны'),
            'description' => esc_html__( 'Связь средствами телефонии' ),
            'panel' => 'staff_info_panel', // Only needed if adding your Section to a Panel
            'priority' => 160, // Not typically needed. Default is 160
            'capability' => 'edit_theme_options', // Not typically needed. Default is edit_theme_options
            'theme_supports' => '', // Rarely needed
            'active_callback' => '', // Rarely needed
            'description_hidden' => 'false', // Rarely needed. Default is False
        )
    );
    /**
     * Add our Sample Section - Email
     */
    $wp_customize->add_section( 'exclusive_custom_controls_section_email',
        array(
            'title' => __( 'Email'),
            'description' => esc_html__( 'Связь средствами электронной почты' ),
            'panel' => 'staff_info_panel', // Only needed if adding your Section to a Panel
            'priority' => 160, // Not typically needed. Default is 160
            'capability' => 'edit_theme_options', // Not typically needed. Default is edit_theme_options
            'theme_supports' => '', // Rarely needed
            'active_callback' => '', // Rarely needed
            'description_hidden' => 'false', // Rarely needed. Default is False
        )
    );

    /**
     * Add our Sample Section - Social
     */
    $wp_customize->add_section( 'exclusive_custom_controls_section_social',
        array(
            'title' => __( 'Соц. Сети'),
            'description' => esc_html__( 'Связь средствами социальных сетей' ),
            'panel' => 'staff_info_panel', // Only needed if adding your Section to a Panel
            'priority' => 160, // Not typically needed. Default is 160
            'capability' => 'edit_theme_options', // Not typically needed. Default is edit_theme_options
            'theme_supports' => '', // Rarely needed
            'active_callback' => '', // Rarely needed
            'description_hidden' => 'false', // Rarely needed. Default is False
        )
    );

    //====================================================
    // Phone
    $wp_customize->add_setting( 'sample_first_phone_contacts',
        array(
            'default' => '+38 (044) 253 5423',
            'transport' => 'refresh',
        )
    );
    $wp_customize->add_control( 'sample_first_phone_contacts',
        array(
            'label' => __( 'Первый номер телефона' ),
            'description' => esc_html__( 'Номер для отображения' ),
            'section' => 'exclusive_custom_controls_section_phone',
            'priority' => 10, // Optional. Order priority to load the control. Default: 10
            'type' => 'text',
            'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
            'input_attrs' => array( // Optional.
                'style' => 'border: 1px solid #999',
                'placeholder' => __( 'Введите номер' ),
            ),
        )
    );

    $wp_customize->add_setting( 'sample_second_phone_contacts',
        array(
            'default' => '+38 (044) 253 3567',
            'transport' => 'refresh',
        )
    );
    $wp_customize->add_control( 'sample_second_phone_contacts',
        array(
            'label' => __( 'Второй номер телефона' ),
            'description' => esc_html__( 'Номер для отображения' ),
            'section' => 'exclusive_custom_controls_section_phone',
            'priority' => 10, // Optional. Order priority to load the control. Default: 10
            'type' => 'text',
            'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
            'input_attrs' => array( // Optional.
                'style' => 'border: 1px solid #999',
                'placeholder' => __( 'Введите номер' ),
            ),
        )
    );

    $wp_customize->add_setting( 'sample_third_phone_contacts',
        array(
            'default' => '+38 (044) 253 0551',
            'transport' => 'refresh',
        )
    );
    $wp_customize->add_control( 'sample_third_phone_contacts',
        array(
            'label' => __( 'Третий номер телефона' ),
            'description' => esc_html__( 'Номер для отображения' ),
            'section' => 'exclusive_custom_controls_section_phone',
            'priority' => 10, // Optional. Order priority to load the control. Default: 10
            'type' => 'text',
            'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
            'input_attrs' => array( // Optional.
                'style' => 'border: 1px solid #999',
                'placeholder' => __( 'Введите номер' ),
            ),
        )
    );

    $wp_customize->add_setting( 'sample_fourth_phone_contacts',
        array(
            'default' => '+38 (044) 253 1448',
            'transport' => 'refresh',
        )
    );
    $wp_customize->add_control( 'sample_fourth_phone_contacts',
        array(
            'label' => __( 'Четвертый номер телефона' ),
            'description' => esc_html__( 'Номер для отображения' ),
            'section' => 'exclusive_custom_controls_section_phone',
            'priority' => 10, // Optional. Order priority to load the control. Default: 10
            'type' => 'text',
            'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
            'input_attrs' => array( // Optional.
                'style' => 'border: 1px solid #999',
                'placeholder' => __( 'Введите номер' ),
            ),
        )
    );

    $wp_customize->add_setting( 'sample_fifth_phone_contacts',
        array(
            'default' => '+38 (044) 254 0203',
            'transport' => 'refresh',
        )
    );
    $wp_customize->add_control( 'sample_fifth_phone_contacts',
        array(
            'label' => __( 'Факс' ),
            'description' => esc_html__( 'Номер для отображения' ),
            'section' => 'exclusive_custom_controls_section_phone',
            'priority' => 10, // Optional. Order priority to load the control. Default: 10
            'type' => 'text',
            'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
            'input_attrs' => array( // Optional.
                'style' => 'border: 1px solid #999',
                'placeholder' => __( 'Введите номер' ),
            ),
        )
    );


    //==========Email
    $wp_customize->add_setting( 'sample_first_email_contacts',
        array(
            'default' => 'irl51_kiev@ukr.net',
            'transport' => 'refresh',
        )
    );
    $wp_customize->add_control( 'sample_first_email_contacts',
        array(
            'label' => __( 'Первая электронная почта' ),
            'description' => esc_html__( 'Номер для отображения' ),
            'section' => 'exclusive_custom_controls_section_email',
            'priority' => 10, // Optional. Order priority to load the control. Default: 10
            'type' => 'text',
            'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
            'input_attrs' => array( // Optional.
                'style' => 'border: 1px solid #999',
                'placeholder' => __( 'Введите электронную почту' ),
            ),
        )
    );

    $wp_customize->add_setting( 'sample_second_email_contacts',
        array(
            'default' => 'lmv@irl51.kiev.ua',
            'transport' => 'refresh',
        )
    );
    $wp_customize->add_control( 'sample_second_email_contacts',
        array(
            'label' => __( 'Вторая электронная почта' ),
            'description' => esc_html__( 'Номер для отображения' ),
            'section' => 'exclusive_custom_controls_section_email',
            'priority' => 10, // Optional. Order priority to load the control. Default: 10
            'type' => 'text',
            'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
            'input_attrs' => array( // Optional.
                'style' => 'border: 1px solid #999',
                'placeholder' => __( 'Введите электронную почту' ),
            ),
        )
    );

    //==========Social
    $wp_customize->add_setting( 'sample_first_social_contacts',
        array(
            'default' => '',
            'transport' => 'refresh',
        )
    );
    $wp_customize->add_control( 'sample_first_social_contacts',
        array(
            'label' => __( 'Facebook' ),
            'description' => esc_html__( 'Ссылка на Facebook' ),
            'section' => 'exclusive_custom_controls_section_social',
            'priority' => 10, // Optional. Order priority to load the control. Default: 10
            'type' => 'text',
            'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
            'input_attrs' => array( // Optional.
                'style' => 'border: 1px solid #999',
                'placeholder' => __( 'Введите ссылка на Facebook' ),
            ),
        )
    );

    $wp_customize->add_setting( 'sample_second_social_contacts',
        array(
            'default' => '',
            'transport' => 'refresh',
        )
    );
    $wp_customize->add_control( 'sample_second_social_contacts',
        array(
            'label' => __( 'Telegram' ),
            'description' => esc_html__( 'Ссылка на Telegram' ),
            'section' => 'exclusive_custom_controls_section_social',
            'priority' => 10, // Optional. Order priority to load the control. Default: 10
            'type' => 'text',
            'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
            'input_attrs' => array( // Optional.
                'style' => 'border: 1px solid #999',
                'placeholder' => __( 'Введите ссылка на Telegram' ),
            ),
        )
    );

    $wp_customize->add_setting( 'sample_third_social_contacts',
        array(
            'default' => '',
            'transport' => 'refresh',
        )
    );
    $wp_customize->add_control( 'sample_third_social_contacts',
        array(
            'label' => __( 'Instagram' ),
            'description' => esc_html__( 'Ссылка на Instagram' ),
            'section' => 'exclusive_custom_controls_section_social',
            'priority' => 10, // Optional. Order priority to load the control. Default: 10
            'type' => 'text',
            'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
            'input_attrs' => array( // Optional.
                'style' => 'border: 1px solid #999',
                'placeholder' => __( 'Введите ссылка на Instagram' ),
            ),
        )
    );























    // second field
    $wp_customize->add_setting( 'sample_second_users_default_textarea',
        array(
            'default' => 'Получи горячую линию или тех поддержку 24/7 со скидкой в 10% при заказе от 3х месяцев',
            'transport' => 'refresh',
        )
    );

    $wp_customize->add_control( 'sample_second_users_default_textarea',
        array(
            'label' => __( 'Второй вариант' ),
            'description' => esc_html__( 'Текст который увидит пользователь' ),
            'section' => 'exclusive_custom_controls_section',
            'priority' => 10, // Optional. Order priority to load the control. Default: 10
            'type' => 'textarea',
            'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
            'input_attrs' => array( // Optional.
                'style' => 'border: 1px solid #999',
                'placeholder' => __( 'Введите текст' ),
            ),
        )
    );

    $wp_customize->add_setting( 'sample_second_me_default_text',
        array(
            'default' => 'Привязка к конверсии',
            'transport' => 'refresh',
        )
    );

    $wp_customize->add_control( 'sample_second_me_default_text',
        array(
            'label' => __( 'Кратко второе' ),
            'description' => esc_html__( 'Текст который Вы получите на почту' ),
            'section' => 'exclusive_custom_controls_section',
            'priority' => 10, // Optional. Order priority to load the control. Default: 10
            'type' => 'text', // Can be either text, email, url, number, hidden, or date
            'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
            'input_attrs' => array( // Optional.
                'style' => 'border: 1px solid rebeccapurple',
                'placeholder' => __( 'Введите текст' ),
            ),
        )
    );

    // third field
    $wp_customize->add_setting( 'sample_third_users_default_textarea',
        array(
            'default' => 'Запусти нашего робота и получи голосовые записи бесплатно до 1 апреля',
            'transport' => 'refresh',
        )
    );

    $wp_customize->add_control( 'sample_third_users_default_textarea',
        array(
            'label' => __( 'Третий вариант' ),
            'description' => esc_html__( 'Текст который увидит пользователь' ),
            'section' => 'exclusive_custom_controls_section',
            'priority' => 10, // Optional. Order priority to load the control. Default: 10
            'type' => 'textarea',
            'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
            'input_attrs' => array( // Optional.
                'style' => 'border: 1px solid #999',
                'placeholder' => __( 'Введите текст' ),
            ),
        )
    );

    $wp_customize->add_setting( 'sample_third_me_default_text',
        array(
            'default' => 'Оптимизируем работу с клиентами',
            'transport' => 'refresh',
        )
    );

    $wp_customize->add_control( 'sample_third_me_default_text',
        array(
            'label' => __( 'Кратко третий' ),
            'description' => esc_html__( 'Текст который Вы получите на почту' ),
            'section' => 'exclusive_custom_controls_section',
            'priority' => 10, // Optional. Order priority to load the control. Default: 10
            'type' => 'text', // Can be either text, email, url, number, hidden, or date
            'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
            'input_attrs' => array( // Optional.
                'style' => 'border: 1px solid rebeccapurple',
                'placeholder' => __( 'Введите текст' ),
            ),
        )
    );

    // fourth field
    $wp_customize->add_setting( 'sample_fourth_users_default_textarea',
        array(
            'default' => 'Закажи написание продающего профессионального скрипта за 30 000 рублей вместо 40 000 до 1 апреля',
            'transport' => 'refresh',
        )
    );

    $wp_customize->add_control( 'sample_fourth_users_default_textarea',
        array(
            'label' => __( 'Четвертый вариант' ),
            'description' => esc_html__( 'Текст который увидит пользователь' ),
            'section' => 'exclusive_custom_controls_section',
            'priority' => 10, // Optional. Order priority to load the control. Default: 10
            'type' => 'textarea',
            'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
            'input_attrs' => array( // Optional.
                'style' => 'border: 1px solid #999',
                'placeholder' => __( 'Введите текст' ),
            ),
        )
    );

    $wp_customize->add_setting( 'sample_fourth_me_default_text',
        array(
            'default' => 'Записи звонков и вся отчетность в вашем',
            'transport' => 'refresh',
        )
    );

    $wp_customize->add_control( 'sample_fourth_me_default_text',
        array(
            'label' => __( 'Кратко четвертый' ),
            'description' => esc_html__( 'Текст который Вы получите на почту' ),
            'section' => 'exclusive_custom_controls_section',
            'priority' => 10, // Optional. Order priority to load the control. Default: 10
            'type' => 'text', // Can be either text, email, url, number, hidden, or date
            'capability' => 'edit_theme_options', // Optional. Default: 'edit_theme_options'
            'input_attrs' => array( // Optional.
                'style' => 'border: 1px solid rebeccapurple',
                'placeholder' => __( 'Введите текст' ),
            ),
        )
    );

    //Конец функции
});


?>