"use client";

import Hero from "../../components/common/Hero";
import NewsContentWrapper from "../../components/news/NewsContentWrapper";

const News = () => {
  return (
    <main className="min-h-screen">
      <Hero
        title="Noticias"
        image="/heros/noticias.jpg"
        mobileImage="/heros/noticiasMobile.jpg"
      />
      <NewsContentWrapper />
    </main>
  );
};

export default News;
