import React from "react";
import "./dashboard.css";
import DashboardHeader from "./dashboardHeader";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
import { AiFillDelete,AiFillEye } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

function Dashboard() {
  
  return (
    <div>
      <DashboardHeader/>
      <div className="container-fluid">
        <div className="row">
        <Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 my-3 dash-main">
            <div className="card-list">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                  <div className="card blue">
                    <div className="title">All Applications</div>
                    <i className="zmdi zmdi-upload"></i>
                    <div className="value">89</div>
                   
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                  <div className="card green">
                    <div className="title">Approved</div>
                    <i className="zmdi zmdi-upload"></i>
                    <div className="value">5,990</div>
                    
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                  <div className="card orange">
                    <div className="title">Pending List</div>
                    <i className="zmdi zmdi-download"></i>
                    <div className="value">80</div>
                  
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                  <div className="card red">
                    <div className="title">Reject</div>
                    <i className="zmdi zmdi-download"></i>
                    <div className="value">3</div>
                   
                  </div>
                </div>
              </div>
            </div>

            <div className="container table-responsive py-5">
              <table className="table table-bordered table-hover">
                <thead className="thead-dark bg-dark text-white">
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">AAdhar</th>
                    <th scope="col">Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>4333</td>
                    <td>Otto</td>
                    <td>908765432112</td>
                    <td className="table-action">
                        <Link> <AiFillEye className="text-primary"/></Link>
                        <Link><BiEdit className="text-info"/></Link>
                        <Link><AiFillDelete className="text-danger"/></Link>


                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>5454</td>
                    <td>Thornton</td>
                    <td>908765432112</td>
                    <td className="table-action">
                        <Link> <AiFillEye className="text-primary"/></Link>
                        <Link><BiEdit className="text-info"/></Link>
                        <Link><AiFillDelete className="text-danger"/></Link>


                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>989</td>
                    <td>the Bird</td>
                    <td>908765432112</td>
                    <td className="table-action">
                        <Link> <AiFillEye className="text-primary"/></Link>
                        <Link><BiEdit className="text-info"/></Link>
                        <Link><AiFillDelete className="text-danger"/></Link>


                    </td>
                    
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>2223</td>
                    <td>the Bird</td>
                    <td>908765432112</td>
                    <td className="table-action">
                        <Link> <AiFillEye className="text-primary"/></Link>
                        <Link><BiEdit className="text-info"/></Link>
                        <Link><AiFillDelete className="text-danger"/></Link>


                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>4343</td>
                    <td>the Bird</td>
                    <td>908765432112</td>
                    <td className="table-action">
                        <Link> <AiFillEye className="text-primary"/></Link>
                        <Link><BiEdit className="text-info"/></Link>
                        <Link><AiFillDelete className="text-danger"/></Link>


                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
