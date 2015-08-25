var Constants = module.exports = {
    // consts for identifying the source of a close request
    CLOSE_REQUEST_ESC: 'CLOSE_REQUEST_ESC',
    CLOSE_REQUEST_OVERLAY: 'CLOSE_REQUEST_OVERLAY',
    CLOSE_REQUEST_CANCEL: 'CLOSE_REQUEST_CANCEL',

    // class nanes for the overlay and content
    CLASS_NAMES:{
        overlay: {
            base: 'ReactModal__Overlay',
            afterOpen: 'ReactModal__Overlay--after-open',
            beforeClose: 'ReactModal__Overlay--before-close'
        },
        content: {
            base: 'ReactModal__Content',
            afterOpen: 'ReactModal__Content--after-open',
            beforeClose: 'ReactModal__Content--before-close'
        }
    },

    OVERLAY_STYLES:{
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
};
