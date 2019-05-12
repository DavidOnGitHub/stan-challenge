import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';
import ProgramItem from '../../components/ProgramItem';
import { getPrograms } from '../../utils/api';

import styles from './Programs.module.scss';

const renderProgram = program => (
  <li className={styles.program} key={program.title}>
    <ProgramItem program={program} />
  </li>
);

const Programs = ({ type }) => {
  const [programs, setPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPrograms().then(
      data => {
        setPrograms(
          data.filter(item => item.programType === type).slice(0, 21)
        );
        setIsLoading(false);
      },
      () => setIsLoading(false)
    );
  }, [type]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <ol className={styles.programs}>{programs.map(renderProgram)}</ol>
      )}
    </div>
  );
};

Programs.propTypes = {
  type: PropTypes.string.isRequired
};

export default Programs;
