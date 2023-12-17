const TRANSLATE_AMOUNT = 200

type ScrollCategoryPillsLeft = {
  verticalTranslate: number;
  setVerticalTranslate: React.Dispatch<React.SetStateAction<number>>;
};


const scrollCategoryPillsLeft = ({verticalTranslate, setVerticalTranslate}: ScrollCategoryPillsLeft) => {
  if (verticalTranslate + TRANSLATE_AMOUNT > 0) {
    setVerticalTranslate(0);
  } else {
    setVerticalTranslate(verticalTranslate + TRANSLATE_AMOUNT);
  }
};

type ScrollCategoryPillsRight = {
  verticalTranslate: number;
  setVerticalTranslate: React.Dispatch<React.SetStateAction<number>>;
  categoryPillsContainerRef: React.RefObject<HTMLDivElement>;
};

const scrollCategoryPillsRight = ({
  verticalTranslate,
  setVerticalTranslate,
  categoryPillsContainerRef,
}: ScrollCategoryPillsRight) => {
  if (categoryPillsContainerRef.current == undefined) return;
  const fullCategoryPillsWidth =
    categoryPillsContainerRef.current?.scrollWidth;
  const categoryPillsClientWidth =
    categoryPillsContainerRef.current?.clientWidth;
  if (
    Math.abs(verticalTranslate - TRANSLATE_AMOUNT) >=
    fullCategoryPillsWidth - categoryPillsClientWidth
  ) {
    setVerticalTranslate(categoryPillsClientWidth - fullCategoryPillsWidth);
  } else {
    setVerticalTranslate(verticalTranslate - TRANSLATE_AMOUNT);
  }
};

export { scrollCategoryPillsLeft, scrollCategoryPillsRight };