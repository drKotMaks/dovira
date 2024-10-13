import { create } from 'zustand';

const useStore = create((set) => ({
    selectedPrices: [], // Масив об'єктів
    togglePrice: (price) => set((state) => {
        const isSelected = state.selectedPrices.some(p => p.id === price.id);
        if (isSelected) {
            return { selectedPrices: state.selectedPrices.filter(p => p.id !== price.id) };
        } else {
            return { selectedPrices: [...state.selectedPrices, price] };
        }
    }),
}));

export default useStore;
