import React, { Component } from 'react';
import LoginContainer from '../components/container/LoginContainer';

class Login extends Component {
    constructor(props){
      super(props)
      this.state={}
      console.log(props)
    }

    routerPush=(arg)=>{
      console.log("recive emit")
      this.props.history(arg)
    }

    render() {
        return (
          <LoginContainer routePush={this.routerPush}/> 
        );
    }
}

export default Login;