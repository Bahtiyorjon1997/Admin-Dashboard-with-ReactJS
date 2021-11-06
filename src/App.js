import Content from "./components/Content/Content";
import SideBar from "./components/SideBar/SideBar";
import Topbar from "./components/topbar/Topbar";
import NewUser from "./pages/newUser/NewUser";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";

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
          </Routes>
        </div>

        {/* sidebar */}
        {/* main body */}
      </div>
    </Router>
  );
}

export default App;
