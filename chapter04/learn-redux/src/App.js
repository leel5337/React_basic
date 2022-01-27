import React from 'react';
import TodosContainer from './containers/TodosContainer';
import CounterContainer from './containers/CounterContainer';
// CounterContainer를 랜더링해준다

function App() {
    return (
        <div>
            <CounterContainer />
            <hr />
            <TodosContainer />
        </div>
    );
}

export default App;

