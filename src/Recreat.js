import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Recreat extends Component {
  render() {
    return (
      <div>
        <div className="rec">
          <div >
            <img src={process.env.PUBLIC_URL + '/img.png'} className="logo1" />
          </div>
          <div >
            <p className="rec3">(1) HEADING</p>
          </div>
        </div>

        <div className="Form-container">
          <div className='info-div'>
            <div className="pop">
            <div>
              <h2 className="rec1">Personal Information</h2>
              <p className="rec2">We suggest including an email and phone number.</p>
              </div>
            <div className="pop1"><Link to='/Next' className="pop2">NEXT</Link></div>
            </div>
            <from>

              <input type="text" className="rec5" placeholder='First Name' />
              <input type="text" className="rec5" placeholder=' Last Name' />
              <input type="text" className="rec6" placeholder='Profession' />
              <input type="text" className="rec8" placeholder='City' />
              <input type="text" className="rec8" placeholder='State/Province' />
              <input type="text" className="rec8" placeholder='Zip Code' />
              <input type="text" className="rec5" placeholder='Phone' />
              <input type="text" className="rec5" placeholder='Email Address' />
              <p className='options'>+ Add More Options </p>
              <div className='next'>
                <input type="button" name="cancel" value="CANCEL" className="cancel" />
              </div>
              <Link to='/Next' className="next_btn">NEXT</Link>


            </from>
          </div>
          <div className="Temp-info">
            <p>Template her---</p>

          </div>
        </div>
      </div>
    )
  }
}
export default Recreat;