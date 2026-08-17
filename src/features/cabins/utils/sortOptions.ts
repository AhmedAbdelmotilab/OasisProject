export const sortOptions = [
  { value: "name-asc", label: "Sort by name (A-Z)" },
  { value: "name-desc", label: "Sort by name (Z-A)" },
  { value: "regularPrice-asc", label: "Sort by price (low first)" },
  { value: "regularPrice-desc", label: "Sort by price (high first)" },
  { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
  { value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
] as const;

export type SortValue = (typeof sortOptions)[number]["value"];
export const sortableFields = [...new Set(sortOptions.map((option) => option.value.split("-")[0]))] as const;
export type SortableField = (typeof sortableFields)[number];
