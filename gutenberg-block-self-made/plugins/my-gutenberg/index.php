<?php
/*
Plugin Name: My Gutenberg
Plugin URI: https://www.example.co.jp/
Description: プラグインの説明
Version: 1.0.0
Author: 作者の名前
Author URI: https://www.example.co.jp/author
*/

function my_gutenberg() {
  wp_register_script(
    'my-gutenberg-script',
    plugins_url( 'block.js', __FILE__ ),
    array('wp-blocks', 'wp-element'),
    '1.0.0',
    true
  );

  register_block_type('my-gutenberg/foo', array(
    'editor_script' => 'my-gutenberg-script'
  ));
}

add_action( 'init', 'my_gutenberg');