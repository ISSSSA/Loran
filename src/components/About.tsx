import React from 'react';

import YaMaps from './YaMaps';
import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { sections } = about;

  return (
    <>
      <YaMaps />
      <div
        id="about"
        className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
      >
        <div className="flex flex-col items-center justify-center">
          <div>
            <img src={logo} alt={companyName} className="w-52 h-32" />
          </div>
          <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
            {sections.map((section, index) => (
              <a
                key={`${section.name}-${index}`}
                href={section.href}
                className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
              >
                {section.name}
              </a>
            ))}
          </div>

          <div className="flex items-center mt-6">
            <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
              &copy; {new Date().getFullYear()} designed by Loran
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
