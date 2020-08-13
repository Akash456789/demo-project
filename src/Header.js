import React, { Component , Fragment} from 'react';
import { Link} from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
        // <React.Fragment>
            <div className = "navbar">
            <img src = { process.env.PUBLIC_URL + '/img.png' } className="logo"/>
            <ul className = "menu-ul">
            <li><Link to = '/Resume' exact className="as">Resume templates</Link> </li> 
           <li> <Link to = '/Cover' exact className="as">Cover letter templates</Link> </li> 
            <li> <Link to = '/Cv' exact className="as">CV templates</Link > </li>
            <li><Link to = '/' exact className="as"> Home</Link> </li> 
           <li> <Link to = '/about' exact className="as">About</Link> </li> 
            <li> <Link to = '/Mycontact' exact className="link-btn1">MY ACCOUNT</Link > </li>
             </ul> 
        </div>
       
        // </React.Fragment>
        )
    }
}