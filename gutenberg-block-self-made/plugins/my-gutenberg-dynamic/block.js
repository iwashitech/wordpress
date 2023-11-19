(function(blocks, editor, element) {
  var el = element.createElement;
  var RichText = editor.RichText;

  var blockStyle = {
    backgroundColor: '#efa336',
    color: '#fff',
    padding: '16px',
  };

  blocks.registerBlockType('my-gutenberg-dynamic/foo', {
    title: 'My Gutenberg Dynamic',
    icon: 'car',
    category: 'layout',
    attributes: {
      content: {
        type: 'array',
        source: 'children',
        selector: 'p',
      },
    },
    edit: function(props) {
      var content = props.attributes.content;
      function onChangeContent( newContent ) {
        props.setAttributes( { content: newContent } );
      }
      return el(
        RichText,
        {
          tagName: 'p',
          className: props.className,
          onChange: onChangeContent,
          value: content,
          style: blockStyle
        }
      );
    },
    save: function(props) {
      return el(
        RichText.Content,
        {
          tagName: 'p',
          value: props.attributes.content,
          style: blockStyle
        }
      );
    }
  })
}(
  window.wp.blocks,
  window.wp.editor,
  window.wp.element
));




