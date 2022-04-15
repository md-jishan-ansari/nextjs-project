import classes from '../component.module.css';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { fadeIn, moreLinkAnimation } from '../variants.jsx';

import Link from 'next/link';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomeContent = () => {
  const { ref: firstDiscRef, inView: firstDescInView } = useInView({
    threshold: 0.1,
  });
  const { ref: workHeadingRef, inView: workHeadingInView } = useInView();

  const { ref: LamborgRef, inView: LamborgInView } = useInView({ threshold: 0.1 });
  const { ref: ITCRef, inView: ITCInView } = useInView({ threshold: 0.1 });
  const { ref: UltimaRef, inView: UltimaInView } = useInView();
  const { ref: RéserveRef, inView: RéserveInView } = useInView();
  const { ref: HotelRef, inView: HotelInView } = useInView();

  const { ref: getInTouchRef, inView: getInTouchInView } = useInView();

  return (
    <>
      <div className={classes.contentContainer}>
        <div ref={firstDiscRef}>
          <motion.h3
            variants={fadeIn(firstDescInView, 0.1, 3)}
            initial="initial"
            animate="animate"
            className={classes.contentHeading}
          >
            Branding, Web Design,
            <br />
            Web Development & <br />
            Digital Marketing <br />
            Agency In Geneva.
          </motion.h3>
          <motion.p
            variants={fadeIn(firstDescInView, 0.3, 3)}
            initial="initial"
            animate="animate"
            className="aboutDiscription"
          >
            EWM. is a Swiss-born, Branding, Webdesign & Development, and Digital Marketing agency
            designed to efficiently support world-leading brands, SMEs, NGOs, and more. <br />
            From creating & executing bespoke digital & web solutions, to outstanding Branding and
            engaging Design to 360 Comms concepts. <br />
            Understanding your needs & knowing your audience, stands at the heart of every single
            and unique strategic approach we undertake. <br />
            <br />
            As unique as you. <br />
            <br />
            We develop using Drupal 8&9, Laravel, Symfony, Concrete5 & Wordpress.
          </motion.p>
        </div>
        <Link href="#" scroll={false}>
          <motion.div
            variants={moreLinkAnimation()}
            whileHover="whileHover"
            whileTap="whileTap"
            className="discoveryLink"
          >
            <ArrowForwardIcon /> <span>Explore more</span>
          </motion.div>
        </Link>
        <p>Services.</p>
        <p ref={workHeadingRef} className="serviceDiscription">
          <motion.sapn
            variants={fadeIn(workHeadingInView, 0.05, 5)}
            initial="initial"
            animate="animate"
          >
            <Link href="#" scroll={false}>
              <a className="hover-underline-animation"> Branding</a>
            </Link>
          </motion.sapn>{' '}
          <hr className="dash" />{' '}
          <motion.sapn
            variants={fadeIn(workHeadingInView, 0.1, 5)}
            initial="initial"
            animate="animate"
          >
            <Link href="#" scroll={false}>
              <a className="hover-underline-animation">Design</a>
            </Link>
          </motion.sapn>{' '}
          <hr className="dash" />
          <motion.sapn
            variants={fadeIn(workHeadingInView, 0.15, 5)}
            initial="initial"
            animate="animate"
          >
            <Link href="#" scroll={false}>
              <a className="hover-underline-animation">Web & Mobile Development</a>
            </Link>
          </motion.sapn>{' '}
          <hr className="dash" />{' '}
          <motion.sapn
            variants={fadeIn(workHeadingInView, 0.2, 5)}
            initial="initial"
            animate="animate"
          >
            <Link href="#" scroll={false}>
              <a className="hover-underline-animation">Digital Marketing</a>
            </Link>{' '}
          </motion.sapn>
          <hr className="dash" />
        </p>
        <Link href="#" scroll={false}>
          <motion.div
            variants={moreLinkAnimation()}
            whileHover="whileHover"
            whileTap="whileTap"
            className="discoveryLink"
          >
            <ArrowForwardIcon /> <span>Discover all</span>
          </motion.div>
        </Link>
        <p>Portfolio.</p>
        <div>
          <div ref={LamborgRef}>
            <motion.h4
              variants={fadeIn(LamborgInView, 0.1, 25)}
              initial="initial"
              animate="animate"
              className="workHeading"
            >
              <Link href="#" scroll={false}>
                <a className="hover-underline-animation">Lamborghini</a>
              </Link>
            </motion.h4>
          </div>
          <div ref={ITCRef}>
            <motion.h4
              variants={fadeIn(ITCInView, 0.2, 25)}
              initial="initial"
              animate="animate"
              className="workHeading"
            >
              <Link href="#" scroll={false}>
                <a className="hover-underline-animation">ITC | United Nations</a>
              </Link>
            </motion.h4>
          </div>
          <div ref={UltimaRef}>
            <motion.h4
              variants={fadeIn(UltimaInView, 0.3, 25)}
              initial="initial"
              animate="animate"
              className="workHeading"
            >
              <Link href="#" scroll={false}>
                <a className="hover-underline-animation">Ultima Collection</a>
              </Link>
            </motion.h4>
          </div>
          <div ref={RéserveRef}>
            <motion.h4
              variants={fadeIn(RéserveInView, 0.4, 25)}
              initial="initial"
              animate="animate"
              className="workHeading"
            >
              <Link href="#" scroll={false}>
                <a className="hover-underline-animation">La Réserve Geneva</a>
              </Link>
            </motion.h4>
          </div>
          <div ref={HotelRef}>
            <motion.h4
              variants={fadeIn(HotelInView, 0.5, 25)}
              initial="initial"
              animate="animate"
              className="workHeading"
            >
              <Link href="#" scroll={false}>
                <a className="hover-underline-animation">Hotel Spider</a>
              </Link>
            </motion.h4>
          </div>
        </div>
        <Link href="#" scroll={false}>
          <motion.div
            variants={moreLinkAnimation()}
            whileHover="whileHover"
            whileTap="whileTap"
            className="discoveryLink"
          >
            <ArrowForwardIcon /> <span>Discover more</span>
          </motion.div>
        </Link>
      </div>
      <div ref={getInTouchRef} className={classes.contentContainerBottom}>
        <motion.h4
          variants={fadeIn(!HotelInView, 0.1)}
          initial="initial"
          animate="animate"
          className={classes.subHeading}
          style={{ maxWidth: '800px' }}
        >
          The secret of getting ahead <br />
          is to get started.
        </motion.h4>
        <Link href="#" passHref scroll={false}>
          <motion.div
            variants={fadeIn(!HotelInView, 0.3)}
            whileHover="whileHover"
            whileTap="whileTap"
            initial="initial"
            animate="animate"
            className="discoveryLink"
          >
            <ArrowForwardIcon /> <span>Get In Touch Today</span>
          </motion.div>
        </Link>
      </div>
    </>
  );
};

export default HomeContent;
