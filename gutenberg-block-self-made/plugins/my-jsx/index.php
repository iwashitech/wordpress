<?php
/**
 * Plugin Name: My Gutenberg JSX
 */

function my_gutenberg_jsx() {
  register_block_type( __DIR__ );
}
add_action( 'init', 'my_gutenberg_jsx' );