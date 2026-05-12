export const trackEvent = (eventName: string, data?: Record<string, any>) => {
  // Console logging for debugging
  console.log(`[Track Event]: ${eventName}`, data || '');

  // Placeholder for Google Analytics / GTM / Vercel Analytics / Facebook Pixel
  if (typeof window !== 'undefined') {
    // Example: Vercel Web Analytics (va function is typically injected)
    if ((window as any).va) {
      (window as any).va('event', eventName, data);
    }
    
    // Example: Google Analytics (gtag)
    if ((window as any).gtag) {
      (window as any).gtag('event', eventName, data);
    }
    
    // Example: Plausible Analytics
    if ((window as any).plausible) {
      (window as any).plausible(eventName, { props: data });
    }
  }
};
