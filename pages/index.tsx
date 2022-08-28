import { useEffect } from 'react';
import { NextImage } from '../components/NextImage';
import { photos } from '../constants';
import { RootObject } from '../utils';

const Home = () => {
  let msry: any;

  useEffect(() => {
    if (window) {
      setTimeout(() => {
        const Masonry = require('masonry-layout');
        msry = new Masonry('.photos', {
          columnWidth: 400,
          stagger: 30,
        });
        console.log('finishsed!');
        console.log({ msry });
      }, 3000);
    }
    // () => msry.off();
  }, []);
  return (
    <div className="w-screen h-screen flex justify-center items-center p-3">
      <div className="flex-col text-center w-full">
        {/* <p className="text-5xl font-bold animate-onload">Architect</p> */}
        <div className="photos">
          {new Array<RootObject>(5).fill(photos).map(p => (
            <div className="h-[200] w-full" key={p.id}>
              <NextImage src={p.urls.small} alt={p.id} layout="fill" priority />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
