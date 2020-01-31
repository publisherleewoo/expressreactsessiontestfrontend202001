import React, { Component } from 'react';
import JoinPresenter from '../components/container/JoinContainer';

class Join extends Component {
   
    constructor(props){
      super(props)
      this.state={
        isLogin:false
      }
    }

    routerPush=(arg)=>{
      console.log("recive emit")
      this.props.history.push(arg)
    }

    render() {
      
        return (
          <JoinPresenter routerPush={this.routerPush} /> 
        );
    }
}

export default Join;