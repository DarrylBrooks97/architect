import { photos } from '../constants';
import { RootObject } from '../utils';

const Home = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center p-3">
      <div className="flex-col text-center">
        {/* <p className="text-5xl font-bold animate-onload">Architect</p> */}
        <div className="grid grid-cols-2 md:grid-cols-3">
          {new Array<RootObject>(5).fill(photos).map(p => (
            <div className=""></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
