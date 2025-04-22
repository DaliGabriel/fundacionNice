import { useEffect, useRef, useState } from "react";
import { UseIntersectionObserverOptions } from "../types/observer";

export function useIntersectionObserver<
  T extends HTMLElement = HTMLDivElement
>({
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
  once = true,
}: UseIntersectionObserverOptions<T> = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, root, rootMargin, once]);

  return { isVisible, elementRef };
}
