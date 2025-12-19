import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './User';


function AppRoute() {
  return (
    <>
      <Router>
 
          <Routes>
            <Route path="/*" element={<User />} />
            {/* <Route path="/admin/*" element={<AdminRoute />} /> */}
          </Routes>
    </Router>
    </>
  )
}

export default AppRoute