import React from "react";
import {Route, Routes, Link} from "react-router-dom"; //특정 link로 가고싶을 때 사용하는 컴포넌트
import Home from "./Home"; //특정 주소에 특정 컴포넌트를 보여주게끔 하는 컴포넌트
import About from "./About";
import Profile from "./Profile"; //특정 주소에 특정 컴포넌트를 보여주게끔 하는 컴포넌트

function App() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">홈</Link> {/* 홈 링크 */}
            </li>
            <li>
                <Link to="/about">소개</Link> {/* 소개 링크 */}
            </li>
        </ul>
        <hr/>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 메인 페이지의 경로는 Home */}
        <Route path="/about" element={<About />} /> {/* about 페이지의 경로는 About */}
        <Route path="/profiles/:username" element={<Profile />} />  {/* profiles의 username 결로는 Profile */}
      </Routes>
    </div>
  );
};

export default App;

