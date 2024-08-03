
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
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import DashBoard from './pages/DashBoard/DashBoard'
import ListProduct from "./pages/ListProduct";

function App() {


  return (
    
     
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<ProductContainer />}/>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signin" element={<SignUp />} />
            <Route path="/chat" element={<ChatInterface />} />
            <Route path="/forgotPassword" element={<ForgotPassword />}/>
            <Route path="/resetPassword/:userId/:token" element={<ResetPassword />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<DashBoard />} />
            <Route path="/sell" element={<ListProduct />} />
          </Route>
        </Routes>
      </Router>
      
    
  );
}

export default App;
