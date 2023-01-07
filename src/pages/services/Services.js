import React from 'react';
import Service from './Service';
import webDev from './../../assets/services/62700-website-development.json';
import webAppDev from './../../assets/services/130748-development.json';
import mobileDev from './../../assets/services/101820-mobile-app-showcase.json';
import apiDev from './../../assets/services/111575-api-testing.json';
import databaseDev from './../../assets/services/112482-database-store.json';
import techConsult from './../../assets/services/73814-working-people.json';

function Services() {
  const services = [
    {
      id: 1,
      serviceName: 'Website Development',
      animation: webDev,
    },
    {
      id: 2,
      serviceName: 'Web Application Development',
      animation: webAppDev,
    },
    {
      id: 3,
      serviceName: 'Mobile Application Development',
      animation: mobileDev,
    },
    {
      id: 4,
      serviceName: 'API Development',
      animation: apiDev,
    },
    {
      id: 5,
      serviceName: 'Database Design and Management',
      animation: databaseDev,
    },
    {
      id: 6,
      serviceName: 'Technical Consulting',
      animation: techConsult,
    },
  ];
  return (
    <div id='#services'>
      <h1 className='text-lg lg:text-3x1 font-bold text-secondary text-center pt-10'>
        My Services
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-1'>
        {services.map((service, i) => (
          <Service key={i} service={service}></Service>
        ))}
      </div>
    </div>
  );
}

export default Services;
