import { useState } from 'react';

import classes from './Work.module.css';

import { Button } from '@mui/material';

import { works, workTypes } from './workData.jsx';

import WorkTital from './WorkTital.jsx';

import BottomView from '../BottomView.jsx';

const Work = () => {
  const [newWorks, setNewWorks] = useState(works);
  const [underline, setUnderline] = useState(workTypes.all);

  const clickHandler = (value) => {
    setNewWorks(works.filter((work) => work.type.includes(value)));
    setUnderline(value);
    console.log(value, underline);
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
            <span
              className={`hover-underline-animation underline-thin ${
                value === underline && 'underline-active'
              }`}
            >
              {value}
            </span>
            {/* <span className=>{value}</span> */}
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
      <BottomView section="footer" />
    </div>
  );
};

export default Work;
