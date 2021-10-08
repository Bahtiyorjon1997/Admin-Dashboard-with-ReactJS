import Content from "./components/Content/Content";
import SideBar from "./components/SideBar/SideBar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Topbar />
        <div className="container">
          <SideBar />
          <Content />
        </div>

        {/* sidebar */}
        {/* main body */}
      </div>
    </>
  );
}

export default App;
