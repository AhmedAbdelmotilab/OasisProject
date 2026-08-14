import { supabase } from "./supabase";

export async function getAllCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log("Error Fetching Cabins");
    throw new Error(error.message);
  }
  return data;
}
