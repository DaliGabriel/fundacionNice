import { usePosts } from "../hooks/usePosts";
interface LoadingState {
  type: "loading";
}

interface ErrorState {
  type: "error";
  message: string;
}

interface NotFoundState {
  type: "not_found";
}

interface LoadedState {
  type: "loaded";
  post: NonNullable<ReturnType<typeof usePosts>["currentPost"]>;
}

export type PageState = LoadingState | ErrorState | NotFoundState | LoadedState;

export interface BlogContentProps {
  paragraph1: string;
  paragraph2?: string;
  images1: [string | undefined | null, string | undefined | null];
  images2: [string | undefined | null, string | undefined | null];
  buttonLink?: string;
}
