import { NextImage } from '../components/NextImage';
import { photos } from '../constants';
import { RootObject } from '../utils';

interface PhotoProps {
  photo: RootObject;
  size: number | string;
}

const Photo = (props: PhotoProps) => {
  return (
    <div
      className={`my-4 mx-3 row-end-[span_${props.size.toString().slice(0, 1)}] relative h-[${
        props.size
      }]`}
      key={props.photo.id}
    >
      <NextImage src={props.photo.urls.small} alt={props.photo.id} layout="fill" priority />
    </div>
  );
};

const Home = () => {
  const randomSize = (): string => {
    const rand = Math.floor(Math.random() * 3);
    return rand === 0 ? '250px' : rand === 1 ? '350px' : '450px';
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center p-6">
      <div className="flex-col text-center h-full w-full">
        {/* <p className="text-5xl font-bold animate-onload">Architect</p> */}
        <div className="grid absolute justify-center grid-cols-[repeat(auto-fill,250px)] left-1/2 -translate-x-2/4 h-full w-[80vw] auto-rows-[10px]">
          {new Array<RootObject>(5).fill(photos).map(photo => (
            <Photo photo={photo} size={randomSize()} key={photo.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
