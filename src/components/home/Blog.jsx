import { motion } from 'framer-motion';
import { moreLinkAnimation } from '../variants.jsx';

import classes from './Home.module.css';

import Link from 'next/link';
import { Grid } from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import BottomView from '../BottomView.jsx';

const blogs = [
  {
    id: 1,
    image: '011.jpg',
    data: 'April 13,2022',
    creater: 'by Ramzi Chamat',
    discription: 'Why Conversion is Important for Luxury Hotels and how to Improve Yours',
  },
  {
    id: 2,
    image: '011.jpg',
    data: 'April 13,2022',
    creater: 'by Ramzi Chamat',
    discription: 'Why Conversion is Important for Luxury Hotels and how to Improve Yours',
  },
  {
    id: 3,
    image: '011.jpg',
    data: 'April 13,2022',
    creater: 'by Ramzi Chamat',
    discription: 'Why Conversion is Important for Luxury Hotels and how to Improve Yours',
  },
  {
    id: 4,
    image: '011.jpg',
    data: 'April 13,2022',
    creater: 'by Ramzi Chamat',
    discription: 'Why Conversion is Important for Luxury Hotels and how to Improve Yours',
  },
  {
    id: 5,
    image: '011.jpg',
    data: 'April 13,2022',
    creater: 'by Ramzi Chamat',
    discription: 'Why Conversion is Important for Luxury Hotels and how to Improve Yours',
  },
  {
    id: 6,
    image: '011.jpg',
    data: 'April 13,2022',
    creater: 'by Ramzi Chamat',
    discription: 'Why Conversion is Important for Luxury Hotels and how to Improve Yours',
  },
  {
    id: 7,
    image: '011.jpg',
    data: 'April 13,2022',
    creater: 'by Ramzi Chamat',
    discription: 'Why Conversion is Important for Luxury Hotels and how to Improve Yours',
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1200 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1201, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 801, min: 500 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 501, min: 0 },
    items: 1,
  },
};

const Blog = () => {
  return (
    <div className={classes.blogContainer} style={{ paddingRight: 0 }}>
      <Grid container className="topContainer" style={{ paddingBottom: 15 }}>
        <Grid item lg={9} sm={6} xs={12}>
          <p>Stay Tuned.</p>
          <h4 className="workHeading" style={{ fontSize: '104px' }}>
            Blog
          </h4>
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <Link href="#" scroll={false}>
            <motion.div
              variants={moreLinkAnimation()}
              whileHover="whileHover"
              whileTap="whileTap"
              className={`discoveryLink ${classes.blogLink}`}
            >
              <ArrowForwardIcon /> <span>Explore more</span>
            </motion.div>
          </Link>
        </Grid>
      </Grid>
      <Carousel
        responsive={responsive}
        draggable={true}
        swapable={true}
        centerMode={false}
        // removeArrowOnDeviceType={['mobile']}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {blogs?.map((blog) => (
          <Link href="#" key={blog.id} scroll={false}>
            <a>
              <div className={classes.blogSubContainer}>
                <div className={classes.blogImage}>
                  <img src={`./image/${blog.image}`} alt="logo" />
                </div>

                <p style={{ lineHeight: 1.5 }}>
                  April 13,2022
                  <br />
                  by Ramzi Chamat
                </p>

                <p style={{ fontSize: 24 }}>
                  Why Conversion is Important for Luxury Hotels and how to Improve Yours
                </p>
              </div>
            </a>
          </Link>
        ))}
      </Carousel>
      <BottomView section="footer" />
    </div>
  );
};

export default Blog;
