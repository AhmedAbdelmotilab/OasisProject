import { useForm } from "react-hook-form";
import styles from "./UpdatePasswordForm.module.css";

import { useUpdateUser } from "./useUpdateUser";

type PasswordFormValues = {
  password: string;
  passwordConfirm: string;
};

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } =
    useForm<PasswordFormValues>();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }: PasswordFormValues) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.form} ${styles.regular}`}
    >
      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="password">
          Password (min 8 characters)
        </label>
        <input
          className={styles.input}
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
        {errors?.password?.message && (
          <span className={styles.error}>{errors.password.message}</span>
        )}
      </div>

      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="passwordConfirm">
          Confirm password
        </label>
        <input
          className={styles.input}
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
        {errors?.passwordConfirm?.message && (
          <span className={styles.error}>
            {errors.passwordConfirm.message}
          </span>
        )}
      </div>

      <div className={styles.formRow}>
        <button
          type="reset"
          onClick={() => reset()}
          className={`${styles.secondary} ${styles.medium}`}
        >
          Cancel
        </button>
        <button
          disabled={isUpdating}
          className={`${styles.primary} ${styles.medium}`}
        >
          Update password
        </button>
      </div>
    </form>
  );
}

export default UpdatePasswordForm;
