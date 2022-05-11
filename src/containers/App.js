import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Projects from "../project/Projects";
import About from "../about/About";
import Nav from "../common/Nav";
import { Container, Row } from "react-bootstrap";
import ContactUs from "../about/ContactUs";

const App = () => {
    return (
        <Container >
            <Row className="justify-content-center">
                <Nav />
            </Row>
            <Row>
                <Switch>
                    <Route path="/projects" component={Projects} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={ContactUs} />

                    <Route path="/" exact component={Projects} />
                </Switch>
            </Row>
        </Container>
    );
};

export default App;
