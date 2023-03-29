'use client';

import { useState, useEffect } from 'react';
import MyPhoto from './MyPhoto';
import NavigationBar from './NavigationBar';

type ContentProps = {
  seen: boolean;
};

export default function Content({ seen }: ContentProps) {
  const [loaded, setLoaded] = useState(seen);

  useEffect(() => {
    const interval = setTimeout(() => {
      setLoaded(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loaded ? (
        <div className="max-w-screen-xl h-screen md:flex mx-auto justify-center p-4">
          <NavigationBar />
          <div className="grid grid-cols-1 gap-4 md:gap-1 md:grid-cols-2 p-3 animate-afterload">
            <MyPhoto />
            <MyPhoto />
            <MyPhoto />
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <p className="text-white animate-onload text-3xl">Hello 👋🏾</p>
        </div>
      )}
    </>
  );
}
