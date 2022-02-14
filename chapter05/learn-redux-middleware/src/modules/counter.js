import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';


// 액션 타입 선언
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

// 액션 생성 함수 생성한다
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

function* increaseSaga() {
    yield delay(1000); // 1초를 기다린다
    yield put(increase()); // put은 특정 액션을 디스패치 해준다
}
function* decreaseSaga() {
    yield delay(1000); // 1초를 기다린다
    yield put(decrease()); // put은 특정 액션을 디스패치 해준다
}

export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga); // 모든 INCREASE_ASYNC 액션을 처리한다
    yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션을 처리한다
}

/*
// getState를 쓰지 않는다면 파라미터로 받아올 필요 없다
export const increaseAsync = () => dispatch => { // dispatch를 파라미터로 받아온다
    setTimeout(() => {
        dispatch(increase())
    }, 1000); // 1초 뒤에 increase 액션을 dispatch
};
export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease()) // 1초 뒤에 decrease 액션을 dispatch
    }, 1000);
};
*/

// 초깃값 선언 (초깃값이 무조건 객체이거나 배열일 필요가 없다 그래서 숫자로 선언)
const initialState = 0;

// 리듀서 작성
export default function counter(state = initialState, action) {
    // export default 바로 내보낸다
    // state의 기본값은 initialState, action을 파라미터로 가져온다
    switch (action.type) {
        case INCREASE:
            return state + 1; // 타입이 INCREASE일때는 +1
        case DECREASE:
            return state - 1; // 타입이 DECREASE일때는 -1
        default:
            return state; // 둘 다 아니면 그대로 출
    }
}