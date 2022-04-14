import { useEffect, useState } from 'react';

import '../styles/globals.css'

import Wrapper from '../components/Wrapper.jsx';

function MyApp({ Component, pageProps }) {
  // const [showing, setShowing] = useState(false);

  // useEffect(() => {
  //   setShowing(true);
  // }, []);

  // if (!showing) {
  //   return null;
  // }

  // if (typeof window === 'undefined') {
  //   return <></>;
  // } else {

  return <Wrapper><Component {...pageProps} /></Wrapper>
  // }
}

export default MyApp
