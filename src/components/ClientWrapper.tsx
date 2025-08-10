'use client';

import dynamic from 'next/dynamic';

// Lazy load custom cursor for better performance (client-side only)
const CustomCursor = dynamic(() => import('./CustomCursor'), {
  ssr: false,
  loading: () => null,
});

// Performance monitoring (development only, client-side only)
const PerformanceMonitor = dynamic(() => import('./PerformanceMonitor'), {
  ssr: false,
  loading: () => null,
});

export default function ClientWrapper() {
  return (
    <>
      <CustomCursor />
      {/* Performance monitoring for development */}
      {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
    </>
  );
}
