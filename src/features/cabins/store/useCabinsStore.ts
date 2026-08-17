import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CabinsState {
  showOpenModal: boolean;
  setShowOpenModal: (show?: boolean) => void;
  editingCabinId: number | null;
  setEditingCabinId: (id: number | null) => void;
}

export const useCabinsStore = create(
  devtools<CabinsState>((set) => ({
    showOpenModal: false,
    setShowOpenModal: (show) => set((state) => ({ showOpenModal: show ?? !state.showOpenModal })),
    editingCabinId: null,
    setEditingCabinId: (id) => set({ editingCabinId: id }),
  })),
);
