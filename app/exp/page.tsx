'use client';
import { useEffect } from 'react';
import { enableExperimental } from '../../src/experimental';

const Page = () => {
  useEffect(() => {
    enableExperimental();
    location.replace('/');
  }, []);
  return null;
};

export default Page;
