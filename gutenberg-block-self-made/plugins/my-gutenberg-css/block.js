(function(blocks, element) {
  var el = element.createElement;

  blocks.registerBlockType('my-gutenberg-css/foo', {
    title: 'My Gutenberg CSS',
    icon: 'carrot',
    category: 'layout',
    edit: function(props) {
      return el(
        'p',
        {class: props.className},
        'Hello World, Pタグのeditコンテンツです。'
      );
    },
    save: function() {
      return el(
        'p',
        {},
        'Hello World, Pタグのsaveコンテンツです。'
      );
    }
  })
}(
  window.wp.blocks,
  window.wp.element
));