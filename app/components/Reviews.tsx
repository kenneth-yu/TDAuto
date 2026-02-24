import React, { useState, useEffect, useCallback, useRef } from "react";
import { Carousel } from "~/components/Carousel";
import { Icon } from "~/components/Icon";

interface Review {
  name: string;
  text: string;
}

export interface Props {
  heading: string;
  reviews: Review[];
}

const SWIPE_THRESHOLD = 50;

export const Reviews: React.FC<Props> = ({ heading, reviews }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const closeOverlay = useCallback(() => setExpandedIndex(null), []);

  const goPrev = useCallback(() => {
    setExpandedIndex((i) => (i === null ? null : i > 0 ? i - 1 : reviews.length - 1));
  }, [reviews.length]);

  const goNext = useCallback(() => {
    setExpandedIndex((i) => (i === null ? null : i < reviews.length - 1 ? i + 1 : 0));
  }, [reviews.length]);

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
      if (touchStartX.current === null || reviews.length <= 1) return;
      const endX = e.changedTouches[0].clientX;
      const delta = endX - touchStartX.current;
      touchStartX.current = null;
      if (Math.abs(delta) < SWIPE_THRESHOLD) return;
      if (delta > 0) goPrev();
      else goNext();
    },
    [goPrev, goNext, reviews.length]
  );

  if (reviews.length === 0) return null;

  const expandedReview = expandedIndex !== null ? reviews[expandedIndex] : null;

  return (
    <section id="reviews" className="flex justify-center w-full bg-black py-12 md:py-24">
      <div className="w-full max-w-5xl px-4 sm:px-6 md:px-16 overflow-hidden">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            {heading}
          </h2>
          <hr className="border-[3px] border-[#4B5DB8] rounded w-[70px] mt-4 mb-0 ml-0 opacity-80" />
        </div>
        <div className="mt-10 md:mt-12">
          <Carousel
            slidesPerView={1}
            className="h-[420px] md:h-[340px]"
            trackClassName="self-stretch items-stretch h-full"
            buttonClassName="bg-white/15 border border-white/40 text-white hover:bg-white/25 backdrop-blur-sm shadow-sm"
            showDots
            loop
            hideButtonsOnMobile
            autoPlayInterval={6000}
          >
            {reviews.map((review, index) => (
              <button
                key={`review-${index}`}
                type="button"
                onClick={() => setExpandedIndex(index)}
                className="flex h-full min-h-0 w-full flex-col rounded-xl border border-white/20 bg-white/5 p-4 md:p-6 md:pr-4 text-left cursor-pointer hover:bg-white/[0.07] transition-colors"
              >
                <Icon name="format_quote" variant="quote" />
                <blockquote className="m-0 flex flex-1 min-h-0 flex-col overflow-hidden">
                  <p className="text-base md:text-lg leading-relaxed text-white/90 m-0 mb-3 line-clamp-[8] md:line-clamp-6 overflow-hidden">
                    {review.text}
                  </p>
                  <footer className="font-semibold not-italic text-[#4B5DB8] text-base md:text-lg shrink-0">
                    — {review.name}
                  </footer>
                </blockquote>
              </button>
            ))}
          </Carousel>
        </div>
      </div>

      {expandedReview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full review"
          className="fixed inset-0 z-[10001] flex flex-col items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/95"
            onClick={closeOverlay}
            aria-hidden
          />
          <button
            type="button"
            onClick={closeOverlay}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          {reviews.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous review"
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
                aria-label="Next review"
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
              className="pointer-events-auto max-w-2xl w-full max-h-[70vh] md:max-h-[calc(100vh-6rem)] overflow-y-auto rounded-xl border border-white/20 bg-white/5 p-6 md:p-8"
              onTouchStart={handleOverlayTouchStart}
              onTouchEnd={handleOverlayTouchEnd}
              onClick={(e) => e.stopPropagation()}
            >
            <Icon name="format_quote" variant="quote" className="mb-2 block -mt-0" />
            <blockquote className="m-0">
              <p className="text-base md:text-lg leading-relaxed text-white/90 m-0 mb-4 whitespace-pre-line">
                {expandedReview.text}
              </p>
              <footer className="font-semibold not-italic text-[#4B5DB8] text-base md:text-lg">
                — {expandedReview.name}
              </footer>
            </blockquote>
            </div>
          </div>
          {reviews.length > 1 && (
            <p className="md:sr-only text-white/60 text-sm mt-2 relative z-10 pointer-events-none">
              Swipe or use arrows to browse
            </p>
          )}
        </div>
      )}
    </section>
  );
};
