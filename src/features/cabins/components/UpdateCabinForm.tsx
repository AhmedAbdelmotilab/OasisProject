import { useState } from "react";
import type { Cabin } from "../../../utils/types";
import { type CabinFormValues } from "../hooks/cabinSchema";
import { useCabinForm } from "../hooks/useCabinForm";
import { useUpdateCabin } from "../hooks/useUpdateCabin";
import { useCabinsStore } from "../store/useCabinsStore";
import FileDropzone from "../../../components/FileDropzone";
import styles from "./UpdateCabinForm.module.css";

interface UpdateCabinFormProps {
  cabin: Cabin;
}

function UpdateCabinForm({ cabin }: UpdateCabinFormProps) {
  const { setEditingCabinId } = useCabinsStore();
  const { id: editId, image: currentImage, ...editValues } = cabin;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, setValue, errors } = useCabinForm(isEditSession, editValues);
  const [files, setFiles] = useState<File[]>([]);
  const { submitCabin, isPending } = useUpdateCabin(isEditSession, editId, currentImage);

  function onSubmit(data: CabinFormValues) {
    const dt = new DataTransfer();
    files.forEach((f) => dt.items.add(f));
    submitCabin({ ...data, image: dt.files });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} ${styles.regular}`}>
      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="name">
          Cabin name
        </label>
        <input className={styles.input} type="text" id="name" {...register("name")} />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="maxCapacity">
          Maximum capacity
        </label>
        <input
          className={styles.input}
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", { valueAsNumber: true })}
        />
        {errors.maxCapacity && <p className={styles.error}>{errors.maxCapacity.message}</p>}
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="regularPrice">
          Regular price
        </label>
        <input
          className={styles.input}
          type="number"
          id="regularPrice"
          {...register("regularPrice", { valueAsNumber: true })}
        />
        {errors.regularPrice && <p className={styles.error}>{errors.regularPrice.message}</p>}
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="discount">
          Discount
        </label>
        <input
          className={styles.input}
          type="number"
          id="discount"
          {...register("discount", { valueAsNumber: true })}
        />
        {errors.discount && <p className={styles.error}>{errors.discount.message}</p>}
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="description">
          Description for website
        </label>
        <textarea className={styles.textarea} id="description" {...register("description")} />
        {errors.description && <p className={styles.error}>{errors.description.message}</p>}
      </div>

      <div className={`${styles.formRow} ${styles.fullWidth}`}>
        <FileDropzone
          accept={{ "image/*": [] }}
          maxFiles={1}
          maxSize={3_000_000}
          value={files}
          onChange={setFiles}
        />
        {errors.image && <p className={styles.error}>{errors.image.message}</p>}
      </div>

      <div className={styles.formRow}>
        <button
          type="button"
          onClick={() => {
            reset();
            setEditingCabinId(null);
          }}
          className={`${styles.secondary} ${styles.medium}`}
        >
          Cancel
        </button>
        <button type="submit" disabled={isPending} className={`${styles.primary} ${styles.medium}`}>
          {isEditSession ? "Edit cabin" : "Create cabin"}
        </button>
      </div>
    </form>
  );
}

export default UpdateCabinForm;
