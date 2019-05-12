import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProgramItem.module.scss';

const ProgramItem = ({ program }) => (
  <div className={styles.container}>
    <img
      className={styles.preview}
      src={program.images['Poster Art'].url}
      alt={program.title}
    />
    <div className={styles.title}>{program.title}</div>
  </div>
);

ProgramItem.propTypes = {
  program: PropTypes.shape({
    image: PropTypes.shape({
      'Poster Art': PropTypes.shape({
        url: PropTypes.string.isRequired
      })
    }),
    title: PropTypes.string.isRequired
  })
};

export default ProgramItem;
