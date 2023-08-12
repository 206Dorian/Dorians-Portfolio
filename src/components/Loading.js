import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Loading = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });

  return (
    <div>
      <animated.div style={props}>
        {<h1>Loading...</h1>}
      </animated.div>
    </div>
  );
};

export default Loading;

