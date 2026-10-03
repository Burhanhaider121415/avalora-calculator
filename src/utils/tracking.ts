type AnalyticsData = Record<string, string | number | boolean>;
type AnalyticsWindow = Window & {
  va?: (command: string, event: string, data?: AnalyticsData) => void;
  gtag?: (command: string, event: string, data?: AnalyticsData) => void;
  plausible?: (event: string, options: { props?: AnalyticsData }) => void;
};
export const trackEvent = (eventName: string, data?: AnalyticsData) => {
  if (typeof window === 'undefined') return;
  const analytics = window as AnalyticsWindow;
  analytics.va?.('event', eventName, data);
  analytics.gtag?.('event', eventName, data);
  analytics.plausible?.(eventName, { props: data });
};
