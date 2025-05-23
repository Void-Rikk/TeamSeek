import { create } from "zustand";

export const useIsLoggedStore = create((set) => ({
    isLogged: false,
    setIsLogged: (newState) => {
        set((state) => ({ isLogged: newState }));
    }
}));

export const useLoggedUserStore = create((set) => ({
    userName: '',
    setUserName: (newName) => {
        set((state) => ({ userName: newName }))
    }
}));