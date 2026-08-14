import type { Cabin } from "../utils/types";
import { supabase } from "./supabase";

export async function getAllCabins(): Promise<Cabin[]> {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) throw new Error(error.message);
  return data || [];
}
