import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Link } from '@material-ui/core';

import useStyles from './Footer.style';

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={`${classes.root} ${className}`}
    >
      <Typography variant="body1">
        &copy;{' '}
        <Link
          component="a"
          href="http://react-chef/"
          target="_blank"
        >
          React Chef
        </Link>
        . 2020
      </Typography>
      <Typography variant="caption">
        React Chef
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
