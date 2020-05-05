import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Blog';

const Blog = () => (
  <Main>
  <Helmet title="Blog" />
  <article className="post" id="stats">
    <header>
      <div className="title">
        <h2><Link to="/blog">Blog</Link></h2>
      </div>
    </header>

    <div id="medium-widget"></div>
  </article>
    </Main>

);

export default Blog;
