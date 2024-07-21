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
import ProductContainer from "./components/HomeComponents/ProductContainer";
import Cart from "./pages/Cart/Cart";
import TopNav from "./components/HomeComponents/TopNav";

function App() {


  return (
    
     
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<ProductContainer />}/>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signin" element={<SignUp />} />
            <Route path="/chat" element={<ChatInterface />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
      
    
  );
}

export default App;
