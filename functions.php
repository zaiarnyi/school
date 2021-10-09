<?php
require get_template_directory() . '/customize/customize.php';
add_action( 'wp_enqueue_scripts', 'school_scripts');
add_action( 'wp_enqueue_scripts', 'school_styles');
/* Разрешаем добовлять картинки формата WebP */
add_filter( 'mime_types', 'webp_upload_mimes' );
/** Разрешаем добовлять картинки к записям */
add_theme_support( 'post-thumbnails' );
/** Включаем меню в админке */
add_theme_support('menus');
/** Добавляем классы ссылкам */
add_filter( 'nav_menu_link_attributes', 'filter_nav_menu_link_attributes', 10, 4 );
add_filter('nav_menu_item_id', '__return_false');
/** Заполняет поле для атрибута alt на основе заголовка изображения при его вставки в контент поста. */
add_filter( 'wp_prepare_attachment_for_js', 'change_empty_alt_to_title' );
/** Дополним базовый robots.txt */
add_action( 'wp_head', 'wp_robots', 1 );
@ini_set ('upload_max_size', '120M');
@ini_set ('post_max_size', '120M');
@ini_set ('max_execution_time', '300');

function school_styles(){
	 wp_enqueue_style( 'style', get_stylesheet_uri() ); 
}

function school_scripts(){
		wp_enqueue_script( 'libs-script', get_template_directory_uri() . '/assets/js/vendors.min.js' , array(), null, true );
		wp_enqueue_script( 'custom-script', get_template_directory_uri() . '/assets/js/app.min.js', array(), null, true );
}

function webp_upload_mimes( $existing_mimes ) {
	// add webp to the list of mime types
	$existing_mimes['webp'] = 'image/webp';

	// return the array back to the function with our added mime type
	return $existing_mimes;
}

register_nav_menus(array(
	'main-menu'    => 'Меню в шапке',    //Название меню в шаблоне
));


function filter_nav_menu_link_attributes( $atts, $item, $args, $depth ) {
if ( in_array( $args->theme_location, ['main-menu'] ) ) {
	if ( $item) {
		$class = 'menu__link';
		$atts['class'] = isset( $atts['class'] ) ? "{$atts['class']} $class" : $class;
	}
}else if( in_array( $args->theme_location, ['circle-menu'] ) ) {
	if ( $item) {
		$class = 'menu__link';
		$atts['class'] = isset( $atts['class'] ) ? "{$atts['class']} $class" : $class;
	}
}
	return $atts;
}


function change_empty_alt_to_title( $response ) {
    if ( ! $response['alt'] ) {
        $response['alt'] = sanitize_text_field( $response['title'] );
    }

    return $response;
}



function getPostViews($postID){
    $count_key = 'post_views_count';
    $count = get_post_meta($postID, $count_key, true);
    if($count==''){
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
        return "0";
    }
    return $count;
}
function setPostViews($postID) {
    $count_key = 'post_views_count';
    $count = get_post_meta($postID, $count_key, true);
    if($count==''){
        $count = 0;
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
    }else{
        $count++;
        update_post_meta($postID, $count_key, $count);
    }
}
add_filter('manage_posts_columns', 'posts_column_views');
add_action('manage_posts_custom_column', 'posts_custom_column_views',5,2);
function posts_column_views($defaults){
    $defaults['post_views'] = __('Просмотры');
    return $defaults;
}
function posts_custom_column_views($column_name, $id){
    if($column_name === 'post_views'){
        echo getPostViews(get_the_ID());
    }
}

add_filter('navigation_markup_template', 'my_navigation_template', 10, 2 );
function my_navigation_template( $template, $class ){
    return '
	<nav class="navigation %1$s" role="navigation">
		<div class="nav-links">%3$s</div>
	</nav>    
	';
};
