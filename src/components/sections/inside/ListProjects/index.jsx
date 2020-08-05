import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getItem } from '../../../../utils/localstorage';
import { getProjectsByUserID } from '../../../../services/project.service';
import './ListProjects.scss';

export default function ListProjects() {
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState("Select Project");

    useEffect(() => {
        getProjectsByUserID(getItem('uid'), elem => setProjects(elem));
    }, [])

    return (
    <div className="projects-box">
        <div className="active-text">
            {active}
        </div>
        <div className="list-projects">
            {
                projects.map(elem => (
                    <NavLink key={elem._id} onClick={() => setActive(elem.name)} to={`/project/${elem._id}`}>
                        {elem.name}
                    </NavLink>
                ))
            }

            <NavLink onClick={() => setActive("Create Project")} className="create-project" to="/create_project">
                Create Project
            </NavLink>
        </div>
    </div>
    )
}