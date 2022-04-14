import classes from './Home.module.css';

const Top = () => {
  return (
    <div className={classes.topContainer}>
      <h2 className={classes.topHeading}>
        Your Partner in
        <br />
        Digital Innovation
      </h2>
      <p className={classes.topDiscription}>
        Branding - Web Design - Web Development - Digital Marketing
      </p>
      <div className={classes.topLogo}>
        <img src="./image/logoWhite.png" />
      </div>
    </div>
  );
};

export default Top;
