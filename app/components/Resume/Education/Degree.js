import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h3 className="degree">{data.degree}</h3>
      <p className="description">{data.description}</p>
      <p className="school"><a href={data.link}>{data.school}</a>, {data.year}</p>
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Degree;
