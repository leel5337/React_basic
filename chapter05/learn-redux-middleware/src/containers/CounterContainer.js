import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
// useSelector, useDispatch를 사용해야되므로 react-redux에서 불러와준다
import { increase, decrease } from '../modules/counter';

function CounterContainer() {
    const number = useSelector(state => state.counter);
    // number를 useSeledctor를 통해 state에 있는 state.counter를 조회해준다
    const dispatch = useDispatch();

    // Increase를 dispatch
    const onIncrease = () => {
        dispatch(increase());
    };
    // Decrease를 dispatch
    const onDecrease = () => {
        dispatch(decrease());
    };

    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    );
}

export default CounterContainer;