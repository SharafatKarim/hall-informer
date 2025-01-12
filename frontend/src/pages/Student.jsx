import { useEffect } from 'react';
import { Loader, User } from 'lucide-react'
import { useParams } from 'react-router-dom';
import { useStudentStore } from '../store/useStudentStore';

const Student = () => {
  const { id: targetStudentId } = useParams();
  console.log("targetStudentId : ", targetStudentId);

  const { isStudentsLoading, selectedStudent, findStudent } = useStudentStore();

  useEffect(() => {
    findStudent(targetStudentId);
  }, [findStudent, targetStudentId]);

  if (isStudentsLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <div className='h-screen pt-20 overflow-auto'>
      <div className='max-w-2xl mx-auto p-4 py-8 h-full'>
        <div className='bg-base-300 rounded-xl p-6 space-y-8 mb-8'>
          <div className='text-center'>
            <h1 className='text-2xl font-semibold'>
              Student Information
            </h1>
            <p className='mt-2'>
              In this page you can see the student information
            </p>
          </div>

          {/* Avatar upload */}

          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={ selectedStudent?.photo || "/avatar.jpg"}
                alt="Profile"
                className="size-64 rounded-full object-cover border-4 "
              />
            </div>
          </div>

          {/* User information */}
          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{ selectedStudent?.name }</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                Student ID
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{ selectedStudent?.student_id }</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                Registration Number
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{ selectedStudent?.registration_num }</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                Contact Number
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{ selectedStudent?.contact_num }</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                Faculty
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{ selectedStudent?.faculty }</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                Blood Group
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{ selectedStudent?.blood_group }</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                Border Number
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{ selectedStudent?.{/*Border number must have in the database*/ }</p>
            </div>{/*Border Number must include in the database*/}

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                Room Number
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{ selectedStudent?.{/*Room number must have in the database*/ }</p>
            </div>{/* Number must include in the database*/}

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                Block
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{ selectedStudent?.{/*Block must have in the database*/ }</p>
            </div>{/* Block must include in the database*/}

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                Blood Group
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{ selectedStudent?.blood_group }</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                Permanent Address
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
                {`${selectedStudent?.permanentVillageOrArea}, ${selectedStudent?.permanentSubDistrictOrPs
}, ${selectedStudent?.permanentHomeDistrict
}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Student
