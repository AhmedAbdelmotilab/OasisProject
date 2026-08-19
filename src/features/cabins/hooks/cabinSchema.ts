import z from "zod";
import i18n from "../../../i18n";

export const getCabinSchema = (isEditSession = false) =>
  z
    .object({
      name: z.string().min(2, i18n.t("Use at least 2 characters")).max(40, i18n.t("Use 40 characters or fewer")),
      maxCapacity: z
        .number(i18n.t("Maximum capacity is required"))
        .int(i18n.t("Maximum capacity must be a whole number"))
        .min(1, i18n.t("Maximum capacity must be at least 1")),
      regularPrice: z.number(i18n.t("Regular price is required")).positive(i18n.t("Regular price must be greater than 0")),
      discount: z.number(i18n.t("Discount is required")).min(0, i18n.t("Discount cannot be negative")),
      description: z.string().min(10, i18n.t("Use at least 10 characters")),
      image: z
        .array(z.instanceof(File))
        .refine((files) => isEditSession || files.length === 1, i18n.t("Choose one image file"))
        .refine(
          (files) => files.length === 0 || files[0]?.type.startsWith("image/"),
          i18n.t("Only image files are allowed"),
        )
        .refine((files) => files.length === 0 || files[0]?.size <= 3_000_000, i18n.t("Maximum file size is 3 MB")),
    })
    .refine((data) => data.discount <= data.regularPrice, {
      message: i18n.t("Discount must be less than regular price"),
      path: ["discount"],
    });

export type CabinFormValues = z.infer<ReturnType<typeof getCabinSchema>>;
