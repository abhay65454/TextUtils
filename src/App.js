import './App.css';
import Navbar from './Navbar';
import MyForm from './component/Textform';
import Module2 from './module2.mjs';
import Uppercase from './component/Uppercase';
import About from './component/About';
import Alert from './component/Alert';
import { useState, useEffect } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    // Automatically dismiss the alert after 3 seconds
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert('Dark mode is enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
      setInterval(() => {
        document.title = 'Textutils is amazing Mode';
      }, 2000);
    } else {
      setMode('light');
      showAlert('Light mode is enabled', 'success');
      document.title = 'TextUtils - Light Mode';
      setInterval(() => {
        document.title = 'Install Textutils now';
      }, 1500);
    }
  };

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [mode]);

  return (
    <div className='App'>
      <Navbar title="MyApp" aboutus="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Uppercase showAlert={showAlert} />
      <MyForm />
      <Module2 />
      <About />
    </div>
  );
}

export default App;
