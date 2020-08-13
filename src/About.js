import React ,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
class About extends Component{
  render(){
    return(<React.Fragment>
       <Header />
      <h1 className="abt1"><p className="abt2">About us</p>
      <p className="abt3">Careergrows is a career site fueled by some of the best career experts and a community of 40 million readers a year.</p></h1>
      <div>
        <h1 className="abt4">Careergrows is your ultimate career toolbox.</h1>
        <p className="abt5">Use it to fix your career.</p>
        <div className="abt6">We offer you the best online resume builder and free professional advice from career experts. We’ll guide you through the entire recruitment process all the way to your dream job.</div>
      </div>
      <div><center><img src = { process.env.PUBLIC_URL + '/ab1.jpg' } className="abt7"/></center></div>
      <p className="abt8">Since 2016, Careergrows has helped millions of job seekers worldwide find employment. With a rapidly growing community of more than 40 million readers a year, Careergrows is arguably the world’s fastest growing career advice website.</p>
      <p className="abt8">Each day, we help thousands of people write resumes and cover letters, and improve their chances of landing a job.</p>
      <p className="abt8">Careergrows is powered by a team of 10 career experts featured in Forbes, the Financial Times, CareerBuilder, and Glassdoor, among others.</p>
      <h1 className="abt9">We’re building the largest and best career site in the world to help you find the job you hope for.</h1>
      <p className="abt8">Careergrows has published more than 400 career guides. Each one required extensive research, consultation, and fact-checking.</p>
      <p className="abt8">From resume and interview advice to networking, our guides have been recognized by over 200 universities and organizations worldwide.</p>
      <Footer/>
      </React.Fragment>
    )
  }
}
export default About;