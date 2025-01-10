import Student from "../models/student.model.js";

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.log("Error in getAllStd : ", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const { id: studentId } = req.params;
    const student = await Student.findOne({
      student_id: studentId
    });
    res.status(200).json(student);
  } catch (error) {
    console.log("Error in getStudentById : ", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const addStudent = async (req, res) => {
  try {
    const student = req.body;

    if (!student.student_id || !student.registration_num || !student.name || !student.faculty || !student.session || !student.guardian_contact_num || !student.blood_group || !student.contact_num) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingStudent = await Student.findOne({
      student_id: student.student_id
    });

    if (existingStudent) {
      return res.status(400).json({ message: "Student already exists" });
    }

    const newStudent = new Student(student);
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    console.log("Error in addStudent : ", error.message);
    res.status(500).json({ message: error.message });
  }
};