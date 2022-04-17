import { useState } from 'react';
import { Grid, Button, Pagination, PaginationItem, Paper, Stack } from '@mui/material';
import classes from './Blog.module.css';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.jsx';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { blogs, blogTypes } from './BlogData.jsx';
import BlogItem from './BlogItem.jsx';

import BottomView from '../BottomView.jsx';

const blogInOnePage = 6;

const Blog = () => {
  const { ref: blogRef, inView: blogInView } = useInView();

  const [newBlogs, setNewBlogs] = useState(blogs);
  const [finalBlogs, setFinalBlogs] = useState(blogs.slice(0, blogInOnePage));
  const [underline, setUnderline] = useState(blogTypes.all);
  const [paginate, setPaginate] = useState({
    noOfPage: Math.ceil(blogs.length / blogInOnePage),
    page: 1,
  });

  const clickHandler = (value) => {
    const tempBlogs = blogs.filter((blog) => blog.type.includes(value));
    setNewBlogs(tempBlogs);
    setFinalBlogs(tempBlogs.slice(0, blogInOnePage));
    setUnderline(value);
    setPaginate({ noOfPage: Math.ceil(tempBlogs.length / blogInOnePage), page: 1 });
  };

  const handleChange = (event, value) => {
    setFinalBlogs(
      newBlogs.slice((value - 1) * blogInOnePage, (value - 1) * blogInOnePage + blogInOnePage)
    );
    setPaginate({ ...paginate, page: value });
  };

  return (
    <div ref={blogRef} className={`topContainer ${classes.blogContainer}`}>
      <p>Stay Tuned.</p>
      <motion.h4
        variants={fadeIn(blogInView, 0.2, 23)}
        initial="initial"
        animate="animate"
        className="workHeading"
        style={{ fontSize: '116px' }}
      >
        Blog
      </motion.h4>
      <div style={{ marginTop: 50 }}>
        {Object.entries(blogTypes).map(([key, value]) => (
          <div key={key}>
            <Button onClick={() => clickHandler(value)} className={classes.btn}>
              <span
                className={`hover-underline-animation underline-thin ${
                  value === underline && 'underline-active'
                }`}
              >
                {value}
              </span>
            </Button>{' '}
          </div>
        ))}
      </div>
      <Grid container spacing={7} sx={{ paddingTop: 16 }}>
        {finalBlogs.map((blog) => (
          <Grid item md={6} key={blog.id}>
            <BlogItem blog={blog} />
          </Grid>
        ))}
      </Grid>

      {/* <Stack component={Paper} spacing={2} elevation={0} className={classes.paginateContainer}> */}
      <Pagination
        className={classes.paginate}
        count={paginate.noOfPage}
        page={paginate.page}
        onChange={handleChange}
        color="secondary"
        variant="outlined"
        size="large"
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
            className={classes.paginateItem}
          />
        )}
      />
      {/* </Stack> */}
      <BottomView section="footer" />
    </div>
  );
};

export default Blog;
