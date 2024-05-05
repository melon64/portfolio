import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { work } from '../../data.js';
import Card from '../../components/Card/Card.js';
import './Projects.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Projects = () => {  
    return (
      <section className='Project section' id='project'>
        <div className='container'>
          <h2 className='Project-h2 section-head'>Projects</h2>
          <div className='Project-wrapper'>
            <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2000} infinite={true}>
              {work.map((c) => (
                <div key={uuidv4()}>
                  <Card
                    name={c.name}
                    description={c.description}
                    stack={c.stack}
                    linkProject={c.linkProject}
                    linkGithub={c.linkGithub}
                  />
                </div>
              ))}
            </Carousel>
            <p>Total projects: {work.length}</p>
          </div>
        </div>    
      </section>
    );
  };

export default Projects;