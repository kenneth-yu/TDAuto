import React, { useRef, useCallback, useState, useEffect } from "react";

export interface CarouselProps {
  children: React.ReactNode;
  /** Number of slides visible at once. Use 1 for single-item carousel. */
  slidesPerView?: number;
  /** Optional class for the carousel container */
  className?: string;
  /** Optional class for prev/next buttons */
  buttonClassName?: string;
  /** Optional class for the track (scroll container) */
  trackClassName?: string;
  /** Optional class for pagination dots (when showDots is true) */
  dotClassName?: string;
  /** When true, slides can scroll vertically (for variable-height content like reviews) */
  scrollableSlides?: boolean;
  /** Auto-advance to next slide after this many ms. Set to 0 or omit to disable. */
  autoPlayInterval?: number;
  /** Show pagination dots below the carousel */
  showDots?: boolean;
  /** When true, prev/next wrap around at the ends (infinite loop) */
  loop?: boolean;
  /** When true, hide prev/next buttons on mobile (show on md+) */
  hideButtonsOnMobile?: boolean;
  /** Class for "Swipe to browse" hint when hideButtonsOnMobile (default: text-white/60 for dark bg) */
  swipeHintClassName?: string;
  /** Gap between slides and dots when showDots (default true = gap-4). Use false + dotsGapClassName for custom gap. */
  dotsGap?: boolean;
  /** Custom gap class between slides and dots (e.g. "gap-2"). Used when showDots. */
  dotsGapClassName?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  slidesPerView = 1,
  className = "",
  buttonClassName = "",
  trackClassName = "",
  dotClassName = "",
  scrollableSlides = false,
  autoPlayInterval = 0,
  showDots = false,
  loop = false,
  hideButtonsOnMobile = false,
  swipeHintClassName = "text-white/60",
  dotsGap = true,
  dotsGapClassName,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const childArray = React.Children.toArray(children);
  const dotCount = Math.ceil(childArray.length / slidesPerView);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    const slideWidth = clientWidth / slidesPerView;

    setCanScrollPrev(scrollLeft > 0);
    setCanScrollNext(scrollLeft < maxScroll - 1); // -1 to handle rounding

    // Update active dot index
    const index = Math.round(scrollLeft / slideWidth);
    setActiveIndex(Math.min(index, dotCount - 1));
  }, [slidesPerView, dotCount]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();

    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);

    return () => observer.disconnect();
  }, [updateScrollState, children]);

  const scroll = (direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    const slideWidth = clientWidth / slidesPerView;

    if (loop) {
      if (direction === "next") {
        if (scrollLeft >= maxScroll - 1) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: slideWidth, behavior: "smooth" });
        }
      } else {
        if (scrollLeft <= 1) {
          el.scrollTo({ left: maxScroll, behavior: "smooth" });
        } else {
          el.scrollBy({ left: -slideWidth, behavior: "smooth" });
        }
      }
    } else {
      const delta = direction === "next" ? slideWidth : -slideWidth;
      el.scrollBy({ left: delta, behavior: "smooth" });
    }
  };

  const scrollToNext = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    const slideWidth = clientWidth / slidesPerView;

    if (scrollLeft >= maxScroll - 1) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: slideWidth, behavior: "smooth" });
    }
  }, [slidesPerView]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const el = scrollRef.current;
      if (!el) return;

      const slideWidth = el.clientWidth / slidesPerView;
      el.scrollTo({ left: index * slideWidth, behavior: "smooth" });
    },
    [slidesPerView]
  );

  useEffect(() => {
    if (
      autoPlayInterval <= 0 ||
      isPaused ||
      childArray.length <= slidesPerView
    ) {
      return;
    }
    const id = setInterval(scrollToNext, autoPlayInterval);
    return () => clearInterval(id);
  }, [
    autoPlayInterval,
    isPaused,
    scrollToNext,
    childArray.length,
    slidesPerView,
  ]);

  const handleScroll = () => {
    requestAnimationFrame(updateScrollState);
  };
  if (childArray.length === 0) return null;

  return (
    <div
      className={`flex flex-col ${showDots ? (dotsGapClassName ?? (dotsGap ? "gap-4" : "")) : ""} ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className={`flex items-center gap-2 md:gap-4 ${showDots ? "flex-1 min-h-0" : ""}`}>
        {childArray.length > slidesPerView ? (
          <button
            type="button"
            onClick={() => scroll("prev")}
            disabled={!loop && !canScrollPrev}
            aria-label="Previous slide"
            className={`shrink-0 w-12 h-12 flex items-center justify-center rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed ${hideButtonsOnMobile ? "hidden md:flex" : ""} ${buttonClassName}`}
          >
            <span className="material-symbols-outlined text-3xl">
              chevron_left
            </span>
          </button>
        ) : null}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className={`flex flex-1 min-w-0 overflow-x-auto snap-x snap-mandatory scrollbar-hide overscroll-x-contain ${trackClassName}`}
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {childArray.map((child, index) => (
            <div
              key={index}
              className={`shrink-0 snap-start h-full ${scrollableSlides ? "overflow-y-auto scrollbar-hide" : "overflow-hidden"}`}
              style={{
                width: `${100 / slidesPerView}%`,
                minWidth: `${100 / slidesPerView}%`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
        {childArray.length > slidesPerView ? (
          <button
            type="button"
            onClick={() => scroll("next")}
            disabled={!loop && !canScrollNext}
            aria-label="Next slide"
            className={`shrink-0 w-12 h-12 flex items-center justify-center rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed ${hideButtonsOnMobile ? "hidden md:flex" : ""} ${buttonClassName}`}
          >
            <span className="material-symbols-outlined text-3xl">
              chevron_right
            </span>
          </button>
        ) : null}
      </div>
      {showDots && dotCount > 1 && (
        <div className="flex flex-col items-center gap-2">
          <div className="flex justify-center gap-2" role="tablist" aria-label="Carousel pagination">
          {Array.from({ length: dotCount }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all ${i === activeIndex ? "w-6" : "w-2"} ${i === activeIndex ? "bg-[#4B5DB8]" : (dotClassName || "bg-white/50")}`}
            />
          ))}
          </div>
          {hideButtonsOnMobile && (
            <p className={`md:sr-only text-sm ${swipeHintClassName}`}>Swipe to browse</p>
          )}
        </div>
      )}
    </div>
  );
};
