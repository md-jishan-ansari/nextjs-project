import { Grid } from '@mui/material';

import Link from 'next/link';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.container}>
      <Grid container rowSpacing={6} sx={{ flexDirection: { lg: 'row', xs: 'column-reverse' } }}>
        <Grid item lg={9}>
          <Grid container rowSpacing={7} columnSpacing={2}>
            <Grid item lg={3} sm={6} xs={6} className={classes.item}>
              <div className={classes.itemImage}>
                <img src="./image/logo.png" alt="logo" />
              </div>
              <p className={classes.itemText}>Quai Gustave-Ador 62</p>
              <p className={classes.itemText}>1207 Geneva</p>
              <p className={classes.itemText}>Switzerland</p>
              {/* <Link href="#">T: +41 22 700 37 94</Link> */}
              <Link href="#">Branding</Link>
            </Grid>
            <Grid item lg={3} sm={6} xs={6} className={classes.item}>
              <div className={classes.itemImage}>
                <img src="./image/logo.png" alt="logo" />
              </div>
              <p className={classes.itemText}>Freigutstrasse 27</p>
              <p className={classes.itemText}>8002 Zurich</p>
              <p className={classes.itemText}>Switzerland</p>
            </Grid>
            <Grid item lg={3} sm={6} xs={6} className={classes.item}>
              <div className={classes.itemImage}>
                <img src="./image/logo.png" alt="logo" />
              </div>
              <p className={classes.itemText}>17 Rue Eugène Delacroix</p>
              <p className={classes.itemText}>75116 Paris</p>
              <p className={classes.itemText}>France</p>
              <a href="tel:+33 1 56 07 00 19" className={classes.itemText}>
                T: +33 1 56 07 00 19
              </a>
            </Grid>
            <Grid item lg={3} sm={6} xs={6} className={classes.item}>
              <div className={classes.itemImage}>
                <img src="./image/logo.png" alt="logo" />
              </div>
              <p className={classes.itemText}>7 Bell Yard</p>
              <p className={classes.itemText}>London WC2A 2JR</p>
              <p className={classes.itemText}>United Kingdom</p>
              <a href="tel:+44 20 3137 8121" className={classes.itemText}>
                T: +44 20 3137 8121
              </a>
            </Grid>
            <Grid item lg={3} sm={6} xs={6} className={classes.item}>
              <div className={classes.itemImage}>
                <img src="./image/logo.png" alt="logo" />
              </div>
              <p className={classes.itemText}>Burj Al Gassar Tower</p>
              <p className={classes.itemText}>26660 Doha</p>
              <p className={classes.itemText}>Qatar</p>
              <a href="tel:+974 6644 9779" className={classes.itemText}>
                T: +974 6644 9779
              </a>
            </Grid>
            <Grid item lg={3} sm={6} xs={6} className={classes.item}>
              <div className={classes.itemImage}>
                <img src="./image/logo.png" alt="logo" />
              </div>
              <p className={classes.itemText}>Conrad Tower</p>
              <p className={classes.itemText}>Office 1903-33</p>
              <p className={classes.itemText}>Dubai</p>
              <p className={classes.itemText}>United Arab Emirates</p>
            </Grid>
            <Grid item lg={3} sm={6} xs={6} className={classes.item}>
              <div className={classes.itemImage}>
                <img src="./image/logo.png" alt="logo" />
              </div>
              <p className={classes.itemText}>1A Sportyvna Square</p>
              <p className={classes.itemText}>01023 Kyiv</p>
              <p className={classes.itemText}>Ukraine</p>
            </Grid>
            <Grid item lg={3} sm={6} xs={6} className={classes.item}>
              <div className={classes.itemImage}>
                <img src="./image/logo.png" alt="logo" />
              </div>
              <p className={classes.itemText}>58 Ibn Charaf Street</p>
              <p className={classes.itemText}>1002 Tunis</p>
              <p className={classes.itemText}>Tunisia</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={3} sm={12}>
          <Grid container columnSpacing={2}>
            <Grid item lg={6} sm={4} xs={6} sx={{ height: { lg: 210 }, paddingTop: '15px' }}>
              <div className={classes.itemText}>
                <Link href="#">Careers</Link>
              </div>
              <div className={classes.itemText}>
                <Link href="#">Terms of use</Link>
              </div>
              <div className={classes.itemText}>
                <Link href="#">Privacy Policy</Link>
              </div>
              <div className={classes.itemText}>
                <Link href="#">Copyright & TM</Link>
              </div>
            </Grid>
            <Grid item lg={6} sm={4} xs={6} sx={{ paddingTop: '40px' }}>
              <img src="./image/logo.png" width="60px" />
            </Grid>
            <Grid item lg={6} sm={4} xs={6} sx={{ paddingTop: '15px' }}>
              <p className={classes.itemText} style={{ fontSize: 14 }}>
                Social.
              </p>
              <div className={classes.itemText}>
                <Link href="#">Facebook</Link>
              </div>
              <div className={classes.itemText}>
                <Link href="#">LinkedIn</Link>
              </div>
              <div className={classes.itemText}>
                <Link href="#">Instagram</Link>
              </div>
              <div className={classes.itemText}>
                <Link href="#">awwwards.com</Link>
              </div>
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
