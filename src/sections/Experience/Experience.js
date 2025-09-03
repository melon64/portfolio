import React from 'react';
import * as data from '../../data.js';
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
                        {data.experiences.map((experience, index) => (
                            <VerticalTimelineElement
                                key={uuidv4()}
                                date={<span className="date-style">{`${experience.StartDate} - ${experience.EndDate}`}</span>}

                                iconStyle={{ background: index % 2 === 0 ? 'var(--primary)' : 'var(--primary)', color: 'var(--primary)'}}
                                icon = {<img alt="" src={experience.Icon} style={{
                                    width: '100%', 
                                    height: '100%',
                                    borderRadius: '50%' 
                                }}></img>}
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