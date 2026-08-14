import styles from "./CheckoutButton.module.css";

type CheckoutButtonProps = {
  bookingId: number;
};

function CheckoutButton({ bookingId }: CheckoutButtonProps) {
  return (
    <button className={`${styles.primary} ${styles.small}`}>Check out</button>
  );
}

export default CheckoutButton;
