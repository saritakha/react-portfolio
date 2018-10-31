import React, { Component } from 'react';
import mee from './../assets/images/about/my.jpg';
import linkedinLogo from '../assets/images/footer/linkedin.jpg';
import githubLogo from '../assets/images/footer/github.png';

class Contact extends Component {
  render() {
    return(
  
             <section id='contact'>
             <div className="container">
             <h3 className='white-color'>Contact Details</h3>
             <p className='text-faded contact'>Will be happy to get your feedbacks 😊</p>
                 <hr className='white-color sub'/>
                
                 <div className='container-fluid'>
                 <div className="row">
                <div className="col-md-12">
                <img className='contactPic' src={mee}/>
                </div>
           
             <div className="col-md-12">
                <ul>
                    <li style={{fontSize: '25px', color: 'white'}}>
                        <i className="fa fa-phone" aria-hidden="true"/>
                        &nbsp; +358 442313341
                    </li>
                    <li style={{fontSize: '25px', color: 'white'}}>
                        <i className="fa fa-at" aria-hidden="true"/>
                        &nbsp; saritakhanal533@gmail.com
                    </li>
                    <li style={{fontSize: '25px', color: 'white'}}>
                        <i className="fa fa-home" aria-hidden="true"/>
                        &nbsp; Kilonrinne 10E 108, ESPOO
                    </li>
                    </ul>
                    
                    </div>
                </div> 
                </div>     
             </div>
         
             </section>
    )
  }
}

export default Contact;
