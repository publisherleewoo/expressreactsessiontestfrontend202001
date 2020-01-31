import React from 'react';

const JoinPresenter=({submitF})=> {
    
    return (
        <div>
            <h1>Join페이지</h1>
            <form
                onSubmit={(e) => {
                    submitF(e);
                }}>
                <p>id: <input name="uid" /></p>
                <p>password: <input type="password"  name="upws" /></p>
                <p>name: <input  name="uname" /></p>
                <p><input type="submit" /></p>

            </form>
        </div>
    );

}

export default JoinPresenter;