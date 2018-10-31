import React, { Component } from 'react';
import { Parallax} from 'react-parallax';
import backgroundpic from './../assets/images/landing/bg.jpg';
import mee from './../assets/images/about/mee1.jpg';
import linkedinLogo from '../assets/images/footer/linkedin.jpg';
import githubLogo from '../assets/images/footer/github.png';
import MediumLogo from '../assets/images/footer/mediumlogo.jpg';

class Landing extends Component {
  render() {
    return(
      <div 
      style={
        {width: '100%',
         margin: 'auto',
         textAlign: 'center'}
           }>
      <Parallax
      blur={6}
      bgImage={backgroundpic}
      bgImageAlt="landing img"
      strength={100}>
      <div className='landing'>
        <img src={mee} alt="own img" className='mee'/>
        
        <h1 className='intro-text'> Sarita khanal
        <span> 
            <h4 className='sub'>Web Developer | Metropolia Student | Writer | Learner</h4>
        </span></h1>
        <div className="container-fluid">
                  <div className="footer-links">
                    <a className="" target="_blank" href="https://github.com/saritakha"><img id="github-logo" src={githubLogo} alt="Github" /><br/>Github</a>
                  </div>
                <div className="footer-links">
                    <a className="" target="_blank" href="https://drive.google.com/file/d/1Xbp2jKIhUwzukLng9iewe3NfPVwBI_76/view?usp=sharing"><i className="medium material-icons">description</i><br/>Resume</a>
                </div>
                <div className="footer-links">
                    <a target="_blank" href="https://www.linkedin.com/in/sarita-khanal-b4a16b150/"><img id="linkedin-logo" src={linkedinLogo} alt="LinkedIn" /><br/>LinkedIn</a>
                </div>
                <div className="footer-links">
                    <a target="_blank" href="https://medium.com/@saritakhanal"><img id="medium-logo" src={MediumLogo} alt="Medium" /><br/>Medium</a>
                </div>
                </div>
        </div>
      </Parallax>
     </div>
    )
  }
}

export default Landing;
