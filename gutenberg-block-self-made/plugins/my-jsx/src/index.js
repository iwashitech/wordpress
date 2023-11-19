/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

// Register the block
registerBlockType( 'my-gutenberg-jsx/foo', {
    edit: function () {
        return (
          <>
            <p className="test"> Hello world (from the editor)</p>
          </>
        );
    },
    save: function () {
        return (
          <p> Hola mundo (from the frontend) </p>
        );
    },
} );