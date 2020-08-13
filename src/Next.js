import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Next extends Component {
  render() {
    return (<React.Fragment>
      <div className="ne7">

        <img src={process.env.PUBLIC_URL + '/img.png'} className="logo1" />

        <div >
          <p className="ne8">(2) WORK HISTORY</p>
        </div>
      </div>
      <div className="nee1">

        <div className="nee">
          <h2 className="ne2">Tell us about your most recent job</h2>
          <p>We’ll start there and work backward.</p>
        </div>

        <div className="ne1">
          <div>
            <label class="ne">Job Title</label><br />
            <input type="text" className="ne3" />
          </div>
          <div>
            <label class="ne">Employer</label><br />
            <input type="text" className="ne3" />
          </div>
        </div>


        <div className="ne4">
          <div>
            <lable class="ne">City</lable><br />
            <input type="text" className="ne3" />
          </div>
          <div>
            <label class="ne">State</label><br />
            <input type="text" className="ne3" />
          </div>
        </div>


        <div className="ne4">
          <div>
            <lable class="ne">Start Date</lable><br />
            <input type="date" className="ne3" />
          </div>
          <div>
            <label class="ne">End Date</label><br />
            <input type="date" className="ne3" />
          </div>
        </div>
        <div className='ne5'>
          <Link to='Recreat' className="ne6">Back</Link>
        </div>
        <Link to='/Next1' className="ne6">NEXT</Link>
      </div>
    </React.Fragment>
    )
  }
}
export default Next;