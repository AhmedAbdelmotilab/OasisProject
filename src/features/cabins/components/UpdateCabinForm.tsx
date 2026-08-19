import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import FileDropzone from "../../../components/FileDropzone";
import type { Cabin } from "../../../utils/types";
import { type CabinFormValues } from "../hooks/cabinSchema";
import { useCabinForm } from "../hooks/useCabinForm";
import { useUpdateCabin } from "../hooks/useUpdateCabin";
import { useCabinsStore } from "../store/useCabinsStore";
import styles from "./UpdateCabinForm.module.css";

interface UpdateCabinFormProps {
  cabin: Cabin;
}

function UpdateCabinForm({ cabin }: UpdateCabinFormProps) {
  const { t } = useTranslation();
  const { setEditingCabinId } = useCabinsStore();
  const { id: editId, image: currentImage, ...editValues } = cabin;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, control, errors } = useCabinForm(isEditSession, editValues);
  const { submitCabin, isPending } = useUpdateCabin(isEditSession, editId, currentImage);

  function onSubmit(data: CabinFormValues) {
    submitCabin(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} ${styles.regular}`}>
      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="name">
          {t("Cabin name")}
        </label>
        <input className={styles.input} type="text" id="name" {...register("name")} />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="maxCapacity">
          {t("Maximum capacity")}
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
          {t("Regular price")}
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
          {t("Discount")}
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
          {t("Description for website")}
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
            setEditingCabinId(null);
          }}
          className={`${styles.secondary} ${styles.medium}`}
        >
          {t("Cancel")}
        </button>
        <button type="submit" disabled={isPending} className={`${styles.primary} ${styles.medium}`}>
          {isEditSession ? t("Edit cabin") : t("Create cabin")}
        </button>
      </div>
    </form>
  );
}

export default UpdateCabinForm;
