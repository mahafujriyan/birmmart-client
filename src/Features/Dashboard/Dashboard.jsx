import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import api from '../../Api/axios';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({ total: 0, myItems: 0 });
  useEffect(() => {
    async function fetchStats() {
      const [allRes, myRes] = await Promise.all([
        api.get('/resellers'),
        api.get(`/resellers/${user.email}`)
      ]);
      setStats({ total: allRes.data.length, myItems: myRes.data.length });
    }
    fetchStats();
  }, [user.email]);

    return (
         <div className="text-base-content">
      <h2 className="text-2xl font-semibold mb-4">Welcome, {user.displayName}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-md ring-1 ring-base-300 text-center">
          <div className="p-4">
            <h3 className="text-xl font-bold">Total Products</h3>
            <p className="text-3xl">{stats.total}</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md ring-1 ring-base-300 text-center">
          <div className="p-4">
            <h3 className="text-xl font-bold">My Product</h3>
            <p className="text-3xl">{stats.myItems}</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Dashboard;