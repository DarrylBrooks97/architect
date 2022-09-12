import { ReactNode } from 'react';
import { NextImage } from './NextImage';

const SideBar = () => {
  return (
    <div className="flex md:flex-col p-3 text-center items-center justify-between md:justify-start md:space-y-5">
      <div className="relative overflow-hidden w-12 h-12 rounded-full">
        <NextImage src="/aicon.png" alt="fdasfasdf" layout="fill" priority />
      </div>
      <div className="flex justify-between md:block">
        <p className="text-white text-xl font-medium cursor-pointer hover:text-slate-400 delay-100">
          Home
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
