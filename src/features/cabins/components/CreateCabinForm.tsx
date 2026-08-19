import { Controller } from "react-hook-form";
import FileDropzone from "../../../components/FileDropzone";
import type { CabinFormValues } from "../hooks/cabinSchema";
import { useCabinForm } from "../hooks/useCabinForm";
import { useCreateCabin } from "../hooks/useCreateCabin";
import { useCabinsStore } from "../store/useCabinsStore";
import styles from "./CreateCabinForm.module.css";

function CreateCabinForm() {
  const { setShowOpenModal } = useCabinsStore();
  const { register, handleSubmit, reset, control, errors } = useCabinForm();
  const { addNewCabin, isPending } = useCreateCabin();

  function onSubmit(data: CabinFormValues) {
    addNewCabin(data);
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
        <Controller
          name="image"
          control={control}
          render={({ field: { value, onChange } }) => (
            <FileDropzone
              accept="image/*"
              maxFiles={1}
              value={value}
              onChange={onChange}
            />
          )}
        />
        {errors.image && <p className={`${styles.error} text-center`}>{errors.image.message}</p>}
      </div>

      <div className={styles.formRow}>
        <button
          type="button"
          onClick={() => {
            reset();
            setShowOpenModal(false);
          }}
          className={`${styles.secondary} ${styles.medium}`}
        >
          Cancel
        </button>
        <button type="submit" disabled={isPending} className={`${styles.primary} ${styles.medium}`}>
          Add cabin
        </button>
      </div>
    </form>
  );
}

export default CreateCabinForm;
