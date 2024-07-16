// import Auth from './pages/Auth/Auth'
import SignUp from "./pages/Auth/SignUp";
import LogIn from "./pages/Auth/LogIn";
import Home from './pages/Home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ChatInterface from "./pages/Chat/ChatInterface";

function App() {


  return (
    
     
      <Router>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/" element={<ChatInterface />} />
          {/* <Route path="/" element={<SignUp />} /> */}
        </Routes>
      </Router>
      
    
  );
}

export default App;
