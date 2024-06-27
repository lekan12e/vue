import React from 'react';

const StudentResultsTable = ({ student }) => {
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
    <div className='bg-[#ECF0F5] h-[100vh] w-full p-7 gap-2' >
        <h1 className='font-poppins text-4xl font-[550] mb-8'>Results</h1>
        <div className='w-full text-center m-5'><h1 className='font-poppins text-red-400 text-2xl' >{student.name}</h1></div>
        <div className=" shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
            <thead>
            <tr>
                <th className="px-6 py-3 text-left font-poppins text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left font-poppins text-xs font-medium text-gray-500 uppercase tracking-wider">Test</th>
                <th className="px-6 py-3 text-left font-poppins text-xs font-medium text-gray-500 uppercase tracking-wider">Exam</th>
                <th className="px-6 py-3 text-left font-poppins text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left font-poppins text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {student.results.map((result, index) => {
                const total = calculateTotal(result.test, result.exam);
                const grade = getGrade(total);
                return (
                <tr key={index} className={index % 2 === 0 ? 'bg-blue-100' : 'bg-gray-100'}>
                    <td className="px-6 py-4 font-poppins whitespace-nowrap">{result.course}</td>
                    <td className="px-6 py-4 font-poppins whitespace-nowrap">{result.test}</td>
                    <td className="px-6 py-4 font-poppins whitespace-nowrap">{result.exam}</td>
                    <td className="px-6 py-4 font-poppins whitespace-nowrap">{total}</td>
                    <td className="px-6 py-4 font-poppins whitespace-nowrap">{grade}</td>
                </tr>
                );
            })}
            <tr>
                <td className="px-6 py-4 font-poppins font-bold" colSpan="4">Overall Average</td>
                <td className="px-6 py-4 font-poppins font-bold">{averageMark}</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
  );
};

export default StudentResultsTable;
