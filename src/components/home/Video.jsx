import classes from './Home.module.css';

const Video = () => {
  return (
    <div className={classes.homeVideoContainer}>
      <video
        src="./video/Dynamic_video.mp4"
        type="video/mp4"
        autoPlay
        muted
        loop
        className={classes.homeVideo}
      />
    </div>
  );
};

export default Video;
