import classes from './Home.module.css';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { fadeIn } from '../variants.jsx';

const Top = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={classes.topContainer}>
      <h2 className={classes.topHeading}>
        Your Partner in
        <br />
        Digital Innovation
      </h2>
      <motion.p
        variants={fadeIn(inView, 0.4, 5)}
        initial="initial"
        animate="animate"
        className={classes.topDiscription}
      >
        Branding - Web Design - Web Development - Digital Marketing
      </motion.p>
      <div className={classes.topLogo}>
        <img src="./image/logoWhite.png" />
      </div>
    </div>
  );
};

export default Top;
