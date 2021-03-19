import { getCLS, getFCP, getFID, getLCP, getTTFB, ReportHandler } from 'web-vitals';

export const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFCP(onPerfEntry);
    getFID(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};
