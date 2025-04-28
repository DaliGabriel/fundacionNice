"use client";

import WaveEffect from "@/app/components/blog/WaveEffect";
import YellowLine from "@/app/components/blog/YellowLine";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { BlogContent } from "../../../../app/components/blog/BlogContent";
import { BlogCover } from "../../../../app/components/blog/BlogCover";
import { BlogHeader } from "../../../../app/components/blog/BlogHeader";
import Button from "../../../../app/components/common/Buttton";
import { ContentLayout } from "../../../../app/components/common/ContentLayout";
import { ErrorMessage } from "../../../../app/components/common/ErrorMessage";
import { LoadingSpinner } from "../../../../app/components/common/LoadingSpinner";
import { NotFound } from "../../../../app/components/common/NotFound";
import { usePosts } from "../../../../lib/hooks/usePosts";
import { PageState } from "../../../../lib/types/blog";

export default function BlogPostPage() {
  const { id } = useParams();
  const router = useRouter();
  const { fetchPostById, currentPost, isLoading, error } = usePosts();

  useEffect(() => {
    if (id) {
      fetchPostById(id as string);
    }
  }, [id, fetchPostById]);

  const handleBack = () => {
    router.back();
  };

  const getPageState = (): PageState => {
    if (isLoading) return { type: "loading" };
    if (error) return { type: "error", message: error };
    if (!currentPost) return { type: "not_found" };
    return { type: "loaded", post: currentPost };
  };

  const renderState = (state: PageState) => {
    switch (state.type) {
      case "loading":
        return <LoadingSpinner />;
      case "error":
        return <ErrorMessage message={state.message} />;
      case "not_found":
        return <NotFound message="Post not found" />;
      case "loaded":
        return (
          <div className="relative bg-[#f2f2f2]">
            <BlogCover coverUrl={state.post.cover} title={state.post.title} />

            <YellowLine />
            <WaveEffect />

            <ContentLayout centered>
              <BlogHeader
                title={state.post.title}
                date={state.post.updatedAt}
              />
              <BlogContent
                paragraph1={state.post.paragraph1}
                paragraph2={state.post.paragraph2}
                images1={[state.post.image1, state.post.image2]}
                images2={[state.post.image3, state.post.image4]}
                buttonLink={state.post.buttonLink}
              />
            </ContentLayout>

            <div className="flex justify-center mb-10">
              <Button text="← Regresar" onClick={handleBack} />
            </div>
          </div>
        );
    }
  };

  return renderState(getPageState());
}
