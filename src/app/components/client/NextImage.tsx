'use client';

import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

export function NextImage(props: ImageProps) {
  const [loading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={props.alt || 'Image'}
      style={{
        transition: '.3s ease-in-out',
        transform: loading ? 'scale(1.1)' : 'scale(1)',
        filter: loading ? 'blur(10px)' : 'blur(0)',
      }}
      draggable={false}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
