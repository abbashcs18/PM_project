import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUsers = () => {

  const [user, setUser] = useState({
    pId: "",
    cId: "",
    cName: "",
    bName: "",
    domain: "",
    tOfD: "",
    Aptitude_round_statues: "",
    Tech_written_statues: "",
    HR_interview_statues: "",
    Job_role: "",
    score: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:5001/getUsers/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className=" bg-red-600 text-white font-bold p-3 rounded-md" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className=" text-white flex-auto">
        <li className="list-group-item">Placement Drive ID: { user.pId}</li>
        <li className="list-group-item">Candidate ID: {user.cId}</li>
        <li className="list-group-item">Candidate Name: {user.email}</li>
        <li className="list-group-item">Batch Name: {user.bName}</li>
        <li className="list-group-item">Domain: {user.domain}</li>
        <li className="list-group-item">Domain: {user.tOfD}</li>
      </ul>
    </div>
  );
};

export default ViewUsers;
