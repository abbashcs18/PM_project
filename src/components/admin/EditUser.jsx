import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate , useParams } from "react-router-dom";

const EditUser = () => {
    let history = useNavigate();
    const { id } = useParams();
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

    const { pId, cId, cName,
        bName,
        domain,
        tOfD,
        Aptitude_round_statues,
        Tech_written_statues,
        HR_interview_statues,
        Job_role,
        score } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:5001/update/${id}`, user);
        history.push("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:5001/getUsers/${id}`);
        setUser(result.data);
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto p-5">
                <h2 className="mb-4">Edit A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Placement Drive ID: "
                            name="pId"
                            value={pId}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Candidate ID"
                            name="cId"
                            value={cId}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Candidate Name"
                            name="cName"
                            value={cName}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Batch Name:"
                            name="bName"
                            value={bName}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    
                    <div className="form-group">
                        <div class="relative">
                            <select
                             placeholder="Domain: "
                                value={domain}
                                id="domain"
                                onChange={e => onInputChange(e)}

                                className="form-control form-control-lg">
                                <option></option>
                                <option>IT</option>
                                <option>BRA</option>

                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 left-70  flex items-center px-2   text-gray-700">
                                <svg class="fill-current h-4 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                    <div class="relative">
                    <select
                        value={tOfD}
                        onChange={e => onInputChange(e)}
                        id="tOfD"
                        placeholder=" Type of Disability"
                        className="form-control form-control-lg">
                        <option></option>
                        <option>Deaf</option>
                        <option>Hard of hearing</option>
                        <option>hearing impaired</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 left-70  flex items-center px-2   text-gray-700">
                        <svg class="fill-current h-4 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
                    </div>
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
