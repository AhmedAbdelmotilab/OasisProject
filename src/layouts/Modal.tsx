import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import { useCabinsStore } from "../features/cabins/store/useCabinsStore";
import styles from "./Modal.module.css";
interface ModalProps {
  children: React.ReactNode;
}
export default function Modal({ children }: ModalProps) {
  const { setShowOpenModal, setEditingCabinId } = useCabinsStore();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handelClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowOpenModal(false);
        setEditingCabinId(null);
      }
    }
    const timeoutId = setTimeout(() => {
      document.addEventListener("click", handelClick);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handelClick);
    };
  }, [setShowOpenModal, setEditingCabinId]);

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal} ref={ref}>
        <button
          className={styles.button}
          onClick={() => {
            setShowOpenModal(false);
            setEditingCabinId(null);
          }}
        >
          <FaTimes />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
