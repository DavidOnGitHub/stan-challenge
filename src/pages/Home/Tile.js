import React from 'react';
import PropTypes from 'prop-types';

import styles from './Home.module.scss';

const Tile = ({ name, title, navigate }) => (
  <div className={styles['tile-container']}>
    <button className={styles.tile} onClick={navigate}>
      {name.toUpperCase()}
    </button>
    <div className={styles.title}>{title}</div>
  </div>
);

Tile.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  navigate: PropTypes.func.isRequired
};

export default Tile;
