import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.users.find((user) => user.id === parseInt(id))
  );

  if (!user) return <p>User not found</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Company: {user.company.name}</p>
        <p>Address: {user.address.street}, {user.address.city}</p>
        <Link to="/" className="text-blue-500 underline mt-2 block">
          Back to User List
        </Link>
      </div>
    </div>
  );
};

export default UserDetail;
