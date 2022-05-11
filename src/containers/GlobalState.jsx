import React, { useState } from "react";
import ProjectContext from "../context/ProjectContext";

const GlobalState = props => {
    const [projects, setProjects] = useState([]);
    
    return (
        <ProjectContext.Provider
            value={{
                projects,
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    );
};

export default GlobalState;
