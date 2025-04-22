export interface UseIntersectionObserverOptions<T extends HTMLElement> {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  once?: boolean;
  elementType?: new () => T;
}
