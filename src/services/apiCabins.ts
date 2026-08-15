import type { Cabin } from "../utils/types";
import { supabase } from "./supabase";

export async function getAllCabins(): Promise<Cabin[]> {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) throw new Error(error.message);
  return data || [];
}
export async function deleteCabinById(id: number) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) throw new Error("Cabin could not be deleted");
}
