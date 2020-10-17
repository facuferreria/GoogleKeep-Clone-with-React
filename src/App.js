import React from 'react';
import './Styles/App.scss';
import Form from "./components/Form/Form.js"
import SideBar from "./components/SideBar"
import Footer from "./components/Footer.js"

function App() {
  return (
    <div>
      <SideBar />
      <Form />
      <Footer />
    </div>
  )
}

export default App;