import BookingDataBox from "./BookingDataBox";

import { useMoveBack } from "../../hooks/useMoveBack";
import type { Booking } from "../../utils/types";
import styles from "./BookingDetail.module.css";

function BookingDetail() {
  const booking = {} as Booking;
  const status = "checked-in";

  const moveBack = useMoveBack();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <div className={styles.horizontal}>
        <div className={styles.headingGroup}>
          <h1 className={`${styles.heading} ${styles.h1}`}>
            Booking #{booking.id}
          </h1>
          <span
            className={styles.tag}
            style={{
              color: `var(--color-${statusToTagName[status]}-700)`,
              backgroundColor: `var(--color-${statusToTagName[status]}-100)`,
            }}
          >
            {status.replace("-", " ")}
          </span>
        </div>
        <button type="button" onClick={moveBack} className={styles.buttonText}>
          &larr; Back
        </button>
      </div>

      <BookingDataBox booking={booking} />

      <div className={styles.buttonGroup}>
        <button
          type="button"
          onClick={moveBack}
          className={`${styles.secondary} ${styles.medium}`}
        >
          Back
        </button>
      </div>
    </>
  );
}

export default BookingDetail;
