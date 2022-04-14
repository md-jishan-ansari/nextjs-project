import classes from './Home.module.css';

import Top from './Top.jsx';
import Video from './Video.jsx';
import HomeContent from './HomeContent.jsx';
import Blog from './Blog.jsx';

const Home = () => {
  return (
    <>
      <Top />
      <Video />
      <HomeContent />
      <Blog />
    </>
  );
};

export default Home;
