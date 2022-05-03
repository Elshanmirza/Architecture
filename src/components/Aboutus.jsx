import React from 'react'
import Logo from '../house.png'

const Aboutus = () => {
    return (
        <div className='aboutus' id='about'>
            <div className="container d-flex flex-column align-items-center">
                <div className="heading m-5">
                    <h1 className='font-weight-light' id='abouth1'>About Us</h1>
                </div>

                <div className="line first row ">
                    <div className="box col-lg-3 col-md-6 col-sm-6 col-10">
                        <div className="top d-flex mb-2">
                            <img src="https://img.icons8.com/ios-filled/30/000000/pen.png" />
                            <h4 className='ml-2'>Interior</h4>
                        </div>

                        <div className="text">
                            <p>Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space.</p>
                        </div>
                    </div>

                    <div className="box col-lg-3 col-md-6 col-sm-6 col-10">
                        <div className="top d-flex mb-2">
                            <img src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/30/000000/external-art-brush-web-smashingstocks-glyph-smashing-stocks.png" />
                            <h4 className='ml-2'>Decoration</h4>
                        </div>

                        <div className="text">
                            <p>The decorative arts are arts or crafts whose object is the design and manufacture of objects that are both beautiful and functional.</p>
                        </div>
                    </div>
                </div>

                <div className="line second row">
                    <div className="box col-lg-3 col-md-6 col-sm-6 col-10">
                        <div className="top d-flex mb-2">
                            <img src="https://img.icons8.com/external-others-iconmarket/30/000000/external-roller-design-thinking-others-iconmarket.png" />
                            <h4 className='ml-2'>Exterior</h4>
                        </div>

                        <div className="text">
                            <p>The design team(s) responsible for the exterior of the vehicle develops the proportions, shape, and surface details of the vehicle. Exterior design is first done by a series of manual sketches and digital drawings.</p>
                        </div>
                    </div>

                    <div className="box col-lg-3 col-md-6 col-sm-6 col-10">
                        <div className="top d-flex mb-2">
                            <img src="https://img.icons8.com/fluency-systems-filled/30/000000/ruler-combined.png" />
                            <h4 className='ml-2'>Planning</h4>
                        </div>

                        <div className="text">
                            <p>Design methods are procedures, techniques, aids, or tools for designing. They offer a number of different kinds of activities that a designer might use within an overall design process.</p>
                        </div>
                    </div>
                </div>

                <div className="line third row">
                    <div className="box col-lg-3 col-md-6 col-sm-6 col-10">
                        <div className="top d-flex mb-2">
                            <img src="https://img.icons8.com/metro/30/000000/edit.png" />
                            <h4 className='ml-2'>Design</h4>
                        </div>

                        <div className="text">
                            <p>A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process.</p>
                        </div>
                    </div>

                    <div className="box col-lg-3 col-md-6 col-sm-6 col-10">
                        <div className="top d-flex mb-2">
                            <img src="https://img.icons8.com/external-others-zufarizal-robiyanto/30/000000/external-building-mutuline-real-estate-others-zufarizal-robiyanto.png" />
                            <h4 className='ml-2'>Execution</h4>
                        </div>

                        <div className="text">
                            <p>Design and production is one of planning and executing. In theory, the plan should anticipate and compensate for potential problems in the execution process.</p>
                        </div>
                    </div>
                </div>

                <div className="box-img">
                    <img src={Logo} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Aboutus