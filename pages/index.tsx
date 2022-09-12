import Link from 'next/link';
import Layout from '../components/Layout';
import { NextImage } from '../components/NextImage';
import { photos } from '../constants';

const MyPhoto = () => {
  return (
    <div className="flex-col justify-around text-center">
      <div className="relative w-full h-56 md:w-56 md:h-96">
        <NextImage src={photos.urls.regular} alt="fdasfasdf" layout="fill" priority />
      </div>
      <p className="text-white p-2">
        Tour de France <span>🚲</span>
      </p>
      <div className="grid grid-cols-3 p-3">
        <p className="text-white text-sm">F-stop: 3.5</p>
        <p className="text-white text-sm">Apeture: 3.5</p>
        <p className="text-white text-sm">Shutter S: 3.5</p>
      </div>
      <Link href="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1310&q=80">
        <a
          className="rounded-md border border-white px-3 py-1 text-white"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          View
        </a>
      </Link>
    </div>
  );
};

const Home = () => {
  return (
    <div className="max-w-screen-xl h-screen md:flex mx-auto justify-center p-8">
      <Layout>
        <div className="grid grid-cols-1 gap-4 md:gap-1 md:grid-cols-2 p-3">
          <MyPhoto />
          <MyPhoto />
          <MyPhoto />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
