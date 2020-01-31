import React, { Component } from 'react';
import axios from "axios"
import JoinPresenter from '../presenter/JoinPresenter'
class JoinContainer extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    submitF=(e)=>{
        e.preventDefault();
        let uid = e.target.uid.value;
        let upws = e.target.upws.value;
        let uname = e.target.uname.value;
        axios.post("/users/join", {
            uid,
            upws,
            uname
        })
        .then((response)=>{
            if (response.data.code === 0) {
                alert(response.data.msg)
                console.log("가입성공")
                this.props.routerPush("/")
            } else { 
                alert(response.data.msg)
                console.log("가입실패")
            }
        })
        .catch((error)=>{
            alert("통신에러")
            console.log(error);
        });
    }

    render() {
        return <JoinPresenter submitF={this.submitF}/>
    }
}

export default JoinContainer;