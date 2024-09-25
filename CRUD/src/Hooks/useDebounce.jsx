import { useEffect, useState } from "react";

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      console.log("Setting New Time out");
      setDebouncedValue(value);
    }, delay);

    //   CLEAN UP METHOD: clean up function
    return () => {
      console.log(" Clearing the Time out ");
      clearTimeout(id);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
