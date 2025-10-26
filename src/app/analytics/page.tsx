// Dashboard.tsx

import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';

interface DashboardProps {
  salesData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
  revenueData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
  customerData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
}

const Dashboard: React.FC<DashboardProps> = ({ salesData, revenueData, customerData }) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 bg-white rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800">
          <Bar data={salesData} />
        </div>
      </div>
      <div className="w-full xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 bg-white rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800">
          <Doughnut data={revenueData} />
        </div>
      </div>
      <div className="w-full xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 bg-white rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800">
          <Line data={customerData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;