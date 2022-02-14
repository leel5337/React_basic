import { combineReducers } from 'redux';
// combineReducers를 사용하여 루트 리듀서를 만들어준다
import counter, { counterSaga } from './counter';
// 만들어준 counter를 불러와준다
import posts from './posts';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({ counter, posts });
// rootReducer응 만들어주어 combineReducers안에 counter를 불러온다
export function* rootSaga() {
    yield all([counterSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer; // 만들어 준 rootReducer를 내보내준다