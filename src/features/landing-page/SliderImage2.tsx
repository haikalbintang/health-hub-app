"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Card from "@/components/Card";
import { cards } from "@/data/data";
import SectionTitle from "@/components/SectionTitle";
import SectionDiv from "@/components/SectionDiv";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CARD_WIDTH = 208; // w-52
const GAP = 32; // gap-8
const STEP = CARD_WIDTH + GAP;

// Viewport is capped to show ~4.5 cards (a peek of the next one), not the
// full window width — this is what makes it a fixed-size row instead of a
// full-bleed carousel.
const VIEWPORT_MAX_WIDTH = 4.5 * CARD_WIDTH + 4 * GAP;

export default function SliderImage2() {
  const router = useRouter();

  const viewportRef = useRef<HTMLDivElement>(null);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [pageStart, setPageStart] = useState(0);
  const [isRowHovered, setIsRowHovered] = useState(false);

  const totalCards = cards.length;
  const maxPageStart = Math.max(totalCards - itemsPerPage, 0);

  const measure = useCallback(() => {
    if (!viewportRef.current) return;
    const width = viewportRef.current.offsetWidth;
    const fit = Math.max(Math.floor((width + GAP) / STEP), 1);
    setItemsPerPage(fit);
    setPageStart((prev) => Math.min(prev, Math.max(totalCards - fit, 0)));
  }, [totalCards]);

  useEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    if (viewportRef.current) observer.observe(viewportRef.current);
    return () => observer.disconnect();
  }, [measure]);

  const atStart = pageStart === 0;
  const atEnd = pageStart >= maxPageStart;
  const lastVisibleIndex = pageStart + itemsPerPage - 1;

  function handlePrev() {
    setPageStart((prev) => Math.max(prev - itemsPerPage, 0));
  }

  function handleNext() {
    setPageStart((prev) => Math.min(prev + itemsPerPage, maxPageStart));
  }

  // function handleSeeRecipe(id: number) {
  //   router.push(`/recipe-detail/${id}`);
  // }

  return (
    <>
      <SectionDiv>Be Inspired With</SectionDiv>
      <SectionTitle>Our Recipes</SectionTitle>

      <div className="p-5">
        {/* Outer wrapper: relative, deliberately NOT overflow-hidden, so the
            arrows and the gradients (both positioned partly outside this
            box) are never clipped. It's capped to ~4.5 cards wide. */}
        <div
          className="group/row relative mx-auto"
          style={{ maxWidth: `${VIEWPORT_MAX_WIDTH}px` }}
          onMouseEnter={() => setIsRowHovered(true)}
          onMouseLeave={() => setIsRowHovered(false)}
        >
          {/* Left arrow — sits outside the viewport's left edge */}
          {!atStart && (
            <button
              onClick={handlePrev}
              aria-label="Previous recipes"
              className={`absolute -left-14 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white transition-opacity duration-200 hover:bg-black/90 ${
                isRowHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Right arrow — sits outside the viewport's right edge */}
          {!atEnd && (
            <button
              onClick={handleNext}
              aria-label="Next recipes"
              className={`absolute -right-14 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white transition-opacity duration-200 hover:bg-black/90 ${
                isRowHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Left gradient — starts outside the viewport (behind the arrow)
              and fades to transparent a little way INSIDE the viewport's
              edge. It lives in the outer wrapper, not the clipped one, so
              the "outside" half of it is actually visible. */}
          {!atStart && (
            <div className="pointer-events-none absolute -left-10 top-0 bottom-0 z-10 w-40 bg-gradient-to-r from-orange-50/60 via-orange-50/30 to-transparent" />
          )}

          {/* Right gradient — mirrored */}
          {!atEnd && (
            <div className="pointer-events-none absolute -right-10 top-0 bottom-0 z-10 w-40 bg-gradient-to-l from-orange-50/60 via-orange-50/30 to-transparent" />
          )}

          {/* Inner viewport: this is the ONLY element that clips horizontally.
              Vertical overflow stays visible so a hovered card's scale-up
              isn't cut off top/bottom. */}
          <div
            ref={viewportRef}
            className="overflow-x-hidden overflow-y-visible px-1 py-6"
          >
            <ul
              className="flex items-center gap-8 transition-transform duration-1000 ease-out"
              style={{ transform: `translate3d(${-pageStart * STEP}px, 0, 0)` }}
            >
              {cards.map((card, i) => (
                <div
                  key={card.id}
                  className={`shrink-0 ${
                    i === pageStart
                      ? "origin-left"
                      : i === lastVisibleIndex
                        ? "origin-right"
                        : "origin-center"
                  }`}
                >
                  <Card data={card} />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button className="bg-red-500 text-xl font-bold">More Recipes</Button>
      </div>
    </>
  );
}
