import React from "react";
import "./dashboard.css";

function Dashbroad() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>QuickBite</h2>

        <ul>
          <li>Home</li>
          <li>Orders</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </aside>

      <main className="content">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard</p>

        <div className="cards">
          <div className="card">Orders</div>
          <div className="card">Favorites</div>
          <div className="card">Settings</div>
        </div>
      </main>
    </div>
  );
}

export default Dashbroad;
