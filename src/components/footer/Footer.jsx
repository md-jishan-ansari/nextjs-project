import { useContext } from 'react';
import AppContext from '../../AppContext';

import { Grid } from '@mui/material';

import Link from 'next/link';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants.jsx';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import classes from './Footer.module.css';

const partners = [
  {
    id: 1,
    image: 'logo.png',
    discription: ['Quai Gustave-Ador 62', '1207 Geneva', 'Switzerland'],
    contact: '+41 22 700 37 94',
  },
  {
    id: 2,
    image: 'logo.png',
    discription: ['Freigutstrasse 27', '8002 Zurich', 'Switzerland'],
  },
  {
    id: 3,
    image: 'logo.png',
    discription: ['17 Rue Eugène Delacroix', '75116 Paris', 'France'],
    contact: '+33 1 56 07 00 19',
  },
  {
    id: 4,
    image: 'logo.png',
    discription: ['7 Bell Yard', 'London WC2A 2JR', 'United Kingdom'],
    contact: '+44 20 3137 8121',
  },
  {
    id: 5,
    image: 'logo.png',
    discription: ['Burj Al Gassar Tower', '26660 Doha', 'Qatar'],
    contact: '+974 6644 9779',
  },
  {
    id: 6,
    image: 'logo.png',
    discription: ['Conrad Tower', 'Office 1903-33', 'Dubai', 'United Arab Emirates'],
  },
  {
    id: 7,
    image: 'logo.png',
    discription: ['1A Sportyvna Square', '01023 Kyiv', 'Ukraine'],
  },
  {
    id: 8,
    image: 'logo.png',
    discription: ['58 Ibn Charaf Street', '1002 Tunis', 'Tunisia'],
  },
];

const Footer = () => {
  const { showFooter, setShowFooter } = useContext(AppContext);

  console.log(showFooter);

  return (
    <div className={classes.container}>
      <Grid container rowSpacing={6} sx={{ flexDirection: { lg: 'row', xs: 'column-reverse' } }}>
        <Grid item lg={9}>
          <Grid container rowSpacing={7} columnSpacing={2}>
            {partners.map((partner) => (
              <Grid key={partner.id} item lg={3} sm={6} xs={6} className={classes.item}>
                <div className={classes.itemImage}>
                  <img src={`./image/${partner.image}`} alt="logo" />
                </div>
                {partner.discription.map((disc) => (
                  <motion.p
                    variants={fadeIn(showFooter, 0.2, 10)}
                    initial="initial"
                    animate="animate"
                    key={disc}
                    className={classes.itemText}
                  >
                    {disc}
                  </motion.p>
                ))}
                {partner?.contact && (
                  <motion.a
                    variants={fadeIn(showFooter, 0.2, 10)}
                    initial="initial"
                    animate="animate"
                    href={`tel:${partner.contact}`}
                    className={classes.itemText}
                  >
                    {`T: ${partner.contact}`}
                  </motion.a>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item lg={3} sm={12}>
          <Grid container columnSpacing={2}>
            <Grid item lg={6} sm={4} xs={6} sx={{ height: { lg: 210 }, paddingTop: '15px' }}>
              <motion.div
                variants={fadeIn(showFooter, 0.2, 10)}
                initial="initial"
                animate="animate"
                className={`hover-underline-animation underline-black underline-thin ${classes.itemText}`}
              >
                <Link href="#" scroll={false}>
                  Careers
                </Link>
              </motion.div>
              <motion.div
                variants={fadeIn(showFooter, 0.2, 10)}
                initial="initial"
                animate="animate"
                className={`hover-underline-animation underline-black underline-thin ${classes.itemText}`}
              >
                <Link href="#" scroll={false}>
                  Terms of use
                </Link>
              </motion.div>
              <motion.div
                variants={fadeIn(showFooter, 0.2, 10)}
                initial="initial"
                animate="animate"
                className={`hover-underline-animation underline-black underline-thin ${classes.itemText}`}
              >
                <Link href="#" scroll={false}>
                  Privacy Policy
                </Link>
              </motion.div>
              <motion.div
                variants={fadeIn(showFooter, 0.2, 10)}
                initial="initial"
                animate="animate"
                className={`hover-underline-animation underline-black underline-thin ${classes.itemText}`}
              >
                <Link href="#" scroll={false}>
                  Copyright & TM
                </Link>
              </motion.div>
            </Grid>
            <Grid item lg={6} sm={4} xs={6} sx={{ paddingTop: '40px' }}>
              <img src="./image/logo.png" width="60px" />
            </Grid>
            <Grid item lg={6} sm={4} xs={6} sx={{ paddingTop: '15px' }}>
              <motion.p
                variants={fadeIn(showFooter, 0.2, 10)}
                initial="initial"
                animate="animate"
                className={classes.itemText}
                style={{ fontSize: 14 }}
              >
                Social.
              </motion.p>
              <motion.div
                variants={fadeIn(showFooter, 0.2, 10)}
                initial="initial"
                animate="animate"
                className={`hover-underline-animation underline-black underline-thin ${classes.itemText}`}
              >
                <Link href="#" scroll={false}>
                  Facebook
                </Link>
              </motion.div>
              <motion.div
                variants={fadeIn(showFooter, 0.2, 10)}
                initial="initial"
                animate="animate"
                className={`hover-underline-animation underline-black underline-thin ${classes.itemText}`}
              >
                <Link href="#" scroll={false}>
                  LinkedIn
                </Link>
              </motion.div>
              <motion.div
                variants={fadeIn(showFooter, 0.2, 10)}
                initial="initial"
                animate="animate"
                className={`hover-underline-animation underline-black underline-thin ${classes.itemText}`}
              >
                <Link href="#" scroll={false}>
                  Instagram
                </Link>
              </motion.div>
              <motion.div
                variants={fadeIn(showFooter, 0.2, 10)}
                initial="initial"
                animate="animate"
                className={`hover-underline-animation underline-black underline-thin ${classes.itemText}`}
              >
                <Link href="#" scroll={false}>
                  awwwards.com
                </Link>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item></Grid>
      </Grid>
      <Grid container sx={{ marginTop: '100px' }}>
        <Grid item lg={1.5} sm={3} xs={6} align="center">
          <img src="./image/logo.png" width="80%" />
        </Grid>
        <Grid item lg={1.5} sm={3} xs={6} align="center">
          <img src="./image/logo.png" width="80%" />
        </Grid>
        <Grid item lg={1.5} sm={3} xs={6} align="center">
          <img src="./image/logo.png" width="80%" />
        </Grid>
        <Grid item lg={1.5} sm={3} xs={6} align="center">
          <img src="./image/logo.png" width="80%" />
        </Grid>
        <Grid item lg={1.5} sm={3} xs={6} align="center">
          <img src="./image/logo.png" width="80%" />
        </Grid>
        <Grid item lg={1.5} sm={3} xs={6} align="center">
          <img src="./image/logo.png" width="80%" />
        </Grid>
        <Grid item lg={1.5} sm={3} xs={6} align="center">
          <img src="./image/logo.png" width="80%" />
        </Grid>
        <Grid item lg={1.5} sm={3} xs={6} align="center">
          <img src="./image/logo.png" width="80%" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
