import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="Fadzai Kadzinga" />
      </Link>
      <header>
        <h2>Fadzai Kadzinga</h2>
        <p><a href="mailto:f.kadzinga@gmail.com">f.kadzinga@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Fadzai Kadzinga.
            I am a PhD candidate in the<a href="http://www.ceber.uct.ac.za/"> Centre for Bioprocess Engineering</a> at the <a href="https://www.uct.ac.za/"> University of Cape Town, </a> expecting to complete my thesis in the first quarter of 2020.
            My project is based on improving a process for the bioremediation of industrial wastewater. I use microbial genetic information to inform design choices, and have shown that this deliberate approach results in a more efficient process that produces better quality water.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Farai Mathemera <Link to="/">faraimathemera.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
