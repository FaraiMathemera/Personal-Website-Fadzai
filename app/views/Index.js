import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Fadzai Kadzinga</Link></h2>
          <p>Problem-solver, Compassionate, Enthusiastic.</p>
        </div>
      </header>
      <p> Welcome to <a href="/"> fadzaikadzinga.co.za </a>.<br/>
       Feel free to find out more <Link to="/about">about me</Link>,
         and what I do, or you can have a look at my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">posters</Link>. {' '} <br/>
        You can also get in  <Link to="/contact">contact</Link> with me.
      </p>
    </article>
  </Main>
);

export default Index;
