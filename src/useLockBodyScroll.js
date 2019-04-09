function useLockBodyScroll(condition) {
  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    const overflow = condition ? "hidden" : originalOverflow;
    document.body.style.overflow = overflow;
  }, [condition]);
}
