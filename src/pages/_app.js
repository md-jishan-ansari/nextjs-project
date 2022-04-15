import { useEffect, useState, createContext } from 'react';

import '../styles/globals.css'

import Wrapper from '../components/Wrapper.jsx';

import AppContext from '../AppContext.jsx';

function MyApp({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);

  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {

    return <AppContext.Provider value={{
      showFooter,
      setShowFooter
    }}>
      <Wrapper><Component {...pageProps} /></Wrapper>
    </AppContext.Provider>
  }
}

export default MyApp
