import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";
import type { Booking } from "../../utils/types";
import styles from "./BookingDataBox.module.css";

type BookingDataBoxProps = {
  booking: Booking;
};

function BookingDataBox({ booking }: BookingDataBoxProps) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <section className={`${styles.box} ${styles.bookingDataBox}`}>
      <header className={styles.header}>
        <div>
          <HiOutlineHomeModern />
          <p>
            {numNights} nights in Cabin <span>{cabinName}</span>
          </p>
        </div>

        <p>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </header>

      <section className={styles.section}>
        <div className={styles.guest}>
          {countryFlag && (
            <img
              className={styles.flag}
              src={countryFlag}
              alt={`Flag of ${country}`}
            />
          )}
          <p>
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID {nationalID}</p>
        </div>

        {observations && (
          <div className={styles.dataItem}>
            <span className={styles.label}>
              <HiOutlineChatBubbleBottomCenterText />
              <span>Observations</span>
            </span>
            {observations}
          </div>
        )}

        <div className={styles.dataItem}>
          <span className={styles.label}>
            <HiOutlineCheckCircle />
            <span>Breakfast included?</span>
          </span>
          {hasBreakfast ? "Yes" : "No"}
        </div>

        <div
          className={`${styles.price} ${isPaid ? styles.paid : styles.unpaid}`}
        >
          <div className={styles.dataItem}>
            <span className={styles.label}>
              <HiOutlineCurrencyDollar />
              <span>Total price</span>
            </span>
            {formatCurrency(totalPrice)}
            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice
              )} breakfast)`}
          </div>
          <p>{isPaid ? "Paid" : "Will pay at property"}</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </footer>
    </section>
  );
}

export default BookingDataBox;
