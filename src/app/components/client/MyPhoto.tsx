'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { photos } from '~/constants';
import { NextImage } from './NextImage';

export default function MyPhoto() {
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
}
