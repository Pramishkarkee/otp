import OtpUi from './otp'
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import {VerifiedOtp} from './success'

function App() {

  return (
    <div>
      <Router>
      <Routes>
          <Route exact path="verified" element={<VerifiedOtp />}></Route>
          <Route exact path="" element={<OtpUi />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

