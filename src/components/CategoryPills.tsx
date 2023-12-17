import { categories } from "../data/categories";
import { useEffect, useRef, useState } from "react";
import ChevronButton from "./ChevronButton";
import CategoryPill from "./CategoryPill";
import {
  scrollCategoryPillsLeft,
  scrollCategoryPillsRight,
} from "../utils/scrollCategoryPills";

const CategoryPills = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isLeftChevronVisible, setIsLeftChevronVisible] = useState(false);
  const [isRightChevronVisible, setIsRightChevronVisible] = useState(false);
  const [verticalTranslate, setVerticalTranslate] = useState(0);
  const categoryPillsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (categoryPillsContainerRef.current == undefined) return;

    const observer = new ResizeObserver((entries) => {
      const categoryPillsContainer = entries[0].target;

      setIsLeftChevronVisible(verticalTranslate < 0);
      setIsRightChevronVisible(
        Math.abs(verticalTranslate) <
          categoryPillsContainer.scrollWidth -
            categoryPillsContainer.clientWidth
      );

      if (
        Math.abs(verticalTranslate) >
        categoryPillsContainer.scrollWidth - categoryPillsContainer.clientWidth
      ) {
        setVerticalTranslate(
          categoryPillsContainer.clientWidth -
            categoryPillsContainer.scrollWidth
        );
      }
    });

    observer.observe(categoryPillsContainerRef.current);
    return () => {
      observer.disconnect();
    };
  }, [categories, verticalTranslate]);

  return (
    <div ref={categoryPillsContainerRef} className="overflow-x-hidden relative">
      <nav
        className="sticky top-0 bg-white pb-4 pt-0.5 overflow-x-hidden whitespace-nowrap flex gap-3 transition-transform w-[max-content]"
        style={{ transform: `translateX(${verticalTranslate}px)` }}
      >
        {categories.map((category) => (
          <CategoryPill
            key={category}
            category={category}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </nav>

      {isLeftChevronVisible && (
        <ChevronButton
          direction="left"
          onClick={() =>
            scrollCategoryPillsLeft({ verticalTranslate, setVerticalTranslate })
          }
        />
      )}
      {isRightChevronVisible && (
        <ChevronButton
          direction="right"
          onClick={() =>
            scrollCategoryPillsRight({
              verticalTranslate,
              setVerticalTranslate,
              categoryPillsContainerRef,
            })
          }
        />
      )}
    </div>
  );
};

export default CategoryPills;
