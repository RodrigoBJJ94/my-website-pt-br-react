import React from 'react';
import { default as HomeSvg } from '../../assets/img/HomeSvg.svg';

export default function HomeBackground() {
  return (
    <div className="main-background-svg" >
      <img src={HomeSvg} alt="" className="main-background-svg" />
    </div>
  );
};
