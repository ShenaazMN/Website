import React from 'react';
import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

const config: Config = {
  name: {
    display: 'SHENAAZ',
    aria: 'My name is Shenaaz',
  },
  title: {
    display: 'UI UX Developer',
    aria: 'I am a UI UX Developer',
  },
  buttons: [
    {
      display: 'GitHub',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      href: 'https://github.com/Shenaazmulla',
    },
    {
      display: 'LinkedIn',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/mn-shenaaz-9932861b9/',
    },
    {
      display: 'Resume',
      aria: 'View my resume in Google Drive',
      icon: <Resume />,
      href: 'https://drive.google.com/file/d/1PL-_SfJJrvxbt18JkgJLoURbUwcorLRW/view?usp=sharing',
    },
    {
      display: 'Email',
      aria: 'Send me an email',
      icon: <Email />,
      href: 'mailto:Shenaazmn@gmail.com',
    },
  ],
};

export default config;
