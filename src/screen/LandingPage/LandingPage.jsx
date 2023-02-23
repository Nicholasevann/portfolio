import { useMediaQuery } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Cooking,
  Copyright,
  Email,
  English,
  Entre,
  Flutter,
  Github,
  Ideabox1,
  Ideabox2,
  Ideabox3,
  Karyawan1,
  Karyawan2,
  Karyawan3,
  Kopkar1,
  Kopkar2,
  Kopkar3,
  Linkedin,
  Pdf,
  Person,
  Product,
  React,
  Scrum,
  Tomas1,
  Tomas2,
  Tomas3,
  Whatsapp,
} from "../../assets";
import BoxProduct from "../../component/BoxProduct";
import BoxService from "../../component/BoxService";
import { BASE_API } from "../../core/api";
import { setDataVehicle2 } from "../../redux/slices/dataVehicleSlice";
import "./LandingPage.css";

const LandingPage = () => {
  const dataVehicle2 = useSelector((state) => state.dataVehicle.value);
  console.log(dataVehicle2);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 1100px)");
  const [dataUser, setDataUser] = useState({});
  const [dataVehicl, setDataVehicl] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    axios
      .get(BASE_API + "/user/auth/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function ({ data }) {
        setDataUser(data.data);
      })
      .catch(function (e) {});
    axios
      .get(
        BASE_API + "/core/vehicle",

        {
          headers: { Authorization: `Bearer ${token}` },
          params: { limit: "20", offset: "0" },
        }
      )
      .then(function ({ data }) {
        setDataVehicl(data.data.data);
        dispatch(setDataVehicle2(data.data.data));
      })
      .catch(function (e) {});
  }, []);
  return (
    <div className="container-landing">
      <div className="header">
        <div className="row-header">
          <p className="header-landing">Nic.</p>
          <div className="row-menu">
            <p className="menu-landing" onClick={() => window.scrollTo(0, 0)}>
              Home
            </p>
            <p
              className="menu-landing"
              onClick={() =>
                window.scrollTo({
                  top: isMobile ? 900 : 830,
                  left: 0,
                  behavior: "smooth",
                })
              }
            >
              Skill
            </p>
            <p
              className="menu-landing"
              onClick={() =>
                window.scrollTo({
                  top: isMobile ? 3200 : 1850,
                  left: 0,
                  behavior: "smooth",
                })
              }
            >
              Project
            </p>
          </div>
        </div>
      </div>
      <div className="home-container">
        <div className={isMobile ? "home-mobile" : "home"}>
          <div className="row-icon">
            <div
              className="icon"
              onClick={() =>
                window.open("https://www.linkedin.com/in/nicholasevanlin/")
              }
            >
              <img className="icon-image" src={Linkedin} alt="" />
            </div>
            <div
              className="icon"
              onClick={() => window.open("https://github.com/Nicholasevann")}
            >
              <img className="icon-image" src={Github} alt="" />
            </div>
            <div
              className="icon"
              onClick={() => window.open("mailto:nnicholasevan@gmail.com")}
            >
              <img className="icon-image" src={Email} alt="" />
            </div>
            <div
              className="icon"
              onClick={() => window.open("https://wa.me/6281236155717")}
            >
              <img className="icon-image" src={Whatsapp} alt="" />
            </div>
          </div>
          <div style={{ marginBlock: 40 }}>
            <p className="name">I am Nicholas Evan Lindartono</p>
            <p className="desc-landing">
              I am Nicholas proffesional Mobile and Web Developer with 2+ years
              experience in this field.
            </p>
          </div>
          <a href={Pdf} download="CV_Nicholas">
            <div className="button-landing">
              <p className="name">My Portfolio</p>
            </div>
          </a>
        </div>
        {isMobile ? (
          <div />
        ) : (
          <div className="home-2">
            <img className="person-image" src={Person} alt="" />
          </div>
        )}
      </div>
      <div className="skill-container">
        <div className="text-container">
          <p className="title-orange">Skills</p>
          <p className="name">My Skills</p>
          <p className="menu-landing">
            The services that I provide consist of the following things.
          </p>
          <p className="menu-landing">
            The service I provide consists of several things that I can provide,
            I will provide the best service
          </p>
        </div>
        <div className="border-skill" />
        <div className={isMobile ? "row-box-mobile" : "row-box"}>
          <BoxService
            image={Flutter}
            image2={React}
            title={"Mobile Developer"}
            desc={
              "I have experience in Flutter and React Native for more than two years"
            }
            card={isMobile ? "box-card-mobile" : "box-card"}
          />
          <BoxService
            image={React}
            title={"Web Developer"}
            desc={"I have experience in React Js for less than one years"}
            card={isMobile ? "box-card-mobile" : "box-card"}
          />
          <BoxService
            image={Scrum}
            title={"Scrum Master"}
            desc={"I have experience in Scrum Master in the Tomas Project."}
            card={isMobile ? "box-card-mobile" : "box-card"}
          />
        </div>
        <div className={isMobile ? "row-box-mobile" : "row-box"}>
          <BoxService
            image={Entre}
            title={"Entrepreneur"}
            desc={
              "I have experience in Entrepreneur for more than two years. I do business in the field of food and services."
            }
            card={isMobile ? "box-card-mobile" : "box-card"}
          />
          <BoxService
            image={English}
            title={"English"}
            desc={
              "I have pretty good English. English will be important in any case"
            }
            card={isMobile ? "box-card-mobile" : "box-card"}
          />
          <BoxService
            image={Cooking}
            title={"Cooking"}
            desc={
              "I have experience in cooking Geprek Chicken, Manado Food and Balinese Food"
            }
            card={isMobile ? "box-card-mobile" : "box-card"}
          />
        </div>
      </div>
      <div className="product-container">
        <div style={{ marginBottom: 40 }}>
          <p className="name">Featured Projects</p>
          <p className="menu-landing">Lets look in to my project</p>
          <div className="border-skill" />
        </div>
        <div className={isMobile ? "row-product-mobile" : "row-product"}>
          <BoxProduct
            box={isMobile ? "box-product-mobile" : "box-product"}
            image1={Kopkar1}
            title={"Employee Cooperative & Poscafe Toyota"}
            desc={
              "This application is intended for employees of the Toyota Employee Cooperative. This application consists of several features such as loans, installments, statutory savings and a POS Cafe. This application was built using Flutter."
            }
          />
          <BoxProduct
            box={isMobile ? "box-product-mobile" : "box-product"}
            image1={Tomas1}
            title={"Shuttle Employees(Tomas)"}
            desc={
              "This application is made to pick up and drop off Toyota employees. Employees can order a shuttle to go or go home every day.  This application was built using Flutter."
            }
          />
        </div>
        <div className={isMobile ? "row-product-mobile" : "row-product"}>
          <BoxProduct
            box={isMobile ? "box-product-mobile" : "box-product"}
            image1={Ideabox1}
            title={"Ideabox Telkom"}
            desc={
              "This application is used to accommodate every idea from every employee. This application was built using React Native."
            }
          />
          <BoxProduct
            box={isMobile ? "box-product-mobile" : "box-product"}
            image1={Karyawan1}
            title={"Employee Appraisal Application Telkom"}
            desc={
              "This application is used to record the attendance of Telkom employees. Manager and admin can assess each employee. This application was built using React Native."
            }
          />
        </div>
      </div>
      <div className="bottom-container">
        <p className="header-landing">Nic.</p>
        <div className="copyright">
          <img
            className="icon-image"
            src={Copyright}
            alt=""
            style={{ marginRight: 20 }}
          />
          <p className="menu-landing">{dataUser.name}</p>
        </div>
      </div>
      <div className="row-icon">
        {dataVehicl.map((val) => {
          return <p>{val.id + " , "}</p>;
        })}
      </div>
      <div className="row-icon">
        {dataVehicle2.map((val) => {
          return <p>{val.id + " , "}</p>;
        })}
      </div>
    </div>
  );
};

export default LandingPage;
