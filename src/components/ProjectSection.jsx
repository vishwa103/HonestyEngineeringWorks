import React from 'react'
import { LuArrowRightCircle } from 'react-icons/lu'
import ProjectImageOne from '../assets/ProjectImageOne.png';
import ProjectImageTwo from '../assets/ProjectImageTwo.png';
import ProjectImageThree from '../assets/ProjectImageThree.png';
import ProjectImage32 from '../assets/ProjectImage32.png';
import ProjectIconOne from '../assets/ProjectIconOne.svg';
import ProjectIconTwo from '../assets/ProjectIconTwo.svg';
import ProjectIconThree from '../assets/ProjectIconThree.svg';
import ProjectIconFour from '../assets/ProjectIconFour.svg';
import ProjectIconFive from '../assets/ProjectIconFive.svg';


const ProjectSection = () => {
  return (
    <div className='project-section'>
      <div className='mb-4'>
        <div className='section-title'>(04)</div>
        <div className='section-title'>Our Project</div>
      </div>
      <div className='d-flex justify-content-between align-items-center my-3'>
        <div className='project-title'>Our Commitment to Quality in Every Structure</div>
        <button className='button-primary'>Enquire Now <LuArrowRightCircle size={25} /></button>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='project-image-container'>
            <img src={ProjectImageOne} alt="ProjectImageOne" width="100%" />
            <div className='hero-bottom-container w-75'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex gap-2 align-items-end my-1'>
                  <div className='hero-text'>Cityscape Wheel</div>
                  <div className='hero-subtext'>/ stunning architectural feat spanning over a major river</div>
                </div>
              </div>
              <div className='divider'>
                <span className='line-gray'></span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-3 col-6'>
          <div className='project-image-container'>
            <img src={ProjectImageTwo} alt="ProjectImageTwo" width="100%" />
            <div className='hero-bottom-container w-75'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex gap-2 align-items-end my-1'>
                  <div className='hero-text'>Luxury Residential</div>

                </div>
              </div>
              <div className='divider'>
                <span className='line-gray'></span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-3 col-6'>
          <div className='project-image-container'>
            <img src={ProjectImageThree} alt="ProjectImageThree" width="100%" />
            <div className='hero-bottom-container w-75'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex gap-2 align-items-end my-1'>
                  <div className='hero-text'>Grand Bridge</div>
                </div>
              </div>
              <div className='divider'>
                <span className='line-gray'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='project-bottom-container'>
        <div className='row d-flex justify-content-around mt-5 mb-3'>
          <div className='col-md-3 mb-4'>
            <img src={ProjectImage32} alt="ProjectImage32" width="100%" />

          </div>
          <div className='col-md-8'>
            <div className='project-subtitle'>
              Years of Unparalleled Expertise
            </div>
            <div className='project-description'>
              HONESTY stands at the forefront of the structural and mega-structured steel industry. Since our inception, we have been dedicated to delivering top-tier steel solutions that blend innovation, precision, and reliability
            </div>
          </div>
        </div>
        <div className='divider my-5'>
          <span className='line-gold'></span>
        </div>
        <div className='row d-flex justify-content-between align-items-center'>
          <div className='col-md-4 col-lg-2 my-2'>
          <img src={ProjectIconOne} alt="ProjectIconOne" width="200px" />
          </div>
          <div className='col-md-4 col-lg-2 my-2'>
          <img src={ProjectIconTwo} alt="ProjectIconTwo" width="130px" />
          </div>
          <div className='col-md-4 col-lg-2 my-2'>
          <img src={ProjectIconThree} alt="ProjectIconThree" width="170px" />
          </div>
          <div className='col-md-4 col-lg-2 my-2'>
          <img src={ProjectIconFour} alt="ProjectIconFour" width="170px" />
          </div>
          <div className='col-md-4 col-lg-2 my-2'>
          <img src={ProjectIconFive} alt="ProjectIconFive" width="130px" />
          </div>
          </div>
      </div>
    </div>
  )
}

export default ProjectSection