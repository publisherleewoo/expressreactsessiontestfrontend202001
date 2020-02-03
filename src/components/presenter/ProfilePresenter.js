import React from 'react';

const ProfilePresenter = ({user}) => {
    const {uid,upassword,uname} = user||{};
    return (
        <div>
            <h1>Profile</h1>
            <p>{uid}</p>
            <p>{upassword}</p>
            <p>{uname}</p>
        </div>
    );
};

export default ProfilePresenter;