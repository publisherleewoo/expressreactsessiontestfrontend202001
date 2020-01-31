import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom" 
import routes from "./routes"


let ulStyle = {
  overflow: "auto"
}
let liStyle = {
  float: 'left',
  listStyle: "none",
  padding: "20px"
}

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ul id="ul" style={ulStyle}>
          <li style={liStyle}><Link to={{ pathname: "/" }}>home</Link></li>
          <li style={liStyle}><Link to={{ pathname: "/login" }}>login</Link></li>
          <li style={liStyle}><Link to={{ pathname: "/join" }}>join</Link></li>
          <li style={liStyle}><Link to={{ pathname: "/board" }}>board</Link></li>
        </ul>
        {
          routes.map((route, index) => {
            return (
              <Route key={route.path} {...route}></Route>
            )
          })
        }
        
      </BrowserRouter>
    </div>
  );
}

export default App;
