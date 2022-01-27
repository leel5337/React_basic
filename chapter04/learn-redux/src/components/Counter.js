import React from 'react';

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) { //5가지 props를 가져온다
    const onChange = e => {
        onSetDiff(parseInt(e.target.value, 10)); // input의 value는 문자열이기때문에 e.target.value 타입을 숫자로 변환한다
    };
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} min="1" onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default Counter;

