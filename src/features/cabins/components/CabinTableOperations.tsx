import { sortOptions, useSortCabins } from "../hooks/useSortCabins";
import styles from "./CabinTableOperations.module.css";

function CabinTableOperations() {
  const { sortBy, handleSortChange } = useSortCabins();

  return (
    <select className={styles.select} value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default CabinTableOperations;
