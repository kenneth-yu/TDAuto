import React from "react";

export interface OptimizedImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "loading"> {
  /** Image source (url string) */
  src: string;
  /** Responsive srcset for multiple resolutions */
  srcSet?: string;
  /** Sizes attribute for responsive images */
  sizes?: string;
  /** Use for LCP images (Hero, above-fold) - fetches with high priority */
  priority?: boolean;
  /** Use for below-fold images - defers loading until near viewport */
  lazy?: boolean;
}

/**
 * Image component with loading optimization for mobile performance.
 * Use priority for LCP images, lazy for below-fold content.
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  srcSet,
  sizes,
  priority = false,
  lazy = true,
  decoding = "async",
  ...rest
}) => {
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      loading={priority ? "eager" : lazy ? "lazy" : undefined}
      fetchPriority={priority ? "high" : undefined}
      decoding={decoding}
      {...rest}
    />
  );
};
