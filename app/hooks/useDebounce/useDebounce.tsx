import { useRef, useMemo, useEffect } from "react";
import { debounce } from "lodash";

const useDebounce = <T extends unknown[], S>(
  callback: (...args: T) => S,
  delay: number = 1000,
) => {
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  return useMemo(
    () => debounce((...arg: T) => ref.current(...arg), delay),
    [delay],
  );
};

export default useDebounce;
