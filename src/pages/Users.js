import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Users() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ padding: "20px", flex: 1 }}>
          <h1>Users</h1>
          <p>Manage all RewardTube users here.</p>
        </div>
      </div>
    </div>
  );
}

export default Users;
