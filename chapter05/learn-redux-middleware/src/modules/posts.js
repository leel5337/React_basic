import * as postsAPI from '../api/posts'; // api/posts 안의 함수 모두 불러온다
import {
    reducerUtils,
    handleAsyncActions,
    handleAsyncActionsById,
    createPromiseSaga, // asyncUtils.js에서 생성해준 것을 불러와준다
    createPromiseSagaById
} from '../lib/asyncUtils';
import { takeEvery, getContext } from 'redux-saga/effects';

// 액션 타입
// 포스트 여러개 조회
const GET_POSTS = 'GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// 포스트 하나 조회
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';
const GO_TO_HOME = 'GO_TO_HOME';
const CLEAR_POST = 'CLEAR_POST';

export const getPosts = () => ({ type: GET_POSTS }); // payload는 파라미터 용도이며 meta는 리듀서에서 id를 알기위한 용도이다
export const getPost = id => ({
    type: GET_POST,
    payload: id,
    meta: id
});

export const getPosts = () => ({ type: GET_POSTS });
export const getPost = id => ({ type: GET_POST, payload: id, meta: id });

const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPostById);
function* goToHomeSaga() {
    const history = yield getContext('history');
    history.push('/');
}

/*
function* getPostsSaga() {
    try {
        const posts = yield call(postsAPI.getPosts); // 특정함수를 호출하는 call을 사용하여 특정 함수를 호출하고 결과물이 반환 될 때까지 기다려줄 수 있다
        yield put({
            type: GET_POSTS_SUCCESS,
            payload: posts
        }); // 성공 액션 디스패치
    } catch (e) {
        yield put({
            type: GET_POSTS_ERROR,
            error: true,
            payload: e
        }); // 실패 액션 디스패치
    }
}

// 액션이 가지고 있는 값을 조회하고 싶으면 action을 파라미터로 받아와서 사용 할 수 있다
function* getPostSaga(action) {
    const param = action.payload;
    const id = action.meta;
    try {
        const post = yield call(postsAPI.getPostById, param); // API 함수에 넣어주고 싶은 인자는 call 함수의 두번째 인자부터 순서대로 넣어주면 된다
        yield put({
            type: GET_POST_SUCCESS,
            payload: post,
            meta: id
        });
    } catch (e) {
        yield put({
            type: GET_POST_ERROR,
            error: true,
            payload: e,
            meta: id
        });
    }
}
*/


// 액션들을 모니터링하는 작업
export function* postsSaga() {
    yield takeEvery(GET_POSTS, getPostsSaga);
    yield takeEvery(GET_POST, getPostSaga);
    yield takeEvery(GO_TO_HOME, goToHomeSaga);
}

// 3번째 인자를 사용하면 withExtraArgument 에서 넣어준 값들을 사용 할 수 있다
export const goToHome = () =>
    /* // thunk 함수로 반환하는 것
    (dispatch, getState, { history }) => {
    history.push('/');};
    */

    // 일반 객체를 반환
    ({type: GET_POSTS});

export const clearPost = () => ({ type: CLEAR_POST });


// initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링
const initialState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial()
};

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return handleAsyncActionsById(GET_POST, 'post', true)(state, action);
        default:
            return state;
    }
}