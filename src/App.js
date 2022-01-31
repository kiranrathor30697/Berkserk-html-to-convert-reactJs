//import area
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Error from './Pages/Error';
import Home from './Pages/Home'
import Login from './Pages/Login';
import Register from './Pages/Register';
//rfc
function App() {
  //1.state/variable

  //2.functions

  //3.returnstatement
    return (
              <Router>
                  <Routes>
                      <Route path="/" element={ <Home />} />
                      <Route path="/login" element={ <Login />} />
                      <Route path="/register" element={ <Register />} />
                      <Route path="*" element={ <Error />} />
                  </Routes>
              </Router>
           );
  }

export default App;
