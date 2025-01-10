import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  
  checkAuth: async () => {
    console.log("mode -> ", import.meta.env.mode);
    try {
      const response = await axiosInstance.get("auth/check");
      console.log("authUser : ", response.data); 
      set({ authUser: response.data });
    } catch (error) {
      console.error("Error in useAuthStore : ", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signUp: async (formData) => {
    set({ isSigningUp: true });
    try {
      const response = await axiosInstance.post("auth/signup", formData);
      set({ authUser: response.data });
      toast.success("Signed up successfully");
    } catch (error) {
      console.error("Error in useAuthStore : ", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (formData) => {
    set({ isLoggingIn: true });
    try {
      const response = await axiosInstance.post("auth/login", formData);
      set({ authUser: response.data });
      toast.success("Logged in successfully");
    } catch (error) {
      console.error("Error in useAuthStore : ", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logOut: async () => {
    try {
      await axiosInstance.post("auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Error in useAuthStore : ", error);
      toast.error(error.response.data.message);
    }
  },

  updateProfile: async (formData) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("auth/update-profile", formData);
      set({ authUser: res.data });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("Error in useAuthStore : ", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  }
}));
