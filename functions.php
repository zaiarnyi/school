<?php

add_action( 'wp_enqueue_scripts', 'school_scripts');
add_action( 'wp_enqueue_scripts', 'school_styles');
/* Разрешаем добовлять картинки формата WebP */
add_filter( 'mime_types', 'webp_upload_mimes' );
/** Разрешаем добовлять картинки к записям */
add_theme_support( 'post-thumbnails', array( 'post') );
/** Включаем меню в админке */
add_theme_support('menus');
/** Добавляем классы ссылкам */
add_filter( 'nav_menu_link_attributes', 'filter_nav_menu_link_attributes', 10, 4 );
add_filter('nav_menu_item_id', '__return_false');
// add_filter('nav_menu_css_class', 'my_remove_all_class_item', 10, 2 );

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
	'circle-menu'    => 'Кругле меню',    //Название меню в шаблоне
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
/*удаляет Класс и ID */
function my_remove_all_class_item($classes, $item) {
  $classes = '';
  return $classes;
}


?>