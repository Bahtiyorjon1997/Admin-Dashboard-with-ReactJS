import Content from "./components/Content/Content";
import SideBar from "./components/SideBar/SideBar";
import Topbar from "./components/topbar/Topbar";
import NewUser from "./pages/newUser/NewUser";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import Analytics from "./pages/analytics/Analytics";
import Customer from "./pages/customer/Customer";
import Feedback from "./pages/feedback/Feedback";
import Mail from "./pages/mail/Mail";
import Manage from "./pages/manage/Manage";
import Message from "./pages/message/Message";
import Products from "./pages/products/Products";
import Reports from "./pages/reports/Reports";
import Sales from "./pages/sales/Sales";
import Transactions from "./pages/transactions/Transactions";

function App() {
  return (
    <Router>
      <div className="app">
        <Topbar />
        <div className="container">
          <SideBar />
          <Routes>
            <Route exact path="/" element={<Content />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/mail" element={<Mail />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </div>

        {/* sidebar */}
        {/* main body */}
      </div>
    </Router>
  );
}

export default App;
