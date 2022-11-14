import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');      // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.title = "Textutils - Dark Mode";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = "Textutils - Light Mode";
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} className="nav" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <TextForm heading="Try TextUtils - word counter, character counter, copy text" mode={mode} showAlert={showAlert} />
            </Route>
            <Route exact path="/about">

              <About mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;
