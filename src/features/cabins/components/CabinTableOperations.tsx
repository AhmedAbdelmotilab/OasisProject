import { FaPlus } from "react-icons/fa";
import { sortOptions, useSortCabins } from "../hooks/useSortCabins";
import { useCabinsStore } from "../store/useCabinsStore";
import styles from "./CabinTableOperations.module.css";

function CabinTableOperations() {
  const { sortBy, handleSortChange } = useSortCabins();
  const { setShowOpenModal, setEditingCabinId, showOpenModal } = useCabinsStore();

  return (
    <div className={styles.operations}>
      <select className={styles.select} value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        className={styles.addButton}
        onClick={() => {
          setShowOpenModal();
          setEditingCabinId(null);
        }}
      >
        <FaPlus /> {!showOpenModal ? "Add" : "Close"}
      </button>
    </div>
  );
}

export default CabinTableOperations;
