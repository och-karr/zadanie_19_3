import uuid from uuid;

/*typy akcji*/
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

/*kreatory akcji*/
function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment() {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

function thumbUpComment(thumbUp) {
    return {
        type: THUMB_UP_COMMENT,
        thumbUp,
        id
    }
}

function addComment(thumbDown) {
    return {
        type: THUMB_DOWN_COMMENT,
        thumbDown,
        id
    }
}