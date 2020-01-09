import React from 'react';
import PropTypes from 'prop-types';

import Volunteering from './Experience/Volunteering';

const Volunteer = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h2>Voluntary Experience and Personal Interest</h2>
    </div>
    {data.map((volunteering) => (
      <Volunteering
        data={volunteering}
        key={volunteering.company}
      />
    ))}
  </div>
);

Volunteer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    link: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Volunteer.defaultProps = {
  data: [],
};


export default Volunteer;
