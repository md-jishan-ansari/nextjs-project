import { useContext, useEffect } from 'react';
import AppContext from '../AppContext';

import { useInView } from 'react-intersection-observer';

const BottomView = ({ section }) => {
  const { ref, inView } = useInView();
  const { setShowFooter, setShowBottom } = useContext(AppContext);

  useEffect(() => {
    if (section === 'footer') setShowFooter(!inView);
    else setShowBottom(!inView);
  }, [inView]);

  return (
    <div position="relative">
      <div
        style={{
          position: 'absolute',
          bottom: 450,
        }}
        ref={ref}
      ></div>
    </div>
  );
};

export default BottomView;
