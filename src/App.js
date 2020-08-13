import React ,{Component} from 'react';
import Home from "./Home";
import Header from "./Header";
import Contact from "./Contact";
import About from "./About";
import Resume from "./Resume";
import Cover from "./Cover";
import Cv from "./Cv";
import Mycontact from "./Mycontact"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Footer from './Footer';
import Recreat from './Recreat';
import Next from './Next';
import Next1 from './Next1';
import Next2 from './Next2';
class App extends Component{
  render(){
    return(<React.Fragment>
      <Router>
    
        <div className="main">
        {/* <Header/> */}
        <Route exact path= "/" component={Home}/>
        <Route exact path= "/about" component={About}/>
        <Route exact path= "/contact" component={Contact}/>
         <Route exact path= "/resume" component={Resume}/> 
         <Route exact path= "/Cover" component={Cover}/>
         <Route exact path="/Cv" component={Cv}/>
         <Route exact path="/Mycontact" component={Mycontact}/>
         <Route exact path="/Recreat" component={Recreat}/>
         <Route exact path="/Next" component={Next}/>
         <Route exact path="/Next1" component={Next1}/>
         <Route exact path="/Next2" component={Next2}/>
        {/* <Footer/> */}
        </div>
      </Router> 
</React.Fragment>
    )
  }
}
export default App;