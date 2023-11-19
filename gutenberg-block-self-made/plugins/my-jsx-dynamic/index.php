<?php
/**
 * Plugin Name: My Gutenberg Dynamic JSX
 */

function my_gutenberg_jsx_dynamic() {
  register_block_type( __DIR__ );
}
add_action( 'init', 'my_gutenberg_jsx_dynamic' );

function shortcode_chat( $atts, $content = null ) {
	extract( shortcode_atts( array(
			'img' => 'https://haniwaman.com/cms/wp-content/uploads/2018/10/haniwa-150x150.png',
			'name' => 'はにわまん',
			'comment'=> '',
	), $atts ) );

  $output = <<<HTML
    <div class="chat aaa">
      <figure class="chat-img">
        <img src="{$img}" alt="">
        <figcaption>{$name}</figcaption>
      </figure>
      <div class="chat-content">{$comment}</div>
    </div>
  HTML;

	return $output;
}
add_shortcode( 'chat', 'shortcode_chat' );