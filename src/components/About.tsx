import React from 'react';

import YaMaps from './YaMaps';
import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { sections } = about;

  return (
    <>
      <div
        id="about"
        className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
      >
        <div className="flex flex-row justify-center">
          <div className="flex h-40 w-1/2 mr-4">
            <YaMaps />
          </div>
          <div className="flex flex-col sm:gap-7 gap-7 mt-2 h-12 items-start justify-start">
            {sections.map((section, index) => (
              <a
                key={`${section.name}-${index}`}
                href={section.href}
                className="hover:text-primary text-base cursor-pointer leading-none text-gray-800 dark:text-gray-400 dark:hover:text-blue"
              >
                {section.name}
              </a>
            ))}
            <div>
              <img src={logo} alt={companyName} className="w-52 h-32" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 mt-6 flex flex-col items-center justify-center">
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} designed by Loran
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
