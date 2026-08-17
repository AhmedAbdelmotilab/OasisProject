import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export { sortOptions } from "../utils/sortOptions"; // adjust to your actual path

export function useSortCabins() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") ?? "name-asc";
  const handleSortChange = (value: string) => {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchParams.set("sortBy", "name-asc");
      setSearchParams(searchParams);
    }, 0);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { sortBy, handleSortChange };
}
