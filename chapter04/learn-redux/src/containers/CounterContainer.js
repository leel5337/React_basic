import React from 'react';
// react component에서 reducer 연동할 때는 useSelector, useDispatch hook을 사용
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
    const { number, diff } = useSelector(state => ({ // useSelector는 리덕스 스토어 상태를 조회하는 Hook이다
        number: state.counter.number, // state 값은 store.getState() 함수를 호출할 때 나타나는 결과와 같다
        diff: state.counter.diff
    }));
    const dispatch = useDispatch(); // useDispatch는 리덕스 스토어 dispatch를 함수에서 사용 할 수 있게 해주는 Hook이다
    const onIncrease = () => dispatch(increase()); // 액션들을 디스패치하는 함수
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter // 각각의 것들을 counter에 전달한다
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}
export default CounterContainer;
