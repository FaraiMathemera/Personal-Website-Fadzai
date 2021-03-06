import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Volunteer from '../components/Resume/Volunteer';
import References from '../components/Resume/References';

import volunteers from '../data/resume/volunteers';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';

const sections = [
  'Education',
  'Experience',
  'Volunteer',
  'References',
];

const Resume = () => (
  <Main>
    <Helmet title="Resume" />
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Volunteer data={volunteers} />
      <References />

    </article>
  </Main>
);

export default Resume;
