import z from "zod";

export const getCabinSchema = (isEditSession = false) =>
  z
    .object({
      name: z.string().min(2, "Use at least 2 characters").max(40, "Use 40 characters or fewer"),
      maxCapacity: z
        .number("Maximum capacity is required")
        .int("Maximum capacity must be a whole number")
        .min(1, "Maximum capacity must be at least 1"),
      regularPrice: z.number("Regular price is required").positive("Regular price must be greater than 0"),
      discount: z.number("Discount is required").min(0, "Discount cannot be negative"),
      description: z.string().min(10, "Use at least 10 characters"),
      image: z
        .instanceof(FileList)
        .refine((files) => isEditSession || files.length === 1, "Choose one image file")
        .refine(
          (files) => files.length === 0 || files[0]?.type.startsWith("image/"),
          "Only image files are allowed",
        )
        .refine((files) => files.length === 0 || files[0]?.size <= 3_000_000, "Maximum file size is 3 MB"),
    })
    .refine((data) => data.discount <= data.regularPrice, {
      message: "Discount must be less than regular price",
      path: ["discount"],
    });

export type CabinFormValues = z.infer<ReturnType<typeof getCabinSchema>>;
