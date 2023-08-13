import React, { Component, useState } from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
      <Heading />
      <SubHeading />
      <InputQuery onChange={(e) =>setQuery(e.target.value)} />
      <SubmitButton />
    </div>
  )
}


