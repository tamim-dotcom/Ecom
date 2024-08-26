// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './componenets/Home/Home';
import Header from "./componenets/layouts/Header";
import Footer from "./componenets/layouts/Footer";
import Contact from "./componenets/contact/Contact";
import Cart from "./componenets/cart/Cart";
import Shipping from "./componenets/cart/Shipping";
import ConfirmOrder from "./componenets/cart/ConfirmOrder";
import PaymentSuccess from "./componenets/cart/PaymentSuccess";
import Login from "./componenets/login/Login";



import './styles/app.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/founder.scss';
import './styles/menu.scss';
import './styles/footer.scss';
// import './styles/newfooter.scss';
import './styles/contact.scss';
import './styles/cart.scss';
import './styles/shipping.scss';
import './styles/confirmOrder.scss';
import './styles/paymentsuccess.scss';
import './styles/login.scss';
import './styles/profile.scss';
import './styles/table.scss';
import './styles/orderDetails.scss';
import './styles/dashboard.scss';
import './styles/about.scss';
import './App.css';
import Profile from "./componenets/profile/Profile";
import MyOrders from "./componenets/myOrders/MyOrders";
import OrderDetails from "./componenets/myOrders/OrderDetails";
import Dashboard from "./componenets/admin/Dashboard";
import Users from "./componenets/admin/Users";
import Orders from "./componenets/admin/Orders";
import About from "./componenets/about/About";
import NotFound from "./componenets/layouts/NotFound";
import NewFooter from "./componenets/layouts/NewFooter";



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/shipping" element={<Shipping/>}/>
        <Route exact path="/confirmorder" element={<ConfirmOrder/>}/>
        <Route exact path="/paymentsuccess" element={<PaymentSuccess/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/me" element={<Profile/>}/>
        <Route exact path="/myorders" element={<MyOrders/>}/>
        <Route exact path="/orders/:id" element={<OrderDetails/>}/>
        <Route exact path="/admin/dashboard" element={<Dashboard/>}/>
        <Route exact path="/admin/users" element={<Users/>}/>
        <Route exact path="/admin/orders" element={<Orders/>}/>
        <Route exact path="/about" element={<About/>}/>

        <Route exact path="*" element={<NotFound/>}/>


      </Routes>
      <Footer/>
      {/* <NewFooter/> */}
    </Router>
  );
}

export default App;
