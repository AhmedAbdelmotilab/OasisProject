import { API } from "../config/API";
import type { Cabin } from "../utils/types";
import { supabase } from "./supabase";

const CABIN_BUCKET = "cabin-images";

export async function getAllCabins(): Promise<Cabin[]> {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) throw new Error(error.message);
  return data || [];
}

export async function getCabinsPage(from: number, sortBy: string): Promise<Cabin[]> {
  const [field, order] = sortBy.split("-");
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .order(field, { ascending: order === "asc" })
    .range(from, from + API.PAGINATION_LIMIT - 1);
  if (error) throw new Error(error.message);
  return data || [];
}

export async function deleteCabinById(id: number) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) throw new Error("Cabin could not be deleted");
}

export async function uploadCabinImage(file: File): Promise<string> {
  const fileName = `${file.name}`;
  const { error: uploadError } = await supabase.storage.from(CABIN_BUCKET).upload(fileName, file);
  if (uploadError) throw new Error(uploadError.message);
  return `${CABIN_BUCKET}/${fileName}`;
}

export async function removeCabinImage(imagePath: string): Promise<void> {
  if (!imagePath.startsWith(CABIN_BUCKET)) return;
  const fileName = imagePath.replace(`${CABIN_BUCKET}/`, "");
  const { error } = await supabase.storage.from(CABIN_BUCKET).remove([fileName]);
  if (error) throw new Error(error.message);
}

export async function createCabin(newCabin: Omit<Cabin, "id">): Promise<Cabin> {
  const { data, error } = await supabase.from("cabins").insert([newCabin]).select().single();
  if (error) throw new Error(error.message);
  return data;
}

export async function UpdateCabin(id: number, updatedCabin: Omit<Cabin, "id">): Promise<Cabin> {
  const { data, error } = await supabase.from("cabins").update(updatedCabin).eq("id", id).select().single();
  if (error) throw new Error(error.message);
  return data;
}
