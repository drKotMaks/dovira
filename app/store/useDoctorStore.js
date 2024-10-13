import { create } from 'zustand';

const useDoctorStore = create(
    (set) => ({
        doctor: null,
        setDoctor: (doctor) => set({doctor}),
        numberPhone: null,
        setNumberPhone: (numberPhone) => set({numberPhone})
    }))

export default useDoctorStore;