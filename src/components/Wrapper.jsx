import Navbar from './navbar/Navbar.jsx';
import Footer from './footer/Footer.jsx';

const Wrapper = (props) => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Wrapper;
