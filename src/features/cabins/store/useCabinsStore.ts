import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { Cabin } from "../../../utils/types";

export interface useCabinsStore {
  cabins: Cabin[];
  setCabins: (cabins: Cabin[]) => void;
}

export const useCabinsStore = create(
  devtools<useCabinsStore>((set) => ({
    cabins: [],
    setCabins: (cabins: Cabin[]) => set(() => ({ cabins: cabins })),
  })),
);
