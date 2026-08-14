import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { FilterOption } from "../../utils/types";
import styles from "./DashboardFilter.module.css";

function DashboardFilter() {
  const [active, setActive] = useState("7");
  const [searchParams, setSearchParams] = useSearchParams();

  const options: FilterOption[] = [
    { value: "7", label: "Last 7 days" },
    { value: "30", label: "Last 30 days" },
    { value: "90", label: "Last 90 days" },
  ];

  function handleClick(value: string) {
    setActive(value);
    searchParams.set("last", value);
    setSearchParams(searchParams);
  }

  return (
    <div className={styles.filter}>
      {options.map((option) => (
        <button
          key={option.value}
          className={`${styles.button} ${
            active === option.value ? styles.active : ""
          }`}
          onClick={() => handleClick(option.value)}
          disabled={active === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default DashboardFilter;
