import React, { useState, useEffect, useCallback, useRef } from "react";
import { Carousel } from "~/components/Carousel";
import { OptimizedImage } from "~/components/OptimizedImage";

interface ImageItem {
  src: string;
  srcSet?: string;
  altText: string;
}

export interface Props {
  heading: string;
  images: ImageItem[];
}

const SWIPE_THRESHOLD = 50;

export const PhotoGallery: React.FC<Props> = ({ heading, images }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const closeOverlay = useCallback(() => setExpandedIndex(null), []);

  const goPrev = useCallback(() => {
    setExpandedIndex((i) => (i === null ? null : i > 0 ? i - 1 : images.length - 1));
  }, [images.length]);

  const goNext = useCallback(() => {
    setExpandedIndex((i) => (i === null ? null : i < images.length - 1 ? i + 1 : 0));
  }, [images.length]);

  useEffect(() => {
    if (expandedIndex === null) return;
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOverlay();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", handleKeydown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
    };
  }, [expandedIndex, closeOverlay, goPrev, goNext]);

  const handleOverlayTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleOverlayTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null || images.length <= 1) return;
      const endX = e.changedTouches[0].clientX;
      const delta = endX - touchStartX.current;
      touchStartX.current = null;
      if (Math.abs(delta) < SWIPE_THRESHOLD) return;
      if (delta > 0) goPrev();
      else goNext();
    },
    [goPrev, goNext, images.length]
  );

  if (images.length === 0) return null;

  const expandedImage = expandedIndex !== null ? images[expandedIndex] : null;

  return (
    <section
      id="photo-gallery"
      className="flex justify-center w-full bg-white pt-12 pb-16 md:pt-24 md:pb-28"
    >
      <div className="w-full max-w-5xl px-4 sm:px-6 md:px-16 text-gray-900 overflow-hidden">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
            {heading}
          </h2>
          <hr className="border-[3px] border-[#4B5DB8] rounded w-[70px] mt-4 mb-0 ml-0" />
        </div>
        <div className="mt-10 md:mt-12">
          <Carousel
            slidesPerView={1}
            className=""
            buttonClassName="bg-gray-100/95 border border-gray-200 text-[#4B5DB8] hover:bg-gray-200/95 backdrop-blur-sm shadow-sm"
            dotClassName="bg-gray-300"
            showDots
            loop
            hideButtonsOnMobile
            swipeHintClassName="text-gray-500"
            autoPlayInterval={6000}
          >
            {images.map((image, index) => (
              <div
                key={`image-${index}`}
                className="w-full aspect-[3/4] max-h-[800px] md:max-h-[720px] px-0"
              >
                <button
                  type="button"
                  onClick={() => setExpandedIndex(index)}
                  className="w-full h-full block cursor-pointer p-0 border-0 bg-transparent text-left"
                  aria-label={`View full size: ${image.altText}`}
                >
                  <OptimizedImage
                    src={image.src}
                    srcSet={image.srcSet}
                    sizes="(max-width: 768px) 100vw, min(90vw, 1024px)"
                    alt={image.altText}
                    className="w-full h-full object-contain rounded-lg bg-gray-100"
                    lazy={index > 0}
                    priority={index === 0}
                  />
                </button>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {expandedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full size image"
          className="fixed inset-0 z-[10001] flex flex-col items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/95"
            onClick={closeOverlay}
            aria-label="Close overlay"
          />
          <button
            type="button"
            onClick={closeOverlay}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous image"
                className="absolute left-[20%] top-1/2 -translate-y-1/2 z-10 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <span className="material-symbols-outlined text-3xl">chevron_left</span>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next image"
                className="absolute right-[20%] top-1/2 -translate-y-1/2 z-10 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <span className="material-symbols-outlined text-3xl">chevron_right</span>
              </button>
            </>
          )}
          <div
            className="flex flex-1 items-center justify-center w-full relative z-10 pointer-events-none"
          >
            <div
              className="pointer-events-auto touch-none"
              onTouchStart={handleOverlayTouchStart}
              onTouchEnd={handleOverlayTouchEnd}
              onClick={(e) => e.stopPropagation()}
            >
              <OptimizedImage
                src={expandedImage.src}
                srcSet={expandedImage.srcSet}
                sizes="100vw"
                alt={expandedImage.altText}
                className="max-w-full max-h-[calc(100vh-6rem)] w-auto h-auto object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
                lazy={false}
              />
            </div>
          </div>
          {images.length > 1 && (
            <p className="md:sr-only text-white/60 text-sm mt-2 relative z-10 pointer-events-none">
              Swipe or use arrows to browse
            </p>
          )}
        </div>
      )}
    </section>
  );
};
