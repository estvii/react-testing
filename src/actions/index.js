import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types'
import axios from 'axios';

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export const fetchComments = () => {
    return async(dispatch) => {
        const response = await axios.get('http://jsonplaceholder.typicode.com/comments');
        dispatch({type: FETCH_COMMENTS, payload: response})
    }
}

// with redux promise applied to middleware
// export function fetchComments() {
//     const response = axios.get('http://jsonplaceholder.typicode.com/comments');
//     return {
//         type: FETCH_COMMENTS,
//         payload: response
//     }
// }