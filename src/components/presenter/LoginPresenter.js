import React from 'react';
import Store from '../../store'
const LoginContainer=({submitF})=> {
    
    return (
        <div>
            <Store.Consumer>
                {(store)=>{
                    return ( console.log(store))
                }}
            </Store.Consumer>
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