import Link from 'next/link';
import Layout from '../components/Layout';
import { NextImage } from '../components/NextImage';
import { photos } from '../constants';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import { getExpiredDate } from '../utils';

const MyPhoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transitionDuration: '1000ms' }}
      exit={{ opacity: 0 }}
      className="flex-col justify-around text-center p-2"
    >
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
    </motion.div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { req, res } = ctx;
  const seen = req.cookies['seen'] === 'true';

  if (!seen) {
    const expiredDate = getExpiredDate();
    res.setHeader(
      'Set-Cookie',
      `seen=true;expires=${expiredDate.toUTCString()}; path=/; samesite=lax; httponly;`,
    );
  }

  return {
    props: {
      seen,
    },
  };
};

const Home = ({ seen }: { seen: boolean }) => {
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
          <Layout>
            <div className="grid grid-cols-1 gap-4 md:gap-1 md:grid-cols-2 p-3 animate-afterload">
              <MyPhoto />
              <MyPhoto />
              <MyPhoto />
            </div>
          </Layout>
        </div>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <p className="text-white animate-onload text-3xl">Architect</p>
        </div>
      )}
    </>
  );
};

export default Home;
