import React from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import ExpertiseImageOne from '../assets/ExpertiseImageOne.png';
import ExpertiseImageTwo from '../assets/ExpertiseImageTwo.png';
import ExpertiseImageThree from '../assets/ExpertiseImageThree.png';

// Define image data array
// Define image data array with title and subtitle
const imageData = [
    {
      src: ExpertiseImageOne,
      alt: 'ExpertiseImageOne',
      title: 'Cityscape Tower',
      subtitle: 'Stunning architectural',
    },
    {
      src: ExpertiseImageTwo,
      alt: 'ExpertiseImageTwo',
      title: 'Urban Landmark',
      subtitle: 'Modern design',
    },
    {
      src: ExpertiseImageThree,
      alt: 'ExpertiseImageThree',
      title: 'Skyline Marvel',
      subtitle: 'Innovative structure',
    },
  ];
  

const ExpertiseSection = () => {
    return (
        <div className='expertise-section'>
            <div className='mb-4'>
                <div className='section-title'>(02)</div>
                <div className='section-title'>Our Expertise</div>
            </div>
            <div className='row d-flex justify-content-between'>
                <div className='col-md-5 my-3'>
                    <div className='expertise-title'>
                        Combining technology with craftsmanship, we deliver steel solutions that endure
                    </div>
                </div>
                <div className='col-md-3 my-3 d-flex flex-column gap-3'>
                    <div className='expertise-subtitle'>Industrial Components</div>
                    <div className='expertise-text'>Architectural Features</div>
                    <div className='expertise-text'>Interior Elements</div>
                    <div className='expertise-text'>Precision Cutting</div>
                </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                </div>
              <div className='col-md-8'>
            <div className='expertise-gallery'>
                <div className='expertise-scroll-container'>
                {imageData.map((image, index) => (
            <div className='expertise-image-container' key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className='expertise-image'
              />
              <div className='hero-bottom-container w-75'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex gap-2 align-items-end my-1'>
                    <div className='hero-text'>{image.title}</div>
                    <div className='hero-subtext'>/ {image.subtitle}</div>
                  </div>
                </div>
                <div className='divider'>
                  <span className='line-gray'></span>
                </div>
              </div>
            </div>
          ))}
                </div>
            </div>
            </div>
            </div>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-8 '>
                    <div className='d-flex gap-2 my-3 align-items-center'>
                        <FiArrowLeftCircle size={25} />
                        <div>Scroll On</div>
                        <div className='divider mt-2'>
                            <span className='dot'></span>
                            <span className='line'></span>
                            <span className='dot'></span>
                        </div>
                        <FiArrowRightCircle size={25} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertiseSection;
