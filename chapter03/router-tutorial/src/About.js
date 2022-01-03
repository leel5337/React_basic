import React from 'react';
import qs from 'qs'; // qs를 불러와준다

const About = ({ location }) => {
    const query = qs.parse(location.search, {  //location.search 값들을 파싱한다(안에 있는 값들을 추출하는것)
        ignoreQueryPrefix: true
    });
    // 안에 있는 값들을 추출하여 detail을 불러온다
    const detail = query.detail === 'true'; // query 파싱결과값은 문자열로 해야한다

    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
            {detail && <p>detail값이 true이다</p>}
        </div>
    );
};

export default About;

