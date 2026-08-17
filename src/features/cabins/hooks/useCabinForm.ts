import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { getCabinSchema, type CabinFormValues } from "./cabinSchema";

type CabinEditValues = Partial<Omit<CabinFormValues, "image">>;

export function useCabinForm(isEditSession = false, editValues: CabinEditValues = {}) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<CabinFormValues>({
    resolver: zodResolver(getCabinSchema(isEditSession)),
    mode: "onSubmit",
    defaultValues: {
      image: [],
      ...(isEditSession ? editValues : {}),
    },
  });

  return { register, handleSubmit, reset, control, errors };
}
