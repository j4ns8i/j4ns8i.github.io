import React, { useEffect } from "react";

// Adapted from https://github.com/omgovich/react-colorful "Popover picker" recipe

// Improved version of https://usehooks.com/useOnClickOutside/
export default function useClickOutside<T extends HTMLElement>(ref: React.RefObject<T>, handler: () => void) {
  useEffect(() => {
    let startedInside: boolean | null = false;
    let startedWhenMounted: T | null = null;

    const listener = (event: Event) => {
      // Do nothing if `mousedown` or `touchstart` started inside ref element
      if (startedInside || !startedWhenMounted) return;
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as T)) return;

      handler();
    };

    const validateEventStart: EventListener = (event: Event) => {
      startedWhenMounted = ref.current;
      startedInside = ref.current && ref.current.contains(event.target as T);
    };

    document.addEventListener("mousedown", validateEventStart);
    document.addEventListener("touchstart", validateEventStart);
    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("mousedown", validateEventStart);
      document.removeEventListener("touchstart", validateEventStart);
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
}
