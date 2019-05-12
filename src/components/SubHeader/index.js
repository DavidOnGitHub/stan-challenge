import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './SubHeader.module.scss';

const SubHeader = ({ location }) => {
  let title = 'Popular Programs';
  if (location.pathname === '/movies') {
    title = 'Popular Movies';
  } else if (location.pathname === '/series') {
    title = 'Popular Series';
  }

  return (
    <div className={styles.container}>
      <div className={styles['title']}>{title}</div>
    </div>
  );
};

SubHeader.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

export default withRouter(SubHeader);
