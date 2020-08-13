import React ,{Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
class Cv extends Component{
  render(){
    return(
      <React.Fragment>
        <Header />
        <div className="ccc1">  
  <h1 className="ccc2">CV Templates</h1>
         
  <h2  className="ccc3">Choose a CV template, fill it out, and download in seconds. Create a<br/> professional curriculum vitae in a few clicks. Just pick one of 18+ CV<br/> templates below, add ready-to-use suggestions, and get the job.</h2>
  </div>
  <div className = "ccc4">
            <div><Link to = '/Resume' exact className="ccc5">Resume templates</Link> </div> 
           <div> <Link to = '/Cover' exact className="ccc5">Cover letter templates</Link> </div> 
            <div> <Link to = '/Cv' exact className="ccc5">CV templates</Link > </div>
            <div> <Link to = '/All' exact className="ccc6">All</Link > </div>
             </div> 
             <div className="ccc10"> 
    <div className = "ccc7"> 
      <div className="ccc12">
      <Link to = '' className="resume-btn">USE THIS TEMPLATE</Link >
      </div>
     
      <div class="text">
      <h1>Cascade</h1>
      <p>Professional resume template. Plenty of information, no clutter.</p>
      
      </div>
    </div>


    <div className = "ccc7">
    <div className="ccc12">
   
    <Link to = '' className="resume-btn">USE THIS TEMPLATE</Link >
    </div>
   
    <div class="text">
    <h1>Concept</h1>
    <p>Modern resume template. A timeline to show progression and icons to save space.</p>
   
    </div>
    </div>


    <div className = "ccc7">
    <div className="ccc12 " >
    
    <Link to = '' className="resume-btn">USE THIS TEMPLATE</Link>
    </div>
    
    <div class="text">
    <h1>Crisp</h1>
    <p>Creative resume template. A perfect balance of graphics and whitespace.</p>
   
    </div>
    </div>
    <div className = "ccc7">
    <div className="ccc13 " >
    
    <Link to = '' className="resume-btn">USE THIS TEMPLATE</Link>
    </div>
    
    <div class="text">
    <h1>Cubic</h1>
    <p>Perfect resume template. Readable no matter how much you write.</p>
   
    </div>
    </div>

    <div className = "ccc7">
    <div className="ccc13 " >
    
    <Link to = '' className="resume-btn">USE THIS TEMPLATE</Link>
    </div>
    
    <div class="text">
    <h1>Diamond</h1>
    <p>Single column resume template. Work history is the focus, the job title the selling point.</p>
   
    </div>
    </div>

    <div className = "ccc7">
    <div className="ccc13 " >
    
    <Link to = '' className="resume-btn">USE THIS TEMPLATE</Link>
    </div>
    
    <div class="text">
    <h1>Enfold</h1>
    <p>Two column resume template. Focuses on your summary, draws attention to skills.</p>
   
    </div>
    </div>
  
  


  <div className = "ccc7">
    <div className="ccc12 " >
    
    <Link to = '' className="resume-btn">USE THIS TEMPLATE</Link>
    </div>
    
    <div class="text">
    <h1>Iconic</h1>
    <p>Icon-based resume template. Section that pop with a little bit of graphic help.</p>
   
    </div>
    </div>

    <div className = "ccc7">
    <div className="ccc12 " >
    
    <Link to = '' className="resume-btn">USE THIS TEMPLATE</Link>
    </div>
    
    <div class="text">
    <h1>Influx</h1>
    <p>Elegant resume template. Tells a story, makes sure it gets heard.</p>
   
    </div>
    </div>

    <div className = "ccc7">
    <div className="ccc12 " >
    
    <Link to = '' className="resume-btn">USE THIS TEMPLATE</Link>
    </div>
    
    <div class="text">
    <h1>Initials</h1>
    <p>Creative resume template. Initials for a personal touch, dash of color to highlight strengths.

</p>
   
    </div>
    </div>
    </div>
  

  <div className="ccc15">
  <img  className="ccc14" src = { process.env.PUBLIC_URL + '/image10.png' }/>
  <div className="ccc16"><h1 >Best resume templatesfor a job or academia</h1>
  <p>A resume template is a blank form you fill in with contact information, work experience, skills, and education. Easier said than done. Most free MS Word resume template formats fall apart as soon as you start typing. But not Zety. Pick Zety and stop struggling. Focus on what matters: telling your story in a way that gets you the job.</p>
  </div>
  </div>

  <div className="ccc17">
  <img  className="ccc18" src = { process.env.PUBLIC_URL + '/image11.png' }/>
  <div className="ccc19"><h1 >Attractive design</h1>
  <p>Each resume format template is designed to draw attention to your assets. Highlight your career summary to hook the employer. Use icons to save valuable space. Pick a single or two column design to balance whitespace and wordcount. Show your mastery of skills by using graphs. Fit two pages on one.</p>
  </div>
  </div>

  <div className="ccc22">
  <img  className="ccc20" src = { process.env.PUBLIC_URL + '/image12.jpg' }/>
  <div className="ccc21"><h1 >Ease of use</h1>
  <p>Go beyond downloadable resume templates that never seem to work. Pick a design you like, focus on the content, and let Zety take care of the rest. Our resume wizard will guide you through the process with helpful tips and examples. Building a resume with Zety is as simple as online shopping—just click an item you like and put in on your resume.</p>
  </div>
  </div>
  <div className="ccc23">
  <img  className="ccc24" src = { process.env.PUBLIC_URL + '/image14.png' }/>
  <div className="ccc21"><h1 >Confidence boost</h1>
  <p>It’s not just about looks. Filling out a resume with the Zety resume builder is fast, easy, and effective. Add optimized content with a single click to build your resume. Start from scratch or upload your old resume sample and give it a makeover in 5 minutes. Update the template, tweak the content with ready-made bullet points, get hired faster than anyone else.

</p>
  </div>
  </div>
  <Footer/>
    </React.Fragment>
    )
  }
}

export default Cv;