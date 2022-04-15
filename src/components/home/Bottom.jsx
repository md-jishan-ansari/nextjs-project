import { useContext, useEffect } from 'react';
import AppContext from '../../AppContext';

import classes from '../component.module.css';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { fadeIn } from '../variants.jsx';

import Link from 'next/link';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Bottom = () => {
  const { showBottom, setShowFooter } = useContext(AppContext);

  const { ref: forFooterRef, inView: forFooterInView } = useInView({ threshold: 0.7 });

  useEffect(() => {
    setShowFooter(!forFooterInView);
  }, [forFooterInView]);

  return (
    <div ref={forFooterRef} className={classes.contentContainerBottom}>
      <motion.h4
        variants={fadeIn(showBottom, 0.4)}
        initial="initial"
        animate="animate"
        className="workHeading"
        style={{ maxWidth: '800px' }}
      >
        The secret of getting ahead <br />
        is to get started.
      </motion.h4>
      <Link href="#" passHref scroll={false}>
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
    </div>
  );
};

export default Bottom;
