import { useContext, useEffect } from 'react';
import AppContext from '../../AppContext';

import classes from './Home.module.css';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants.jsx';

import Link from 'next/link';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import BottomView from '../BottomView.jsx';

const Bottom = () => {
  const { showBottom } = useContext(AppContext);

  return (
    <div className={classes.contentContainerBottom}>
      <motion.h4
        variants={fadeIn(showBottom, 0.4)}
        initial="initial"
        animate="animate"
        className="workHeading"
        style={{ postion: 'relative', maxWidth: '800px' }}
      >
        The secret of getting ahead <br />
        is to get started.
      </motion.h4>
      <Link href="./contact" passHref>
        <motion.div
          variants={fadeIn(showBottom, 0.1)}
          whileHover="whileHover"
          whileTap="whileTap"
          initial="initial"
          animate="animate"
          className="discoveryLink"
          style={{ marginBottom: 120, marginTop: 100 }}
        >
          <ArrowForwardIcon /> <span>Get In Touch Today</span>
        </motion.div>
      </Link>
      <BottomView section="footer" />
    </div>
  );
};

export default Bottom;
