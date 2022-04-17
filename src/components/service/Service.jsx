import classes from './Service.module.css';

import Link from 'next/link';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.jsx';

import BottomView from '../BottomView.jsx';

const Service = () => {
  const { ref: headingRef, inView: headingInView } = useInView();

  const { ref: brandingRef, inView: brandingInView } = useInView();
  const { ref: designRef, inView: designInView } = useInView();
  const { ref: webRef, inView: webInView } = useInView();
  const { ref: digitalRef, inView: digitalInView } = useInView();

  return (
    <div className="topContainer">
      <div ref={headingRef}>
        <motion.h2
          variants={fadeIn(headingInView, 0.2, 33)}
          initial="initial"
          animate="animate"
          className={`firstHeading ${classes.serviceHeading}`}
        >
          Web Agency Services.
        </motion.h2>
      </div>
      <p className="serviceDiscription">Experience matters</p>

      {/***********  branding ***********/}

      <Link href="#" passHref scroll={false}>
        <a>
          <p className={classes.subHeading}>1.Branding</p>
        </a>
      </Link>
      <p ref={brandingRef} className="serviceDiscription">
        <motion.sapn variants={fadeIn(brandingInView, 0.05, 5)} initial="initial" animate="animate">
          <Link href="#" scroll={false}>
            <a className="hover-underline-animation"> Market Analysis</a>
          </Link>
        </motion.sapn>{' '}
        <hr className="dash" />{' '}
        <motion.sapn variants={fadeIn(brandingInView, 0.1, 5)} initial="initial" animate="animate">
          <Link href="#" scroll={false}>
            <a className="hover-underline-animation">Brand Analysis</a>
          </Link>
        </motion.sapn>{' '}
        <hr className="dash" />
        <motion.sapn variants={fadeIn(brandingInView, 0.15, 5)} initial="initial" animate="animate">
          <Link href="#" scroll={false}>
            <a className="hover-underline-animation">Brand Personality</a>
          </Link>
        </motion.sapn>{' '}
        <hr className="dash" />{' '}
        <motion.sapn variants={fadeIn(brandingInView, 0.2, 5)} initial="initial" animate="animate">
          <Link href="#" scroll={false}>
            <a className="hover-underline-animation">Brand Strategy</a>
          </Link>{' '}
        </motion.sapn>
        <hr className="dash" />{' '}
        <motion.sapn variants={fadeIn(brandingInView, 0.25, 5)} initial="initial" animate="animate">
          <Link href="#" scroll={false}>
            <a className="hover-underline-animation">Brand Identity</a>
          </Link>{' '}
        </motion.sapn>
        <hr className="dash" />
      </p>

      {/************ 2.Design  ***********/}

      <Link href="#" passHref scroll={false}>
        <a>
          <p className={classes.subHeading}>2.Design</p>
        </a>
      </Link>
      <p ref={designRef} className="serviceDiscription">
        <motion.sapn variants={fadeIn(designInView, 0.05, 5)} initial="initial" animate="animate">
          <Link href="#" scroll={false}>
            <a className="hover-underline-animation">Prototyping</a>
          </Link>
        </motion.sapn>{' '}
        <hr className="dash" />{' '}
        <motion.sapn variants={fadeIn(designInView, 0.1, 5)} initial="initial" animate="animate">
          <Link href="#" scroll={false}>
            <a className="hover-underline-animation">UI/UX Design</a>
          </Link>
        </motion.sapn>{' '}
        <hr className="dash" />
        <motion.sapn variants={fadeIn(designInView, 0.15, 5)} initial="initial" animate="animate">
          <Link href="#" scroll={false}>
            <a className="hover-underline-animation">Motion Design</a>
          </Link>
        </motion.sapn>{' '}
        <hr className="dash" />{' '}
      </p>

      {/*********** 3.Web & Mobile Development **********/}

      <Link href="#" passHref scroll={false}>
        <a>
          <p className={classes.subHeading}>3.Web & Mobile Development</p>
        </a>
      </Link>
      <p ref={webRef} className="serviceDiscription">
        <motion.sapn variants={fadeIn(webInView, 0.05, 5)} initial="initial" animate="animate">
          <Link href="#" scroll={false}>
            <a className="hover-underline-animation">Business Platforms</a>
          </Link>
        </motion.sapn>{' '}
        <hr className="dash" />{' '}
        <motion.sapn variants={fadeIn(webInView, 0.1, 5)} initial="initial" animate="animate">
          <Link href="#" scroll={false}>
            <a className="hover-underline-animation">E-Commerce</a>
          </Link>
        </motion.sapn>{' '}
        <hr className="dash" />
        <motion.sapn variants={fadeIn(webInView, 0.15, 5)} initial="initial" animate="animate">
          <Link href="#" scroll={false}>
            <a className="hover-underline-animation">Mobile Apps</a>
          </Link>
        </motion.sapn>{' '}
        <hr className="dash" />{' '}
        <motion.sapn variants={fadeIn(webInView, 0.2, 5)} initial="initial" animate="animate">
          <Link href="#" scroll={false}>
            <a className="hover-underline-animation">Websites</a>
          </Link>{' '}
        </motion.sapn>
        <hr className="dash" />{' '}
        <motion.sapn variants={fadeIn(webInView, 0.25, 5)} initial="initial" animate="animate">
          <Link href="#" scroll={false}>
            <a className="hover-underline-animation">Legacy Code Optimisation</a>
          </Link>{' '}
        </motion.sapn>
        <hr className="dash" />
      </p>

      {/********* 4.Digital Marketing ***********/}

      <Link href="#" passHref scroll={false}>
        <a>
          <p className={classes.subHeading}>4.Digital Marketing</p>
        </a>
      </Link>
      <p ref={digitalRef} className="serviceDiscription">
        <motion.sapn variants={fadeIn(digitalInView, 0.05, 5)} initial="initial" animate="animate">
          <Link href="#" scroll={false}>
            <a className="hover-underline-animation">Search Engine Optimisation</a>
          </Link>
        </motion.sapn>{' '}
        <hr className="dash" />{' '}
        <motion.sapn variants={fadeIn(digitalInView, 0.1, 5)} initial="initial" animate="animate">
          <Link href="#" scroll={false}>
            <a className="hover-underline-animation">Search Engine Advertising</a>
          </Link>
        </motion.sapn>{' '}
        <hr className="dash" />
        <motion.sapn variants={fadeIn(digitalInView, 0.15, 5)} initial="initial" animate="animate">
          <Link href="#" scroll={false}>
            <a className="hover-underline-animation">Social Media Management</a>
          </Link>
        </motion.sapn>{' '}
        <hr className="dash" />{' '}
        <motion.sapn variants={fadeIn(digitalInView, 0.2, 5)} initial="initial" animate="animate">
          <Link href="#" scroll={false}>
            <a className="hover-underline-animation">Courses & Trainings</a>
          </Link>{' '}
        </motion.sapn>
        <hr className="dash" />{' '}
      </p>
      <BottomView />
    </div>
  );
};

export default Service;
