import classes from './Home.module.css';

import Link from 'next/link';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomeContent = () => {
  return (
    <>
      <div className={classes.contentContainer}>
        <h3 className={classes.contentHeading}>
          Branding, Web Design,
          <br />
          Web Development & <br />
          Digital Marketing <br />
          Agency In Geneva.
        </h3>
        <p className={classes.contentDiscription}>
          EWM. is a Swiss-born, Branding, Webdesign & Development, and Digital Marketing agency
          designed to efficiently support world-leading brands, SMEs, NGOs, and more. <br />
          From creating & executing bespoke digital & web solutions, to outstanding Branding and
          engaging Design to 360 Comms concepts. <br />
          Understanding your needs & knowing your audience, stands at the heart of every single and
          unique strategic approach we undertake. <br />
          <br />
          As unique as you. <br />
          <br />
          We develop using Drupal 8&9, Laravel, Symfony, Concrete5 & Wordpress.
        </p>
        <Link href="#">
          <div className={classes.discoveryLink}>
            <ArrowForwardIcon /> <span>Explore more</span>
          </div>
        </Link>
        <p>Services.</p>
        <p className={classes.secondDiscription}>
          <Link href="#">Branding</Link> <hr className={classes.dash} />{' '}
          <Link href="#">Design</Link> <hr className={classes.dash} />
          <Link href="#">Web & Mobile Development</Link> <hr className={classes.dash} />{' '}
          <Link href="#">Digital Marketing</Link> <hr className={classes.dash} />
        </p>
        <Link href="#">
          <div className={classes.discoveryLink}>
            <ArrowForwardIcon /> <span>Discover all</span>
          </div>
        </Link>
        <p>Portfolio.</p>
        <div className={classes.thirdDiscription}>
          <h4 className={classes.subHeading}>
            <Link href="#">Lamborghini</Link>
          </h4>
          <h4 className={classes.subHeading}>
            <Link href="#">ITC | United Nations</Link>
          </h4>
          <h4 className={classes.subHeading}>
            <Link href="#">Ultima Collection</Link>
          </h4>
          <h4 className={classes.subHeading}>
            <Link href="#">La Réserve Geneva</Link>
          </h4>
          <h4 className={classes.subHeading}>
            <Link href="#">Hotel Spider</Link>
          </h4>
        </div>
        <Link href="#">
          <div className={classes.discoveryLink}>
            <ArrowForwardIcon /> <span>Discover more</span>
          </div>
        </Link>
      </div>
      <div className={classes.contentContainerBottom}>
        <h4 className={classes.subHeading} style={{ maxWidth: '800px' }}>
          The secret of getting ahead <br />
          is to get started.
        </h4>
        <Link href="#">
          <div className={classes.discoveryLink}>
            <ArrowForwardIcon /> <span>Get In Touch Today</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomeContent;
