// Revenue.tsx
import React from 'react';

interface RevenueProps {
  revenue: number;
}

const Revenue: React.FC<RevenueProps> = ({ revenue }) => {
  return <div>Total Revenue: ${revenue}</div>;
};

export default Revenue;


// Users.tsx
import React from 'react';

interface UsersProps {
  users: number;
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return <div>Total Users: {users}</div>;
};

export default Users;


// Logs.tsx
import React from 'react';

interface LogsProps {
  logs: string[];
}

const Logs: React.FC<LogsProps> = ({ logs }) => {
  return (
    <div>
      <h4>Logs</h4>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default Logs;


// AdminDashboard.tsx
import React from 'react';
import Revenue from './Revenue';
import Users from './Users';
import Logs from './Logs';

interface AdminDashboardProps {
  revenue: number;
  users: number;
  logs: string[];
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({
  revenue,
  users,
  logs,
}) => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Revenue revenue={revenue} />
      <Users users={users} />
      <Logs logs={logs} />
    </div>
  );
};

export default AdminDashboard;