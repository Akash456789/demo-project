
import React, { Component } from 'react';
import { Link} from 'react-router-dom'
export default class Footer extends Component {
    render() {
        return (<React.Fragment>
            <div className="footer">
<h1 className="footer1"><br/>Try Careergrows professional resume builder now<br/><br/></h1>
<center><Link to = '/footer' className="link-btn2">LAND YOUR DREAM JOB NOW</Link ></center>
      </div>
    
<div className = "menu-ul2">
    <div> <Link to = 'twitter' ><img  className="icon"src="tw.jpg"/></Link> </div>
    <div> <Link to = 'instagram' ><img  className="icon"src="inst.jpg"/></Link> </div>  
    <div><Link to = 'facebbok' ><img  className="icon"src="fb.jpg"/></Link></div> 
    <p><Link to = 'Contact' className="icon1">Contact</Link></p>
    <p><Link to = 'about' className="icon1">About</Link></p> 
    <p className="work">© 2020 Works Limited. All Rights Reserved.</p>
   
            </div> 
        </React.Fragment>
        )
    }
}

