import toast from "react-hot-toast";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useStudentStore = create((set, get) => ({
  students: [],
  isStudentsLoading: true,
  selectedStudent: null,
  filteredStudents: [],

  setFilteredStudents: (students) => {
    set({ filteredStudents: students });
  },
  
  getStudents: async () => {
    set({ isStudentsLoading: true });
    try {
      const response = await axiosInstance.get("/student/all");
      set({ students: response.data });
      set({ filteredStudents: get().students });
    } catch (error) {
      console.error("Error in useStudentStore - getStudents : ", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isStudentsLoading: false });
    }
  },
  
  findStudent: async (studentId) => {
    set({ isStudentsLoading: true });
    try {
      const response = await axiosInstance.get(`/student/${studentId}`);
      set({ selectedStudent: response.data });
      console.log("selectedStudent : ", get().selectedStudent);
    } catch (error) {
      console.error("Error in useStudentStore - findStudent : ", error);
      toast.error(error.response.data.message);
      set({ selectedStudent: null });
    } finally {
      set({ isStudentsLoading: false });
    }
  }
}));