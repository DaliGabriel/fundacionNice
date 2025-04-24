/**
 * A reusable layout component that provides consistent content styling and structure.
 * This component is used throughout the application to maintain a consistent look and feel.
 *
 * @module ContentLayout
 */

import { ContentLayoutProps } from "../../../lib/types/contentLayout";

/**
 * ContentLayout component that wraps content in a styled container.
 *
 * @param {ContentLayoutProps} props - The component props
 * @param {React.ReactNode} props.children - The content to be displayed
 * @param {string} [props.className=""] - Additional CSS classes to apply
 * @param {boolean} [props.withPadding=true] - Whether to add padding to the content
 * @param {boolean} [props.centered=false] - Whether to center the content
 *
 * @returns {JSX.Element} A styled content container
 *
 * @example
 * // Basic usage
 * <ContentLayout>
 *   <h1>My Content</h1>
 *   <p>Some text here</p>
 * </ContentLayout>
 *
 * @example
 * // With custom styling
 * <ContentLayout
 *   className="bg-gray-100"
 *   withPadding={false}
 *   centered={true}
 * >
 *   <h1>Centered Content</h1>
 * </ContentLayout>
 */
export const ContentLayout = ({
  children,
  className = "",
  paddingTop = "pt-[200px]",
  paddingBottom = "pb-[100px]",
  centered = false,
}: ContentLayoutProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className={`relative ${paddingTop} ${paddingBottom}`}>
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
