import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageWithFallback = ({ src, ...rest }) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);
  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc('/undraw404.png');
      }}
    />
  );
};

export default ImageWithFallback;
