import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import type { FilterOption } from "../../utils/types";
import styles from "./BookingTableOperations.module.css";

function BookingTableOperations() {
  const [active, setActive] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();

  const filterOptions: FilterOption[] = [
    { value: "all", label: "All" },
    { value: "checked-out", label: "Checked out" },
    { value: "checked-in", label: "Checked in" },
    { value: "unconfirmed", label: "Unconfirmed" },
  ];

  const sortOptions: FilterOption[] = [
    { value: "startDate-desc", label: "Sort by date (recent first)" },
    { value: "startDate-asc", label: "Sort by date (earlier first)" },
    { value: "totalPrice-desc", label: "Sort by amount (high first)" },
    { value: "totalPrice-asc", label: "Sort by amount (low first)" },
  ];

  const sortBy = searchParams.get("sortBy") || "";

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className={styles.tableOperations}>
      <div className={styles.filter}>
        {filterOptions.map((option) => (
          <button
            key={option.value}
            className={`${styles.button} ${
              active === option.value ? styles.active : ""
            }`}
            onClick={() => setActive(option.value)}
            disabled={active === option.value}
          >
            {option.label}
          </button>
        ))}
      </div>

      <select
        className={styles.select}
        value={sortBy}
        onChange={handleSortChange}
      >
        {sortOptions.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BookingTableOperations;
