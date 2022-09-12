import { ReactNode } from 'react';
import { NextImage } from './NextImage';

const SideBar = () => {
  return (
    <div className="flex md:flex-col p-3 text-center items-center justify-between md:justify-start md:space-y-5">
      <div className="relative overflow-hidden w-20 h-20 rounded-full">
        <NextImage src="/favicon.ico" alt="fdasfasdf" layout="fill" priority />
      </div>
      <div className="flex justify-between md:block">
        <p className="text-white text-xl font-medium cursor-pointer hover:text-slate-400 delay-100">
          Home
        </p>
        <p className="text-white text-xl font-medium cursor-pointer ml-3 md:ml-0 hover:text-slate-400 delay-100">
          Photos
        </p>
      </div>
    </div>
  );
};
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SideBar />
      <div className="grow">{children}</div>
    </>
  );
};

export default Layout;
