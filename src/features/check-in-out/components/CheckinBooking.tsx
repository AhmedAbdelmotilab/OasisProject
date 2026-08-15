import BookingDataBox from "../../bookings/components/BookingDataBox";

import { useMoveBack } from "../../../hooks/useMoveBack";
import type { Booking } from "../../../utils/types";
import styles from "./CheckinBooking.module.css";

function CheckinBooking() {
  const moveBack = useMoveBack();

  const booking = {} as Booking;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  function handleCheckin() {}

  return (
    <>
      <div className={styles.horizontal}>
        <h1 className={`${styles.heading} ${styles.h1}`}>
          Check in booking #{bookingId}
        </h1>
        <button type="button" onClick={moveBack} className={styles.buttonText}>
          &larr; Back
        </button>
      </div>

      <BookingDataBox booking={booking} />

      <div className={styles.buttonGroup}>
        <button
          onClick={handleCheckin}
          className={`${styles.primary} ${styles.medium}`}
        >
          Check in booking #{bookingId}
        </button>
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

export default CheckinBooking;
