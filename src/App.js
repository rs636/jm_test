import React from 'react';
import Signup from "./RUP-WEB/Signup.js";
import Login from "./RUP-WEB/Login.js";
import Menu from "./RUP-WEB/Menu.js";
import Home from "./RUP-WEB/Home.js";
import IntroTeam from "./RUP-WEB/IntroTeam.js";
import IntroCompany from "./RUP-WEB/IntroCompany.js";
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component{
  render(){
  return(
    <Router>
        <div>
          <Menu/>
            {/*exact를 써야 기본일때만 home가게해줌*/}
            <Route exact path="/" component={Home}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Signup" component={Signup}/>
            <Route path="/IntroTeam" component={IntroTeam}/>
            <Route path="/IntroCompany" component={IntroCompany}/>
        </div>
    </Router>
  );
  }
};

export default App;