import classes from './Work.module.css';

import { Button } from '@mui/material';

import { works } from './workData.jsx';

const Work = () => {
  console.log(works);
  return (
    <div className="topContainer">
      <p>A unique digital portfolio we are proud of!</p>
      <div>
        <Button className={classes.btn}>
          <span className="hover-underline-animation underline-thin">All projects</span>
        </Button>
        <Button className={classes.btn}>
          <span className="hover-underline-animation underline-thin">Banking & Finance</span>
        </Button>
        <Button className={classes.btn}>
          <span className="hover-underline-animation underline-thin">Hospitality</span>
        </Button>
        <Button className={classes.btn}>
          <span className="hover-underline-animation underline-thin">F&B</span>
        </Button>
        <Button className={classes.btn}>
          <span className="hover-underline-animation underline-thin">Luxury</span>
        </Button>
        <Button className={classes.btn}>
          <span className="hover-underline-animation underline-thin">Real estate</span>
        </Button>
        <Button className={classes.btn}>
          <span className="hover-underline-animation underline-thin">Aviation</span>
        </Button>
        <Button className={classes.btn}>
          <span className="hover-underline-animation underline-thin">Automotive</span>
        </Button>
        <Button className={classes.btn}>
          <span className="hover-underline-animation underline-thin">Medical & Health</span>
        </Button>
        <Button className={classes.btn}>
          <span className="hover-underline-animation underline-thin">NGOs</span>
        </Button>
        <Button className={classes.btn}>
          <span className="hover-underline-animation underline-thin">Technology</span>
        </Button>
      </div>
    </div>
  );
};

export default Work;
