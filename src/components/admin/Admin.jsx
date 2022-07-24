import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavbarAdmin from "./NavbarAdmin";

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
        <div className="">
            <NavbarAdmin />
            <div className="overflow-x-auto relative">
                <h1 className=" text-white bg-gray-700 text-4xl font-bold">Admin</h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="p-6">PLACEMENT DRIVE ID</th>
                            <th scope="col" class="p-6">CANDIDATE ID</th>
                            <th scope="col" class="p-6">CANDIDATE NAME</th>
                            <th scope="col" class="p-6">BATCH NAME</th>
                            <th scope="col" class="p-6">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th>{index + 1}</th>
                                <td>{user.cId}</td>
                                <td>{user.cName}</td>
                                <td>{user.bName}</td>
                                <td>
                                    <Link className=" bg-orange-600-600 text-black font-bold p-3 rounded-md" to={`viewUsers/${user._id}`}>
                                        View
                                    </Link>
                                    <Link
                                        className=" bg-white text-black font-bold p-3 rounded-md"
                                        to={`edit/${user._id}`}
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        className=" bg-red-600 text-black font-bold p-3 rounded-md"
                                        onClick={() => deleteUser(user._id)}
                                    >
                                        Delete
                                    </Link>
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
