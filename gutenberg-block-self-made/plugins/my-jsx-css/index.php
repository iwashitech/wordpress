<?php
/**
 * Plugin Name: My Gutenberg JSX CSS
 */

function my_gutenberg_jsx_css() {
  register_block_type( __DIR__ );
}
add_action( 'init', 'my_gutenberg_jsx_css' );