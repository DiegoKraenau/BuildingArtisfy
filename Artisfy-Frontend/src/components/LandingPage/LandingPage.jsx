import { Fragment } from "react";
import AboutUs from "./AboutUs/AboutUs";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import RegisterForm from "./RegisterForm/RegisterForm";
import Users from "./Users/Users";

const LandingPage = () => {
    return (
        <Fragment>
            <Navbar></Navbar>
            <Header></Header>
            <Users></Users>
            <AboutUs></AboutUs>
            <RegisterForm></RegisterForm>
        </Fragment>
    );
}

export default LandingPage;