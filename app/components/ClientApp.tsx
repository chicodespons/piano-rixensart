'use client';

import dynamic from 'next/dynamic';
import MainApp from './MainApp';

const MusicalBackground = dynamic(() => import('./MusicalBackground'), { ssr: false });

export { MusicalBackground };
export default MainApp;
