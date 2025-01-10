import { Loader } from "lucide-react";
import { useStudentStore } from "../store/useStudentStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const DashBoard = () => {
  const { isStudentsLoading, getStudents, students } = useStudentStore();
  const { filteredStudents, setFilteredStudents } = useStudentStore();
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Submit button clicked");
  }

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "") {
      setFilteredStudents(students);
      return;
    }
    const filteredStudents = students.filter(
      student => (String(student.student_id).includes(searchValue) 
        || String(student.registration_num).includes(searchValue)
      )
    );
    setFilteredStudents(filteredStudents);
  }

  const handleStudentClick = (studentId) => {
    navigate(`/find/${studentId}`);
  }

  useEffect(() => {
    getStudents();
  }, [getStudents]);

  if (isStudentsLoading && !students)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <div className="h-screen bg-base-200 overflow-auto">
      <div className="flex items-center justify-center pt-20 pb-4 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-full flex-auto">
          {/* Search with ID */}
          {/* <div className="items-center justify-center flex pt-4">
            <div className="text-2xl font-bold text-center">
              Search with student ID or registration number
            </div>
          </div> */}
          <div className="items-center justify-center flex pt-4">
            <input
              type="text"
              placeholder="Type here student ID/ REG number"
              onChange={(e) => handleSearchChange(e)}
              className="input input-bordered input-info w-full max-w-md" />
            <div className="px-4">
              <input type="button" onClick={handleSubmit} value="Search" className="btn" />
            </div>
          </div>

          {/* All students */}
          <div className="items-center justify-center flex pt-4">
            <div className="text-2xl font-bold text-center">
              .: All students table :.
            </div>
          </div>
          <div className="overflow-auto py-2">
            <table className="table table-xs table-pin-rows table-pin-cols w-full">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>ID</th>
                  <th>Reg</th>
                  <th>Full Name</th>
                  <th>Contact Number</th>
                  <th>Faculty</th>
                  <th>Blood Group</th>
                  <th>Permanent Village/Area</th>
                  <th>Permanent Post Office</th>
                  <th>Permanent Post Code</th>
                  <th>Permanent Sub District/PS</th>
                  <th>Permanent Home District</th>
                  <th>Permanent Division</th>
                  <th>Guardian Contact Number</th>
                  <th>Hall Name</th>
                  <th>Session</th>
                </tr>
              </thead>
              <tbody>
                { filteredStudents.map((student) => (
                  <tr
                    key={student._id}
                    className="hover:badge-accent cursor-pointer"
                    onClick={() => { handleStudentClick(student.student_id) }}>
                    <td>
                      <img
                        src={student.photo}
                        alt={student.name}
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td>{student.student_id}</td>
                    <td>{student.registration_num}</td>
                    <td>{student.name}</td>
                    <td>{student.contact_num}</td>
                    <td>{student.faculty}</td>
                    <td>{student.blood_group}</td>
                    <td>{student.permanentVillageOrArea}</td>
                    <td>{student.permanentPostOffice}</td>
                    <td>{student.PermanentPostCode}</td>
                    <td>{student.permanentSubDistrictOrPs}</td>
                    <td>{student.permanentHomeDistrict}</td>
                    <td>{student.PermanentDivision}</td>
                    <td>{student.guardian_contact_num}</td>
                    <td>{student.hall_name}</td>
                    <td>{student.session}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-4">
        Made with ❤️ by <a href="https://github.com/SharafatKarim//">Sharafat Karim</a> and Afridi Alom Pranto
      </div>
    </div>
  );
};

export default DashBoard;
