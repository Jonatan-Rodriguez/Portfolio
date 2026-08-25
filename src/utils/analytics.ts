import ReactGA from 'react-ga4';

export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (measurementId && measurementId !== 'G-XXXXXXXXXX') {
    ReactGA.initialize(measurementId);
  } else {
    console.warn('Google Analytics ID no configurado o es el valor por defecto en .env');
  }
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

export const logPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};
