import React from 'react';
import Tilt from 'react-parallax-tilt'

const Team = () => {
  return (

    <div className="team container d-flex flex-column align-items-center" id='team'>
      <div className="heading m-5">
        <h1 className='font-weight-light' id='abouth1'>Our Team</h1>
      </div>
      <div className="list row">


        <div id='person1' className="personDiv col-lg-3 col-md-3 col-sm-8 col-8 mb-5">
          <Tilt>
            <div id='johnSmith' className="aboutPerson">
              <h5>John Smith</h5>
              <h6>CEO</h6>
              <p>"We connect talented employees with quality employers."</p>
              <a href="">Read more</a>
            </div>
          </Tilt>
        </div>


        <div id='person2' className="personDiv col-lg-3 col-md-3 col-sm-8 col-8 mb-5">
          <Tilt>
            <div id='annBrown' className="aboutPerson">
              <h5>Ann Brown</h5>
              <h6>Designer</h6>
              <p>"Entrust your design work to our talented designers."</p>
              <a href="">Read more</a>
            </div>
          </Tilt>
        </div>



        <div id='person3' className="personDiv col-lg-3 col-md-3 col-sm-8 col-8 mb-5">
          <Tilt>
            <div id='janeHarper' className="aboutPerson">
              <h5>Jane Harper</h5>
              <h6>Architect</h6>
              <p>"Our experienced architects are ready to amaze you."</p>
              <a href="">Read more</a>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  )
}

export default Team