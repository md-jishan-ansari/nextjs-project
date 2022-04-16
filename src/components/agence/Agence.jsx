import { useContext, useEffect } from 'react';
import AppContext from '../../AppContext';

import classes from './Agence.module.css';

import { Grid } from '@mui/material';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn, moreLinkAnimation } from '../variants.jsx';

import Link from 'next/link';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Bottom from '../home/Bottom.jsx';

const awards = [
  {
    id: 1,
    image: './image/003.jpg',
  },
  {
    id: 2,
    image: './image/003.jpg',
  },
  {
    id: 3,
    image: './image/003.jpg',
  },
  {
    id: 4,
    image: './image/003.jpg',
  },
  {
    id: 5,
    image: './image/003.jpg',
  },
  {
    id: 6,
    image: './image/003.jpg',
  },
  {
    id: 7,
    image: './image/003.jpg',
  },
  {
    id: 8,
    image: './image/003.jpg',
  },
];

const Agence = () => {
  const { setShowBottom } = useContext(AppContext);

  const { ref: headingRef, inView: headingInView } = useInView();
  const { ref: discRef, inView: discInView } = useInView();
  const { ref: forBottomRef, inView: forBottomInView } = useInView({ threshold: 0.6 });

  useEffect(() => {
    setShowBottom(!forBottomInView);
  }, [forBottomInView]);

  return (
    <>
      <div className={`topContainer ${classes.agenceContainer}`}>
        <div ref={headingRef}>
          <motion.h2
            variants={fadeIn(headingInView, 0.2, 33)}
            initial="initial"
            animate="animate"
            className={`firstHeading ${classes.agenceHeading}`}
          >
            The Agency.
          </motion.h2>
        </div>
        <div ref={discRef}>
          <motion.p
            variants={fadeIn(discInView, 0.2, 3)}
            initial="initial"
            animate="animate"
            className={classes.agenceDiscription}
          >
            EWM is a Web Design & Web Development Agency based in Geneva.
            <br />
            <br />
            <br />
            An agile 360° approach.
            <br />
            <br />
            Digital marketing is not a tool it is an expression of your brand fully integrated into
            the 360 marketing approach. Our team brings together what is desirable from a human
            point of view with what is technologically feasible & economically sustainable.
            <br />
            <br />
            The smart innovation created through the design thinking process not only drives product
            development but surfs opportunities, builds brand loyalty & a competitive advantage for
            a positive ROI. <br />
            <br />
            Our uncompromised human-centric process lays at heart of every digital & web solution.
            For you, we innovate while staying faithful to your brand & meeting your client&#39;s
            expectations.
            <br />
            <br />
            Because the bespoke solutions we deliver are ingenious & user-friendly, they are loved &
            adopted.
            <br />
            <br />
            We develop using the following CMSs & Frameworks. Drupal 8, Drupal 9, Concrete5,
            Wordpress, Laravel, Symfony, Magento and many more.{' '}
          </motion.p>
        </div>
        <Link href="#" scroll={false}>
          <motion.div
            variants={fadeIn()}
            whileHover="whileHover"
            whileTap="whileTap"
            className="discoveryLink"
          >
            <ArrowForwardIcon /> <span>Expertises & Services</span>
          </motion.div>
        </Link>
        <h4 style={{ fontWeight: 'normal', fontSize: 32 }}>Awards</h4>
        <Grid container spacing={8}>
          {awards.map((award) => (
            <Grid ref={forBottomRef} key={award.id} item lg={3} sm={6} xs={12}>
              <img src="./image/003.jpg" width="100%" />
            </Grid>
          ))}
        </Grid>
      </div>
      {/* <span ref={forBottomRef}></span> */}
      <Bottom />
    </>
  );
};

export default Agence;
