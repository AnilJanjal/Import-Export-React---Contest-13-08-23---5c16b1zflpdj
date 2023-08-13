import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from "./components/Heading";
import SubHeading from "./components/SubHeading";
import InputQuery from "./components/InputQuery";
import SubmitButton from "./components/SubmitButton";
const App = () => {
  return (
    <div>
      <Heading />
      <SubHeading />
      <InputQuery />
      <SubmitButton />
    </div>
  )
}


