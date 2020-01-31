import React from 'react';

const LoginContainer=({submitF})=> {

    return (
        <div>
            <h1>Login페이지</h1>
            <form
                onSubmit={(e) => {
                     submitF(e);
                }}>
                <p>id: <input id="uid" name="uid" /></p>
                <p>password: <input id="upws" name="upws" /></p>
                <p><input type="submit" /></p>

            </form>
        </div>
    );

}

export default LoginContainer;