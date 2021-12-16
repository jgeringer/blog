import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const Hero = (props) => {
  const {
    title,
  } = props;

  return (
    <div>
      {title}
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
};

export const heroFragment = graphql`
  fragment Hero on ContentfulHero {
    title
  }
`;

export default Hero;
