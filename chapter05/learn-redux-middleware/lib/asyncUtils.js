// Promise에 기반한 Thunk를 만들어주는 함수
export const createPromiseThunk = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    // 이 함수는 promiseCreator가 하나의 파라미터만 받는다
    // 여러 종류의 파라미터를 전달해야된다면 객체 타입의 파라미터를 받아 온다
    return param => async dispatch => {
        dispatch({ type, param }); // 요청 시작
        try {
            const payload = await promiseCreator(param); // 결과물의 이름을 payload로 통일한다
            dispatch({ type: SUCCESS, payload }); // 성공한 경우
        } catch (e) {
            dispatch({ type: ERROR, payload: e, error: true }); // 실패한 경우
        }
    };
};

// 리듀서에서 사용 할 수 있는 여러 유틸 함수
export const reducerUtils = {
    // 초기 상태. 초기 data 값은 기본적으로 null 이지만 변경 할 수 있다
    initial: (initialData = null) => ({
        loading: false,
        data: initialData,
        error: null
    }),
    // 로딩중 상태. prevState는 기본값은 null이지만 값을 지정하면 null로 바꾸지 않고 다른 값을 유지시킬 수 있다
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null
    }),
    success: payload => ({ // 성공 상태
        loading: false,
        data: payload,
        error: null
    }),
    error: error => ({ // 실패 상태
        loading: false,
        data: null,
        error: error
    })
};