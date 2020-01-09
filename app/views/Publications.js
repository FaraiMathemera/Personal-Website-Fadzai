import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Personal from '../components/Publications/Personal';
import Site from '../components/Publications/Site';

const Publications = () => (
  <Main>
    <Helmet title="Publications & Contributions" />
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2><Link to="/publications">Publications & Contributions</Link></h2>
        </div>
      </header>
      <Personal />
    </article>
  </Main>
);

export default Publications;
