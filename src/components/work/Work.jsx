import { useState, useContext, useEffect } from 'react';
import AppContext from '../../AppContext.jsx';

import { useInView } from 'react-intersection-observer';

import classes from './Work.module.css';

import { Button } from '@mui/material';

import { works, workTypes } from './workData.jsx';

import WorkTital from './WorkTital.jsx';

const Work = () => {
  const [newWorks, setNewWorks] = useState(works);

  const { setShowFooter } = useContext(AppContext);

  const { ref: forFooterRef, inView: forFooterInView } = useInView();

  useEffect(() => {
    setShowFooter(!forFooterInView);
  }, [forFooterInView]);

  const clickHandler = (key) => {
    setNewWorks(works.filter((work) => work.type.includes(key)));
    console.log(newWorks);
  };

  const scrollHandler = () => {
    console.log('scrolling');
  };

  return (
    <div
      scroll={scrollHandler}
      className="topContainer"
      style={{ position: 'relative', paddingTop: 150 }}
    >
      <p className={classes.workHeading}>A unique digital portfolio we are proud of!</p>
      <div>
        {Object.entries(workTypes).map(([key, value]) => (
          <Button onClick={() => clickHandler(value)} key={key} className={classes.btn}>
            <span className="hover-underline-animation underline-thin">{value}</span>
          </Button>
        ))}
      </div>
      <div>
        {newWorks.map((work, i) => (
          <>
            {i > 8 ? (
              <p style={{ marginTop: 60, marginBottom: 0 }}>{i + 1}</p>
            ) : (
              <p style={{ marginTop: 60, marginBottom: 0 }}>{`0${i + 1}`}</p>
            )}
            <WorkTital work={work} index={i} />
          </>
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 450,
        }}
        ref={forFooterRef}
      ></div>
    </div>
  );
};

export default Work;
