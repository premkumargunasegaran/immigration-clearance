import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaUserCircle, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";


function sidebar() {
  return (
    <nav className="col-md-2 d-none d-md-block sidebar-dash sidebar">
      <div className="sidebar-sticky pt-2">
        <ul className="p-0 ">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              {" "}
              <AiOutlineDashboard />
              Dashboard{" "}
            </Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link" to="/customer"> <FaUserCircle />
              Customers</Link>
             
           
          </li>
          <li className="nav-item">
           <Link className="nav-link"  to="/booking"> <FaClipboardList />
              Bookings</Link>
             
           
          </li>
          <li className="nav-item">
           <Link className="nav-link"  to="/cases"> <FaClipboardList />
              Case Files</Link>
             
           
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default sidebar;
