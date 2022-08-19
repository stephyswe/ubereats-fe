import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import { Link } from '@/components';

export default function NotFoundPage() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-[30vh] flex-col items-center justify-center text-center text-black'>
          <RiAlarmWarningFill
            size={60}
            className='drop-shadow-glow animate-flicker text-red-500'
          />
          <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
          <Link className='mt-4 md:text-lg' href='/'>
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
