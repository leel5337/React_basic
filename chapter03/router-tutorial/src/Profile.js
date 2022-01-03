import React from 'react';
import {useParams} from "react-router-dom";

const profileData = { // profile에서 사용 할 데이터를 생성
    tottenham: {
        name: '손흥민',
        description: 'Soccer Player @ 월드클래스'
    },
    wolves: {
        name: '황희찬',
        description: 'Soccer Player @ 황소'
    }
};

const Profile = ({ match }) => { // profile에서 match props를 받아와 url 파라미터를 조회한다
    const { username } = useParams();
    const profile = profileData[username]; // username으로 profileData 값을 선택해준다
    if (!profile) { //profile이 존재하지 않으면
        return <div>존재하지 않는 유저입니다.</div>;
    }
    return (  //profile이 존재하면
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;

