import { NextImage } from '../components/NextImage';

const Home = () => {
  return (
    <div className="max-w-screen-xl flex mx-auto justify-center">
      {/* Sidebar */}
      <div className="flex-col p-8 h-screen  text-center space-y-5 ">
        <div className="relative overflow-hidden w-20 h-20 rounded-full">
          <NextImage src="/favicon.ico" alt="fdasfasdf" layout="fill" priority />
        </div>
        <p className="text-white text-xl font-medium cursor-pointer hover:text-slate-400 delay-100">
          Home
        </p>
        <p className="text-white text-xl font-medium cursor-pointer hover:text-slate-400 delay-100">
          Photos
        </p>
      </div>
      <div className="grow ">content</div>
    </div>
  );
};

export default Home;
