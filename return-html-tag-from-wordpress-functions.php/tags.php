<?php
// functions.php
function show_tag_items() {
  $list = '';
  foreach((get_the_tags()) as $tag) {
    $list .= "<li>{$tag->name}</li>";
  }
  return $list;
}
add_shortcode( 'show_tag_items', 'show_tag_items' );
?>

<?php
// テンプレート
echo do_shortcode('[show_tag_items]');
?>