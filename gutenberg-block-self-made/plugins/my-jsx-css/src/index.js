/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

// Register the block
registerBlockType( 'my-gutenberg-jsx-css/foo', {
    edit: function () {
        return (
          <>
            <p className="editor-test"> Hello world (from the editor)</p>
          </>
        );
    },
    save: function () {
        return (
          <p className="front-test"> Hola mundo (from the frontend) </p>
        );
    },
} );