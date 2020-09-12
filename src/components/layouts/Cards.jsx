import React from "react";
import { animated } from 'react-spring';




export function Card({ children, props, trans }) {

  return (
    <animated.div
      className="bg-white overflow-hidden shadow rounded-lg"
      style={{ transform: props.xy.interpolate(trans) }}
    >
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </animated.div>
  );
}
