import { ContentLayoutProps } from "../../../lib/types/contentLayout";

export const ContentLayout = ({
  children,
  className = "",
  withPadding = true,
  centered = false,
}: ContentLayoutProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className={`relative ${withPadding ? "pt-[200px] pb-[100px]" : ""}`}>
        <article
          className={`
          prose 
          lg:prose-xl 
          w-full 
          max-w-3xl 
          mx-auto 
          bg-white 
          rounded-4xl 
          shadow-md 
          overflow-hidden 
          relative 
          z-10
          ${centered ? "text-center" : ""}
          ${className}
        `}
        >
          <div className="md:px-12 py-8">{children}</div>
        </article>
      </div>
    </div>
  );
};
