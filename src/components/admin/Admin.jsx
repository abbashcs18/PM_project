import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavbarAdmin from "./NavbarAdmin";

import EditUser from '../admin/EditUser';
import ViewUsers from '../admin/ViewUsers';
import NoFound from "../home/NoFound";


const Admin = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:5001/users");
        setUser(result.data.reverse());
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:5001/getUsers/${id}`);
        loadUsers();
    };

    return (
        <NavbarAdmin />,
        <div className="">
           
            <div className="overflow-x-auto relative">
                <h1 className=" text-white  text-4xl font-bold">Candidates</h1>
                <table className="w-4/5 mt-4 m-auto rounded-2xl text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="p-6">PLACEMENT DRIVE ID</th>
                            <th scope="col" class="p-6">CANDIDATE ID</th>
                            <th scope="col" class="p-6">CANDIDATE NAME</th>
                            <th scope="col" class="p-6">BATCH NAME</th>
                            <th scope="col" class="p-6">DOMAIN</th>
                            <th scope="col" class="p-6">TYPE OF DISABILITY</th>
                            <th scope="col" class="p-6">ATTRIBUTE ROUND STATUES</th>
                            <th scope="col" class="p-6">TECH WRITTEN STATUES</th>
                            <th scope="col" class="p-6">TECH INTERVIEW</th>
                            <th scope="col" class="p-6">HR INTERVIEW STATUES</th>
                            <th scope="col" class="p-6">JOB ROLE</th>
                            <th scope="col" class="p-6">SCORE</th>
                            <th scope="col" class="p-20">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" >{index + 1}</th>
                                <td class="py-4 px-6">{user.cId}</td>
                                <td class="py-4 px-6">{user.cName}</td>
                                <td class="py-4 px-6">{user.bName}</td>
                                <td class="py-4 px-6">{user.domain}</td>
                                <td class="py-4 px-6">{user.tOfD}</td>
                                <td class="py-4 px-6">{user.Aptitude_round_statues}</td>
                                <td class="py-4 px-6">{user.Tech_written_statues}</td>
                                <td class="py-4 px-6">{user.Tech_interview}</td>
                                <td class="py-4 px-6">{user.HR_interview_statues}</td>
                                 <td class="py-4 px-6">{user.Job_role}</td>
                                 <td class="py-4 px-6">{user.score}</td>
                                <td class=" relative py-6 px-20">
                                    <Link className=" bg-blue-600 text-black font-bold p-3 rounded-md m-1" to={`user/${user._id}`}>
                                        View
                                    </Link>
                                    <Link
                                        className=" bg-white text-black font-bold p-3 rounded-md m-1"
                                        to={`edit/${user._id}`}
                                    >
                                        Edit
                                    </Link>
                                 
                                    <button
                                        className=" absolute bg-red-600 text-black font-bold p-3 rounded-md my-[-11px] "
                                        onClick={() => deleteUser(user._id)}
                                    >
                                    Delete
                                    </button>
                                   
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            

        </div>
    );
};

export default Admin;
