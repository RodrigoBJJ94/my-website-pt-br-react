import React from 'react';
import { default as MobileSvg } from '../../assets/img/MobileSvg.svg';

export default function MobileBackground() {
  return (
    <div className="mobile-background-svg" >
      <img src={MobileSvg} alt="" className="mobile-background-svg" />
    </div>
  );
};
