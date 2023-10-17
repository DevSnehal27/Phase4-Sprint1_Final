import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import logo from "./logo.png";
import { withTranslation, Trans, useTranslation } from 'react-i18next';
import { FormGroup, FormControlLabel, Checkbox, checked } from "@mui/material";

const HomePage = () => {
  
  const { t, i18n } = useTranslation();
  // const [lang, setLang] = useState("en");

  const handleSetLocalization = (e) => {
    
    if(e.target.name === "en") {
      localStorage.setItem("language", "de");
      i18n.changeLanguage("de");
    };
    if(e.target.name === "de") {
      localStorage.setItem("language", "en");
      i18n.changeLanguage("en");
    };
  }

  useEffect(() => {
    if(!localStorage.getItem("language")){
      localStorage.setItem("language", "en");
      i18n.changeLanguage("en");
    }else{
      i18n.changeLanguage(localStorage.getItem("language"));
    }
  }, [])


  return (
  <Container
    fluid
    style={{
      height: "100vh",
      color: "white",
      background: "linear-gradient(to right, #692022, #1b1819)"
    }}
  >
    <div style={{backgroundColor: "grey", display: "inline", float: "right", paddingLeft: "8px", borderRadius: "10px"}}>
    <FormGroup >
      <FormControlLabel control={<Checkbox checked={localStorage.getItem("language") == "en" ? false : true} name={localStorage.getItem("language")} onChange={(e) => handleSetLocalization(e)} />} label="de" />
    </FormGroup>
    </ div>
    <Row
      className="align-items-center justify-content-center text-center"
      style={{ height: "100%" }}
    >
      <Col xs={12} sm={6}>
        <img
          className="img-fluid"
          alt="DigiTran Solutions Logo"
          src={logo}
        />
      </Col>
      <Col
        xs={12}
        sm={6}
        style={{
          fontFamily: "'Open Sans', sans-serif"
        }}
      >
        <h1
          style={{
            boxShadow:
              "6px 0 0 rgba(20,12,10, .7), -6px 0 0 rgba(20,12,10, .7)",
            background: "rgba(20,12,10, .7)",
            lineHeight: "3rem"
          }}
        >
          {t('homeTitle')}
        </h1>
        <br />
        <div className="text-center">
          <Link
            // to="/signup"
            id="join-3d"
            to="/dashboard"
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#9c0b0e",
              border: "none"
            }}
          >
            {t('JoinThe3DDesignWeb')}
          </Link>
          
        </div>
      </Col>
    </Row>
  </Container>
);}

export default HomePage;
