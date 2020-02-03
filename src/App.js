import React, { Component } from 'react';
import { BrowserRouter, Route, Link ,Switch} from "react-router-dom"
 
import Home from "./pages/Home"
import Login from "./pages/Login"
import Join from "./pages/Join"
import Board from "./pages/Board"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"

// import routes from "./routes"
import Store from "./store"

let ulStyle = {
  overflow: "auto"
}
let liStyle = {
  float: 'left',
  listStyle: "none",
  padding: "20px"
}

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     isLogin:null
  //   }

  // }



  render() {
    return (
      <div className="App">
        <Store.Provider value={this.state}>
          <BrowserRouter>
            <ul id="ul" style={ulStyle}>
              <li style={liStyle}><Link to={{ pathname: "/" }}>home</Link></li>
              <li style={liStyle}><Link to={{ pathname: "/login" }}>login</Link></li>
              <li style={liStyle}><Link to={{ pathname: "/join" }}>join</Link></li>
              <li style={liStyle}><Link to={{ pathname: "/board" }}>board</Link></li>
              <li style={liStyle}><Link to={{ pathname: "/profile" }}>profile</Link></li>
            </ul>
            <Switch>
                  <Route path="/" exact={true} component={Home}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/join" component={Join}></Route>
                  <Route path="/board" component={Board}></Route>
                  <Route path="/profile" component={Profile}></Route>
                  <Route component={NotFound}></Route>
            </Switch>

          </BrowserRouter>
        </Store.Provider>
      </div>
    );
  }
}

export default App;
