import { useLayoutEffect } from 'react';

function useLockBodyScroll(condition) {
  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    const overflow = condition ? 'hidden' : originalOverflow;
    document.body.style.overflow = overflow;
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [condition]);
 }

export default useLockBodyScroll;
