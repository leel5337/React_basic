const myLogger = store => next => action => { // 파라미터를 연달아 가쟈온다
    console.log(action); // 액션이 디스패치될때  출력
    const result = next(action); // 다음 미들웨어 또는 리듀서에 액션을 전달

    console.log('\t', store.getState()) // 업데이트 이후의 상태 조회

    return result; // 여기서 반환하는 값은 dispatch(action)의 결과물
};
export default myLogger;