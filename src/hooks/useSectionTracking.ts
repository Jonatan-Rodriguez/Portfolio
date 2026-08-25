import { useEffect, useRef } from 'react';
import { logEvent } from '../utils/analytics';

export const useSectionTracking = (sectionName: string, threshold: number = 0.5) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          logEvent('Section', 'View', sectionName);

        }
      },
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [sectionName, threshold]);

  return ref;
};
