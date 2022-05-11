import React, { Fragment, useContext } from "react";
import SingleProjectCard from "./SingleProjectCard";
import ProjectContext from "../context/ProjectContext";
import { Row, Col } from "react-bootstrap";

const Projects = () => {
    const context = useContext(ProjectContext);
    // const { projects } = context;
    const projects = Array(5).fill(0).map(() => {return {title: 'ساختمان مهرزاد'}})
    return (
        <Row className="justify-content-center">
            {projects instanceof Array && projects.length > 0 ? (
                projects.map((project) => (
                    <SingleProjectCard project={project} />
                ))
            ) : (
                <div className="alert alert-light mt-3 w-75 mx-auto">
                    <p className="text-center">
                        مشکلی در بارگذاری پروژه ها پیش آمده است.
                    </p>
                </div>
            )}
        </Row>
    );
};

export default Projects;
