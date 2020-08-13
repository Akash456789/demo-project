import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
class Contact extends Component {
    render() {
        return (<React.Fragment>
            <Header />
            <h1 className="con"><p className="con1">Let us know if you need any help!</p>
                <p className="con2">Our customer happiness agents will assist you with any issues you’re facing.</p></h1>
            <div>
                <div className="con3">
                    <h1 className="con4">Contact form</h1>
                    <div className="con9">
                        <div>
                            <form className="form">
                                Enter subject here: <input className="con5" type="text" placeholder="type" />
                                <br />
        E-mail address: <input className="con6" type="text" placeholder="type" />
                                <br />
        Your Name: <input className="con7" type="text" placeholder="type" />
                                <br /><br />
        Let as know how we con help you!: <br />
                                <textarea className="con8" placeholder="type"></textarea><br />
                                <input className="con11" type="submit" />
                            </form></div>
                        <div><img className="con10" src={process.env.PUBLIC_URL + '/form.jpg'} /></div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>

        )

    }
}
export default Contact;