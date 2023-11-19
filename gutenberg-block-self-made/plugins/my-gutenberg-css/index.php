<?php
/*
Plugin Name: My Gutenberg CSS
Plugin URI: https://www.example.co.jp/
Description: プラグインの説明
Version: 1.0.0
Author: 作者の名前
Author URI: https://www.example.co.jp/author
*/

function my_gutenberg_css() {
  wp_register_script(
    'my-gutenberg-css-script',
    plugins_url( 'block.js', __FILE__ ),
    array('wp-blocks', 'wp-element'),
    '1.0.0',
    true
  );

  wp_register_style(
    'my-gutenberg-css-style-editor',
    plugins_url('editor.css', __FILE__),
    array('wp-edit-blocks'),
    '1.0.0',
    'all'
  );

  wp_register_style(
    'my-gutenberg-css-style-front',
    plugins_url('style.css', __FILE__),
    array(),
    '1.0.0',
    'all'
  );

  register_block_type('my-gutenberg-css/foo', array(
    'editor_script' => 'my-gutenberg-css-script',
    'editor_style' => 'my-gutenberg-css-style-editor',
    'style' => 'my-gutenberg-css-style-front',
  ));
}
add_action( 'init', 'my_gutenberg_css');