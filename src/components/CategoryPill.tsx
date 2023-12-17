import YoutubeButton from "./YoutubeButton";

interface CategoryPillProps {
  category: string;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryPill = ({
  category,
  selectedCategory,
  setSelectedCategory,
}: CategoryPillProps) => {
  return (
    <YoutubeButton
      key={category}
      variant={selectedCategory === category ? "dark" : "default"}
      className="py-1 px-3 rounded-lg whitespace-nowrap"
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </YoutubeButton>
  );
};

export default CategoryPill;
