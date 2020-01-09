import React from 'react';
import PropTypes from 'prop-types';

const Volunteer = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h3><a href={data.link}>{data.company}</a></h3>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Volunteer.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Volunteer;
