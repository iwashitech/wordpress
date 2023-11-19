/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';

// Register the block
registerBlockType( 'my-gutenberg-dynamic-jsx/foo', {
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
    },
    example: {
      attributes: {
          content: 'Hello World',
      },
    },
    edit: function (props) {
      const {
        attributes: { content },
        setAttributes,
        className,
        example
        } = props;
        const blockProps = useBlockProps();
        const onChangeContent = ( newContent ) => {
            setAttributes( { content: newContent } );
        };
        return (
          <RichText
            { ...blockProps }
            tagName="p"
            className="editor-test"
            onChange={ onChangeContent }
            value={ content }
          />
        );
    },
    save: function (props) {
        const blockProps = useBlockProps.save();
        return (
          <RichText.Content
            { ...blockProps }
            tagName="p"
            className="front-test"
            value={ props.attributes.content }
          />
        );
    },
} );