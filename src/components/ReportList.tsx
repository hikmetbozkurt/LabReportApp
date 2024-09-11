import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store'; // Adjust this import based on where your store is located

const ReportList = () => {
  const reports = useSelector((state: RootState) => state.reports.reports); // Select the reports from Redux store

  return (
    <div>
      <h2>Report List</h2>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>
            {report.diagnosisTitle} - {report.firstName} {report.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportList;
