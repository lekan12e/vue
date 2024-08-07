import React from 'react';

const Dashboard = ({ student }) => {
  const calculateTotal = (test, exam) => test + exam;

  const calculateAverage = (results) => {
    const totalMarks = results.reduce((acc, curr) => acc + calculateTotal(curr.test, curr.exam), 0);
    return (totalMarks / results.length).toFixed(2);
  };
  const averageMark = calculateAverage(student.results);
  return (
    <div>
      
    </div>
  );
}

export default Dashboard;
