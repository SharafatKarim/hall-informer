import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  student_id: {
    type: Number,
    required: [true, "Student ID is required"],
    unique: true,
  },
  registration_num: {
    type: Number,
    required: [true, "Registration Number is required"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  faculty: {
    type: String,
    required: [true, "Faculty is required"],
  },
  session: {
    type: String,
    required: [true, "Session is required"],
  },
  father_name: {
    type: String,
  },
  mother_name: {
    type: String,
  },
  guardian_contact_num: {
    type: String,
    required: [true, "Parent's Contact Number is required"],
  },
  blood_group: {
    type: String,
    required: [true, "Blood Group is required"],
  },
  contact_num: {
    type: String,
    required: [true, "Contact Number is required"],
  },
  permanentVillageOrArea: {
    type: String,
  },
  permanentPostOffice: {
    type: String,
  },
  PermanentPostCode: {
    type: String,
  },
  permanentSubDistrictOrPs: {
    type: String,
  },
  permanentHomeDistrict: {
    type: String,
  },
  PermanentDivision: {
    type: String,
  },
  border_no: {
    type: String,
  },
  room_num: {
    type: String,
  },
  block: {
    type: String,
  },
  photo: {
    type: String,
    required: [true, "Photo is required"],
  },
  hall_name: {
    type: String,
    required: [true, "Hall Name is required"],
  }
}, { timestamps: true });

const Student = mongoose.model("Student", studentSchema);

export default Student;