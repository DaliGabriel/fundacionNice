"use client";
import { Suspense } from "react";
import { LoadingSkeleton } from "../../../app/components/news/LoadingSkeleton";
import Hero from "../../components/common/Hero";
import NewsContentWrapper from "../../components/news/NewsContentWrapper";

const News = () => {
  return (
    <main className="min-h-screen bg-[#e6e6e6] dark:bg-[#e6e6e6]">
      <Hero
        title="Noticias"
        image="/heros/noticias.jpg"
        mobileImage="/heros/noticiasMobile.jpg"
      />
      <Suspense fallback={<LoadingSkeleton count={3} />}>
        <NewsContentWrapper />
      </Suspense>
    </main>
  );
};

export default News;
