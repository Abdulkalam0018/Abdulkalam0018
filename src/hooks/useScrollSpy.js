import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observers = [];
    const visibleSections = new Map();

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }

            // Set the section with highest intersection ratio as active
            let maxRatio = 0;
            let maxId = sectionIds[0];
            visibleSections.forEach((ratio, sectionId) => {
              if (ratio > maxRatio) {
                maxRatio = ratio;
                maxId = sectionId;
              }
            });
            
            if (visibleSections.size > 0) {
              setActiveSection(maxId);
            }
          });
        },
        {
          rootMargin: `-${offset}px 0px -40% 0px`,
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, offset]);

  return activeSection;
};

export default useScrollSpy;
