import React from 'react'
import HeroImage from '../assets/HeroImage.png';
import { FaPlayCircle } from 'react-icons/fa';


const HeroSection = () => {
    return (
        <div className=''>
            <div className='hero-container'>
                <img
                    src={HeroImage}
                    alt="Hero Image"
                    width="100%"
                    className='hero-image'
                />
                <div className='hero-subcontainer'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-7'>
                            <h1 className='hero-title '>Redefining Steel Construction with Expertise and Craftsmanship</h1>
                        </div>
                        <div className='col-md-5 '>
                            <div className='hero-subtitle-container'>
                                <div className='hero-subtitle'>Creating resilient steel frameworks that stand the test of time. Specializing in innovative, durable, and custom steel solutions for every scale</div>
                            </div>
                        </div><div className='col-md-12 '>
                            <div className='hero-subimage-container'>
                                <img
                                    src={HeroImage}
                                    alt="Hero Sub Image"
                                    width="100%"
                                    className='hero-subimage'
                                />
                                <div className='hero-bottom-container'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex gap-2 align-items-end my-1'>
                                        <div className='hero-text'>Cityscape Tower</div>
                                        <div className='hero-subtext'>/ stunning architectural feat spanning over a major river</div>
                                    </div>
                                    <FaPlayCircle className='hero-icon'/>
                                    </div>
                                    <div className='divider'>
                                        <span className='line'></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection