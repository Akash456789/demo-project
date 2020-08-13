import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Next1 extends Component {
  render() {
    return (<React.Fragment>
      <div className="ne7">
        <img src={process.env.PUBLIC_URL + '/img.png'} className="logo1" />
        <div >
          <p className="ne8">(3) EDUCATION</p>
        </div>
      </div>
      <div className="nee1">

        <div className="nee">
          <h2 className="ne2">Tell us about your education</h2>
          <p>Include every school, even if you're still there or didn't graduate.</p>
        </div>

        <div className="ne1">
          <div>
            <label class="ne">School Name</label><br />
            <input type="text" className="ne3" />
          </div>
          <div>
            <label class="ne">School Location</label><br />
            <input type="text" className="ne3" />
          </div>
        </div>


        <div className="ne4">
          <div>
            <lable class="ne">Degree</lable><br />
            <input type="text" className="ne3" />
          </div>
          <div>
            <label class="ne">Field of Study</label><br />
            <input type="text" className="ne3" />
          </div>
        </div>


        <div className="ne4">
          <div>
            <lable class="ne">Graduation Start Date</lable><br />
            <input type="date" className="ne3" />
          </div>
          <div>
            <label class="ne">Graduation End Date</label><br />
            <input type="date" className="ne3" />
          </div>
        </div>
        <div className='ne55'>
          <Link to='/Next' className="ne66">BACK</Link>
        </div>
        <Link to='/Next2' className="ne66">NEXT</Link>
      </div>
    </React.Fragment>
    )
  }
}
export default Next1;