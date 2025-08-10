import Script from 'next/script';

export default function ResourcePreloader() {
  return (
    <>
      {/* Preload critical project images */}
      <link rel="preload" href="/projects/movie.png" as="image" type="image/png" />
      <link rel="preload" href="/projects/quiz app 1.png" as="image" type="image/png" />
      <link rel="preload" href="/projects/wildoasis1.png" as="image" type="image/png" />
      
      {/* Performance monitoring script - non-blocking */}
      <Script
        id="performance-observer"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if ('PerformanceObserver' in window) {
              const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  if (entry.entryType === 'largest-contentful-paint') {
                    console.log('LCP:', entry.startTime);
                  }
                }
              });
              observer.observe({entryTypes: ['largest-contentful-paint']});
            }
          `,
        }}
      />
    </>
  );
}
