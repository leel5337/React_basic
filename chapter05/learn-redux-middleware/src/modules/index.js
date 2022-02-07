import { combineReducers } from 'redux';
// combineReducers를 사용하여 루트 리듀서를 만들어준다
import counter from './counter';
// 만들어준 counter를 불러와준

const rootReducer = combineReducers({ counter });
// rootReducer응 만들어주어 combineReducers안에 counter를 불러온다다

export default rootReducer; // 만들어 준 rootReducer를 내보내준다