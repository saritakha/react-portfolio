import React from 'react';
import skills from './../assets/images/skills.jpg';

export default props =>{

    return(
        <section id='skills'>

         <h3>Technical Skills</h3>
         <p className='black-color skill'><i>Always learning
          <span role='img' aria-label='emoji'>😊 😊 😊</span>
          </i></p>
        <hr className=' sub' />

<div className='jumbotron'>
<p className='jumbotron-text'>After doing nine school projects and an udemy project, I have built up confidence in me that I can also contribute my skills in any projects. Working with front-end was always my great interest and I can spend hours and hours doing it. But from my school projects, I was able to learn backend skills and management skills infact I have also worked as Project Manager in two projects. Moreover, I also realized the importance of group work. </p>
</div>
   <div className="container-fluid">
  <div className="row">
    <div className="col-sm-3">
    <div className='container'>
    <h6 className="skillD">Frontend</h6>
    <ul className="list-group">
  <li className="list-group-item">HTML    </li>
  <li className="list-group-item ">CSS</li>
  <li className="list-group-item ">Bootstrap</li>
  <li className="list-group-item">Javascript</li>
  <li className="list-group-item">React</li>
  <li className="list-group-item">React-native</li>
</ul>
</div>
    </div>
    <div className="col-sm-3">
    <div className='container'>
    <h6 className="skillD">Backend</h6>
    <ul className="list-group">
  <li className="list-group-item">Node</li>
  <li className="list-group-item">Express</li>
  <li className="list-group-item">Java</li>
</ul>
</div>
    </div>
    <div className="col-sm-3">
    <div className='container'>
    <h6 className="skillD">Database</h6>
    <ul className="list-group">
  <li className="list-group-item">Mongodb</li>
  <li className="list-group-item ">MySql</li>
</ul>
</div>
    </div>
    <div className="col-sm-3">
    <div className='container'>
    <h6 className="skillD">Management</h6>
    <ul className="list-group">
  <li className="list-group-item">Scrum</li>
  <li className="list-group-item ">Sprint</li>
  <li className="list-group-item">Trello</li>
  <li className="list-group-item">Git</li>
</ul>
</div>
    </div>
  </div>
</div>
   
  
        </section>
    );
}