// 액션 타입 선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// 액션 생성함수 선언
let nextId = 1; // id값을 변수로 선언
export const addTodo = text => ({ // text값을 파라미터로 가져온다
    type: ADD_TODO,
    todo: {
        id: nextId++, // id값을 호출하고 1을 더한다
        text
    }
});
export const toggleTodo = id => ({ //id값을 파라미터로 가져온다
    type: TOGGLE_TODO,
    id
});

// 초기 상태 선언
const initialState = [];
export default function todos(state = initialState, action) { // todos라는 reducer를 작성, state의 기본값을 설정
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo); // todo객체를 액션에 담아 받아온다
        case TOGGLE_TODO:
            return state.map(
                todo =>
                    todo.id === action.id // id가 일치하면
                        ? { ...todo, done: !todo.done } // 해당 todo값을 복사하여 done값을 반전시키고
                        : todo // 아니면 그대로 둔다
            );
        default:
            return state;
    }
}
