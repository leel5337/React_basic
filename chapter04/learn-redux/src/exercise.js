import { createStore } from 'redux';  // createStore는 store를 만들어주는 함수

//redux에서 관리할 상태를 정의하여준다
// 상태의 초기값 설정
const initialState = {
    counter: 0,
    text: '',
    list: []
};

// 문자열들의 상수를 정의하여준다
const INCREASE = 'INCREASE'; // 카운터의 숫자를 증가
const DECREASE = 'DECREASE'; // 카운터의 숫자를 감사
const CHANGE_TEXT = 'CHANGE_TEXT'; // TEXT값을 변경
const ADD_TO_LIST = 'ADD_TO_LIST'; // LIST에 특정 항목을 추가

// 액션 생성함수
const increase = () => ({
  type: INCREASE, // 액션 객체에 type 값 필수
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = text => ({ // camelCase로 작성
  type: CHANGE_TEXT,
  text
});

const addToList = item => ({
  type: ADD_TO_LIST,
  item
});

// Reducer 작성
function reducer(state = initialState, action) { // state와 action을 파라미터로 가져온다
// state에 기본값을 initialState로 설정
  switch (action.type) {
    case INCREASE:
      return { // 기존 상태의 counter값을 읽어 1을 더하고 기존값은 유지시키고 반환
        ...state,
        counter: state.counter + 1
      };
    case DECREASE:
      return { // 기존 상태의 counter값을 읽어 1을 빼고 기존값은 유지시키고 반환
        ...state,
        counter: state.counter - 1
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      };
    default:
      return state; // 처리하지 못할 경우 그대로 반환
  }
}

/* 스토어 만들기 */
const store = createStore(reducer);
console.log(store.getState()); // 현재 store 안에 있는 상태를 조회

const listener = () => { // 스토어안에있는 상태가 바뀔 때마다 호출되는 listener 함수
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener); // listener함수를 store에 구독

// 액션들을 디스패치
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('텍스트바꿈'));
store.dispatch(addToList({ id: 1, text: '기모링' }));

