import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  alt: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageUrl,
  alt,
}: ImageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.content}
      overlayClassName={styles.overlay}
      contentLabel="Image Preview"
    >
      <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
        <FaTimes />
      </button>
      <img className={styles.image} src={imageUrl} alt={alt} />
    </Modal>
  );
}
