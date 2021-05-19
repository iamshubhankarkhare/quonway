import React from 'react';
import Image from 'next/image';
import ImageWithFallback from './imageWithFallback';

const MockupImage = React.memo(({ src }) => {
  console.log('rendered Image');
  return (
    <>
      <ImageWithFallback src={src} width={300} height={300} />
    </>
  );
});

export default MockupImage;
