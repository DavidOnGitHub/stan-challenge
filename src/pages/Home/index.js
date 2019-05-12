import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';

import styles from './Home.module.scss';

const Home = props => {
  const { history } = props;
  const navigateTo = route => () => history.push(route);

  return (
    <div className={styles.container}>
      <Tile
        name="series"
        title="Popular Series"
        navigate={navigateTo('/series')}
      />
      <Tile
        name="movies"
        title="Popular Movies"
        navigate={navigateTo('/movies')}
      />
    </div>
  );
};

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default Home;
