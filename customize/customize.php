<?php

/** Customizer */
add_action('customize_register', function($wp_customize){
    /**
     * Add our Header & Navigation Panel
     */
    $wp_customize->add_panel( 'popup_panel',
        array(
            'title' => __( 'Popup' ),
            'description' => esc_html__( 'Текст во всплывающих окнах' ), // Include html tags such as
            'priority' => 160, // Not typically needed. Default is 160
            'capability' => 'edit_theme_options', // Not typically needed. Default is edit_theme_options
            'theme_supports' => '', // Rarely needed
            'active_callback' => '', // Rarely needed
        )
    );

    /**
     * Add our Sample Section
     */
    $wp_customize->add_section( 'exclusive_custom_controls_section',
        array(
            'title' => __( 'Специальные Условия '),
            'description' => esc_html__( 'Варианты Выбора во вспплывющем окне' ),
            'panel' => 'popup_panel', // Only needed if adding your Section to a Panel
            'priority' => 160, // Not typically needed. Default is 160
            'capability' => 'edit_theme_options', // Not typically needed. Default is edit_theme_options
            'theme_supports' => '', // Rarely needed
            'active_callback' => '', // Rarely needed
            'description_hidden' => 'false', // Rarely needed. Default is False
        )
    );
    // First field
    $wp_customize->add_setting( 'sample_first_users_default_textarea',
        array(
            'default' => 'Получи горячего лида за 480 рублей вместо 600 при заказе до 1 апреля',
            'transport' => 'refresh',
        )
    );

    $wp_customize->add_control( 'sample_first_users_default_textarea',
        array(
            'label' => __( 'Первый вариант' ),
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

    $wp_customize->add_setting( 'sample_first_me_default_text',
        array(
            'default' => 'Обработка заявок 24/7/365',
            'transport' => 'refresh',
        )
    );

    $wp_customize->add_control( 'sample_first_me_default_text',
        array(
            'label' => __( 'Кратко первое' ),
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