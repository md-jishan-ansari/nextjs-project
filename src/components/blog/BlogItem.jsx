import { Grid } from '@mui/material';

import Link from 'next/link';
import classes from './Blog.module.css';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.jsx';

const BlogItem = ({ blog }) => {
  const { ref, inView } = useInView();

  return (
    <Link href="#">
      <a ref={ref}>
        <motion.div
          variants={fadeIn(inView, 0.3, 3)}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
          className={classes.blogSubContainer}
        >
          <div className={classes.blogImage}>
            <img src={blog.image} alt="logo" />
          </div>

          <p style={{ lineHeight: 1.5 }}>
            {blog.createdTime}
            <br />
            {blog.creater}
          </p>

          <p style={{ fontSize: 24 }}>{blog.heading}</p>
        </motion.div>
      </a>
    </Link>
  );
};

export default BlogItem;
