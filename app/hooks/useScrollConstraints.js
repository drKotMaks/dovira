import { useEffect, useState } from "react";

const useScrollConstraints = (containerRef, contentRef, data) => {
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = contentRef.current.scrollWidth;
        setConstraints({ left: containerWidth - contentWidth, right: 0 });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);

    return () => {
      window.removeEventListener("resize", updateConstraints);
    };
  }, [containerRef, contentRef, data]);

  return constraints;
};

export default useScrollConstraints;
