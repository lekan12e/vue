import React from 'react';
import { useSelector } from 'react-redux';

const StudentResultsTable = ({ student }) => {

  const studentt = useSelector(state => state.students);
  console.log(studentt);
  
  const calculateTotal = (test, exam) => test + exam;

  const calculateAverage = (results) => {
    const totalMarks = results.reduce((acc, curr) => acc + calculateTotal(curr.test, curr.exam), 0);
    return (totalMarks / results.length).toFixed(2);
  };

  const getGrade = (total) => {
    if (total >= 70) return 'A';
    if (total >= 60) return 'B';
    if (total >= 50) return 'C';
    if (total >= 40) return 'D';
    return 'F';
  };

  const averageMark = calculateAverage(student.results);

  return (
    <div className='w-full mx-14 my-10 p-7 gap-2 flex'>
      <div className='w-full m-5'>
        <h1 className='font-poppins text-[25px] sm:text-[25px] font-normal mb-8'>{student.name}'s <span className='font-semibold'>results</span></h1>
        <div className='mx-8'>
        <div className='flex my-6 gap-10'>
          <select className='w-[138px] p-2 font-poppins text-xl font-normal h-16 border-2 rounded-xl shadow-md outline-none'>
            years
            <option className='font-poppins text-xl font-normal'>Year</option>
            <option className='font-poppins text-xl font-normal' value="volvo">2018</option>
            <option className='font-poppins text-xl font-normal' value="saab">2019</option>
            <option className='font-poppins text-xl font-normal' value="mercedes">2020</option>
            <option className='font-poppins text-xl font-normal' value="audi">2021</option>
          </select>
          <select className='w-[138px] p-2 font-poppins text-xl font-normal h-16 border-2 rounded-xl shadow-md outline-none'>
            years
            <option className='font-poppins text-xl font-normal'>Select Term</option>
            <option className='font-poppins text-xl font-normal' value="volvo">1st Term</option>
            <option className='font-poppins text-xl font-normal' value="saab">2nd Term</option>
            <option className='font-poppins text-xl font-normal' value="mercedes">3rd Term</option>
          </select>
          <button className='bg-[#021436] px-8 rounded-2xl shadow-xl ml-40 py-2 font-poppins text-[25px] uppercase font-semibold tracking-wide text-white '>Submit</button>
        </div>
          <table className="min-w-full border-2 bg-white shadow-lg" style={{ borderRadius: '20px' }}>
            <thead className='border-b-2 shadow-xl'>
              <tr className='shadow-md'>
                <th className="px-4 sm:px-6 py-3 text-left font-poppins text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-4 sm:px-6 py-3 text-left font-poppins text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Continious Assesment</th>
                <th className="px-4 sm:px-6 py-3 text-left font-poppins text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Exam</th>
                <th className="px-4 sm:px-6 py-3 text-left font-poppins text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-4 sm:px-6 py-3 text-left font-poppins text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Grade</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {student.results.map((result, index) => {
                const total = calculateTotal(result.test, result.exam);
                const grade = getGrade(total);
                return (
                  <tr key={index} className={`shadow-sm ${index % 2 === 0 ? 'bg-white' : 'bg-white'}`}>
                    <td className="px-4 sm:px-6 py-4 font-poppins whitespace-nowrap">{result.course}</td>
                    <td className="px-4 sm:px-6 py-4 font-poppins whitespace-nowrap">{result.test}</td>
                    <td className="px-4 sm:px-6 py-4 font-poppins whitespace-nowrap">{result.exam}</td>
                    <td className="px-4 sm:px-6 py-4 font-poppins whitespace-nowrap">{total}</td>
                    <td className="px-4 sm:px-6 py-4 font-poppins whitespace-nowrap">{grade}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex flex-col justify-end'>
        <div className='w-[100px] h-[100px] border-[10px] rounded-full flex items-center justify-center border-blue-700'>
          <h1 className=''>{averageMark}</h1>
        </div>
        <div className=''></div>
      </div>
    </div>
  );
};

export default StudentResultsTable;
