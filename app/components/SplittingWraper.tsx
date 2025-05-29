'use client';

import { useEffect } from 'react';

export default function SplittingText({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const run = async () => {
      if (typeof window !== 'undefined') {
        const Splitting = (await import('splitting')).default;
        Splitting();
      }
    };
    run();
  }, []);

  return <div data-splitting>{children}</div>;
}