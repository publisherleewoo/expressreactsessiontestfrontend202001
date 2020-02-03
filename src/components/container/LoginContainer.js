import React, { Component } from 'react';
import axios from "axios"
import LoginPresenter from '../presenter/LoginPresenter'

class LoginContainer extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    submitF=(e)=>{
        e.preventDefault();
        let uid = e.target.uid.value;
        let upws = e.target.upws.value;
        axios.post("/users/login", {
            uid,
            upws
        })
            .then((response)=> {
                console.log(response);
                alert("통신성공")
                // this.props.routerPush("/")
            })
            .catch((error)=> {
                alert("에러")
                console.log(error);
            });
    }

    render() {
        return <LoginPresenter submitF={this.submitF} />
    }
}

export default LoginContainer;