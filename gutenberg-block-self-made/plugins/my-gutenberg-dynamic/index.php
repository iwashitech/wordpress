<?php
/*
Plugin Name: My Gutenberg Dynamic
Plugin URI: https://www.example.co.jp/
Description: プラグインの説明
Version: 1.0.0
Author: 作者の名前
Author URI: https://www.example.co.jp/author
*/

function my_gutenberg_dynamic() {
  wp_register_script(
    'my-gutenberg-dynamic-script',
    plugins_url( 'block.js', __FILE__ ),
    array('wp-blocks', 'wp-element'),
    '1.0.0',
    true
  );

  register_block_type('my-gutenberg-dynamic/foo', array(
    'editor_script' => 'my-gutenberg-dynamic-script'
  ));
}
add_action( 'init', 'my_gutenberg_dynamic');