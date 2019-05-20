import React from "react";

function useUnloadBeacon({ url, data }) {
  const callback = React.useCallback(() => {
    if (navigator.sendBeacon) {
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
      navigator.sendBeacon(url, formData);
    }
  });

  React.useEffect(() => {
    window.addEventListener("unload", callback);
    return () => {
      window.removeEventListener("unload", callback);
    };
  }, []);
}

export default useUnloadBeacon;
