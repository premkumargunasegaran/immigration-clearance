import React from "react";
import DashboardHeader from "../dashboardHeader";
import Sidebar from "../sidebar";
import { Link } from "react-router-dom";
import { AiFillDelete,AiFillEye } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

function booking() {
  return (
    <>
      <DashboardHeader />

      <div className="row container-fluid">
        <Sidebar />
        <div className="col-md-10">
          <main role="main" className="">
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
    </>
  );
}

export default booking;
