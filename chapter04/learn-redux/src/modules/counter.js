// 액션 타입 만들기
// Ducks 패턴을 사용할 때는 문자열 앞에 접두사를 넣어 다른 모듈과 이름이 중복되지 않게 한다
const SET_DIFF = 'counter/SET_DIFF'; // SET_DIFF는 couter에서 +, - 할때 몇씩할지 결정
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성함수 만들기
// export 키워드를 사용하여 내보내주어 불러와 사용한다
export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// Ruducer에서 관리할 초기 상태를 선언
const initialState = { // 관리할 두가지 값
    number: 0,
    diff: 1
};

// 리듀서 선언
// 리듀서를 사용할 때는 export default
export default function counter(state = initialState, action) { // state의 기본값 설정
    switch (action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            };
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff
            };
        default:
            return state;
    }
}

