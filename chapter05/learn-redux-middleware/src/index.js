import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // react-redux에서Provider를 불러와준다
import { createStore, applyMiddleware } from 'redux'; // redux에서 createStore를 불러와준다
import rootReducer from './modules';
// import myLogger from './middlewares/myLogger'; // 만들어준 rootReuder도 불러와준다
import logger from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({ // saga 미들웨어를 만듭니다
    context: {
        history: customHistory
    }
});

const store = createStore(
    rootReducer,
    // logger 를 사용하는 경우에 logger가 가장 마지막에 와야한다
    composeWithDevTools(
        applyMiddleware(
            ReduxThunk.withExtraArgument({ history: customHistory }),
            sagaMiddleware, // saga 미들웨어를 적용
            logger
        )
    )
);

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해준다

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
