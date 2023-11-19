(function(blocks, element) {
  var el = element.createElement;

  var blockStyle = {
    backgroundColor: '#efa336',
    color: '#fff',
    padding: '16px',
  };

  blocks.registerBlockType('my-gutenberg/foo', {
    title: 'My Gutenberg',
    icon: 'pets',
    category: 'layout',
    edit: function() {
      return el(
        'p',
        {style: blockStyle},
        'Hello World, Pタグのeditコンテンツです。'
      );
    },
    save: function() {
      return el(
        'p',
        {style: blockStyle},
        'Hello World, Pタグのsaveコンテンツです。'
      );
    }
  })
}(
  window.wp.blocks,
  window.wp.element
));




