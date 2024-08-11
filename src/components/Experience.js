import React from 'react';

const Experience = () => {
  const workExperience = [
    {
      role: '.NET Developer',
      company: 'TavtaSoft Pvt. Lmt.',
      dates: 'May 2024 - Jun 2024',
      description: 'Developed a full-stack web application to facilitate volunteer management and engagement.'
    },
    {
      role: 'Full Stack Intern',
      company: 'Archon India Pvt. Lmt, Vadodara',
      dates: 'Nov 2023 - Jan 2024',
      description: 'Led the development of a web-based complex booking system, enhancing facility reservations for sports and increasing client satisfaction by 25%. Implemented essential features for booking management and payment tracking using Core PHP, MySQL, HTML, CSS, and JavaScript.'
    },
    {
      role: 'Web Developer Intern',
      company: 'Archon India Pvt. Lmt, Vadodara',
      dates: 'May 2023 - Jun 2023',
      description: 'Engineered a robust web-based TEACH Scholarship Application, optimizing student application processes and enhancing efficiency by 30%. Leveraged Core PHP, MySQL, HTML, CSS, and JavaScript for dynamic profile management and payment tracking.'
    }
  ];

  return (
    <section id="experience" className="experience-container">
      <h2>Work Experience</h2>
      <div className="timeline">
        {workExperience.map((experience, index) => (
          <div key={index} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="content">
              <h3>{experience.role} | {experience.company}</h3>
              <p>{experience.dates}</p>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
