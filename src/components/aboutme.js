import React, { Component } from 'react';
import education from './../assets/images/about/edu.jpg';
import hobby from './../assets/images/about/hob.jpg';
import volunteer from './../assets/images/about/vol.jpg';
import {ReactModal} from 'react-modal';


class About extends Component {

  render() {
    return(
      <section id='about'>
      <div>

         <h3 className='white-color'>About me</h3>
      <p className='text-faded contact'><i>Moi!! Moi!!
          <span role='img' aria-label='emoji'>😊 😊 😊</span>
          </i></p>
          <hr className='white-color sub'/>
        <div className='container-fluid'>
        <p className='text-faded'></p>
        </div>
         
    <div className='container-fluid' >     
    <div className="row">
  <div class="col-md-4">

<div className="card">
  <img className="card-img-top"
       src={education} alt="Education" 
       style={
        {width: '100%',
        height: '25vh'
        }
       }/>
  <div className="card-body">
    <h5 className="card-title">Education</h5>
    <p className='skill'><i>" Learning is fun "</i></p>
    <button type="button" className="btn btn-lg">Detail</button>
  </div>
</div>
</div>
<div class="col-md-4">
  <div className="card">
  <img className="card-img-top"
       src={volunteer} alt="volunteer" 
       style={
        {width: '100%',
        height: '25vh'
        }
       }/>
  <div className="card-body">
    <h5 className="card-title">Experience</h5>
    <p className='skill'><i>" Getting something everyday "</i></p>
    <a href="#" className="btn btn-secondary">Detail</a>
  </div>
</div>
  </div>
  <div class="col-md-4">
  <div className="card">
  <img className="card-img-top"
       src={hobby} alt="hobby" 
       style={
        {width: '100%',
        height: '25vh'
        }
       }/>
  <div className="card-body">
    <h5 className="card-title">Hobbies</h5>
    <p className='skill'><i>" Keeping mind fresh and joyful "</i></p>
    <a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#myModal3">Detail</a>
  </div>
</div>
  </div>
</div>
  </div>
      </div>
      </section>
    )
  }
}

export default About;

