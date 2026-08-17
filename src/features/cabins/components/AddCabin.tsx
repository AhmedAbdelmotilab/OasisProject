import Modal from "../../../layouts/Modal";
import { useCabinsStore } from "../store/useCabinsStore";
import CreateCabinForm from "./CreateCabinForm";

export default function AddCabin() {
  const { showOpenModal } = useCabinsStore();
  return (
    <>
      {showOpenModal && (
        <Modal>
          <CreateCabinForm />
        </Modal>
      )}
    </>
  );
}
