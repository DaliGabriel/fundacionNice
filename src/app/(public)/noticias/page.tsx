"use client";
import { Suspense } from "react";
import { LoadingSkeleton } from "../../../app/components/news/LoadingSkeleton";
import Hero from "../../components/common/Hero";
import NewsContentWrapper from "../../components/news/NewsContentWrapper";

const News = () => {
  return (
    <main className="min-h-screen">
      <Hero title="Noticias" image="/heros/noticias.jpg" />
      <Suspense fallback={<LoadingSkeleton count={3} />}>
        <NewsContentWrapper />
      </Suspense>
    </main>
  );
};

export default News;
