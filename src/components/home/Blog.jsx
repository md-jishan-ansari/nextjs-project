import classes from './Home.module.css';

import Link from 'next/link';

import { Grid } from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Blog = () => {
  return (
    <div className={classes.topContainer} style={{ paddingRight: 0 }}>
      <Grid container>
        <Grid item lg={9}>
          <p>Stay Tuned.</p>
          <h4 className={classes.subHeading}>Blog</h4>
        </Grid>
        <Grid item lg={3}>
          <Link href="#">
            <div className={`${classes.discoveryLink} ${classes.blogLink}`}>
              <ArrowForwardIcon /> <span>Explore more</span>
            </div>
          </Link>
        </Grid>
      </Grid>
      <Carousel
        responsive={responsive}
        // infinite={true}
        infinite={false}
        // draggable={false}
        draggable={true}
        // swapable={false}
        swapable={true}
        // centerMode={true}
        centerMode={false}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {blogs?.map((blog) => (
          <Grid container key={blog.id} className={classes.blogContainer}>
            <Grid item className={classes.blogImage}>
              <img src={`./image/${blog.image}`} alt="logo" />
            </Grid>
            <Grid item>
              <p>April 13,2022</p>
              <p>by Ramzi Chamat</p>
            </Grid>
            <Grid item>
              <p>Why Conversion is Important for Luxury Hotels and how to Improve Yours</p>
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </div>
  );
};

export default Blog;
