import { create } from "zustand";

const useMenuStore = create((set) => {
  return {
    menuOpen: false,
    toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })), // Corregido aquí
  };
});

export default useMenuStore;
