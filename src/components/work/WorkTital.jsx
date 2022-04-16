import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import { fadeIn } from '../variants.jsx';

import Link from 'next/link';

const WorkTital = ({ work, index }) => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref}>
      <motion.h4
        variants={fadeIn(inView, 0.2, 25)}
        initial="initial"
        animate="animate"
        className="workHeading"
      >
        <Link href="#" scroll={false}>
          <a className="hover-underline-animation">{work.heading}</a>
        </Link>
      </motion.h4>
      <p>{work.discription}</p>
    </div>
  );
};

export default WorkTital;
