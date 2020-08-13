

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Next2 extends Component {
  render() {
    return (<React.Fragment>
      <div className="ne7">

        <img src={process.env.PUBLIC_URL + '/img.png'} className="logo1" />

        <div >
          <p className="ne8">(4) FINALIZE</p>
        </div>
      </div>
      <div className="nee1">

        <div className="nee">
          <h2 className="ne2">Do you have anything else to add?</h2>
          <p>These sections are optional.</p>
        </div >
        <div className="nx" >        
        <input type="checkbox" name="c1" className="nx1"/><label className="nx2">Accomplishments</label><br/><br/>
        <input type="checkbox" name="c1" className="nx1"/><label className="nx2">Affiliations</label><br/><br/>
        <input type="checkbox" name="c1" className="nx1"/><label className="nx2">Additional Information</label><br/><br/>
        <input type="checkbox" name="c1" className="nx1"/><label className="nx2">Software</label><br/><br/>
        <input type="checkbox" name="c1" className="nx1"/><label className="nx2">Languages</label><br/><br/>
        <input type="checkbox" name="c1" className="nx1"/><label className="nx2">Certification</label><br/><br/>
        <input type="checkbox" name="c1" className="nx1"/><label className="nx2">Interests</label>
        </div>
        <div className='ne5'>
    <Link to='Next1' className="ne6">Back</Link>
  </div>
  <Link to='/' className="ne6">NEXT</Link>
                </div>
      
        </React.Fragment>
    )
  }
}
export default Next2;



       
       
       
       
       
       
       
       
       
       


       
       
       
       
       
       
       
       
       
       


       
       
       
       
       
       
       
       
       
       
       
       
       
       























































