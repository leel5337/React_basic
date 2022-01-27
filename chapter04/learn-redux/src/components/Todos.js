import React, { useState } from 'react';

// TodoItem 컴포넌트
const TodoItem = React.memo(function TodoItem({ todo, onToggle }) { // todo, onToggle 두가지 props를 가져온다
    return (
        <li
            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            // todo의 done값이 true면 line-through 그렇지 않으면 none
            onClick={() => onToggle(todo.id)} // 클릭되면 todo가 가지고있는 id값을 가지고 출력한다
        >
            {todo.text}
        </li>
    );
});

// TodoList 컴포넌트
const TodoList = React.memo(function TodoList({ todos, onToggle }) { // todos, onToggle 두가지 props를 가져온다
    return (
        <ul>
            {todos.map(todo => ( // 여러개의 todo에 대하여 TodoItem을 랜더링
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} /> // 배열을 랜더링함으로 key을 무조건 넣어준다
            ))}
        </ul>
    );
});

// Todos 컴포넌트
// 상태관리를 redux에서 하지않고 useState를 사용해 관리
function Todos({ todos, onCreate, onToggle }) { // todos, onCreate, onToggle 세가지 props를 가져온다
    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = e => { // button을 눌렀을 때 submit이 발생함으로
        e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침이 방지된다
        onCreate(text);
        setText(''); // text값을 초기화
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={text}
                    onChange={onChange}
                    placeholder="주어진 임무를 입력하세요."
                />
                <button type="submit">등록</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    );
}
export default Todos;
