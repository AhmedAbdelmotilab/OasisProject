import { format, isToday } from "date-fns";

import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import type { Booking } from "../../utils/types";
import styles from "./BookingRow.module.css";

type BookingRowProps = {
  booking: Booking;
};

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}: BookingRowProps) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <div
      className={`${styles.grid} ${styles.row}`}
      style={{ gridTemplateColumns: "var(--table-columns)" }}
    >
      <div className={styles.cabin}>{cabinName}</div>

      <div className={styles.stacked}>
        <span>{guestName}</span>
        <span>{email}</span>
      </div>

      <div className={styles.stacked}>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </div>

      <span
        className={styles.tag}
        style={{
          color: `var(--color-${statusToTagName[status]}-700)`,
          backgroundColor: `var(--color-${statusToTagName[status]}-100)`,
        }}
      >
        {status.replace("-", " ")}
      </span>

      <div className={styles.amount}>{formatCurrency(totalPrice)}</div>
    </div>
  );
}

export default BookingRow;
