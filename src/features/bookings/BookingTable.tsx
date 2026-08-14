import type { CSSProperties } from "react";
import BookingRow from "./BookingRow";
import type { Booking } from "../../utils/types";
import styles from "./BookingTable.module.css";

function BookingTable() {
  const bookings: Booking[] = [];

  return (
    <div
      className={styles.table}
      style={
        { "--table-columns": "0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem" } as CSSProperties
      }
    >
      <div
        className={`${styles.grid} ${styles.header}`}
        style={{ gridTemplateColumns: "var(--table-columns)" }}
      >
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </div>

      {bookings.length === 0 ? (
        <p className={styles.empty}>No data to show at the moment</p>
      ) : (
        <section className={styles.body}>
          {bookings.map((booking) => (
            <BookingRow key={booking.id} booking={booking} />
          ))}
        </section>
      )}
    </div>
  );
}

export default BookingTable;
