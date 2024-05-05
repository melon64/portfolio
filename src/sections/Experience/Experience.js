import React from 'react';
import { experiences } from '../../data.js';
import { v4 as uuidv4 } from 'uuid';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';

const Experience = () => {
    return (
        <section className='Experience section' id='experience'>
            <div className='container'>
                <h2 className='Experience-h2 section-head'>Experience</h2>
                <div className='Experience-wrapper'>
                    <VerticalTimeline>
                        {experiences.map((experience, index) => (
                            <VerticalTimelineElement
                                key={uuidv4()}
                                date={`${experience.StartDate} - ${experience.EndDate}`}
                                iconStyle={{ background: index % 2 === 0 ? 'var(--primary)' : 'var(--primary)', color: 'var(--primary)' }}
                            >
                                <h3 className="vertical-timeline-element-title">{experience.Role}, {experience.Company}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{experience.Location}</h4>
                                <ul>
                                    {experience.Description.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
}

export default Experience;