// 액션 타입 선언
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수 생성한다
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초깃값 선언 (초깃값이 무조건 객체이거나 배열일 필요가 없다 그래서 숫자로 선언)
const initialState = 0;

// 리듀서 작성
export default function counter(state = initialState, action) {
    // export default 바로 내보낸다
    // state의 기본값은 initialState, action을 파라미터로 가져온다
    switch (action.type) {
        case INCREASE:
            return state + 1; // 타입이 INCREASE일때는 +1
        case DECREASE:
            return state - 1; // 타입이 DECREASE일때는 -1
        default:
            return state; // 둘 다 아니면 그대로 출
    }
}