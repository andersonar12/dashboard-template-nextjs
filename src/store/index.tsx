import { create } from "zustand";

import { mountStoreDevtool } from "simple-zustand-devtools";
//https://github.com/beerose/simple-zustand-devtools

export const useStore = create<{ token: string; setToken: (token: string) => void }>((set) => ({
  token: "",
  setToken: (token) => set((state) => ({ token })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Main Store", useStore);
}
