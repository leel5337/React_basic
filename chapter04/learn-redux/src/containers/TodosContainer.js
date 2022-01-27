import React, { useCallback } from 'react'; // useCallback을 사용하여 재사용하는 것에 대해서 최적화해준다
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos'; // 만들어준 Todos 컴포넌를 렌더링
import { addTodo, toggleTodo } from '../modules/todos';

function TodosContainer() {
    // useSelector와 useDispatch를 만들어준다
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onCreate = useCallback(text => dispatch(addTodo(text)),[dispatch]);
    // text를 파라미터로 가져와서 addTodo에 파라미터로 가져온 text를 dispatch한다
    const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);
    // id를 파라미터로 가져와서 toggleTodo에 파라미터로 가져온 id를 dispatch한다

    return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
    // 받아온 todos상태와 onCreate함수, onToggle함수를 todos에 전달한다
}

export default TodosContainer;

