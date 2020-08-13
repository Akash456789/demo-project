import React ,{Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer'
class Home extends Component{
  render(){
    return(
      <React.Fragment>
        <Header/>
         <div className="header">  
        <div className="header-text">
            
     <h1>Careergrows Resume Builder<br/>
        Make a Resume Online---Quick & Easy</h1><br/>
         <Link to = '/Resume' className="link-btn">Create Resume Now</Link >
       </div>
            </div>

            <div class="aaa11">
      <div class="sc-dnqmqq FOfWt">
    <div class="sc-hkHFWD hFUUum">
     
      <img src = { process.env.PUBLIC_URL + '/image1.png' }/>
      <div class="sc-iUVpnZ cmtXtV">
      <h3>Cover Letter Builder</h3>
        <p>Write a cover letter using the same templates as your resume.</p>
      
      </div>
    </div>
      <div class="sc-hkHFWD hFUUum">
      <img src = { process.env.PUBLIC_URL + '/image1.png' }/>
      <div class="sc-iUVpnZ cmtXtV">
      <h3>20+ Best Resume Templates</h3>
        <p>Create a modern and professional resume and cover letter.</p>
      
      </div>
    </div>
    <div class="sc-hkHFWD hFUUum"><p class="sc-goFBvh CPwai"> </p>
      <img src = { process.env.PUBLIC_URL + '/image1.png' }/>
      <div class="sc-iUVpnZ cmtXtV">
      <h3>Resume Check</h3>
        <p>Our builder will give you suggestion on how to improve your resume.</p>
        
      </div>
    </div>
    </div>
    </div>
    <div>
    <section class="section">
      <p class="quote">I found an article about how to write a professional resume on Careergrows. Then I discovered the application. It's useful and simple to use. It's not a free resume builder, but I guess you can't have everything.</p>
      <p class="text--center">Thomas Freeman</p>
      </section>
    </div>

    <h1 className="tata">Why is Careergrows the best resume builder online?</h1>

    <div class="sc-hkHFWDa hFUUuma">
      <img src = { process.env.PUBLIC_URL + '/image2.png' } width="600px"/>
      <div class="sc-iUVpnZa cmtXtVa">
      <h3>Professional CV Templates</h3>
        <p>Choose professional, elegant, creative, or modern resume templates. Careergrows resume maker offers 18 templates. You can easil change colors and adapt the layout to any resume format you choose: function, reverse-chronological, or combination.</p>
         </div>
      </div>
  
      <div class="sc-hkHFWDa hFUUuma1">
      <img src = { process.env.PUBLIC_URL + '/image3.png' } width="800" />
      <div class="sc-iUVpnZa cmtXtVa">
      <h3>Tips From Recruiters</h3>
        <p>You no longer have to worry about how to make a resume. Our resume generator will guide you through the process of writing each section, step-by-step. Resume writing tips will help you get more job offers.</p>
         </div>
         

      </div>
      <div class="sc-hkHFWDa hFUUuma">
      <img src = { process.env.PUBLIC_URL + '/image4.jpg' } width="600px"/>
      <div class="sc-iUVpnZa cmtXtVa">
      <h3>Edit Your Resume As You Like</h3>
        <p>Choose font types, sizes, and spacing. You can bold, italicize, and underline your text. You don't need to use MS Word resume templates: we take care of the formatting, and give you access to the best resume designs you'll ever see.</p>
         </div>
      </div>

      <div class="sc-hkHFWDa hFUUuma">
      <img src = { process.env.PUBLIC_URL + '/image5.png' } width="600px"/>
      <div class="sc-iUVpnZa cmtXtVa">
      <h3>Cover Letter and Resume Builder</h3>
        <p>Create your professional cover letter in just a few simple steps. Use the same template for your cover letter and resume. Convince hiring managers to set up an interview with you.</p>
         </div>
      </div>
    <br/>
    <br/>
    <div className="asd1">
    <p className="asd">Write your professional resume online.</p>
      <p className="asd2">Download with a single click. Land that dream job.</p>
      <center><Link to = '/my resume' className="link-btn3">GO TO RESUME BUILDER</Link ></center>
      </div>
      <br/>
      <br/>
      <Footer />
      </React.Fragment> 
    )
  }
}
export default Home;